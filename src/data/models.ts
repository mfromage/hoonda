import type { Locale } from "@/i18n/config";

// ---------------------------------------------------------------------------
// Type definitions
// ---------------------------------------------------------------------------

export type ModelSpecs = {
  engine: string;
  horsepower: string;
  torque: string;
  transmission: string;
  fuelConsumption: string;
  length: string;
  width: string;
  height: string;
  wheelbase: string;
  seatingCapacity: number;
  airbags: number;
};

export type ModelFeature = {
  icon: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
};

export type ModelColor = {
  name: Record<Locale, string>;
  hex: string;
  image: string;
};

export type Model = {
  slug: string;
  name: string;
  category: "sedan" | "hatchback" | "suv";
  year: number;
  startingPrice: number;
  tagline: Record<Locale, string>;
  thumbnail: string;
  images: string[];
  specs: ModelSpecs;
  features: ModelFeature[];
  colors: ModelColor[];
};

// ---------------------------------------------------------------------------
// Static model data — all 9 Honda Indonesia models
// ---------------------------------------------------------------------------

export const models: Model[] = [
  // -----------------------------------------------------------------------
  // Brio — hatchback
  // -----------------------------------------------------------------------
  {
    slug: "brio",
    name: "Brio",
    category: "hatchback",
    year: 2025,
    startingPrice: 167_000_000,
    tagline: {
      en: "Big on Fun, Small on Fuel",
      id: "Besar dalam Kesenangan, Hemat Bahan Bakar",
    },
    thumbnail: "/images/models/brio/thumbnail.jpg",
    images: [
      "/images/models/brio/1.jpg",
      "/images/models/brio/2.jpg",
      "/images/models/brio/3.jpg",
    ],
    specs: {
      engine: "1.2L i-VTEC 4-Cylinder",
      horsepower: "90 PS @ 6,000 rpm",
      torque: "110 Nm @ 4,800 rpm",
      transmission: "CVT with Earth Dreams Technology",
      fuelConsumption: "18.7 km/L",
      length: "3,815 mm",
      width: "1,680 mm",
      height: "1,485 mm",
      wheelbase: "2,405 mm",
      seatingCapacity: 5,
      airbags: 2,
    },
    features: [
      {
        icon: "Gauge",
        title: {
          en: "Efficient i-VTEC Engine",
          id: "Mesin i-VTEC Efisien",
        },
        description: {
          en: "The 1.2L i-VTEC engine delivers lively performance while maximizing fuel economy for everyday city driving.",
          id: "Mesin 1.2L i-VTEC memberikan performa yang lincah sekaligus memaksimalkan efisiensi bahan bakar untuk berkendara di kota sehari-hari.",
        },
      },
      {
        icon: "Shield",
        title: {
          en: "Advanced Safety",
          id: "Keamanan Canggih",
        },
        description: {
          en: "Dual SRS airbags, ABS with EBD, and a G-CON body structure keep you and your passengers protected.",
          id: "Dual SRS airbag, ABS dengan EBD, dan struktur bodi G-CON menjaga Anda dan penumpang tetap terlindungi.",
        },
      },
      {
        icon: "Sparkles",
        title: {
          en: "Spacious Interior",
          id: "Interior Luas",
        },
        description: {
          en: "Cleverly designed cabin offers surprising room for five with a versatile trunk for all your needs.",
          id: "Kabin yang dirancang cerdas menawarkan ruang yang luas untuk lima orang dengan bagasi serbaguna untuk semua kebutuhan Anda.",
        },
      },
    ],
    colors: [
      {
        name: { en: "Crystal Black Pearl", id: "Crystal Black Pearl" },
        hex: "#1a1a1a",
        image: "/images/models/brio/color-1a1a1a.jpg",
      },
      {
        name: { en: "Platinum White Pearl", id: "Platinum White Pearl" },
        hex: "#e8e6e1",
        image: "/images/models/brio/color-e8e6e1.jpg",
      },
      {
        name: { en: "Rallye Red", id: "Rallye Red" },
        hex: "#cc0000",
        image: "/images/models/brio/color-cc0000.jpg",
      },
      {
        name: { en: "Lunar Silver Metallic", id: "Lunar Silver Metallic" },
        hex: "#9a9da1",
        image: "/images/models/brio/color-9a9da1.jpg",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // Jazz — hatchback
  // -----------------------------------------------------------------------
  {
    slug: "jazz",
    name: "Jazz",
    category: "hatchback",
    year: 2025,
    startingPrice: 272_000_000,
    tagline: {
      en: "Excitement in Every Drive",
      id: "Kegembiraan di Setiap Perjalanan",
    },
    thumbnail: "/images/models/jazz/thumbnail.jpg",
    images: [
      "/images/models/jazz/1.jpg",
      "/images/models/jazz/2.jpg",
      "/images/models/jazz/3.jpg",
    ],
    specs: {
      engine: "1.5L DOHC i-VTEC 4-Cylinder",
      horsepower: "121 PS @ 6,600 rpm",
      torque: "145 Nm @ 4,300 rpm",
      transmission: "CVT with Earth Dreams Technology",
      fuelConsumption: "17.1 km/L",
      length: "4,045 mm",
      width: "1,694 mm",
      height: "1,524 mm",
      wheelbase: "2,530 mm",
      seatingCapacity: 5,
      airbags: 4,
    },
    features: [
      {
        icon: "Gauge",
        title: {
          en: "Responsive 1.5L Engine",
          id: "Mesin 1.5L Responsif",
        },
        description: {
          en: "A spirited 1.5L DOHC i-VTEC engine with 121 PS provides exhilarating acceleration and smooth highway cruising.",
          id: "Mesin 1.5L DOHC i-VTEC bertenaga 121 PS memberikan akselerasi yang menggembirakan dan kenyamanan di jalan tol.",
        },
      },
      {
        icon: "Shield",
        title: {
          en: "Honda SENSING",
          id: "Honda SENSING",
        },
        description: {
          en: "Equipped with Honda SENSING suite including collision mitigation, lane keeping assist, and adaptive cruise control.",
          id: "Dilengkapi dengan paket Honda SENSING termasuk mitigasi tabrakan, lane keeping assist, dan adaptive cruise control.",
        },
      },
      {
        icon: "Cog",
        title: {
          en: "Ultra Seat Versatility",
          id: "Fleksibilitas Ultra Seat",
        },
        description: {
          en: "The innovative Magic Seat system offers four modes for cargo and passengers, giving you unrivaled flexibility.",
          id: "Sistem Magic Seat yang inovatif menawarkan empat mode untuk kargo dan penumpang, memberikan fleksibilitas tak tertandingi.",
        },
      },
    ],
    colors: [
      {
        name: { en: "Crystal Black Pearl", id: "Crystal Black Pearl" },
        hex: "#1a1a1a",
        image: "/images/models/jazz/color-1a1a1a.jpg",
      },
      {
        name: { en: "Platinum White Pearl", id: "Platinum White Pearl" },
        hex: "#e8e6e1",
        image: "/images/models/jazz/color-e8e6e1.jpg",
      },
      {
        name: { en: "Phoenix Orange Pearl", id: "Phoenix Orange Pearl" },
        hex: "#d9621e",
        image: "/images/models/jazz/color-d9621e.jpg",
      },
      {
        name: { en: "Brilliant Sporty Blue Metallic", id: "Brilliant Sporty Blue Metallic" },
        hex: "#2a5e9e",
        image: "/images/models/jazz/color-2a5e9e.jpg",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // City — sedan
  // -----------------------------------------------------------------------
  {
    slug: "city",
    name: "City",
    category: "sedan",
    year: 2025,
    startingPrice: 344_000_000,
    tagline: {
      en: "Drive Your Ambition",
      id: "Wujudkan Ambisi Anda",
    },
    thumbnail: "/images/models/city/thumbnail.jpg",
    images: [
      "/images/models/city/1.jpg",
      "/images/models/city/2.jpg",
      "/images/models/city/3.jpg",
    ],
    specs: {
      engine: "1.5L DOHC i-VTEC 4-Cylinder",
      horsepower: "121 PS @ 6,600 rpm",
      torque: "145 Nm @ 4,300 rpm",
      transmission: "CVT with Earth Dreams Technology",
      fuelConsumption: "18.5 km/L",
      length: "4,553 mm",
      width: "1,748 mm",
      height: "1,467 mm",
      wheelbase: "2,589 mm",
      seatingCapacity: 5,
      airbags: 6,
    },
    features: [
      {
        icon: "Gauge",
        title: {
          en: "Refined 1.5L Performance",
          id: "Performa 1.5L yang Halus",
        },
        description: {
          en: "A refined 1.5L engine paired with an advanced CVT delivers a perfect blend of power and fuel efficiency.",
          id: "Mesin 1.5L yang halus dipadu CVT canggih menghasilkan perpaduan sempurna antara tenaga dan efisiensi bahan bakar.",
        },
      },
      {
        icon: "Shield",
        title: {
          en: "Honda SENSING Suite",
          id: "Paket Honda SENSING",
        },
        description: {
          en: "Full Honda SENSING safety suite with six airbags, Vehicle Stability Assist, and Hill Start Assist for complete peace of mind.",
          id: "Paket keselamatan Honda SENSING lengkap dengan enam airbag, Vehicle Stability Assist, dan Hill Start Assist untuk ketenangan berkendara.",
        },
      },
      {
        icon: "Eye",
        title: {
          en: "Premium Interior Design",
          id: "Desain Interior Premium",
        },
        description: {
          en: "An elegantly designed cabin with an 8-inch touchscreen, wireless Apple CarPlay, and ambient LED lighting elevates every journey.",
          id: "Kabin yang dirancang elegan dengan layar sentuh 8 inci, wireless Apple CarPlay, dan pencahayaan LED ambient meningkatkan setiap perjalanan.",
        },
      },
    ],
    colors: [
      {
        name: { en: "Crystal Black Pearl", id: "Crystal Black Pearl" },
        hex: "#1a1a1a",
        image: "/images/models/city/color-1a1a1a.jpg",
      },
      {
        name: { en: "Platinum White Pearl", id: "Platinum White Pearl" },
        hex: "#e8e6e1",
        image: "/images/models/city/color-e8e6e1.jpg",
      },
      {
        name: { en: "Meteoroid Gray Metallic", id: "Meteoroid Gray Metallic" },
        hex: "#5a5d61",
        image: "/images/models/city/color-5a5d61.jpg",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // Civic — sedan
  // -----------------------------------------------------------------------
  {
    slug: "civic",
    name: "Civic",
    category: "sedan",
    year: 2025,
    startingPrice: 567_000_000,
    tagline: {
      en: "Beyond Expectations",
      id: "Melampaui Ekspektasi",
    },
    thumbnail: "/images/models/civic/thumbnail.jpg",
    images: [
      "/images/models/civic/1.jpg",
      "/images/models/civic/2.jpg",
      "/images/models/civic/3.jpg",
    ],
    specs: {
      engine: "1.5L VTEC Turbo 4-Cylinder",
      horsepower: "178 PS @ 6,000 rpm",
      torque: "240 Nm @ 1,700-4,500 rpm",
      transmission: "CVT with Sport Mode",
      fuelConsumption: "15.8 km/L",
      length: "4,678 mm",
      width: "1,802 mm",
      height: "1,415 mm",
      wheelbase: "2,735 mm",
      seatingCapacity: 5,
      airbags: 6,
    },
    features: [
      {
        icon: "Gauge",
        title: {
          en: "VTEC Turbo Powerhouse",
          id: "Tenaga VTEC Turbo",
        },
        description: {
          en: "The 1.5L VTEC Turbo engine unleashes 178 PS and 240 Nm of torque for thrilling performance on any road.",
          id: "Mesin 1.5L VTEC Turbo melepaskan 178 PS dan torsi 240 Nm untuk performa menggembirakan di setiap jalan.",
        },
      },
      {
        icon: "Shield",
        title: {
          en: "Honda SENSING Elite",
          id: "Honda SENSING Elite",
        },
        description: {
          en: "Advanced driver-assistance with adaptive cruise, lane-keeping, blind-spot monitoring, and rear cross-traffic alert.",
          id: "Bantuan pengemudi canggih dengan adaptive cruise, lane-keeping, pemantauan blind-spot, dan peringatan lalu lintas belakang.",
        },
      },
      {
        icon: "Sparkles",
        title: {
          en: "Connected Technology",
          id: "Teknologi Terkoneksi",
        },
        description: {
          en: "A 9-inch HD touchscreen with wireless Apple CarPlay and Android Auto, plus a Bose premium 12-speaker audio system.",
          id: "Layar sentuh HD 9 inci dengan wireless Apple CarPlay dan Android Auto, serta sistem audio premium Bose 12 speaker.",
        },
      },
    ],
    colors: [
      {
        name: { en: "Crystal Black Pearl", id: "Crystal Black Pearl" },
        hex: "#1a1a1a",
        image: "/images/models/civic/color-1a1a1a.jpg",
      },
      {
        name: { en: "Platinum White Pearl", id: "Platinum White Pearl" },
        hex: "#e8e6e1",
        image: "/images/models/civic/color-e8e6e1.jpg",
      },
      {
        name: { en: "Rallye Red", id: "Rallye Red" },
        hex: "#cc0000",
        image: "/images/models/civic/color-cc0000.jpg",
      },
      {
        name: { en: "Meteoroid Gray Metallic", id: "Meteoroid Gray Metallic" },
        hex: "#5a5d61",
        image: "/images/models/civic/color-5a5d61.jpg",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // Accord — sedan
  // -----------------------------------------------------------------------
  {
    slug: "accord",
    name: "Accord",
    category: "sedan",
    year: 2025,
    startingPrice: 742_000_000,
    tagline: {
      en: "Sophistication Redefined",
      id: "Definisi Baru Keanggunan",
    },
    thumbnail: "/images/models/accord/thumbnail.jpg",
    images: [
      "/images/models/accord/1.jpg",
      "/images/models/accord/2.jpg",
      "/images/models/accord/3.jpg",
    ],
    specs: {
      engine: "1.5L VTEC Turbo 4-Cylinder",
      horsepower: "190 PS @ 5,500 rpm",
      torque: "260 Nm @ 1,600-5,000 rpm",
      transmission: "CVT with Sport Mode & Paddle Shifters",
      fuelConsumption: "14.5 km/L",
      length: "4,906 mm",
      width: "1,862 mm",
      height: "1,450 mm",
      wheelbase: "2,830 mm",
      seatingCapacity: 5,
      airbags: 8,
    },
    features: [
      {
        icon: "Gauge",
        title: {
          en: "Turbocharged Excellence",
          id: "Keunggulan Turbo",
        },
        description: {
          en: "A potent 1.5L Turbo engine producing 190 PS and 260 Nm delivers effortless overtaking power and refined cruising.",
          id: "Mesin Turbo 1.5L bertenaga 190 PS dan 260 Nm memberikan tenaga menyalip tanpa usaha dan kenyamanan berkendara.",
        },
      },
      {
        icon: "Shield",
        title: {
          en: "Full Honda SENSING",
          id: "Honda SENSING Lengkap",
        },
        description: {
          en: "Eight airbags and the complete Honda SENSING suite, including traffic-jam assist and front-departure warning.",
          id: "Delapan airbag dan paket Honda SENSING lengkap, termasuk traffic-jam assist dan peringatan keberangkatan depan.",
        },
      },
      {
        icon: "Eye",
        title: {
          en: "Executive Luxury",
          id: "Kemewahan Eksekutif",
        },
        description: {
          en: "Leather-trimmed seats, dual-zone climate control, head-up display, and a panoramic moonroof for ultimate comfort.",
          id: "Jok berbalut kulit, dual-zone climate control, head-up display, dan panoramic moonroof untuk kenyamanan tertinggi.",
        },
      },
    ],
    colors: [
      {
        name: { en: "Crystal Black Pearl", id: "Crystal Black Pearl" },
        hex: "#1a1a1a",
        image: "/images/models/accord/color-1a1a1a.jpg",
      },
      {
        name: { en: "Platinum White Pearl", id: "Platinum White Pearl" },
        hex: "#e8e6e1",
        image: "/images/models/accord/color-e8e6e1.jpg",
      },
      {
        name: { en: "Still Night Pearl", id: "Still Night Pearl" },
        hex: "#1b2a4a",
        image: "/images/models/accord/color-1b2a4a.jpg",
      },
      {
        name: { en: "Lunar Silver Metallic", id: "Lunar Silver Metallic" },
        hex: "#9a9da1",
        image: "/images/models/accord/color-9a9da1.jpg",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // HR-V — SUV
  // -----------------------------------------------------------------------
  {
    slug: "hr-v",
    name: "HR-V",
    category: "suv",
    year: 2025,
    startingPrice: 383_000_000,
    tagline: {
      en: "Elevate Your World",
      id: "Tingkatkan Dunia Anda",
    },
    thumbnail: "/images/models/hr-v/thumbnail.jpg",
    images: [
      "/images/models/hr-v/1.jpg",
      "/images/models/hr-v/2.jpg",
      "/images/models/hr-v/3.jpg",
    ],
    specs: {
      engine: "1.5L DOHC i-VTEC 4-Cylinder",
      horsepower: "121 PS @ 6,600 rpm",
      torque: "145 Nm @ 4,300 rpm",
      transmission: "CVT with Earth Dreams Technology",
      fuelConsumption: "16.2 km/L",
      length: "4,385 mm",
      width: "1,790 mm",
      height: "1,590 mm",
      wheelbase: "2,610 mm",
      seatingCapacity: 5,
      airbags: 6,
    },
    features: [
      {
        icon: "Gauge",
        title: {
          en: "Agile Urban Performance",
          id: "Performa Urban yang Lincah",
        },
        description: {
          en: "A nimble 1.5L engine with Earth Dreams CVT offers responsive handling for both city streets and weekend getaways.",
          id: "Mesin 1.5L yang lincah dengan Earth Dreams CVT menawarkan pengendalian responsif untuk jalanan kota maupun perjalanan akhir pekan.",
        },
      },
      {
        icon: "Shield",
        title: {
          en: "Honda SENSING Safety",
          id: "Keamanan Honda SENSING",
        },
        description: {
          en: "Honda SENSING technology with six airbags, Vehicle Stability Assist, and a Multi-View Camera System for confident driving.",
          id: "Teknologi Honda SENSING dengan enam airbag, Vehicle Stability Assist, dan Multi-View Camera System untuk berkendara percaya diri.",
        },
      },
      {
        icon: "Sparkles",
        title: {
          en: "Bold Crossover Design",
          id: "Desain Crossover yang Berani",
        },
        description: {
          en: "A sleek coupe-inspired silhouette with full LED lighting and 17-inch alloy wheels makes a striking impression.",
          id: "Siluet terinspirasi coupe yang elegan dengan pencahayaan full LED dan velg alloy 17 inci memberikan kesan yang menakjubkan.",
        },
      },
    ],
    colors: [
      {
        name: { en: "Crystal Black Pearl", id: "Crystal Black Pearl" },
        hex: "#1a1a1a",
        image: "/images/models/hr-v/color-1a1a1a.jpg",
      },
      {
        name: { en: "Platinum White Pearl", id: "Platinum White Pearl" },
        hex: "#e8e6e1",
        image: "/images/models/hr-v/color-e8e6e1.jpg",
      },
      {
        name: { en: "Sand Khaki Pearl", id: "Sand Khaki Pearl" },
        hex: "#a69876",
        image: "/images/models/hr-v/color-a69876.jpg",
      },
      {
        name: { en: "Meteoroid Gray Metallic", id: "Meteoroid Gray Metallic" },
        hex: "#5a5d61",
        image: "/images/models/hr-v/color-5a5d61.jpg",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // BR-V — SUV
  // -----------------------------------------------------------------------
  {
    slug: "br-v",
    name: "BR-V",
    category: "suv",
    year: 2025,
    startingPrice: 273_000_000,
    tagline: {
      en: "Adventure for Everyone",
      id: "Petualangan untuk Semua",
    },
    thumbnail: "/images/models/br-v/thumbnail.jpg",
    images: [
      "/images/models/br-v/1.jpg",
      "/images/models/br-v/2.jpg",
      "/images/models/br-v/3.jpg",
    ],
    specs: {
      engine: "1.5L DOHC i-VTEC 4-Cylinder",
      horsepower: "121 PS @ 6,600 rpm",
      torque: "145 Nm @ 4,300 rpm",
      transmission: "CVT with Earth Dreams Technology",
      fuelConsumption: "16.8 km/L",
      length: "4,490 mm",
      width: "1,780 mm",
      height: "1,685 mm",
      wheelbase: "2,700 mm",
      seatingCapacity: 7,
      airbags: 6,
    },
    features: [
      {
        icon: "Gauge",
        title: {
          en: "Versatile 1.5L Engine",
          id: "Mesin 1.5L Serbaguna",
        },
        description: {
          en: "The 1.5L i-VTEC engine balances strong low-end torque for city driving with efficient highway cruising.",
          id: "Mesin 1.5L i-VTEC menyeimbangkan torsi rendah yang kuat untuk berkendara di kota dengan efisiensi di jalan tol.",
        },
      },
      {
        icon: "Shield",
        title: {
          en: "Family Safety First",
          id: "Keamanan Keluarga Utama",
        },
        description: {
          en: "Six airbags, ABS with EBD, Vehicle Stability Assist, and Honda SENSING keep every family member protected.",
          id: "Enam airbag, ABS dengan EBD, Vehicle Stability Assist, dan Honda SENSING menjaga setiap anggota keluarga tetap terlindungi.",
        },
      },
      {
        icon: "Cog",
        title: {
          en: "7-Seat Flexibility",
          id: "Fleksibilitas 7 Kursi",
        },
        description: {
          en: "Three rows of seating with a flat-folding third row give you the space for family, friends, and all their gear.",
          id: "Tiga baris tempat duduk dengan baris ketiga yang dapat dilipat rata memberi Anda ruang untuk keluarga, teman, dan semua barang bawaan.",
        },
      },
    ],
    colors: [
      {
        name: { en: "Crystal Black Pearl", id: "Crystal Black Pearl" },
        hex: "#1a1a1a",
        image: "/images/models/br-v/color-1a1a1a.jpg",
      },
      {
        name: { en: "Platinum White Pearl", id: "Platinum White Pearl" },
        hex: "#e8e6e1",
        image: "/images/models/br-v/color-e8e6e1.jpg",
      },
      {
        name: { en: "Ignite Red Metallic", id: "Ignite Red Metallic" },
        hex: "#8b1a1a",
        image: "/images/models/br-v/color-8b1a1a.jpg",
      },
      {
        name: { en: "Lunar Silver Metallic", id: "Lunar Silver Metallic" },
        hex: "#9a9da1",
        image: "/images/models/br-v/color-9a9da1.jpg",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // CR-V — SUV
  // -----------------------------------------------------------------------
  {
    slug: "cr-v",
    name: "CR-V",
    category: "suv",
    year: 2025,
    startingPrice: 567_000_000,
    tagline: {
      en: "Built for Your Journey",
      id: "Dirancang untuk Perjalanan Anda",
    },
    thumbnail: "/images/models/cr-v/thumbnail.jpg",
    images: [
      "/images/models/cr-v/1.jpg",
      "/images/models/cr-v/2.jpg",
      "/images/models/cr-v/3.jpg",
    ],
    specs: {
      engine: "1.5L VTEC Turbo 4-Cylinder",
      horsepower: "190 PS @ 5,600 rpm",
      torque: "243 Nm @ 2,000-5,000 rpm",
      transmission: "CVT with Sport Mode",
      fuelConsumption: "14.0 km/L",
      length: "4,694 mm",
      width: "1,855 mm",
      height: "1,679 mm",
      wheelbase: "2,700 mm",
      seatingCapacity: 7,
      airbags: 6,
    },
    features: [
      {
        icon: "Gauge",
        title: {
          en: "1.5L Turbo Authority",
          id: "Kekuatan Turbo 1.5L",
        },
        description: {
          en: "A turbocharged 1.5L engine producing 190 PS and 243 Nm gives the CR-V commanding power on any terrain.",
          id: "Mesin turbo 1.5L menghasilkan 190 PS dan 243 Nm memberikan CR-V tenaga besar di segala medan.",
        },
      },
      {
        icon: "Shield",
        title: {
          en: "Honda SENSING 360",
          id: "Honda SENSING 360",
        },
        description: {
          en: "Comprehensive safety with Honda SENSING, blind-spot information, rear cross-traffic monitor, and a multi-angle rear camera.",
          id: "Keamanan komprehensif dengan Honda SENSING, informasi blind-spot, pemantau lalu lintas belakang, dan kamera belakang multi-sudut.",
        },
      },
      {
        icon: "Fuel",
        title: {
          en: "Adventure-Ready Capability",
          id: "Kemampuan Siap Petualangan",
        },
        description: {
          en: "Available Real-Time AWD, 7-seat configuration, and a hands-free power tailgate for outdoor adventures big and small.",
          id: "Tersedia Real-Time AWD, konfigurasi 7 kursi, dan power tailgate hands-free untuk petualangan outdoor besar maupun kecil.",
        },
      },
    ],
    colors: [
      {
        name: { en: "Crystal Black Pearl", id: "Crystal Black Pearl" },
        hex: "#1a1a1a",
        image: "/images/models/cr-v/color-1a1a1a.jpg",
      },
      {
        name: { en: "Platinum White Pearl", id: "Platinum White Pearl" },
        hex: "#e8e6e1",
        image: "/images/models/cr-v/color-e8e6e1.jpg",
      },
      {
        name: { en: "Canyon River Blue Metallic", id: "Canyon River Blue Metallic" },
        hex: "#38556b",
        image: "/images/models/cr-v/color-38556b.jpg",
      },
      {
        name: { en: "Lunar Silver Metallic", id: "Lunar Silver Metallic" },
        hex: "#9a9da1",
        image: "/images/models/cr-v/color-9a9da1.jpg",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // WR-V — SUV
  // -----------------------------------------------------------------------
  {
    slug: "wr-v",
    name: "WR-V",
    category: "suv",
    year: 2025,
    startingPrice: 274_000_000,
    tagline: {
      en: "Go Beyond the Road",
      id: "Melampaui Jalanan",
    },
    thumbnail: "/images/models/wr-v/thumbnail.jpg",
    images: [
      "/images/models/wr-v/1.jpg",
      "/images/models/wr-v/2.jpg",
      "/images/models/wr-v/3.jpg",
    ],
    specs: {
      engine: "1.5L DOHC i-VTEC 4-Cylinder",
      horsepower: "121 PS @ 6,600 rpm",
      torque: "145 Nm @ 4,300 rpm",
      transmission: "CVT with Earth Dreams Technology",
      fuelConsumption: "17.0 km/L",
      length: "4,060 mm",
      width: "1,734 mm",
      height: "1,604 mm",
      wheelbase: "2,555 mm",
      seatingCapacity: 5,
      airbags: 4,
    },
    features: [
      {
        icon: "Gauge",
        title: {
          en: "Efficient i-VTEC Power",
          id: "Tenaga i-VTEC Efisien",
        },
        description: {
          en: "The proven 1.5L i-VTEC engine delivers confident performance and impressive fuel efficiency for daily commutes.",
          id: "Mesin 1.5L i-VTEC yang terbukti memberikan performa percaya diri dan efisiensi bahan bakar yang mengesankan untuk perjalanan harian.",
        },
      },
      {
        icon: "Shield",
        title: {
          en: "Dependable Safety",
          id: "Keamanan yang Andal",
        },
        description: {
          en: "Four airbags, ABS with EBD, Vehicle Stability Assist, and Hill Start Assist keep you secure everywhere.",
          id: "Empat airbag, ABS dengan EBD, Vehicle Stability Assist, dan Hill Start Assist menjaga Anda tetap aman di mana saja.",
        },
      },
      {
        icon: "Eye",
        title: {
          en: "Rugged SUV Styling",
          id: "Gaya SUV Tangguh",
        },
        description: {
          en: "Bold SUV proportions with 220 mm ground clearance, skid plates, and roof rails for a confident on-road presence.",
          id: "Proporsi SUV yang berani dengan ground clearance 220 mm, skid plate, dan roof rail untuk tampilan percaya diri di jalan.",
        },
      },
    ],
    colors: [
      {
        name: { en: "Crystal Black Pearl", id: "Crystal Black Pearl" },
        hex: "#1a1a1a",
        image: "/images/models/wr-v/color-1a1a1a.jpg",
      },
      {
        name: { en: "Platinum White Pearl", id: "Platinum White Pearl" },
        hex: "#e8e6e1",
        image: "/images/models/wr-v/color-e8e6e1.jpg",
      },
      {
        name: { en: "Radiant Red Metallic", id: "Radiant Red Metallic" },
        hex: "#a51c1c",
        image: "/images/models/wr-v/color-a51c1c.jpg",
      },
      {
        name: { en: "Meteoroid Gray Metallic", id: "Meteoroid Gray Metallic" },
        hex: "#5a5d61",
        image: "/images/models/wr-v/color-5a5d61.jpg",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Featured models — shown prominently on the homepage
// ---------------------------------------------------------------------------

export const featuredModels = ["cr-v", "civic", "hr-v", "br-v"];

// ---------------------------------------------------------------------------
// Helper functions
// ---------------------------------------------------------------------------

export function getModelBySlug(slug: string): Model | undefined {
  return models.find((m) => m.slug === slug);
}

export function getModelsByCategory(
  category: Model["category"] | "all",
): Model[] {
  if (category === "all") return models;
  return models.filter((m) => m.category === category);
}

export function getAllSlugs(): string[] {
  return models.map((m) => m.slug);
}
