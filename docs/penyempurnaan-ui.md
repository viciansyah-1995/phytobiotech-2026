# Penyempurnaan tampilan dan grid

## Industrial Applications

Setiap kategori sekarang menggunakan panel selebar konten. Bagian atas dibagi menjadi pratinjau dokumen dan ringkasan kategori. Enam aplikasi diletakkan di bawahnya, sehingga tidak lagi berdesakan dalam dua kartu kategori yang sempit.

Kartu aplikasi menggunakan foto di sebelah kiri, nomor urut, label format, judul, dan deskripsi. Susunannya mengikuti ruang yang tersedia:

| Lebar layar | Kolom aplikasi |
| --- | --- |
| Lebih dari 1100 piksel | 3 |
| 601–1100 piksel | 2 |
| Sampai 600 piksel | 1 |

Kedua kategori tetap menampilkan enam penerapan yang sama. Tidak ada perubahan pada data laporan, kontak penjualan, atau alur enquiry. Komponen aplikasi tetap berupa Server Component dan tidak menambah library interaksi.

## Aturan tata letak

Variabel berikut berada di bagian akhir `app/globals.css` dan dipakai untuk penyelarasan lintas halaman:

- `--content-width`: lebar konten maksimal 1280 piksel.
- `--page-gutter`: jarak sisi layar, antara 20 dan 48 piksel.
- `--layout-gap`: jarak antarkolom, antara 24 dan 64 piksel.
- `--section-space`: jarak vertikal bagian utama, antara 56 dan 104 piksel.
- `--card-space`: ruang di dalam kartu, antara 20 dan 40 piksel, dengan penyesuaian pada ponsel kecil.

Header, pengumuman, konten utama, dan footer menggunakan batas konten yang sama. Hero, informasi laboratorium, bisnis, dan form memakai kolom yang konsisten. Pada layar sampai 850 piksel, bagian-bagian tersebut berubah menjadi satu kolom.

Form menggunakan tinggi kolom isian minimal 48 piksel. Ukuran teks input ponsel menjadi 16 piksel agar mudah dibaca. Menu mobile memiliki batas tinggi dan dapat digulir. Footer diberi ruang untuk tombol WhatsApp yang posisinya tetap.

Judul kategori dan aplikasi mengikuti urutan heading halaman. Posisi tujuan tautan anchor juga memperhitungkan tinggi header agar judul tidak tertutup.

## Pemeriksaan

Seluruh tujuh halaman diperiksa pada lebar 320, 375, 768, 1024, 1440, dan 1920 piksel. Hasil pengukuran tersimpan di `ui-grid-qa.json`.

Pemeriksaan meliputi batas kiri-kanan konten, lebar halaman, jumlah kategori, enam aplikasi per kategori, dan keberadaan form. Menu mobile beserta submenu About diperiksa secara langsung. Screenshot pratinjau disimpan lokal dan tidak ikut dipublikasikan.

Build produksi, pemeriksaan TypeScript, dan pemeriksaan whitespace berhasil. Seluruh 42 pengukuran memiliki batas konten yang sejajar, tanpa overflow halaman atau teks aplikasi/form yang terpotong. Form Home berhasil menyiapkan pesan BIOTEK dengan kedua referensi laporan. Tidak ada pesan WhatsApp yang dikirim selama pemeriksaan.

## Dropdown produk dan tombol CTA

Menu Product sekarang memakai dropdown dengan tautan ke seluruh produk, Murray-Brown, dan BIOTEK. Setiap kategori langsung membuka bagian yang sesuai di halaman Product. Pola dropdown dipakai bersama dengan menu About melalui `navigation-dropdown.tsx`, dengan dukungan pointer, sentuhan, Tab, dan Escape. Menu tertutup saat fokus berpindah keluar atau pengguna memilih kategori.

Copy yang sebelumnya menonjolkan jumlah kategori diganti dengan pesan yang menjelaskan peluang formulasi dan pengembangan produk. Contoh: “Kratom extracts. More possibilities.” dan “Explore kratom extract powder for your next formulation.” Data serta batasan hasil uji tetap dipertahankan.

Efek bubble, pergeseran panah, garis bawah tambahan, dan efek tekan pada CTA sudah dibatalkan sesuai revisi. Tombol kembali menggunakan tampilan dan hover sebelumnya. Dropdown Product, copy terbaru, serta perbaikan grid tetap digunakan. Stack tetap Next.js/React.

Tautan kategori mengatur posisi gulir sesuai tinggi header dan memindahkan fokus ke panel kategori. Navigasi ini berlaku dari halaman lain maupun saat berpindah kategori dalam halaman Product. Tujuannya agar pratinjau dokumen tidak tertutup navigasi yang melekat di atas layar.

Pemeriksaan tambahan: build dan TypeScript berhasil; Home dan Product tidak overflow pada 320, 375, 768, 1024, dan 1440 piksel. Copy lama yang diminta sudah tidak ada pada kedua halaman. Dropdown mobile, pemilihan BIOTEK dari Home, Escape, dan perpindahan fokus keluar menu sudah dicoba. Form Home tetap tersedia dan setiap kategori masih memiliki enam aplikasi.
