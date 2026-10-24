# Redaksi detail pelanggan Murray-Brown

Pratinjau laporan Murray-Brown di website menggunakan versi yang menyamarkan nama perusahaan, alamat, dan nomor telepon pelanggan pada kedua halaman. Blok tersebut diberi keterangan “Customer details redacted”.

Nomor laporan 2604935, tanggal penerimaan, identitas sampel, hasil uji, serta pengesahan tetap ditampilkan. Area lain di luar blok pelanggan dibandingkan dengan render dokumen sumber dan tidak berubah.

## Aset website

- `public/images/reports/murray-redacted-1.webp`
- `public/images/reports/murray-redacted-2.webp`
- Thumbnail dengan nama yang sama dan akhiran `-thumb.webp`.

Kartu kategori, galeri, tampilan diperbesar, dan thumbnail menggunakan aset tersebut melalui `lib/outputs.ts`. Gambar versi sebelumnya tidak disertakan lagi dalam direktori publik. Keterangan nama pelanggan pada copy halaman Lab Test juga dihapus.

## Proses pembuatan

Skrip `scripts/redact-murray-report.py` mengolah salinan PDF sumber dengan PyMuPDF, memeriksa teks pelanggan sudah dihapus, membandingkan area di luar blok, lalu membuat gambar WebP dan thumbnail dengan Pillow.

```bash
python scripts/redact-murray-report.py /lokasi/berkas-sumber.pdf
```

Jalankan dengan Python yang sudah memiliki `pymupdf` dan `Pillow`. Dependensi tersebut hanya diperlukan untuk pengolahan dokumen, bukan untuk menjalankan website. PDF sumber dan salinan hasil redaksi tetap berada di luar direktori publik.

Tanda em dash juga dihapus dari seluruh copy aplikasi, termasuk label laporan dan konteks pesan WhatsApp. Teks dan angka pada gambar dokumen sumber lainnya tidak ditulis ulang.
