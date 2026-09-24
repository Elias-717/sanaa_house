import coffee from './assets/coffee.webp'
import honey from './assets/honey.webp'
import perfume from './assets/perfume.webp'
import bukhoor from './assets/bukhoor.webp'
import jar from './assets/jar.webp'
import scarf from './assets/scarf.webp'

export const chronicle = [
  {
    year: '1987',
    yearAr: '١٩٨٧',
    count: '١ · ٨٠٨',
    title: 'Founded in the Old City of Sana\'a',
    titleAr: 'التأسيس في المدينة القديمة بصنعاء',
    body: "Tucked beneath the shadow of thousand-year-old mud-brick towers near Bab al-Yaman, master craftsman Zayd Al-Sanaani established our modest workshop. Armed with salvaged mountain timber, gypsum plaster, and heirloom chisels, he vowed to protect local crafts from cheap imports.",
    caption: 'Story of 40% Old Sana\'a — At the base of the tower dwellings',
    captionAr: 'عند قاعدة أبراج المدينة العتيقة',
    image: '/images/story_pic.webp',
    side: 'right',
  },
  {
    year: '1998',
    yearAr: '١٩٩٨',
    count: '١ · ١١٩',
    title: 'First Patrons Across the Seas',
    titleAr: 'أوائل الرعاة عبر البحار',
    body: "Word crossed the Red Sea. Travellers, diplomats, and diaspora families sought authentic vessels that held genuine highland provenance. We dispatched our first commissioned batches of wild-harvested Socotra resins, ancient Haraz coffees, and chased copper teawares abroad.",
    caption: 'International Guild Dispatch — Direct-guided transit',
    captionAr: 'إرسالية الحرفيين الدولية',
    image: '/images/1998.webp',
    side: 'left',
  },
  {
    year: '2011',
    yearAr: '٢٠١١',
    count: '١ · ١٤٤',
    title: 'Solidifying Regional Guild Pacts',
    titleAr: 'توطيد اتفاقيات الحرفيين الإقليميين',
    body: "During seasons of national isolation and upheaval, our masters celebrated artisan community pacts: directly funding nomadic beekeepers in the canyon terraces of Wadi Do'an, traditional sheep-wool weavers in Kawkaban, and indigenous clay-pit kilns in Sa'ada, guaranteeing fair remuneration regardless of regional turmoil.",
    caption: 'View All Independent Guild Kilns Currently Funded',
    captionAr: 'أفران الحرفيين المستقلين الممولة حالياً',
    image: '/images/2011.webp',
    side: 'right',
  },
  {
    year: '2020',
    yearAr: '٢٠٢٠',
    count: '١ · ٢٢٢',
    title: 'Cultural Storytelling in Shifting Times',
    titleAr: 'رواية الحكاية الثقافية في أوقات متغيرة',
    body: "Rather than turning our heritage into automated WooCommerce carts, we chose intimate visual documentation. We brought cameras into dark copper basements and high tower plaster lofts, allowing millions of diaspora youth how their grandmothers' incense burners and bridal chests were born.",
    caption: 'Atelier Living Archives — 40+ documented master assessments',
    captionAr: 'أرشيف الأتيليه الحي — أكثر من ٤٠ تقييماً موثقاً',
    image: '/images/2020.webp',
    side: 'left',
  },
  {
    year: '2026',
    yearAr: '٢٠٢٦',
    count: '١ · ٢٢٧',
    badge: 'PRESENT DAY',
    title: 'A Home for Our Heritage',
    titleAr: 'بيت لتراثنا',
    body: "This digital archive represents our permanent bridge: a deliberate, calm catalogue designed to celebrate the artisans, catalog their provenance, and invite these elements directly into your physical ateliers in Sana'a and Aden for personal commissions.",
    caption: 'Sanaani Physical Registry — Ateliers in Sana\'a & Crater, Aden',
    captionAr: 'السجل المادي الصنعاني — أتيليهات في صنعاء وكريتر',
    image: '/images/2026.webp',
    side: 'right',
  },
]

export const products = [
  { category: 'Coffee', name: 'Haraz Mountain Coffee', description: 'Cultivated on cloud-swept highland stone terraces, served in custom Khanjar brassware.', image: coffee, price: '12,000 YER' },
  { category: 'Honey', name: "Wadi Do'an Sidr Honey", description: 'Single-origin wild sidr nectar poured from traditional horn glass bottles.', image: honey, price: '45,000 YER' },
  { category: 'Perfume', name: 'Old City Attar', description: 'Slow-matured botanical oils in hand-etched, brass-crested flacons.', image: perfume, price: '30,000 YER' },
  { category: 'Incense', name: 'Frankincense Bakhoor', description: 'Aromatic resin prepared for authentic tower-house clay burners.', image: bukhoor, price: '18,000 YER' },
  { category: 'Pottery', name: 'Highland Water Jar', description: 'Porous red-clay vessels burnished by hand with ancestral mineral pigments.', image: jar, price: '22,000 YER' },
  { category: 'Textiles', name: 'Highland Woven Shawl', description: 'Geometric loomed highland wool woven on traditional foot looms.', image: scarf, price: '35,000 YER' },
]

export const translations = {
  en: {
    direction: 'ltr', language: 'العربية', navigation: ['Collections', 'Stores', 'Our Story', 'Craftsmanship', 'Contact'],
    heroTitle: 'Heritage, Crafted to Last.', heroCopy: "Six signature artisanal creations nurtured since 1987 in the Old City of Sana'a. Crafted by high-plateau artisans, sold exclusively in our physical boutiques.",
    explore: 'Explore the Collection', boutiques: 'Our Boutiques', history: 'Historical Provenance', storyTitle: 'A Story from the Old City',
    story: "Sana'a House started as a single shop tucked into the clay and burnt-brick alleys of Old Sana'a in 1987, committed to preserving genuine highland Yemeni crafts from Wadi Do'an to the Haraz terraces. For four decades, our masters have shaped earthen ware, forged hammered copper, and distilled indigenous wild botanicals.", read: 'Read our story', collectionTitle: 'The Signature Six', collectionCopy: 'Archival specimens handcrafted across highland guild workshops. Displayed for in-store acquisition.',
    qamariyaTitle: 'Craft is patience preserved in stone and soil.', qamariyaCopy: "In Old Sana'a, architecture and domestic life are indivisible. The burnt sienna brick, the bright gypsum tracery, and the amber glass of the Qamariya frame every hour of slow artisanal dedication.", favorites: 'A Few of Our Favorites', physical: 'Physical In-Store Catalog', inAtelier: 'In Atelier', seasonal: 'Seasonal', viewArchive: 'View Archive',
    footerCopy: 'Purveyors of authentic Yemeni material culture since 1987. Burnt clay, carved soapstone, and hammered brass crafted in the architectural cradle of South Arabia.', notice: 'All pieces are exclusively catalogued for in-person acquisition and direct artisanal consignment. We do not operate automated e-commerce.', inquiry: 'Contact & Wholesale', teaser: 'Supplying heritage hospitality, diplomatic gifting, and curated retail spaces.',
  },
  ar: {
    direction: 'rtl', language: 'English', navigation: ['المجموعات', 'المتاجر', 'قصتنا', 'الحرفية', 'تواصل'],
    heroTitle: 'تراث يُصنع ليبقى.', heroCopy: 'ستة منتجات مميزة صيغت بحرفية يمنية منذ عام ١٩٨٧. من صنعاء القديمة إلى متاجرنا.', explore: 'استكشف المجموعة', boutiques: 'متاجرنا', history: 'أصل الحكاية', storyTitle: 'حكاية من المدينة القديمة',
    story: 'بدأت صنعاء هاوس عام ١٩٨٧ كمتجر واحد في أزقة المدينة القديمة بصنعاء، ملتزمين بالحفاظ على الحرف اليمنية الأصيلة من وادي دوعن إلى مدرجات حراز. منذ أربعة عقود، يصوغ صناعنا الفخار ويطرقون النحاس ويقطرون النباتات المحلية.', read: 'اقرأ قصتنا', collectionTitle: 'المقتنيات الست', collectionCopy: 'قطع حرفية من ورش المرتفعات اليمنية، معروضة في متاجرنا.',
    qamariyaTitle: 'الحرفة صبر يُحفظ في الحجر والتراب.', qamariyaCopy: 'في صنعاء القديمة، لا تنفصل العمارة عن الحياة اليومية. الطوب الأحمر، وزخارف الجص، وزجاج القمرية العنبرية تؤطر ساعات التفاني الحرفي.', favorites: 'بعض من مفضلاتنا', physical: 'متاح في المتاجر', inAtelier: 'متوفر', seasonal: 'موسمي', viewArchive: 'شاهد القطعة',
    footerCopy: 'نقدم ثقافة اليمن المادية الأصيلة منذ عام ١٩٨٧. فخار، وحجر صابوني، ونحاس مطروق من قلب جنوب الجزيرة العربية.', notice: 'جميع القطع معروضة للشراء الشخصي في المتاجر فقط. لا نبيع عبر الإنترنت.', inquiry: 'تواصل وطلبات الجملة', teaser: 'نقدم الضيافة التراثية والهدايا الدبلوماسية ومساحات البيع المختارة.',
  },
}
