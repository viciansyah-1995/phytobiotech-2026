"""Redact customer details in a supplied Murray-Brown PDF for website previews.
Run in an environment with pymupdf and Pillow. Source PDFs stay outside public/.
"""
import argparse
from pathlib import Path
import fitz
from PIL import Image, ImageChops

parser = argparse.ArgumentParser()
parser.add_argument('source', type=Path)
parser.add_argument('--output', type=Path, default=Path('public/images/reports'))
parser.add_argument('--pdf-copy', type=Path, default=Path('tmp/pdfs/murray-brown-redacted.pdf'))
args = parser.parse_args()
args.output.mkdir(parents=True, exist_ok=True)
args.pdf_copy.parent.mkdir(parents=True, exist_ok=True)
source = fitz.open(args.source)
redacted = fitz.open(args.source)
# PDF points, measured against both customer blocks. Right-hand report metadata is retained.
customer_box = fitz.Rect(232, 33.6, 411, 91)
scale = fitz.Matrix(3, 3)
for index, page in enumerate(redacted):
    customer_lines = [line.strip() for line in page.get_text('text', clip=customer_box).splitlines() if line.strip()]
    assert len(customer_lines) >= 4 and 'Customer details redacted' not in customer_lines, f'Unexpected source layout on page {index + 1}'
    page.add_redact_annot(customer_box, fill=(1, 1, 1))
    page.apply_redactions(images=0, graphics=0)
    page.insert_text((237, 48), 'Customer details redacted', fontsize=8, fontname='helv', color=(0.4, 0.4, 0.4))
    text = page.get_text()
    for private_text in customer_lines:
        assert private_text not in text, f'Customer text remains on page {index + 1}'
    assert '2604935' in text and 'Received:' in text
    before_pix = source[index].get_pixmap(matrix=scale, alpha=False)
    after_pix = page.get_pixmap(matrix=scale, alpha=False)
    before = Image.frombytes('RGB', (before_pix.width, before_pix.height), before_pix.samples)
    after = Image.frombytes('RGB', (after_pix.width, after_pix.height), after_pix.samples)
    # Validate every region outside the redaction, with a one-point rendering margin.
    left, top, right, bottom = [round(v * 3) for v in (231, 32, 412, 92)]
    regions = [(0, 0, before.width, top), (0, bottom, before.width, before.height), (0, top, left, bottom), (right, top, before.width, bottom)]
    for region in regions:
        assert ImageChops.difference(before.crop(region), after.crop(region)).getbbox() is None, f'Unexpected change outside customer block, page {index + 1}'
    name = f'murray-redacted-{index + 1}'
    after.save(args.output / f'{name}.webp', quality=90)
    after.thumbnail((420, 594))
    after.save(args.output / f'{name}-thumb.webp', quality=85)
    print(f'Page {index + 1}: customer block removed; report content outside block unchanged.')
redacted.save(args.pdf_copy, garbage=4, deflate=True)
with fitz.open(args.pdf_copy) as checked:
    assert len(checked) == len(source)
    for index, page in enumerate(checked):
        for line in source[index].get_text('text', clip=customer_box).splitlines():
            if line.strip():
                assert line.strip() not in page.get_text()
