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

export type KeyStat = {
  value: string;
  unit: string;
  label: Record<Locale, string>;
};

export type DesignStory = {
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  image: string;
};

export type FAQ = {
  question: Record<Locale, string>;
  answer: Record<Locale, string>;
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
  keyStats: KeyStat[];
  description: Record<Locale, string>;
  designStories: DesignStory[];
  faq: FAQ[];
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
    keyStats: [
      { value: "90", unit: "PS", label: { en: "Max Power", id: "Tenaga Maks" } },
      { value: "18.7", unit: "km/L", label: { en: "Fuel Economy", id: "Efisiensi BBM" } },
      { value: "5", unit: "Seats", label: { en: "Seating Capacity", id: "Kapasitas Kursi" } },
    ],
    description: {
      en: "The Honda Brio is the perfect city companion that proves big fun comes in a compact package. With its efficient i-VTEC engine and surprisingly spacious cabin, the Brio delivers an unmatched blend of economy and enjoyment for everyday urban driving.",
      id: "Honda Brio adalah teman kota sempurna yang membuktikan kesenangan besar hadir dalam paket kompak. Dengan mesin i-VTEC yang efisien dan kabin yang luas secara mengejutkan, Brio memberikan perpaduan tak tertandingi antara ekonomi dan kenikmatan untuk berkendara di perkotaan sehari-hari.",
    },
    designStories: [
      {
        title: { en: "Compact Confidence", id: "Kepercayaan Diri Kompak" },
        description: {
          en: "The Brio's exterior blends dynamic lines with a bold front grille that commands attention even in its compact form. Every curve is sculpted to reduce drag while projecting a sense of energy and youthfulness on the road.",
          id: "Eksterior Brio memadukan garis-garis dinamis dengan grille depan berani yang menarik perhatian bahkan dalam bentuk kompaknya. Setiap lekukan dipahat untuk mengurangi hambatan sekaligus memancarkan kesan energi dan jiwa muda di jalan.",
        },
        image: "/images/models/brio/design-1.jpg",
      },
      {
        title: { en: "Smart Interior Space", id: "Ruang Interior Cerdas" },
        description: {
          en: "Step inside and discover a cleverly organized cabin that maximizes every centimeter. The driver-focused cockpit features intuitive controls, while the rear seats offer generous legroom that defies the Brio's compact exterior dimensions.",
          id: "Masuk dan temukan kabin yang tertata cerdas yang memaksimalkan setiap sentimeter. Kokpit yang berfokus pada pengemudi menampilkan kontrol intuitif, sementara kursi belakang menawarkan ruang kaki yang luas yang menentang dimensi eksterior kompak Brio.",
        },
        image: "/images/models/brio/design-2.jpg",
      },
    ],
    faq: [
      {
        question: { en: "What is the fuel consumption of the Honda Brio?", id: "Berapa konsumsi bahan bakar Honda Brio?" },
        answer: { en: "The Honda Brio achieves an impressive 18.7 km/L thanks to its efficient 1.2L i-VTEC engine paired with CVT Earth Dreams Technology, making it one of the most fuel-efficient cars in its class.", id: "Honda Brio mencapai 18,7 km/L yang mengesankan berkat mesin 1.2L i-VTEC yang efisien dipadu dengan CVT Earth Dreams Technology, menjadikannya salah satu mobil paling irit di kelasnya." },
      },
      {
        question: { en: "How many airbags does the Honda Brio have?", id: "Berapa jumlah airbag Honda Brio?" },
        answer: { en: "The Honda Brio comes equipped with dual SRS airbags (driver and front passenger) along with ABS with EBD and a G-CON body structure for comprehensive occupant protection.", id: "Honda Brio dilengkapi dengan dual SRS airbag (pengemudi dan penumpang depan) beserta ABS dengan EBD dan struktur bodi G-CON untuk perlindungan penumpang yang komprehensif." },
      },
      {
        question: { en: "What makes the Honda Brio a great value for money?", id: "Apa yang membuat Honda Brio bernilai tinggi untuk uang Anda?" },
        answer: { en: "Starting from Rp 167 million, the Brio offers the best combination of Honda reliability, low running costs with 18.7 km/L fuel economy, a spacious 5-seat cabin, and advanced safety features — making it the smartest entry into the Honda family.", id: "Mulai dari Rp 167 juta, Brio menawarkan kombinasi terbaik dari keandalan Honda, biaya operasional rendah dengan efisiensi BBM 18,7 km/L, kabin 5 kursi yang luas, dan fitur keselamatan canggih — menjadikannya pilihan paling cerdas untuk masuk ke keluarga Honda." },
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
    keyStats: [
      { value: "121", unit: "PS", label: { en: "Max Power", id: "Tenaga Maks" } },
      { value: "145", unit: "Nm", label: { en: "Max Torque", id: "Torsi Maks" } },
      { value: "17.1", unit: "km/L", label: { en: "Fuel Economy", id: "Efisiensi BBM" } },
    ],
    description: {
      en: "The Honda Jazz is a spirited hatchback that refuses to compromise. With a powerful 1.5L engine, Honda SENSING safety suite, and the legendary Magic Seat versatility, the Jazz adapts to your lifestyle whether you are chasing thrills or hauling gear.",
      id: "Honda Jazz adalah hatchback bersemangat yang menolak berkompromi. Dengan mesin 1.5L yang bertenaga, paket keselamatan Honda SENSING, dan fleksibilitas legendaris Magic Seat, Jazz beradaptasi dengan gaya hidup Anda baik saat mencari sensasi maupun membawa barang.",
    },
    designStories: [
      {
        title: { en: "Sporty Elegance", id: "Keanggunan Sporty" },
        description: {
          en: "The Jazz showcases a dynamic exterior with a swept-back LED headlight design and a signature chrome grille that expresses sporty confidence. The aerodynamic profile and sculpted side panels create visual movement even at a standstill.",
          id: "Jazz menampilkan eksterior dinamis dengan desain lampu depan LED swept-back dan grille chrome khas yang mengekspresikan kepercayaan diri sporty. Profil aerodinamis dan panel samping yang dipahat menciptakan gerakan visual bahkan saat diam.",
        },
        image: "/images/models/jazz/design-1.jpg",
      },
      {
        title: { en: "Versatile Living Space", id: "Ruang Hidup Serbaguna" },
        description: {
          en: "Inside the Jazz, innovation meets practicality with the Magic Seat system offering four distinct modes. The cabin features premium soft-touch materials, an intuitive dashboard layout, and generous cargo space that transforms to fit your needs.",
          id: "Di dalam Jazz, inovasi bertemu kepraktisan dengan sistem Magic Seat yang menawarkan empat mode berbeda. Kabin menampilkan material soft-touch premium, tata letak dasbor intuitif, dan ruang kargo besar yang bertransformasi sesuai kebutuhan Anda.",
        },
        image: "/images/models/jazz/design-2.jpg",
      },
    ],
    faq: [
      {
        question: { en: "What is the fuel consumption of the Honda Jazz?", id: "Berapa konsumsi bahan bakar Honda Jazz?" },
        answer: { en: "The Honda Jazz delivers 17.1 km/L fuel efficiency with its 1.5L DOHC i-VTEC engine and CVT Earth Dreams Technology, providing an excellent balance between spirited performance and everyday economy.", id: "Honda Jazz memberikan efisiensi BBM 17,1 km/L dengan mesin 1.5L DOHC i-VTEC dan CVT Earth Dreams Technology, memberikan keseimbangan luar biasa antara performa bersemangat dan ekonomi sehari-hari." },
      },
      {
        question: { en: "What safety features does the Honda Jazz include?", id: "Fitur keselamatan apa saja yang dimiliki Honda Jazz?" },
        answer: { en: "The Jazz comes equipped with 4 airbags and the Honda SENSING suite, which includes collision mitigation braking, lane keeping assist, adaptive cruise control, and road departure mitigation for comprehensive protection.", id: "Jazz dilengkapi dengan 4 airbag dan paket Honda SENSING, yang mencakup collision mitigation braking, lane keeping assist, adaptive cruise control, dan road departure mitigation untuk perlindungan komprehensif." },
      },
      {
        question: { en: "What makes the Honda Jazz stand out from competitors?", id: "Apa yang membuat Honda Jazz unggul dari kompetitor?" },
        answer: { en: "The Jazz stands out with its class-leading Magic Seat system that offers four flexible modes, combined with 121 PS of power, Honda SENSING safety technology, and a spacious cabin — all starting from Rp 272 million, delivering unmatched versatility in the hatchback segment.", id: "Jazz unggul dengan sistem Magic Seat terdepan di kelasnya yang menawarkan empat mode fleksibel, dikombinasikan dengan tenaga 121 PS, teknologi keselamatan Honda SENSING, dan kabin luas — semua mulai dari Rp 272 juta, memberikan keserbagunaan tak tertandingi di segmen hatchback." },
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
    keyStats: [
      { value: "121", unit: "PS", label: { en: "Max Power", id: "Tenaga Maks" } },
      { value: "18.5", unit: "km/L", label: { en: "Fuel Economy", id: "Efisiensi BBM" } },
      { value: "6", unit: "Airbags", label: { en: "Airbags", id: "Airbag" } },
    ],
    description: {
      en: "The Honda City is a refined sedan that empowers your ambitions with its perfect balance of elegance and efficiency. Equipped with Honda SENSING, six airbags, and a premium cabin, the City elevates the daily commute into a first-class experience.",
      id: "Honda City adalah sedan halus yang mendukung ambisi Anda dengan keseimbangan sempurna antara keanggunan dan efisiensi. Dilengkapi Honda SENSING, enam airbag, dan kabin premium, City mengangkat perjalanan harian menjadi pengalaman kelas satu.",
    },
    designStories: [
      {
        title: { en: "Sleek Sophistication", id: "Keanggunan Elegan" },
        description: {
          en: "The City's exterior embodies modern sophistication with its flowing fastback silhouette and striking full-LED headlamps. A bold chrome front grille and clean character lines create an unmistakable presence that commands respect on any road.",
          id: "Eksterior City mewujudkan kecanggihan modern dengan siluet fastback yang mengalir dan lampu depan full-LED yang mencolok. Grille depan chrome yang berani dan garis karakter bersih menciptakan kehadiran tak terbantahkan yang memerintahkan rasa hormat di setiap jalan.",
        },
        image: "/images/models/city/design-1.jpg",
      },
      {
        title: { en: "Refined Comfort Zone", id: "Zona Kenyamanan Premium" },
        description: {
          en: "The City's interior is a sanctuary of refinement featuring an 8-inch touchscreen with wireless Apple CarPlay, ambient LED lighting, and ergonomic seats that cradle you on long journeys. Every surface is crafted with premium materials that reward the senses.",
          id: "Interior City adalah tempat perlindungan penuh kehalusan dengan layar sentuh 8 inci dengan wireless Apple CarPlay, pencahayaan LED ambient, dan kursi ergonomis yang memeluk Anda dalam perjalanan panjang. Setiap permukaan dibuat dengan material premium yang memanjakan indra.",
        },
        image: "/images/models/city/design-2.jpg",
      },
    ],
    faq: [
      {
        question: { en: "What is the fuel consumption of the Honda City?", id: "Berapa konsumsi bahan bakar Honda City?" },
        answer: { en: "The Honda City achieves an excellent 18.5 km/L with its refined 1.5L DOHC i-VTEC engine and advanced CVT, making it one of the most fuel-efficient sedans in its segment while delivering responsive 121 PS performance.", id: "Honda City mencapai 18,5 km/L yang luar biasa dengan mesin 1.5L DOHC i-VTEC yang halus dan CVT canggih, menjadikannya salah satu sedan paling irit di segmennya sambil memberikan performa responsif 121 PS." },
      },
      {
        question: { en: "How many airbags does the Honda City have?", id: "Berapa jumlah airbag Honda City?" },
        answer: { en: "The Honda City is equipped with 6 airbags including dual front, side, and curtain airbags, complemented by the full Honda SENSING safety suite with Vehicle Stability Assist and Hill Start Assist for maximum occupant protection.", id: "Honda City dilengkapi dengan 6 airbag termasuk dual front, side, dan curtain airbag, dilengkapi paket keselamatan Honda SENSING lengkap dengan Vehicle Stability Assist dan Hill Start Assist untuk perlindungan penumpang maksimal." },
      },
      {
        question: { en: "What technology features does the Honda City offer?", id: "Fitur teknologi apa yang ditawarkan Honda City?" },
        answer: { en: "Starting from Rp 344 million, the City offers an 8-inch touchscreen with wireless Apple CarPlay and Android Auto, ambient LED lighting, a multi-angle rear camera, and Honda SENSING driver-assistance technology — delivering premium sedan features at an accessible price.", id: "Mulai dari Rp 344 juta, City menawarkan layar sentuh 8 inci dengan wireless Apple CarPlay dan Android Auto, pencahayaan LED ambient, kamera belakang multi-sudut, dan teknologi bantuan pengemudi Honda SENSING — memberikan fitur sedan premium dengan harga terjangkau." },
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
    keyStats: [
      { value: "178", unit: "PS", label: { en: "Max Power", id: "Tenaga Maks" } },
      { value: "240", unit: "Nm", label: { en: "Max Torque", id: "Torsi Maks" } },
      { value: "6", unit: "Airbags", label: { en: "Airbags", id: "Airbag" } },
    ],
    description: {
      en: "The Honda Civic is a turbocharged icon that goes beyond expectations with exhilarating VTEC Turbo power and a driver-focused cockpit. With Honda SENSING Elite, Bose premium audio, and a design that turns heads at every corner, the Civic redefines what a sedan can be.",
      id: "Honda Civic adalah ikon bertenaga turbo yang melampaui ekspektasi dengan tenaga VTEC Turbo yang menggembirakan dan kokpit yang berfokus pada pengemudi. Dengan Honda SENSING Elite, audio premium Bose, dan desain yang menarik perhatian di setiap sudut, Civic mendefinisikan ulang apa yang bisa dicapai sebuah sedan.",
    },
    designStories: [
      {
        title: { en: "Athletic Precision", id: "Presisi Atletis" },
        description: {
          en: "The Civic's exterior is a masterclass in athletic design with its low-slung hood, sharp LED headlamps, and a sculpted body that channels airflow for maximum stability. The aggressive stance and integrated rear spoiler signal pure driving intention.",
          id: "Eksterior Civic adalah mahakarya desain atletis dengan kap mesin rendah, lampu depan LED tajam, dan bodi yang dipahat untuk mengarahkan aliran udara demi stabilitas maksimal. Sikap agresif dan spoiler belakang terintegrasi menandakan niat berkendara murni.",
        },
        image: "/images/models/civic/design-1.jpg",
      },
      {
        title: { en: "Driver-Centric Cockpit", id: "Kokpit Sentris Pengemudi" },
        description: {
          en: "Inside the Civic, every element is oriented toward the driver. A 9-inch HD touchscreen, Bose 12-speaker audio system, and metal-accented honeycomb mesh trim create a cockpit that inspires confidence and rewards every journey with premium quality.",
          id: "Di dalam Civic, setiap elemen diorientasikan pada pengemudi. Layar sentuh HD 9 inci, sistem audio Bose 12 speaker, dan trim mesh honeycomb beraksen metal menciptakan kokpit yang menginspirasi kepercayaan diri dan menghargai setiap perjalanan dengan kualitas premium.",
        },
        image: "/images/models/civic/design-2.jpg",
      },
    ],
    faq: [
      {
        question: { en: "What is the fuel consumption of the Honda Civic?", id: "Berapa konsumsi bahan bakar Honda Civic?" },
        answer: { en: "The Honda Civic achieves 15.8 km/L with its 1.5L VTEC Turbo engine, an impressive figure given its 178 PS output. The CVT with Sport Mode optimizes fuel delivery to balance spirited performance with everyday efficiency.", id: "Honda Civic mencapai 15,8 km/L dengan mesin 1.5L VTEC Turbo, angka yang mengesankan mengingat output 178 PS-nya. CVT dengan Sport Mode mengoptimalkan pengiriman bahan bakar untuk menyeimbangkan performa bersemangat dengan efisiensi sehari-hari." },
      },
      {
        question: { en: "What safety systems does the Honda Civic feature?", id: "Sistem keselamatan apa yang dimiliki Honda Civic?" },
        answer: { en: "The Civic features 6 airbags and the advanced Honda SENSING Elite suite, including adaptive cruise control, lane-keeping assist, blind-spot monitoring, and rear cross-traffic alert — providing comprehensive protection for driver and passengers.", id: "Civic dilengkapi 6 airbag dan paket Honda SENSING Elite canggih, termasuk adaptive cruise control, lane-keeping assist, pemantauan blind-spot, dan peringatan lalu lintas belakang — memberikan perlindungan komprehensif untuk pengemudi dan penumpang." },
      },
      {
        question: { en: "What justifies the Honda Civic's premium positioning?", id: "Apa yang menjustifikasi posisi premium Honda Civic?" },
        answer: { en: "Starting from Rp 567 million, the Civic delivers a turbocharged 178 PS VTEC engine, Honda SENSING Elite, a Bose 12-speaker premium audio system, 9-inch HD touchscreen with wireless connectivity, and a head-turning athletic design that rivals European sport sedans.", id: "Mulai dari Rp 567 juta, Civic menghadirkan mesin turbo VTEC 178 PS, Honda SENSING Elite, sistem audio premium Bose 12 speaker, layar sentuh HD 9 inci dengan konektivitas nirkabel, dan desain atletis yang menyaingi sedan sport Eropa." },
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
    keyStats: [
      { value: "190", unit: "PS", label: { en: "Max Power", id: "Tenaga Maks" } },
      { value: "260", unit: "Nm", label: { en: "Max Torque", id: "Torsi Maks" } },
      { value: "8", unit: "Airbags", label: { en: "Airbags", id: "Airbag" } },
    ],
    description: {
      en: "The Honda Accord is the pinnacle of executive sophistication, combining potent turbocharged performance with a luxuriously appointed cabin. With eight airbags, a head-up display, and a panoramic moonroof, the Accord transforms every drive into a first-class affair.",
      id: "Honda Accord adalah puncak kecanggihan eksekutif, menggabungkan performa turbo yang bertenaga dengan kabin yang dilengkapi secara mewah. Dengan delapan airbag, head-up display, dan panoramic moonroof, Accord mengubah setiap perjalanan menjadi pengalaman kelas satu.",
    },
    designStories: [
      {
        title: { en: "Commanding Presence", id: "Kehadiran yang Memerintah" },
        description: {
          en: "The Accord's exterior exudes authority with its elongated proportions, full-LED signature lighting, and a wide chrome grille that spans the front fascia. The fastback roofline flows seamlessly into the integrated trunk spoiler, creating an unmistakable silhouette of power and prestige.",
          id: "Eksterior Accord memancarkan otoritas dengan proporsi memanjang, pencahayaan signature full-LED, dan grille chrome lebar yang membentang di fascia depan. Garis atap fastback mengalir mulus ke spoiler bagasi terintegrasi, menciptakan siluet kekuatan dan prestise yang tak terbantahkan.",
        },
        image: "/images/models/accord/design-1.jpg",
      },
      {
        title: { en: "Executive Sanctuary", id: "Tempat Perlindungan Eksekutif" },
        description: {
          en: "The Accord's interior is a haven of luxury with leather-trimmed seats, dual-zone climate control, and a panoramic moonroof that floods the cabin with natural light. The head-up display and 12.3-inch digital instrument cluster keep critical information at eye level.",
          id: "Interior Accord adalah surga kemewahan dengan jok berbalut kulit, dual-zone climate control, dan panoramic moonroof yang membanjiri kabin dengan cahaya alami. Head-up display dan kluster instrumen digital 12,3 inci menjaga informasi penting sejajar mata.",
        },
        image: "/images/models/accord/design-2.jpg",
      },
    ],
    faq: [
      {
        question: { en: "What is the fuel consumption of the Honda Accord?", id: "Berapa konsumsi bahan bakar Honda Accord?" },
        answer: { en: "The Honda Accord achieves 14.5 km/L with its 1.5L VTEC Turbo engine producing 190 PS and 260 Nm. The CVT with Sport Mode and paddle shifters ensures efficient power delivery whether cruising on the highway or navigating city traffic.", id: "Honda Accord mencapai 14,5 km/L dengan mesin 1.5L VTEC Turbo yang menghasilkan 190 PS dan 260 Nm. CVT dengan Sport Mode dan paddle shifter memastikan pengiriman tenaga yang efisien baik saat berkendara di jalan tol maupun menavigasi lalu lintas kota." },
      },
      {
        question: { en: "How many airbags does the Honda Accord have?", id: "Berapa jumlah airbag Honda Accord?" },
        answer: { en: "The Accord leads its class with 8 airbags — dual front, front side, and full-length curtain airbags — complemented by the complete Honda SENSING suite including traffic-jam assist and front-departure warning for maximum safety.", id: "Accord memimpin kelasnya dengan 8 airbag — dual front, front side, dan curtain airbag sepanjang kabin — dilengkapi paket Honda SENSING lengkap termasuk traffic-jam assist dan front-departure warning untuk keselamatan maksimal." },
      },
      {
        question: { en: "What luxury features does the Honda Accord offer?", id: "Fitur mewah apa yang ditawarkan Honda Accord?" },
        answer: { en: "Starting from Rp 742 million, the Accord delivers leather-trimmed seats, dual-zone climate control, a head-up display, panoramic moonroof, wireless Apple CarPlay, and a premium audio system — rivaling luxury brands at a fraction of the price.", id: "Mulai dari Rp 742 juta, Accord menghadirkan jok berbalut kulit, dual-zone climate control, head-up display, panoramic moonroof, wireless Apple CarPlay, dan sistem audio premium — menyaingi merek mewah dengan sebagian kecil dari harganya." },
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
    keyStats: [
      { value: "121", unit: "PS", label: { en: "Max Power", id: "Tenaga Maks" } },
      { value: "145", unit: "Nm", label: { en: "Max Torque", id: "Torsi Maks" } },
      { value: "6", unit: "Airbags", label: { en: "Airbags", id: "Airbag" } },
    ],
    description: {
      en: "The Honda HR-V is a bold crossover that elevates your world with its coupe-inspired silhouette and agile urban performance. Combining Honda SENSING technology with six airbags and a versatile cabin, the HR-V is designed for those who demand style and substance in equal measure.",
      id: "Honda HR-V adalah crossover berani yang meningkatkan dunia Anda dengan siluet terinspirasi coupe dan performa urban yang lincah. Menggabungkan teknologi Honda SENSING dengan enam airbag dan kabin serbaguna, HR-V dirancang untuk mereka yang menuntut gaya dan substansi secara setara.",
    },
    designStories: [
      {
        title: { en: "Coupe-Inspired Lines", id: "Garis Terinspirasi Coupe" },
        description: {
          en: "The HR-V's exterior breaks convention with its sleek coupe-inspired roofline that flows into a muscular rear. Full LED lighting, 17-inch alloy wheels, and a bold front fascia create a striking crossover presence that stands apart from the crowd.",
          id: "Eksterior HR-V memecah konvensi dengan garis atap terinspirasi coupe yang mengalir ke bagian belakang berotot. Pencahayaan full LED, velg alloy 17 inci, dan fascia depan berani menciptakan kehadiran crossover mencolok yang berdiri terpisah dari keramaian.",
        },
        image: "/images/models/hr-v/design-1.jpg",
      },
      {
        title: { en: "Intuitive Cabin Design", id: "Desain Kabin Intuitif" },
        description: {
          en: "The HR-V's interior is thoughtfully designed around the driver with a clean horizontal dashboard, premium soft-touch surfaces, and a panoramic view that connects you with the road. Generous rear legroom and a flat cargo floor add everyday practicality.",
          id: "Interior HR-V dirancang dengan cermat di sekitar pengemudi dengan dasbor horizontal yang bersih, permukaan soft-touch premium, dan pandangan panoramik yang menghubungkan Anda dengan jalan. Ruang kaki belakang yang luas dan lantai kargo datar menambah kepraktisan sehari-hari.",
        },
        image: "/images/models/hr-v/design-2.jpg",
      },
    ],
    faq: [
      {
        question: { en: "What is the fuel consumption of the Honda HR-V?", id: "Berapa konsumsi bahan bakar Honda HR-V?" },
        answer: { en: "The Honda HR-V delivers 16.2 km/L with its 1.5L DOHC i-VTEC engine and CVT Earth Dreams Technology, offering strong efficiency for a crossover SUV while maintaining responsive 121 PS performance for both city and highway driving.", id: "Honda HR-V memberikan 16,2 km/L dengan mesin 1.5L DOHC i-VTEC dan CVT Earth Dreams Technology, menawarkan efisiensi kuat untuk crossover SUV sambil mempertahankan performa responsif 121 PS untuk berkendara di kota dan jalan tol." },
      },
      {
        question: { en: "What safety features does the Honda HR-V include?", id: "Fitur keselamatan apa yang dimiliki Honda HR-V?" },
        answer: { en: "The HR-V is equipped with 6 airbags, Honda SENSING technology, Vehicle Stability Assist, and a Multi-View Camera System — providing comprehensive driver-assistance and collision avoidance for confident driving in any situation.", id: "HR-V dilengkapi dengan 6 airbag, teknologi Honda SENSING, Vehicle Stability Assist, dan Multi-View Camera System — memberikan bantuan pengemudi komprehensif dan penghindaran tabrakan untuk berkendara percaya diri dalam situasi apa pun." },
      },
      {
        question: { en: "How does the HR-V compare to other compact SUVs?", id: "Bagaimana HR-V dibandingkan dengan SUV kompak lainnya?" },
        answer: { en: "Starting from Rp 383 million, the HR-V offers a unique coupe-inspired design, Honda SENSING safety suite, 6 airbags, and a spacious cabin — distinguishing itself with its premium styling and comprehensive safety features that few competitors in the segment can match.", id: "Mulai dari Rp 383 juta, HR-V menawarkan desain unik terinspirasi coupe, paket keselamatan Honda SENSING, 6 airbag, dan kabin luas — membedakan dirinya dengan gaya premium dan fitur keselamatan komprehensif yang sedikit kompetitor di segmen ini bisa menyaingi." },
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
    keyStats: [
      { value: "121", unit: "PS", label: { en: "Max Power", id: "Tenaga Maks" } },
      { value: "7", unit: "Seats", label: { en: "Seating Capacity", id: "Kapasitas Kursi" } },
      { value: "16.8", unit: "km/L", label: { en: "Fuel Economy", id: "Efisiensi BBM" } },
    ],
    description: {
      en: "The Honda BR-V is the ultimate family adventure vehicle, offering seven seats, capable performance, and Honda SENSING protection in one versatile package. With three rows of flexible seating and strong fuel efficiency, the BR-V is built for families who never want to leave anyone behind.",
      id: "Honda BR-V adalah kendaraan petualangan keluarga terbaik, menawarkan tujuh kursi, performa andal, dan perlindungan Honda SENSING dalam satu paket serbaguna. Dengan tiga baris tempat duduk fleksibel dan efisiensi bahan bakar yang kuat, BR-V dibangun untuk keluarga yang tidak pernah ingin meninggalkan siapa pun.",
    },
    designStories: [
      {
        title: { en: "Bold Family Presence", id: "Kehadiran Keluarga yang Berani" },
        description: {
          en: "The BR-V commands the road with its robust SUV proportions, prominent chrome grille, and full LED headlamps that project confidence. The elevated ride height and muscular wheel arches give it a ready-for-anything stance that families can depend on.",
          id: "BR-V menguasai jalan dengan proporsi SUV yang kokoh, grille chrome menonjol, dan lampu depan full LED yang memancarkan kepercayaan diri. Ketinggian berkendara yang tinggi dan lengkungan roda berotot memberikan sikap siap-untuk-apa-pun yang bisa diandalkan keluarga.",
        },
        image: "/images/models/br-v/design-1.jpg",
      },
      {
        title: { en: "Three-Row Versatility", id: "Keserbagunaan Tiga Baris" },
        description: {
          en: "Inside the BR-V, three rows of seating accommodate up to seven occupants in comfort. The flat-folding third row and walk-through cabin design make it easy to configure the space for passengers, cargo, or any combination your family adventure demands.",
          id: "Di dalam BR-V, tiga baris tempat duduk menampung hingga tujuh penumpang dengan nyaman. Baris ketiga yang dapat dilipat rata dan desain kabin walk-through memudahkan pengaturan ruang untuk penumpang, kargo, atau kombinasi apa pun yang dibutuhkan petualangan keluarga Anda.",
        },
        image: "/images/models/br-v/design-2.jpg",
      },
    ],
    faq: [
      {
        question: { en: "What is the fuel consumption of the Honda BR-V?", id: "Berapa konsumsi bahan bakar Honda BR-V?" },
        answer: { en: "The Honda BR-V achieves 16.8 km/L with its 1.5L DOHC i-VTEC engine and CVT Earth Dreams Technology — an impressive figure for a 7-seat SUV, keeping running costs low even for large families.", id: "Honda BR-V mencapai 16,8 km/L dengan mesin 1.5L DOHC i-VTEC dan CVT Earth Dreams Technology — angka yang mengesankan untuk SUV 7 kursi, menjaga biaya operasional tetap rendah bahkan untuk keluarga besar." },
      },
      {
        question: { en: "How many airbags does the Honda BR-V have?", id: "Berapa jumlah airbag Honda BR-V?" },
        answer: { en: "The BR-V is equipped with 6 airbags including dual front, side, and curtain airbags, along with ABS with EBD, Vehicle Stability Assist, and Honda SENSING for comprehensive family protection.", id: "BR-V dilengkapi dengan 6 airbag termasuk dual front, side, dan curtain airbag, beserta ABS dengan EBD, Vehicle Stability Assist, dan Honda SENSING untuk perlindungan keluarga yang komprehensif." },
      },
      {
        question: { en: "Why choose the BR-V over other 7-seat vehicles?", id: "Mengapa memilih BR-V dibanding kendaraan 7 kursi lainnya?" },
        answer: { en: "Starting from Rp 273 million, the BR-V is the most affordable 7-seat Honda SUV, combining 121 PS performance, 16.8 km/L fuel economy, Honda SENSING safety, and a flexible three-row cabin — delivering unbeatable family value in the Indonesian market.", id: "Mulai dari Rp 273 juta, BR-V adalah SUV Honda 7 kursi paling terjangkau, menggabungkan performa 121 PS, efisiensi BBM 16,8 km/L, keselamatan Honda SENSING, dan kabin tiga baris fleksibel — memberikan nilai keluarga tak terkalahkan di pasar Indonesia." },
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
    keyStats: [
      { value: "190", unit: "PS", label: { en: "Max Power", id: "Tenaga Maks" } },
      { value: "243", unit: "Nm", label: { en: "Max Torque", id: "Torsi Maks" } },
      { value: "7", unit: "Seats", label: { en: "Seating Capacity", id: "Kapasitas Kursi" } },
    ],
    description: {
      en: "The Honda CR-V is a turbocharged SUV built for every journey, from daily commutes to weekend expeditions. With 190 PS of power, seven seats, Honda SENSING 360, and available Real-Time AWD, the CR-V delivers commanding capability without compromise.",
      id: "Honda CR-V adalah SUV bertenaga turbo yang dibangun untuk setiap perjalanan, dari perjalanan harian hingga ekspedisi akhir pekan. Dengan tenaga 190 PS, tujuh kursi, Honda SENSING 360, dan Real-Time AWD tersedia, CR-V menghadirkan kemampuan menguasai tanpa kompromi.",
    },
    designStories: [
      {
        title: { en: "Rugged Refinement", id: "Kehalusan yang Tangguh" },
        description: {
          en: "The CR-V's exterior merges rugged SUV capability with refined design language. A bold front grille, full LED headlamps, and sculpted body panels convey strength, while the aerodynamic profile and 18-inch alloy wheels add a touch of sophistication to its adventurous spirit.",
          id: "Eksterior CR-V menggabungkan kemampuan SUV tangguh dengan bahasa desain yang halus. Grille depan berani, lampu depan full LED, dan panel bodi yang dipahat menyampaikan kekuatan, sementara profil aerodinamis dan velg alloy 18 inci menambahkan sentuhan kecanggihan pada semangat petualangannya.",
        },
        image: "/images/models/cr-v/design-1.jpg",
      },
      {
        title: { en: "Premium Adventure Cabin", id: "Kabin Petualangan Premium" },
        description: {
          en: "The CR-V's interior combines seven-seat versatility with premium comfort. Soft-touch materials, dual-zone climate control, and a hands-free power tailgate create a first-class experience, while the flexible seating configurations adapt from family carrier to cargo hauler in seconds.",
          id: "Interior CR-V menggabungkan keserbagunaan tujuh kursi dengan kenyamanan premium. Material soft-touch, dual-zone climate control, dan power tailgate hands-free menciptakan pengalaman kelas satu, sementara konfigurasi tempat duduk fleksibel beradaptasi dari pengangkut keluarga ke pemuat kargo dalam hitungan detik.",
        },
        image: "/images/models/cr-v/design-2.jpg",
      },
    ],
    faq: [
      {
        question: { en: "What is the fuel consumption of the Honda CR-V?", id: "Berapa konsumsi bahan bakar Honda CR-V?" },
        answer: { en: "The Honda CR-V achieves 14.0 km/L with its powerful 1.5L VTEC Turbo engine producing 190 PS and 243 Nm of torque. The CVT with Sport Mode ensures efficient power delivery for a 7-seat SUV of this capability.", id: "Honda CR-V mencapai 14,0 km/L dengan mesin 1.5L VTEC Turbo yang bertenaga menghasilkan 190 PS dan torsi 243 Nm. CVT dengan Sport Mode memastikan pengiriman tenaga yang efisien untuk SUV 7 kursi dengan kemampuan ini." },
      },
      {
        question: { en: "What safety features does the Honda CR-V offer?", id: "Fitur keselamatan apa yang ditawarkan Honda CR-V?" },
        answer: { en: "The CR-V features 6 airbags and Honda SENSING 360 technology, including blind-spot information, rear cross-traffic monitor, multi-angle rear camera, adaptive cruise control, and lane-keeping assist for comprehensive protection on every journey.", id: "CR-V dilengkapi 6 airbag dan teknologi Honda SENSING 360, termasuk informasi blind-spot, pemantau lalu lintas belakang, kamera belakang multi-sudut, adaptive cruise control, dan lane-keeping assist untuk perlindungan komprehensif di setiap perjalanan." },
      },
      {
        question: { en: "What makes the CR-V the right choice for families?", id: "Apa yang membuat CR-V pilihan tepat untuk keluarga?" },
        answer: { en: "Starting from Rp 567 million, the CR-V combines turbocharged 190 PS power, 7-seat flexibility, Honda SENSING 360, available Real-Time AWD, and a hands-free power tailgate — making it the most capable and versatile family SUV in Honda's lineup.", id: "Mulai dari Rp 567 juta, CR-V menggabungkan tenaga turbo 190 PS, fleksibilitas 7 kursi, Honda SENSING 360, Real-Time AWD tersedia, dan power tailgate hands-free — menjadikannya SUV keluarga paling andal dan serbaguna dalam lini Honda." },
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
    keyStats: [
      { value: "121", unit: "PS", label: { en: "Max Power", id: "Tenaga Maks" } },
      { value: "17.0", unit: "km/L", label: { en: "Fuel Economy", id: "Efisiensi BBM" } },
      { value: "4", unit: "Airbags", label: { en: "Airbags", id: "Airbag" } },
    ],
    description: {
      en: "The Honda WR-V is a rugged compact SUV that goes beyond the road with bold styling and impressive ground clearance. With 121 PS of proven i-VTEC power, excellent fuel efficiency, and a confident SUV stance, the WR-V is built for those who crave adventure without sacrificing daily practicality.",
      id: "Honda WR-V adalah SUV kompak tangguh yang melampaui jalanan dengan gaya berani dan ground clearance yang mengesankan. Dengan tenaga 121 PS i-VTEC yang terbukti, efisiensi bahan bakar luar biasa, dan sikap SUV percaya diri, WR-V dibangun untuk mereka yang mendambakan petualangan tanpa mengorbankan kepraktisan harian.",
    },
    designStories: [
      {
        title: { en: "Rugged Road Warrior", id: "Pejuang Jalanan Tangguh" },
        description: {
          en: "The WR-V's exterior projects rugged confidence with bold SUV proportions, 220 mm ground clearance, skid plates, and prominent roof rails. The aggressive front fascia and full LED headlamps ensure a commanding road presence that is ready for any terrain.",
          id: "Eksterior WR-V memancarkan kepercayaan diri tangguh dengan proporsi SUV berani, ground clearance 220 mm, skid plate, dan roof rail yang menonjol. Fascia depan agresif dan lampu depan full LED memastikan kehadiran jalanan yang menguasai dan siap untuk segala medan.",
        },
        image: "/images/models/wr-v/design-1.jpg",
      },
      {
        title: { en: "Practical Adventure Cabin", id: "Kabin Petualangan Praktis" },
        description: {
          en: "The WR-V's interior balances adventure readiness with daily comfort. A high seating position gives commanding visibility, while the well-organized dashboard and generous cargo space make every trip — from morning commutes to weekend getaways — effortless and enjoyable.",
          id: "Interior WR-V menyeimbangkan kesiapan petualangan dengan kenyamanan harian. Posisi duduk tinggi memberikan visibilitas menguasai, sementara dasbor yang tertata rapi dan ruang kargo yang luas membuat setiap perjalanan — dari perjalanan pagi hingga liburan akhir pekan — mudah dan menyenangkan.",
        },
        image: "/images/models/wr-v/design-2.jpg",
      },
    ],
    faq: [
      {
        question: { en: "What is the fuel consumption of the Honda WR-V?", id: "Berapa konsumsi bahan bakar Honda WR-V?" },
        answer: { en: "The Honda WR-V delivers an impressive 17.0 km/L with its proven 1.5L DOHC i-VTEC engine and CVT Earth Dreams Technology, making it one of the most fuel-efficient compact SUVs available in Indonesia.", id: "Honda WR-V memberikan 17,0 km/L yang mengesankan dengan mesin 1.5L DOHC i-VTEC yang terbukti dan CVT Earth Dreams Technology, menjadikannya salah satu SUV kompak paling irit yang tersedia di Indonesia." },
      },
      {
        question: { en: "How many airbags does the Honda WR-V have?", id: "Berapa jumlah airbag Honda WR-V?" },
        answer: { en: "The WR-V is equipped with 4 airbags (dual front and side), complemented by ABS with EBD, Vehicle Stability Assist, and Hill Start Assist for dependable safety in all driving conditions.", id: "WR-V dilengkapi dengan 4 airbag (dual front dan side), dilengkapi ABS dengan EBD, Vehicle Stability Assist, dan Hill Start Assist untuk keselamatan andal dalam semua kondisi berkendara." },
      },
      {
        question: { en: "What makes the WR-V different from other compact SUVs?", id: "Apa yang membedakan WR-V dari SUV kompak lainnya?" },
        answer: { en: "Starting from Rp 274 million, the WR-V stands out with its class-leading 220 mm ground clearance, rugged SUV styling with skid plates and roof rails, 121 PS i-VTEC performance, and 17.0 km/L fuel economy — offering genuine SUV capability at an entry-level price.", id: "Mulai dari Rp 274 juta, WR-V unggul dengan ground clearance terdepan di kelasnya 220 mm, gaya SUV tangguh dengan skid plate dan roof rail, performa i-VTEC 121 PS, dan efisiensi BBM 17,0 km/L — menawarkan kemampuan SUV asli dengan harga entry-level." },
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
