# Deployment Vercel

Website produksi tersedia di [phytobiotech-2026.vercel.app](https://phytobiotech-2026.vercel.app).

## Konfigurasi

| Bagian | Nilai |
| --- | --- |
| Proyek | `phytobiotech-2026` |
| Team | `viciansyahs-projects` |
| Framework | Next.js |
| Node.js di Vercel | 24.x |
| Repository | `viciansyah-1995/phytobiotech-2026` |
| Branch utama | `main` |
| Direktori proyek | Root repository |
| Variabel lingkungan aplikasi | Tidak diperlukan |

Deployment produksi pertama dibuat pada 23 Oktober 2026 dari commit `ccf09dcba81e4a6073850b8e8007cde72b32ad19`. Commit tersebut memuat perapian grid, dropdown Product, copy terbaru, dan tombol yang sudah dikembalikan ke versi sebelum efek bubble.

## Pemeriksaan setelah deploy

- Vercel melaporkan status `READY`.
- Ketujuh halaman publik merespons HTTP 200.
- Logo, contoh gambar dokumen, dan gambar aplikasi industri dapat diakses.
- Dropdown Product menampilkan kedua kategori pada website produksi.
- Form Home berhasil menyiapkan pesan WhatsApp untuk BIOTEK, termasuk kedua referensi laporan. Pemeriksaan berhenti pada penyiapan pesan; tidak ada pesan yang dikirim.

Hasil pemeriksaan HTTP tersimpan di `production-qa.json`. Screenshot website produksi disimpan sebagai bukti lokal dan tidak masuk repository.

## Pengelolaan

Buka [dashboard proyek](https://vercel.com/viciansyahs-projects/phytobiotech-2026) untuk memeriksa deployment, build log, dan koneksi Git. Sebelum memperbarui produksi, jalankan `npm run build` dan `npm run typecheck`, lalu pastikan commit yang akan dipublikasikan sudah benar.

Domain `phytobiotech.id` belum diarahkan ke deployment ini. Pengaturan DNS dan website existing tidak diubah.
