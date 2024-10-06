//================== Logo ==================//
import logo from "@/components/assets/logo/logo.png";

//================== Home ==================//
import arsitek from "@/components/assets/home/arsitek.png";
import kaligrafi from "@/components/assets/home/kaligrafi.png";

//================== Services ==================//
import service1 from "@/components/assets/service/img1.webp";
import service2 from "@/components/assets/service/img2.webp";
import service3 from "@/components/assets/service/img3.webp";
import service4 from "@/components/assets/service/img4.webp";

//================== About ==================//
import aboutImage from "@/components/assets/tentang-kami/about.webp";

//================== Price ==================//
import ornameT_1 from "@/components/assets/price/katalog_1/terang/img1.png"
import ornameT_2 from "@/components/assets/price/katalog_1/terang/img2.png"
import ornameT_3 from "@/components/assets/price/katalog_1/terang/img3.png"
import ornameT_4 from "@/components/assets/price/katalog_1/terang/img4.png"

import ornameG_1 from "@/components/assets/price/katalog_1/gelap/img1.png"
import ornameG_2 from "@/components/assets/price/katalog_1/gelap/img2.png"
import ornameG_3 from "@/components/assets/price/katalog_1/gelap/img3.png"
import ornameG_4 from "@/components/assets/price/katalog_1/gelap/img4.png"

import ornameBT_1 from "@/components/assets/price/katalog_2/terang/img1.png"
import ornameBT_2 from "@/components/assets/price/katalog_2/terang/img2.png"
import ornameBT_3 from "@/components/assets/price/katalog_2/terang/img3.png"

import ornameBG_1 from "@/components/assets/price/katalog_2/gelap/img1.png"
import ornameBG_2 from "@/components/assets/price/katalog_2/gelap/img2.png"
import ornameBG_3 from "@/components/assets/price/katalog_2/gelap/img3.png"

import OrnameP_1 from "@/components/assets/price/katalog_3/img1.png"
import OrnameP_2 from "@/components/assets/price/katalog_3/img2.png"
import OrnameP_3 from "@/components/assets/price/katalog_3/img3.png"
import OrnameP_4 from "@/components/assets/price/katalog_3/img4.png"
import OrnameP_5 from "@/components/assets/price/katalog_3/img5.png"
import OrnameP_6 from "@/components/assets/price/katalog_3/img6.png"

import OrnameS_1 from "@/components/assets/price/katalog_4/img1.png"
import OrnameS_2 from "@/components/assets/price/katalog_4/img2.png"
import OrnameS_3 from "@/components/assets/price/katalog_4/img3.png"
import OrnameS_4 from "@/components/assets/price/katalog_4/img4.png"
import OrnameS_5 from "@/components/assets/price/katalog_4/img5.png"
import OrnameS_6 from "@/components/assets/price/katalog_4/img6.png"
import OrnameS_7 from "@/components/assets/price/katalog_4/img7.png"
import OrnameS_8 from "@/components/assets/price/katalog_4/img8.png"
import OrnameS_9 from "@/components/assets/price/katalog_4/img9.png"
import OrnameS_10 from "@/components/assets/price/katalog_4/img10.png"
import OrnameS_11 from "@/components/assets/price/katalog_4/img11.png"
import OrnameS_12 from "@/components/assets/price/katalog_4/img12.png"

import Plafon_1 from "@/components/assets/price/Katalog_5/img1.png"
import Plafon_2 from "@/components/assets/price/Katalog_5/img2.png"
import Plafon_3 from "@/components/assets/price/Katalog_5/img3.png"
import Plafon_4 from "@/components/assets/price/Katalog_5/img4.png"
import Plafon_5 from "@/components/assets/price/Katalog_5/img5.png"
import Plafon_6 from "@/components/assets/price/Katalog_5/img6.png"
import Plafon_7 from "@/components/assets/price/Katalog_5/img7.png"
import Plafon_8 from "@/components/assets/price/Katalog_5/img8.png"
import Plafon_9 from "@/components/assets/price/Katalog_5/img9.png"
import Plafon_10 from "@/components/assets/price/Katalog_5/img10.png"
import Plafon_11 from "@/components/assets/price/Katalog_5/img11.png"
import Plafon_12 from "@/components/assets/price/Katalog_5/img12.png"

//================== Icons ==================//
import { Facebook, Instagram } from "lucide-react";
import { RiBriefcase2Line, RiGroupLine, RiTiktokLine, RiStarFill } from "@remixicon/react";

//================== Banner ==================//
import bannerImg from "@/components/assets/banner/banner.png";

//=================== Header ===================//
export const profileHeader = [
  {
    id: 1,
    img: logo,
  },
];

export const navLink = [
  {
    id: 1,
    title: "home",
    path: "/",
  },

  {
    id: 2,
    title: "Tentang Kami",
    path: "/tentang-kami",
  },

  {
    id: 3,
    title: "Price List",
    path: "/price-list",
  },

  {
    id: 4,
    title: "Kontak Kami",
    path: "/kontak-kami",
  },
];

export const navToogle = [
  {
    id: 1,
    title: "Book Demo Now",
    path: "/rsvp",
  },
];

//=================== Home ===================//
export const arsitekImg = [
  {
    id: 1,
    img: arsitek,
  },
];

export const kaligrafiImg = [
  {
    id: 1,
    img: kaligrafi,
  },
];

export const homeData = [
  {
    id: 1,
    title: "Kaligrafi dan Arsitektur Rumah Islami",
    text: "Simbol Keindahan dan Spiritualitas",
    desc: "Nikmati keindahan kaligrafi Islam yang menghiasi dinding rumah Anda, dipadukan dengan desain arsitektur Islami yang sederhana namun elegan. Setiap elemen mencerminkan ketenangan, keindahan, dan nilai spiritual yang memperkaya suasana rumah Anda.",
  },
];

export const btnHome = [
  {
    id: 1,
    icon: <RiGroupLine size={30} />,
    name: "Tentang Kami",
    path: "/tentang-kami",
  },

  {
    id: 2,
    icon: <RiBriefcase2Line size={30} />,
    name: "Portfolio Kami",
    path: "/portofolio",
  },
];

//=================== Services ===================//
export const HeadingService = [
  {
    id: 1,
    title: "Islamic Art",
    desc: "PUSAT DESAIN KALIGRAFI DAN DESAIN KREATIF LAINNYA UNTUK INTERIOR EKSTERIOR",
  },
];

export const serviceData = [
  {
    id: 1,
    title: "Inovatif & Unggul",
    desc: "Kaligrafer kami adalah para ahli dalam menciptakan karya kaligrafi berkualitas tinggi. Mereka menguasai berbagai jenis khat dan mampu menghasilkan desain ornamen yang indah dan unik.",
    img: service1,
  },

  {
    id: 2,
    title: "Desainer & Tenaga Berpengalaman",
    desc: "Desainer dan tenaga berpengalaman kaligrafi Islam adalah seniman visual yang mengkhususkan diri dalam seni menulis huruf Arab dengan gaya yang indah dan penuh makna",
    img: service2,
  },

  {
    id: 3,
    title: "Kualitas Utama",
    desc: "Kami menyediakan beragam pilihan media untuk mewujudkan karya kaligrafi Anda, mulai dari media tradisional seperti kanvas dan kertas, hingga material modern seperti GRC, akrilik, dan logam. Anda dapat memilih dari berbagai jenis logam seperti stainless steel, plat besi, kuningan, tembaga, atau ACP. Selain itu, kami juga menawarkan opsi kayu, MDF, atau HPL untuk tampilan yang lebih hangat dan natural",
    img: service3,
  },

  {
    id: 4,
    title: "Layanan Konsultasi Gratis",
    desc: "Memberikan layanan konsultasi dan survey khusus area jabodetabek secara gratis dengan tenaga tenaga desain dan kaligrafer yang komunikatif, adaptif serta responsif.",
    img: service4,
  },
];

//=================== Portofolio ===================//
export const headPortofolio = [
  {
    id: 1,
    title: "Data movement is your foundation for innovation",
    desc: "Fivetran, the industry leader in data movement, powers real-time analytics, database replication, AI workflows and cloud migrations for thousands of customers worldwide. The Fivetran data movement platform is the foundation for customer innovation.",
  },
];

//=================== Proyek ===================//
export const headingProyek = [
  {
    id: 1,
    title: "Proyek Terbaru Kami",
    desc: "Kami adalah perusahaan yang berdedikasi untuk menyediakan layanan desain kaligrafi dan desain kreatif lainnya yang berkualitas tinggi. Kami percaya bahwa setiap proyek memiliki potensi untuk menciptakan keindahan dan nilai yang tak terhitung harganya.",
  },
];

//=================== About ===================//
export const aboutData = [
  {
    id: 1,
    title: "Dari Pena ke Pena: Kisah Kaligrafi dalam Arsitektur Islam",
    text: "Jelajahi keindahan seni kaligrafi dan arsitektur Islam yang menggabungkan estetika visual dengan nilai-nilai spiritual. Temukan bagaimana tulisan suci dan ornamen-ornamen indah menjadi bahasa visual yang mempesona",
    name: "Hubungi Kami",
    path: "/kontak-kami",
    img: aboutImage,
  },
];

//=================== Price List ===================//
export const headPrice = [
  {
    id: 1,
    img: logo,
  },
];

export const catalog_1 = [
  {
    id: 1,
    hastag: "#Katalog",
    title: "Kaligrafi & Ornamen Dinding",
    details: [
      {
        id: 1,
        desc: "Kaligrafi Ornamen Lis Dasar Warna Terang 150K/m/Lebar 25-50cm, 50cm Keatas + 50K",
        img: [
          {
            id: 1,
            img: ornameT_1
          },

          {
            id: 2,
            img: ornameT_2
          },

          {
            id: 3,
            img: ornameT_3
          },

          {
            id: 4,
            img: ornameT_4
          }
        ]
      },

      {
        id: 2,
        desc: "Kaligrafi Ornamen Lis Dasar Warna Gelap 200k/m/Lebar 25-50cm, 50cm Keatas + 50K",
        img: [
          {
            id: 1,
            img: ornameG_1
          },

          {
            id: 2,
            img: ornameG_2
          },

          {
            id: 3,
            img: ornameG_3
          },

          {
            id: 4,
            img: ornameG_4
          }
        ]
      },

      {
        id: 3,
        desc: "Kaligrafi Ornamen Lis Dasar Warna Terang 300k/m/Lebar 50-70cm, 70cm Keatas + 50K",
        img: [
          {
            id: 1,
            img: ornameBT_1
          },

          {
            id: 2,
            img: ornameBT_2
          },

          {
            id: 3,
            img: ornameBT_3
          },
        ]
      },

      {
        id: 4,
        desc: "Kaligrafi Ornamen Lis Dasar Warna Gelap 350k/m/Lebar 50-70cm, 70cm Keatas + 50K",
        img: [
          {
            id: 1,
            img: ornameBG_1
          },

          {
            id: 2,
            img: ornameBG_2
          },

          {
            id: 3,
            img: ornameBG_3
          }
        ]
      },
    ]
  },
]

export const catalog_2 = [
  {
    id: 1,
    hastag: "#Katalog",
    title: "Whos Pilar/ Motif Marmer",
    details: [
      {
        id: 1,
        desc: "Harga mulai 150-500K tergantung motif & bahan",
        images: [
          {
            id: 1,
            img: OrnameP_1
          },

          {
            id: 2,
            img: OrnameP_2
          },

          {
            id: 3,
            img: OrnameP_3
          },

          {
            id: 4,
            img: OrnameP_4
          },

          {
            id: 5,
            img: OrnameP_5
          },

          {
            id: 6,
            img: OrnameP_6
          }
        ]
      }
    ]
  },
]

export const catalog_3 = [
  {
    id: 1,
    hastag: "#Katalog",
    title: "Kaligrafi Timbul (Semen)",
    details: [
      {
        id: 1,
        desc: "Harga mulai 600k/m Lari",
        images: [
          {
            id: 1,
            img: OrnameS_1
          },

          {
            id: 2,
            img: OrnameS_2
          },

          {
            id: 3,
            img: OrnameS_3
          },

          {
            id: 4,
            img: OrnameS_4
          },

          {
            id: 5,
            img: OrnameS_5
          },

          {
            id: 6,
            img: OrnameS_6
          },

          {
            id: 7,
            img: OrnameS_7
          },

          {
            id: 8,
            img: OrnameS_8
          },

          {
            id: 9,
            img: OrnameS_9
          },

          {
            id: 10,
            img: OrnameS_10
          },

          {
            id: 11,
            img: OrnameS_11
          },

          {
            id: 12,
            img: OrnameS_12
          },
        ]
      }
    ]
  },
]

export const catalog_4 = [
  {
    id: 1,
    hastag: "#Katalog",
    title: "Ornamen Plafon",
    details: [
      {
        id: 1,
        desc: "Harga mulai 150-300k Tergantung Motif",
        images: [
          {
            id: 1,
            img: Plafon_1
          },

          {
            id: 2,
            img: Plafon_2
          },

          {
            id: 3,
            img: Plafon_3
          },

          {
            id: 4,
            img: Plafon_4
          },

          {
            id: 5,
            img: Plafon_5
          },

          {
            id: 6,
            img: Plafon_6
          },

          {
            id: 7,
            img: Plafon_7
          },

          {
            id: 8,
            img: Plafon_8
          },

          {
            id: 9,
            img: Plafon_9
          },

          {
            id: 10,
            img: Plafon_10
          },

          {
            id: 11,
            img: Plafon_11
          },

          {
            id: 12,
            img: Plafon_12
          },
        ]
      }
    ]
  },
]
//=================== Kontak ===================//
export const kontakData = [
  {
    id: 1,
    name: "Hubungi Kami",
    title: "Bagaimana Kami Dapat Membantu?",
    desc: "Ingin mengetahui lebih lanjut tentang koleksi seni Islam kami atau ingin berkonsultasi mengenai proyek seni Anda? Hubungi kami melalui telepon atau email. Kami siap membantu.",
  },
];

export const kontakBox = [
  {
    id: 1,
    span: "Telephone",
    title: "Ada Pertanyaan? Kami Siap Membantu",
    desc: "Ada pertanyaan atau ingin tahu lebih banyak? Jangan ragu untuk menghubungi kami. Tim kami siap membantu Anda.",
    name: "Hubungi Kami",
    path: "tel: 021-12345678",
  },

  {
    id: 2,
    span: "Email",
    title: "Ada pertanyaan? Kami Siap Membantu",
    desc: "Hubungi tim kami langsung melalui email jika Anda membutuhkan bantuan. Kami akan menghubungi Anda secepat mungkin.",
    name: "rr8027896@gmail.com",
    path: "mailto: rr8027896@gmail.com",
  },
];

//=================== Portofolio ===================//
export const bannerData = [
  {
    id: 1,
    img: bannerImg,
  }
]

//=================== RSVP ===================//
export const dataRSVP = [
  {
    id: 1,
    name: "Hemat waktu dan maksimalkan dengan Islamic Art",
    icons: [
      {
        id: 1,
        icons: <RiStarFill size={30} />
      },

      {
        id: 2,
        icons: <RiStarFill size={30} />
      },

      {
        id: 3,
        icons: <RiStarFill size={30} />
      },

      {
        id: 4,
        icons: <RiStarFill size={30} />
      },

      {
        id: 5,
        icons: <RiStarFill size={30} />
      }
    ]
  }
]

//=================== Social Link ===================//
export const socialLink = [
  {
    id: 1,
    icons: <Facebook size={30} />,
    name: "Facebook",
    path: "https://www.facebook.com/",
  },

  {
    id: 2,
    icons: <Instagram size={30} />,
    name: "Instagram",
    path: "https://www.instagram.com/",
  },

  {
    id: 3,
    icons: <RiTiktokLine size={30} />,
    name: "Tiktok",
    path: "https://www.tiktok.com/",
  },
];

