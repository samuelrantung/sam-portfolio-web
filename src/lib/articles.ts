// src/lib/articles.ts
// Artikel hanya ditulis dalam Bahasa Indonesia. Pembaca yang mencari topik ini
// mencarinya dalam Bahasa Indonesia, dan menerjemahkan setengah jadi ke English
// justru melemahkan anotasi hreflang yang sudah benar di halaman lain.

export type ArticleSection = {
  heading: string;
  body: readonly string[];
  list?: readonly string[];
};

export type Article = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  dek: string;
  published: string;
  updated: string;
  readingMinutes: number;
  sections: readonly ArticleSection[];
  faq: readonly { q: string; a: string }[];
  whatsappMessage: string;
};

const biayaWebsiteUmkmManado: Article = {
  slug: "biaya-website-umkm-manado",
  metaTitle: "Berapa Biaya Bikin Website UMKM di Manado? Rincian Jujur 2026",
  metaDescription:
    "Rincian biaya pembuatan website untuk UMKM di Manado dan Sulawesi Utara: harga landing page mulai Rp 3 juta, biaya domain dan hosting per tahun, serta apa saja yang membuat harga naik.",
  h1: "Berapa biaya bikin website untuk UMKM di Manado?",
  dek: "Pertanyaan pertama yang hampir selalu masuk ke WhatsApp kami. Jawaban jujurnya: tergantung. Tapi tergantungnya pada hal-hal yang bisa dijelaskan, dan halaman ini menjelaskan semuanya.",
  published: "2026-08-28",
  updated: "2026-08-28",
  readingMinutes: 7,
  sections: [
    {
      heading: "Jawaban singkat",
      body: [
        "Untuk UMKM di Manado dan sekitarnya, website profil bisnis atau landing page satu halaman mulai dari Rp 3 juta. Website multi halaman dengan katalog produk biasanya berada di rentang Rp 5 juta sampai Rp 12 juta. Sistem custom seperti pemesanan online, dashboard admin, atau integrasi kasir dihitung terpisah karena setiap kebutuhan berbeda.",
        "Di luar biaya pembuatan, ada biaya berjalan yang sering lupa dihitung: domain sekitar Rp 150 ribu sampai Rp 250 ribu per tahun, dan hosting mulai dari gratis sampai sekitar Rp 500 ribu per tahun tergantung teknologi yang dipakai. Angka itu kecil, tapi harus masuk anggaran sejak awal supaya website anda tidak mati di tahun kedua.",
      ],
    },
    {
      heading: "Kenapa harganya bisa berbeda jauh",
      body: [
        "Anda mungkin pernah melihat penawaran Rp 500 ribu di Facebook dan penawaran Rp 25 juta dari agency di Jakarta. Keduanya menjual barang yang namanya sama tapi isinya sangat berbeda. Yang membuat harga bergerak biasanya lima hal berikut.",
      ],
      list: [
        "Jumlah halaman. Satu landing page jelas lebih murah daripada tujuh halaman dengan struktur menu, dan setiap halaman butuh copywriting sendiri, bukan sekadar salin tempel.",
        "Desain custom atau template. Template jadi memang menekan biaya, tapi bisnis anda akan terlihat sama persis dengan puluhan bisnis lain yang beli template yang sama.",
        "Isi konten. Foto produk, teks, dan profil perusahaan. Kalau anda sudah siapkan sendiri, biaya turun. Kalau harus kami tulis dan foto, itu pekerjaan tambahan.",
        "Fungsi di balik layar. Form kontak sederhana itu murah. Katalog yang bisa anda ubah sendiri, pemesanan, atau integrasi pembayaran itu pekerjaan pengembangan yang sesungguhnya.",
        "Kesiapan untuk ditemukan di Google. Struktur judul, kecepatan muat, data terstruktur, dan sitemap. Banyak website murah melewatkan bagian ini, dan hasilnya website yang tidak pernah muncul di pencarian.",
      ],
    },
    {
      heading: "Yang sebenarnya anda beli",
      body: [
        "Website bukan biaya sekali bayar untuk sebuah file. Yang anda beli adalah alamat permanen milik anda sendiri di internet, tempat calon pelanggan bisa memeriksa apakah bisnis anda serius sebelum mereka menghubungi.",
        "Ini penting khususnya di Sulawesi Utara, karena mayoritas UMKM di sini hanya punya Instagram atau Facebook. Ketika calon pelanggan mencari nama bisnis anda di Google dan yang muncul hanya unggahan Instagram tiga bulan lalu, anda kalah sebelum percakapan dimulai. Ketika yang muncul adalah website dengan alamat, layanan, dan portofolio yang jelas, posisi tawar anda berubah.",
      ],
    },
    {
      heading: "Waspadai website murah di bawah Rp 1 juta",
      body: [
        "Kami tidak akan bilang penawaran murah selalu buruk. Tapi ada pola yang berulang, dan pelanggan yang datang ke kami untuk memperbaiki website lama hampir selalu bercerita hal yang sama.",
      ],
      list: [
        "Domain dan hosting terdaftar atas nama pembuatnya, bukan atas nama anda. Saat anda ingin pindah, anda tidak bisa membawa apa-apa.",
        "Tidak ada serah terima akses. Anda tidak punya kata sandi ke panel apa pun.",
        "Website lambat dibuka di jaringan seluler, padahal itulah cara mayoritas pelanggan anda mengaksesnya.",
        "Setelah dibayar lunas, pesan tidak lagi dibalas. Tahun berikutnya website mati karena tidak ada yang memperpanjang domain.",
      ],
    },
    {
      heading: "Pertanyaan yang sebaiknya anda ajukan sebelum memilih",
      body: [
        "Apa pun jasa yang anda pilih, termasuk kalau anda memutuskan bukan kami, tanyakan lima hal ini di awal. Jawabannya memberi tahu anda lebih banyak daripada angka penawaran.",
      ],
      list: [
        "Domain akan didaftarkan atas nama siapa, dan apakah saya menerima akses penuh saat serah terima?",
        "Berapa biaya perpanjangan tahunan, dan siapa yang bertanggung jawab memperpanjangnya?",
        "Apakah saya bisa mengubah teks dan foto sendiri, atau harus lewat anda setiap kali?",
        "Apakah website akan didaftarkan ke Google Search Console dan punya sitemap?",
        "Apa yang terjadi kalau ada yang rusak dua bulan setelah launch?",
      ],
    },
    {
      heading: "Bagaimana kami menghitungnya",
      body: [
        "Kami tidak memberi angka sebelum tahu apa yang anda butuhkan. Prosesnya sederhana: anda cerita tentang bisnis dan apa yang ingin dicapai, kami petakan kebutuhannya, lalu kami kirim rincian biaya dan tenggat yang jelas sebelum ada pekerjaan yang dimulai. Konsultasi awal tidak dipungut biaya, dan anda tidak wajib melanjutkan.",
        "Yang membedakan, anda berdiskusi langsung dengan orang yang menulis kodenya. Tidak ada lapisan sales di tengah yang menjanjikan hal yang nanti ternyata tidak bisa dibangun.",
      ],
    },
  ],
  faq: [
    {
      q: "Berapa lama proses pembuatan website?",
      a: "Landing page satu halaman biasanya selesai dalam satu sampai dua minggu setelah konten anda siap. Website multi halaman dua sampai empat minggu. Bagian yang paling sering memperlambat bukan pengembangannya, tapi menunggu foto dan teks dari sisi klien.",
    },
    {
      q: "Apakah saya harus bayar biaya bulanan?",
      a: "Tidak wajib. Yang wajib hanya perpanjangan domain tahunan dan hosting, dan keduanya bisa anda bayar sendiri atas nama anda. Layanan perawatan bulanan tersedia kalau anda mau kami yang menangani pembaruan dan pemantauan, tapi itu pilihan, bukan syarat.",
    },
    {
      q: "Website saya sudah ada tapi tidak muncul di Google. Bisa diperbaiki?",
      a: "Umumnya bisa. Penyebab paling sering adalah struktur halaman yang tidak terbaca mesin pencari, tidak ada sitemap, atau website belum pernah didaftarkan ke Google Search Console. Kami periksa dulu kondisinya sebelum menyarankan perbaikan atau pembuatan ulang.",
    },
    {
      q: "Apakah bisa bertemu langsung di Manado atau Bitung?",
      a: "Bisa. Kami berbasis di Bitung dan biasa menemui klien di Manado dan sekitarnya. Kalau anda lebih nyaman lewat WhatsApp saja, itu juga tidak masalah.",
    },
  ],
  whatsappMessage:
    "Halo Imaginnative, saya baca artikel biaya website UMKM. Saya mau tanya estimasi untuk bisnis saya.",
};

export const articles: readonly Article[] = [biayaWebsiteUmkmManado];

export const articleSlugs = articles.map((a) => a.slug);

export const getArticle = (slug: string): Article | undefined =>
  articles.find((a) => a.slug === slug);
