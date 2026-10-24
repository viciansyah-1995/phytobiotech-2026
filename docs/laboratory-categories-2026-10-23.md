# Kategori laboratorium — 23 Oktober 2026

## Susunan yang digunakan

Website menampilkan dua kategori produk berdasarkan laboratorium:

1. **Murray-Brown Laboratories, INC. — Analysis Report**, dengan laporan 2604935.
2. **BIOTEK Rekayasa Indonesia**, dengan laporan 002/TRL-BRI/X/2026 dan 003/TRL-BRI/X/2026 di dalam satu kategori.

Pengelompokan ini menggantikan susunan sebelumnya yang menampilkan dua laporan BIOTEK sebagai Output 1 dan Output 2. Identitas dan hasil masing-masing sampel tetap terpisah di halaman Lab Test.

## Data laporan

| Laboratorium | Laporan | Sampel | Hasil mitragynine |
| --- | --- | --- | --- |
| Murray-Brown | 2604935 | 2604935-001 | 70,0% |
| BIOTEK | 002/TRL-BRI/X/2026 | BRI-TRL1026-0002 | 82,27% |
| BIOTEK | 003/TRL-BRI/X/2026 | BRI-TRL1026-0003 | 73,44% |

Laporan Murray-Brown mencantumkan hasil 7-hydroxymitragynine **<1,88%**, berbeda dari copy pada website existing. Website ini mengikuti angka dalam dokumen asli. Detail pelanggan pada pratinjau laporan Murray-Brown sudah disamarkan sesuai revisi. Nomor laporan, identitas sampel, tanggal, dan hasil uji tetap dipertahankan.

Laporan BIOTEK 002 memiliki interpretasi NMR yang konsisten dengan identitas mitragynine. Interpretasi tersebut terpisah dari pengukuran kadar melalui UHPLC. Laporan BIOTEK 003 memuat hasil tambahan untuk 7-hydroxymitragynine dan parameter cemaran yang tercantum dalam dokumen.

Semua angka di atas berlaku untuk sampel yang diuji. Tidak ada penggabungan hasil menjadi spesifikasi umum produk.

## Tampilan dokumen

Kartu kategori menampilkan sampul dokumen. BIOTEK menggunakan dua sampul bertumpuk dan menampilkan kedua nomor laporan.

Halaman Lab Test dibagi menjadi dua kelompok laboratorium. Setiap laporan mempunyai galeri tersendiri, tombol halaman sebelumnya/berikutnya, thumbnail, dan dialog pembesaran. Dialog bisa ditutup melalui tombol tutup atau Escape.

- Murray-Brown: dua halaman dari gambar pada website existing.
- BIOTEK 002: lima halaman dari PDF terbaru yang diberikan perusahaan.
- BIOTEK 003: empat halaman dari PDF terbaru yang diberikan perusahaan.

Aset gambar dan thumbnail tersedia di `public/images/reports/`. PDF sumber tidak disertakan dalam repository.

## Enquiry dan WhatsApp

Pilihan kategori menggunakan ID `murray-brown`, `biotek`, dan `assistance`. Pemilihan BIOTEK menyertakan referensi kedua laporannya pada pesan WhatsApp. Parameter lama `output-1` dan `output-2` tetap dikenali sebagai pilihan BIOTEK.

Formulir tetap tersedia di bawah Home dan di halaman Contact. Tidak ada perubahan pada nomor WhatsApp atau alamat email penjualan.

## Industrial Applications

Kedua kategori menampilkan penerapan yang sama dari halaman Product pada website existing:

- Raw Leaf Powder
- Extract
- Gummies
- Tablets, Capsules & Gelcaps
- Soft Drinks
- Vape

Daftar dan deskripsi disimpan sekali di `lib/industrial-applications.ts`, lalu digunakan oleh kedua kartu. Gambar aplikasi diperkecil menjadi WebP dengan ukuran maksimal 440 piksel dan dimuat secara bertahap. Bagian ini merupakan contoh format penerapan; kategori produk tetap dua.

## Hasil pemeriksaan

- Build produksi dan pemeriksaan TypeScript berhasil.
- Home dan Product diperiksa pada lebar 375, 768, dan 1440 piksel, tanpa konten melebar keluar layar.
- Setiap kategori memuat enam aplikasi yang sama.
- Formulir di bawah Home tetap tersedia.
- Seluruh 22 gambar dokumen beserta thumbnail dapat diakses.
- Pembesaran dokumen dan navigasi halaman BIOTEK sudah dicoba di browser.
- Pesan enquiry BIOTEK memuat kedua nomor laporan. Tidak ada pesan yang dikirim selama pemeriksaan.

Hasil pemeriksaan terstruktur disimpan dalam `industrial-applications-qa.json` dan `laboratory-category-qa.json`. Catatan mengenai snapshot formulir sebelum halaman siap dijelaskan di [panduan pengembangan](pengembangan.md).
