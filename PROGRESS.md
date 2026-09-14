# 📋 Progress — VinFast Scooter Website

> Dokumentasi proyek, status komponen, dan langkah selanjutnya.

---

## 1. Ringkasan Proyek

Situs web katalog dan dealer VinFast Scooter untuk wilayah Bandung. Didesain **mobile-first** dengan ukuran konten disesuaikan agar terlihat nyaman pada zoom browser **~125%**. Gaya desain terinspirasi dari [vinfastbandung.id](https://vinfastbandung.id).

---

## 2. Tech Stack

| Bagian | Teknologi |
|---|---|
| Framework | React 19 + Vite 8.3 |
| Styling | Tailwind CSS v4 (via `@tailwindcss/vite`) |
| Animasi | Framer Motion 13 |
| Routing | React Router 7 (`react-router-dom`) |
| Ikon | Lucide React |
| Linter | oxlint |

---

## 3. Struktur Proyek

```
VinFastScooter/
├── Assets/                          # PDF sumber (spec sheet, katalog)
├── public/images/                   # Gambar PNG hasil ekstraksi (300 DPI, auto-trim)
│   ├── evo/page-1.png              #   hanya landscape (page-2 ditolak, portrait)
│   ├── feliz/page-1.png
│   ├── viper/page-1.png
│   ├── other/page-1.png            #   katalog umum, juga digunakan di carousel
│   └── catalog/page-1.png          #   brosur/katalog, digunakan di Hero
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              #   fixed, responsive, mobile menu
│   │   ├── Hero.jsx                #   split layout: teks + brosur
│   │   ├── Carousel.jsx            #   3D coverflow (perspective 1200px)
│   │   ├── ValueProps.jsx          #   4 keunggulan VinFast
│   │   ├── ProductCard.jsx         #   kartu produk reusable
│   │   ├── CTASection.jsx          #   banner CTA WhatsApp
│   │   ├── SpecTable.jsx           #   tabel spesifikasi alternating rows
│   │   └── Footer.jsx              #   3 kolom: brand, navigasi, kontak
│   ├── pages/
│   │   ├── Home.jsx                #   Hero → Carousel → ValueProps → Products → CTA
│   │   ├── Produk.jsx              #   grid 3 kolom semua produk + CTA
│   │   ├── ProductDetail.jsx       #   detail produk: carousel, fitur, spesifikasi, CTA
│   │   └── Kontak.jsx              #   info dealer + placeholder Google Maps
│   ├── data/
│   │   └── products.js             #   data produk, dealer, katalog images
│   ├── App.jsx                     #   shell: Navbar + Routes + Footer + ScrollToTop
│   ├── main.jsx
│   └── index.css                   #   Tailwind v4 + design tokens
├── index.html                      #   Google Fonts (Inter + Plus Jakarta Sans)
├── vite.config.js                  #   Vite + React + Tailwind plugins
├── package.json
└── PROGRESS.md                     #   ← file ini
```

---

## 4. Desain Sistem

### Warna

| Token | Hex | Kegunaan |
|---|---|---|
| `primary` | `#1a73e8` | Tombol utama, link aktif, heading accent |
| `primary-dark` | `#0d47a1` | Gradient tombol, hover state |
| `accent` | `#4caf50` | Ikon value props, tombol WhatsApp, badge positif |
| `bg` | `#ffffff` | Background default |
| `bg-alt` | `#f8f9fa` | Section alt (ValueProps) |
| `text` | `#1a1a1a` | Teks utama |
| `text-muted` | `#6b7280` | Teks sekunder, deskripsi |

### Tipografi

| Elemen | Font | Weight | Ukuran (approx) |
|---|---|---|---|
| Heading | Plus Jakarta Sans | 700–800 | h1: 3rem–4.5rem, h2: 2.25rem–3rem |
| Body | Inter | 400–600 | base: 1.125rem (18px) |

### Spacing

- Ukuran base font: **18px** (disesuaikan untuk zoom 125%)
- Semua komponen sudah diperbesar (padding, icon, teks lebih besar dari standar Tailwind)

---

## 5. Halaman

### 🏠 Home (`/`)

Urutan komponen:
1. **Hero** — teks + brosur image, CTA "Lihat Produk" & "Hubungi Dealer"
2. **Carousel** — 3D coverflow otomatis (4 gambar: Evo, Feliz, Viper, Other)
3. **ValueProps** — 4 kartu keunggulan
4. **Produk** — grid 3 kolom ProductCard (Evo, Feliz, Viper)
5. **CTASection** — banner WhatsApp CTA

### 📦 Produk (`/produk`)

- Judul + deskripsi
- Grid 3 kolom ProductCard
- CTASection

### 📄 Detail Produk (`/evo`, `/feliz`, `/viper`)

- Breadcrumb "Kembali ke Produk"
- Carousel 3D gambar produk
- Info: tagline, nama, deskripsi, harga, warna, quick specs (4 kotak)
- Tombol "Tanya Harga via WhatsApp"
- **Fitur Unggulan** — grid kartu dengan ikon ✓
- **Spesifikasi Lengkap** — tabel alternating rows
- CTASection (dinamis: nama produk)

### 📞 Kontak (`/kontak`)

- 3 kartu info: Alamat, Jam Operasional, Telepon
- Tombol WhatsApp penuh lebar
- Placeholder Google Maps (kanan kolom)

---

## 6. Komponen

| Komponen | Deskripsi | Status |
|---|---|---|
| **Navbar** | Fixed, blur saat scroll, mobile menu animated, logo + nav links + WhatsApp CTA | ✅ Selesai & diperbesar |
| **Hero** | Split layout — kiri: heading + deskripsi + feature pills + CTA, kanan: brosur PNG | ✅ Selesai & diperbesar |
| **Carousel** | 3D coverflow (perspective 1200px, rotateY ±25deg, translateZ -150px), auto-play optional, dots + arrows | ✅ Selesai & diperbesar |
| **ValueProps** | 4 kartu keunggulan (Baterai, Lingkungan, Keamanan, Purna Jual) dengan ikon | ✅ Selesai & diperbesar |
| **ProductCard** | Kartu produk: gambar, tagline, nama, quick specs, harga, CTA "Lihat Detail" | ✅ Selesai & diperbesar |
| **CTASection** | Banner gradient primary, heading dinamis, 2 tombol (WhatsApp + Kontak) | ✅ Selesai & diperbesar |
| **SpecTable** | Tabel spesifikasi, alternating row colors, header sticky | ✅ Selesai & diperbesar |
| **Footer** | 3 kolom (brand, navigasi, kontak), bottom bar copyright | ✅ Selesai & diperbesar |

---

## 7. Status Komponen / Halaman

| Item | Status |
|---|---|
| Navbar — diperbesar | ✅ |
| Hero — diperbesar | ✅ |
| Carousel 3D — diperbesar | ✅ |
| ValueProps — diperbesar | ✅ |
| ProductCard — diperbesar | ✅ |
| CTASection — diperbesar | ✅ |
| SpecTable — diperbesar | ✅ |
| Footer — diperbesar | ✅ |
| Home — diperbesar | ✅ |
| Produk — diperbesar | ✅ |
| ProductDetail — diperbesar | ✅ |
| Kontak — diperbesar | ✅ |
| `npm run build` — passed | ✅ |

---

## 8. Data Produk

| Model | Jarak Tempuh | Kecepatan | Daya | Baterai | Warna |
|---|---|---|---|---|---|
| **Evo** | 90 km | 45 km/jam | 1200W | 48V 24Ah | Putih, Hitam, Biru |
| **Feliz** | 110 km | 50 km/jam | 1500W | 48V 30Ah | Putih, Hitam, Merah |
| **Viper** | 130 km | 60 km/jam | 2000W | 60V 35Ah | Hitam, Merah, Biru |

- **Harga**: semua diisi `-` (placeholder, belum diisi dengan harga asli)
- **Spec sheet sumber**: PDF di folder `Assets/`

### Data Dealer

| Field | Value |
|---|---|
| Nama | VinFast Scooter |
| Alamat | Jl. Contoh No. 123, Kota Bandung, Jawa Barat |
| Telepon | 0812-3456-7890 |
| WhatsApp | 6281234567890 |
| Jam | Senin - Sabtu: 08.00 - 17.00 WIB |

---

## 9. Aset

### PDF Sumber (`Assets/`)

| File | Keterangan |
|---|---|
| `XMĐ_TSKT_EVO_ID - Anti theft-No -1 (1).pdf` | Spesifikasi teknis VinFast Evo |
| `XMĐ_TSKT_FELIZ_ID - 1Display vehicle status-Yes Anti theft-No .pdf` | Spesifikasi teknis VinFast Feliz |
| `XMĐ_TSKT_VIPER_ID1 - Bike Finder- Yes-Vehicle status-Yes-Anti theft-No-1.pdf` | Spesifikasi teknis VinFast Viper |
| `KATALOG (1).pdf` | Katalog brosur VinFast Scooter |
| `Add a subheading.pdf` | Dokumen tambahan |

### Gambar Hasil Ekstraksi (`public/images/`)

Semua gambar diekstrak dari PDF pada **300 DPI** dengan auto-trim (ImageMagick `fuzz 10%`).

| Path | Sumber | Catatan |
|---|---|---|
| `evo/page-1.png` | Evo spec sheet | Landscape, auto-trim |
| `feliz/page-1.png` | Feliz spec sheet | Landscape, auto-trim |
| `viper/page-1.png` | Viper spec sheet | Landscape, auto-trim |
| `other/page-1.png` | PDF lain | Landscape, auto-trim |
| `catalog/page-1.png` | Katalog brochure | Portrait — digunakan di Hero |

---

## 10. Known Issues

- **Border gambar produk** — Auto-trim dengan `fuzz 10%` belum sempurna karena background gambar bukan solid putih (ada gradien/pola). Belum diperbaiki secara CSS.
- ~~Unused imports~~ — `Battery` di ProductCard.jsx, `Battery` di ProductDetail.jsx, `products` di Hero.jsx **sudah dihapus** ✅
- **Favicon** — Masih menggunakan `vite.svg` default, belum diganti.
- **Google Maps** — Belum di-embed (masih placeholder).
- **Harga** — Semua produk menampilkan `-` (placeholder).

---

## 11. Next Steps

- [ ] Review visual di browser (mobile & desktop), zoom 125%
- [x] Bersihkan unused imports (Battery di ProductCard & ProductDetail, products di Hero) ✅
- [ ] Fix border gambar produk (CSS: inner shadow, clip-path, atau re-trim manual)
- [ ] Isi harga asli dari data dealer/catalog
- [ ] Ganti favicon (logo VinFast atau ikon lain)
- [ ] Embed Google Maps di halaman Kontak
- [ ] Deploy ke Vercel/Netlify/Hosting lain

---

*Dokumen terakhir diperbarui: 14 September 2026*
