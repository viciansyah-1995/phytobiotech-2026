# Panduan mengubah konten

Website tetap menggunakan bahasa Inggris. Panduan ini ditulis untuk tim yang mengelola isi dan kode proyek.

## Kategori produk

Ubah `outputs` di `lib/outputs.ts`. Saat ini ada dua kategori:

| ID | Nama | Dokumen |
| --- | --- | --- |
| `murray-brown` | Murray-Brown Laboratories, INC. | Laporan 2604935 |
| `biotek` | BIOTEK Rekayasa Indonesia | Laporan 002/TRL-BRI/X/2026 dan 003/TRL-BRI/X/2026 |

Satu laporan tidak harus menjadi satu kategori. Dua laporan BIOTEK tetap berada dalam kategori yang sama, meskipun sampel dan hasil ujinya berbeda.

Data kategori dipakai bersama oleh kartu produk, daftar laboratorium, pilihan enquiry, dan bubble WhatsApp. Hindari membuat daftar kategori terpisah di setiap halaman.

## Hasil laboratorium

Data lengkap dua laporan BIOTEK disimpan dalam `biotekReports` pada `lib/outputs.ts`. Pertahankan nomor laporan, identitas sampel, metode, satuan, dan tanda pembanding sesuai dokumen.

`reported_mitragynine_result` adalah hasil pengukuran sampel. Nilai ini berbeda dari `commercial_specification`, yang saat ini masih `null`. Mengubah hasil uji sampel tidak otomatis menetapkan spesifikasi untuk seluruh produk atau pengiriman.

Ringkasan Murray-Brown saat ini berada pada bagian Murray-Brown di `app/labtest/page.tsx`. Jika ada revisi laporan, ubah ringkasan tersebut dan periksa kembali gambar dokumennya.

## Mengganti gambar dokumen

1. Simpan gambar halaman di `public/images/reports/` dengan nama berkas yang konsisten.
2. Siapkan thumbnail untuk setiap halaman. Nama thumbnail mengikuti nama gambar utama dengan akhiran `-thumb.webp`.
3. Ubah daftar `pages` pada dokumen terkait di `lib/outputs.ts`.
4. Pastikan urutan halaman benar, thumbnail terbaca, dan seluruh halaman bisa dibuka melalui galeri.

Contoh pasangan nama:

```text
biotek-002-1.webp
biotek-002-1-thumb.webp
```

Kartu kategori mengambil halaman pertama sebagai sampul. Kategori BIOTEK menampilkan dua sampul karena memuat dua laporan. PDF sumber tidak diperlukan untuk menjalankan website; halaman dokumen yang sudah dirender tersedia sebagai gambar lokal.

## Industrial Applications

Daftar penerapan berada di `lib/industrial-applications.ts`. Perubahan pada daftar ini berlaku untuk Murray-Brown dan BIOTEK sekaligus, termasuk kartu kategori di Home.

Setiap item memiliki `id`, judul, label format, gambar, dan deskripsi singkat. Keenam item saat ini adalah raw leaf powder, extract, gummies, tablets/capsules/gelcaps, soft drinks, dan vape.

Gambar disimpan di `public/images/applications/`. Gunakan WebP yang sudah diperkecil; ukuran 440 × 440 piksel cukup untuk tata letak saat ini. Bagian ini menjelaskan contoh format penerapan, bukan menambah kategori produk atau menjanjikan ketersediaan produk jadi.

## Kontak penjualan

Ubah `businessContact` di `lib/contact.ts`.

- `whatsappNumber`: format internasional tanpa tanda `+`, spasi, atau tanda hubung.
- `whatsappDisplay`: nomor yang ditampilkan kepada pengunjung.
- `email`: alamat email penjualan.
- `defaultMessage`: pesan awal pada tautan dan bubble WhatsApp.

Nomor saat ini adalah `6285117567871`, dengan tampilan `+62 851-1756-7871`. Email yang digunakan tetap `sales@phytobiotech.com`. Dokumen BIOTEK mencantumkan alamat `.id`; penggantian alamat menunggu konfirmasi perusahaan.

Setelah mengubah kategori atau kontak, uji kembali form Home, halaman Contact, tombol permintaan dokumentasi, dan bubble WhatsApp. Pesan kategori BIOTEK harus menyertakan referensi kedua laporan.

## Copy dan metadata

Teks setiap halaman berada di berkas `app/<halaman>/page.tsx`. Metadata umum berada di `app/layout.tsx`, sedangkan judul dan deskripsi halaman tertentu ditetapkan pada halaman masing-masing.

Gunakan kalimat yang menjelaskan produk dan dokumen secara langsung. Hindari menambahkan angka konsentrasi, klaim sertifikasi, kapasitas produksi, atau kepastian pengiriman yang belum memiliki sumber dan persetujuan perusahaan.
