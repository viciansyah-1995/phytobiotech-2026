# Phyto Biotech

Website perusahaan **PT Phyto Anugrah Biotech**, dengan informasi produk, dokumen laboratorium, dan formulir permintaan informasi melalui WhatsApp.

Tampilan menggunakan tema terang dengan warna hijau dan logo perusahaan. Seluruh konten pengunjung ditulis dalam bahasa Inggris.

## Menjalankan proyek

Gunakan Node.js **20.9 atau lebih baru** dan npm.

```bash
git clone https://github.com/viciansyah-1995/phytobiotech-2026.git
cd phytobiotech-2026
npm ci
npm run dev
```

Buka [http://127.0.0.1:3000](http://127.0.0.1:3000). Jika port tersebut sedang digunakan:

```bash
npm run dev -- --port 3001
```

Proyek dapat berjalan tanpa file `.env`, database, atau layanan tambahan.

## Fitur yang tersedia

- Beranda dengan profil singkat, kategori produk, informasi laboratorium, dan formulir di bagian bawah.
- Dua kategori produk: **Murray-Brown Laboratories, INC.** dan **BIOTEK Rekayasa Indonesia**. Dua laporan BIOTEK ditampilkan dalam satu kategori.
- Industrial Applications di setiap kategori: raw leaf powder, extract, gummies, tablets/capsules/gelcaps, soft drinks, dan vape.
- Galeri dokumen dengan thumbnail, navigasi halaman, dan tampilan dokumen yang bisa diperbesar.
- Formulir dan bubble WhatsApp dengan pesan sesuai kategori yang dipilih.
- Menu mobile, submenu About, dropdown kategori Product, animasi ringan, dan dukungan pengaturan reduced motion.

Formulir menyiapkan pesan terlebih dahulu. Pengunjung tetap harus melanjutkan ke WhatsApp dan mengirim pesannya sendiri. Website belum menyimpan data enquiry atau mengirim email.

## Halaman

| Alamat | Isi |
| --- | --- |
| `/` | Beranda dan formulir enquiry |
| `/about` | Profil perusahaan |
| `/profile` | Informasi kratom dan mitragynine |
| `/product` | Dua kategori produk dan Industrial Applications |
| `/labtest` | Galeri dokumen dan hasil analisis per sampel |
| `/qualitycontrol` | Penjelasan cakupan pengujian |
| `/contact` | Kontak dan formulir permintaan informasi |

## Teknologi

| Bagian | Pilihan |
| --- | --- |
| Framework | Next.js 16, App Router |
| Antarmuka | React 19 dan TypeScript |
| Tampilan | CSS khusus, variabel warna, dan utilitas Tailwind CSS 4 |
| Ikon | Lucide React |
| Animasi | CSS dan IntersectionObserver |
| Gambar | Aset lokal, mayoritas WebP |

Versi paket yang digunakan tersimpan di `package-lock.json`. Gunakan `npm ci` agar instalasi mengikuti versi tersebut.

## Perintah

| Perintah | Fungsi |
| --- | --- |
| `npm run dev` | Menjalankan server pengembangan |
| `npm run build` | Membuat build produksi |
| `npm run start` | Menjalankan build produksi secara lokal |
| `npm run typecheck` | Memeriksa tipe TypeScript |

Untuk mencoba build produksi, jalankan `npm run build` lalu `npm run start`. Hentikan server pengembangan terlebih dahulu jika memakai port yang sama.

## Struktur utama

```text
app/
  components/               Komponen bersama
  about/, profile/          Halaman profil
  product/, labtest/        Produk dan dokumen laboratorium
  qualitycontrol/, contact/ Halaman mutu dan kontak
  globals.css               Tema dan tata letak responsif
  layout.tsx                Metadata dan kerangka halaman
  page.tsx                  Beranda
lib/
  outputs.ts                Kategori, laporan, dan data hasil uji
  industrial-applications.ts Daftar penerapan untuk kedua kategori
  contact.ts                Kontak dan penyusunan pesan WhatsApp
  use-reveal.ts             Animasi saat elemen masuk layar
public/images/              Logo, ilustrasi, dokumen, dan thumbnail
docs/                       Panduan teknis, konten, sumber, dan pemeriksaan
```

## Dokumentasi lanjutan

- [Penyempurnaan UI dan grid](docs/penyempurnaan-ui.md) — aturan tata letak dan desain aplikasi industri.
- [Panduan pengembangan](docs/pengembangan.md) — alur kerja, komponen, dan pemeriksaan sebelum rilis.
- [Panduan mengubah konten](docs/panduan-konten.md) — kategori, aplikasi industri, dokumen, dan kontak.
- [Sumber konten dan gambar](docs/content-sources.md) — asal materi yang digunakan.
- [Catatan kategori laboratorium](docs/laboratory-categories-2026-10-23.md) — susunan laporan dan keputusan konten terbaru.
- [Riwayat penyesuaian awal](docs/brief-review-2026-10-23.md) — konteks perubahan sebelum kategori digabung.

## Status saat ini

Build dan pemeriksaan TypeScript berhasil. Tampilan Home dan Product sudah diperiksa pada lebar 375, 768, dan 1440 piksel. Masing-masing kategori menampilkan enam aplikasi industri yang sama; formulir di bawah Home tetap tersedia.

Repository ini berisi kode dan aset website. Hosting produksi belum dikonfigurasi. Dependensi, hasil build, file `.env`, PDF sumber di folder sementara, dan screenshot pemeriksaan lokal tidak disertakan.
