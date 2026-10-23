# Panduan pengembangan

## Persiapan

Gunakan Node.js 20.9 atau lebih baru. Setelah mengambil repository, jalankan `npm ci` dari folder proyek. Instalasi tidak memerlukan konfigurasi database atau variabel lingkungan.

Server pengembangan berjalan melalui `npm run dev` di `127.0.0.1:3000`. Alamat ini hanya digunakan untuk akses lokal.

## Susunan halaman

Proyek memakai Next.js App Router. Setiap halaman berada di `app/<nama-halaman>/page.tsx`. Beranda berada di `app/page.tsx`.

`app/layout.tsx` menetapkan bahasa halaman, metadata umum, dan `SiteFrame`. Komponen `SiteFrame` menampilkan header, navigasi, footer, serta bubble WhatsApp. Perubahan pada komponen ini berlaku di semua halaman.

| Komponen | Tanggung jawab |
| --- | --- |
| `site-frame.tsx` | Kerangka halaman, menu mobile, submenu About, dan footer |
| `navigation-dropdown.tsx` | Dropdown About dan Product, termasuk keyboard serta penutupan di luar menu |
| `page-intro.tsx` | Judul dan pengantar halaman |
| `output-cards.tsx` | Kartu Murray-Brown dan BIOTEK di Home serta Product |
| `industrial-applications.tsx` | Enam penerapan yang sama di setiap kartu kategori |
| `document-gallery.tsx` | Galeri, pemilihan halaman, dan dialog pembesaran dokumen |
| `report-summary.tsx` | Tabel hasil uji BIOTEK per laporan |
| `enquiry-form.tsx` | Validasi isian dan penyiapan pesan enquiry |
| `whatsapp-chat.tsx` | Pemilihan kategori, topik, dan pesan di bubble WhatsApp |

Sebagian besar halaman dirender sebagai Server Component. Komponen dengan interaksi browser menggunakan `"use client"`, antara lain galeri, formulir, navigasi, dan bubble WhatsApp.

## Formulir dan WhatsApp

1. Pengunjung mengisi nama, perusahaan, negara, email, kategori, dan pesan.
2. Tombol **Prepare WhatsApp Enquiry** memvalidasi isian dan menampilkan tautan lanjutan.
3. Tautan **Continue to WhatsApp** membuka pesan yang sudah disusun.
4. Pesan baru terkirim ketika pengunjung mengirimkannya di WhatsApp.

Tidak ada API pengiriman, penyimpanan enquiry, integrasi CRM, atau layanan email. Perubahan nomor dan template pesan dilakukan melalui `lib/contact.ts`.

Parameter `?output=biotek` dan `?output=murray-brown` memilih kategori pada formulir. Parameter `request=documentation` mengisi pesan permintaan dokumen. Tautan lama dengan `output-1` atau `output-2` diarahkan ke pilihan BIOTEK. Perhatikan bahwa pilihan dari URL diterapkan saat komponen selesai dimuat di browser.

Formulir yang sama dipakai di Contact dan bagian bawah Home. Judulnya menggunakan `h1` pada Contact dan `h2` pada Home.

## Tampilan dan performa

Warna dasar, tipografi, jarak, dan aturan responsif berada di `app/globals.css`. Gunakan variabel CSS yang tersedia agar perubahan tetap konsisten.

Animasi kemunculan elemen memakai satu IntersectionObserver per perpindahan halaman. Animasi berhenti setelah elemen terlihat. Pengaturan reduced motion dari perangkat pengguna tetap dihormati.

Gambar aplikasi industri disimpan dalam WebP dengan ukuran maksimal 440 piksel. Galeri dokumen memakai thumbnail terpisah. Gambar di bawah layar memakai lazy loading. Tidak ada library carousel atau animasi tambahan.

Font dimuat dari Google Fonts melalui CSS; koneksi internet diperlukan untuk menampilkan font tersebut. Browser memakai font cadangan jika layanan tidak tersedia.

## Pemeriksaan sebelum rilis

Jalankan:

```bash
npm run build
npm run typecheck
```

Lalu periksa di browser:

- Navigasi desktop, submenu About, serta menu mobile dapat digunakan.
- Home dan Product masing-masing memiliki dua kategori.
- BIOTEK memuat dua laporan dengan hasil yang tetap terpisah.
- Masing-masing kategori menampilkan keenam Industrial Applications.
- Gambar dokumen bisa diperbesar; tombol halaman dan tombol tutup bekerja.
- Formulir Home tetap ada, isian wajib tervalidasi, dan pesan WhatsApp sesuai pilihan kategori.
- Tampilan tidak melebar keluar layar pada desktop, tablet, dan ponsel.

Gunakan data contoh saat menguji formulir. Pemeriksaan tautan WhatsApp cukup sampai pesan siap; tidak perlu mengirim pesan ke nomor penjualan.

## Catatan pemeriksaan yang tersimpan

| Berkas | Cakupan |
| --- | --- |
| `industrial-applications-qa.json` | Home dan Product pada 375, 768, dan 1440 piksel; dua kategori, enam aplikasi per kategori, dan keberadaan form Home |
| `laboratory-category-qa.json` | Pemeriksaan tata letak setelah penggabungan kategori |
| `brief-qa-results.json` | Arsip pemeriksaan versi awal sebelum penggabungan kategori |

Snapshot awal pada `laboratory-category-qa.json` merekam pilihan formulir sebelum proses pemuatan komponen selesai. Pilihan BIOTEK telah diperiksa kembali setelah halaman siap. Data pemeriksaan lama dipertahankan sebagai arsip, bukan sebagai gambaran semua konten terbaru.

## Hosting

Build produksi dijalankan dengan `npm run build`, kemudian `npm run start`. Repository belum memiliki pipeline deployment, domain produksi, atau konfigurasi hosting. Penambahan hosting dan layanan formulir dilakukan terpisah dari konfigurasi lokal ini.
