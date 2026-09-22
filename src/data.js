import coffee from './assets/coffee.webp'
import honey from './assets/honey.webp'
import perfume from './assets/perfume.webp'
import bukhoor from './assets/bukhoor.webp'
import jar from './assets/jar.webp'
import scarf from './assets/scarf.webp'

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
