import coffee  from '@/assets/coffee.webp'
import honey   from '@/assets/honey.webp'
import perfume from '@/assets/perfume.webp'
import bukhoor from '@/assets/bukhoor.webp'
import jar     from '@/assets/jar.webp'
import scarf   from '@/assets/scarf.webp'

export const products = [
  {
    slug: 'haraz-coffee',
    category: 'Coffee', categoryAr: 'قهوة',
    name: 'Haraz Mountain Coffee', nameAr: 'قهوة جبال حراز',
    origin: 'Haraz Mountains, Manakhah District', originAr: 'جبال حراز، منطقة مناخة',
    vessel: 'Handcast Khanjar Brass Dallah', vesselAr: 'دلة نحاسية خنجرية مصبوبة يدوياً',
    description: 'Cultivated on cloud-swept highland stone terraces, served in custom Khanjar brassware.',
    descriptionAr: 'محصودة من مدرجات حجرية مرتفعة تكتنفها الغيوم، تُقدَّم في أدوات نحاسية مخصصة.',
    story: "Haraz coffee grows between 1,500 and 2,800 metres above sea level on ancient stone terraces carved by hand over centuries. The beans are sun-dried on woven mats, hand-sorted by guild women, and roasted over frankincense embers for a singular Highland character — earthy, spiced, and incomparably clean.",
    storyAr: 'تنمو قهوة حراز على ارتفاع يتراوح بين 1500 و2800 متر فوق مستوى البحر على مدرجات حجرية قديمة. تُجفَّف الحبوب تحت الشمس وتُصنَّف يدوياً وتُحمَّص فوق جمر اللبان.',
    materials: 'Sun-dried Arabica beans · Hammered brass dallah · Woven palm basket',
    materialsAr: 'حبوب أرابيكا مجففة شمساً · دلة نحاسية مطروقة · سلة نخيل منسوجة',
    price: '7,000 YER', priceNum: 7000,
    image: coffee, featured: true,
    availability: { 'bab-al-yaman': 'in_stock', 'al-qaa': 'low_stock' },
  },
  {
    slug: 'sidr-honey',
    category: 'Honey', categoryAr: 'عسل',
    name: "Wadi Do'an Sidr Honey", nameAr: 'عسل سدر وادي دوعن',
    origin: "Wadi Do'an, Hadhramaut Governorate", originAr: 'وادي دوعن، محافظة حضرموت',
    vessel: 'Turned Horn Glass Flacon', vesselAr: 'قارورة قرن زجاجية مخرطة',
    description: 'Single-origin wild sidr nectar poured from traditional horn glass bottles.',
    descriptionAr: 'رحيق سدر بري أحادي المصدر يُسكب من قوارير قرن زجاجية تقليدية.',
    story: "The sidr tree flowers only once a year in the canyon depths of Wadi Do'an. Our guild beekeepers position their hives on cliff ledges inaccessible to vehicles, harvesting the thick amber honey entirely by hand. No heat, no filter, no additives — pressed raw through palm-fibre cloth.",
    storyAr: 'تتفتح أزهار شجرة السدر مرة واحدة في السنة في أعماق وادي دوعن. يضع نحّالو حرفتنا خلاياهم على حواف الجروف ويحصدون العسل يدوياً بالكامل.',
    materials: 'Raw sidr nectar · Handblown horn-glass flacon · Beeswax seal',
    materialsAr: 'رحيق سدر خام · قارورة زجاجية منفوخة يدوياً · ختم شمع النحل',
    price: '21,000 YER', priceNum: 21000,
    image: honey, featured: true,
    availability: { 'bab-al-yaman': 'in_stock', 'al-qaa': 'out_of_stock' },
  },
  {
    slug: 'old-city-attar',
    category: 'Perfume', categoryAr: 'عطر',
    name: 'Old City Attar', nameAr: 'عطر المدينة القديمة',
    origin: "Old City of Sana'a, Amanat Al-Asimah", originAr: 'صنعاء القديمة، أمانة العاصمة',
    vessel: 'Hand-Etched Brass-Crested Flacon', vesselAr: 'قارورة نحاسية محفورة يدوياً',
    description: 'Slow-matured botanical oils in hand-etched, brass-crested flacons.',
    descriptionAr: 'زيوت نباتية مُنضَّجة ببطء في قوارير محفورة يدوياً بعرف نحاسي.',
    story: "Our attar masters age wild-harvested rose, jasmine and oud oils in sealed copper vessels for a minimum of six months. The result is a layered fragrance — floral on the first breath, warm resin in the heart, and deep earth on the dry-down — that has been the signature scent of Sana'a tower-house hospitality for generations.",
    storyAr: 'يُنضِّج أساتذتنا زيوت الورد والياسمين والعود المحصودة برياً في أوعية نحاسية مختومة لمدة ستة أشهر على الأقل.',
    materials: 'Wild rose · Hadhramaut jasmine · Socotra oud · Copper vessel',
    materialsAr: 'ورد بري · ياسمين حضرموت · عود سقطرى · وعاء نحاسي',
    price: '6,500 YER', priceNum: 6500,
    image: perfume, featured: false,
    availability: { 'bab-al-yaman': 'low_stock', 'al-qaa': 'out_of_stock' },
  },
  {
    slug: 'frankincense-bakhoor',
    category: 'Incense', categoryAr: 'بخور',
    name: 'Frankincense Bakhoor', nameAr: 'بخور اللبان',
    origin: "Dhofar trade via Sana'a guild", originAr: 'تجارة ظفار عبر حرفة صنعاء',
    vessel: 'Fired Clay Tower-House Mabkhara', vesselAr: 'مبخرة طينية مُحرَّقة من أبراج صنعاء',
    description: 'Aromatic resin prepared for authentic tower-house clay burners.',
    descriptionAr: 'راتينج عطري مُحضَّر لمباخر الطين الأصيلة في أبراج صنعاء.',
    story: "Frankincense has been traded through Sana'a for more than three thousand years. Our guild sources raw Boswellia sacra tears from Dhofar suppliers, blends them with aged sandalwood shavings and rose water, then presses the mixture into traditional tower-house mabkhara burners fired from the red clay of the Haraz foothills.",
    storyAr: 'يتم تداول اللبان عبر صنعاء منذ أكثر من ثلاثة آلاف عام. يُحضِّر حرفيونا خليطاً من دموع البوسويليا الخام مع نشارة الصندل العتيق وماء الورد.',
    materials: 'Boswellia sacra resin · Aged sandalwood · Rose water · Red clay burner',
    materialsAr: 'راتينج بوسويليا · صندل معتَّق · ماء ورد · مبخرة طين أحمر',
    price: '3,700 YER', priceNum: 3700,
    image: bukhoor, featured: false,
    availability: { 'bab-al-yaman': 'in_stock', 'al-qaa': 'in_stock' },
  },
  {
    slug: 'highland-water-jar',
    category: 'Pottery', categoryAr: 'فخار',
    name: 'Highland Water Jar', nameAr: 'جرة مياه المرتفعات',
    origin: "Rada'a District, Al-Bayda Governorate", originAr: 'منطقة رداع، محافظة البيضاء',
    vessel: 'Wheel-Thrown Porous Red-Clay Vessel', vesselAr: 'وعاء طيني أحمر مسامي مشكَّل على العجلة',
    description: 'Porous red-clay vessels burnished by hand with ancestral mineral pigments.',
    descriptionAr: 'أوعية طينية حمراء مسامية مصقولة يدوياً بأصباغ معدنية موروثة.',
    story: "The potters of Rada'a have shaped water jars from the iron-rich red clay of Al-Bayda for more than forty generations. The porous body keeps water cool through evaporation — no refrigeration needed. Each vessel is burnished while wet with a smooth river pebble and fired in an open-air pit kiln fuelled by acacia wood.",
    storyAr: 'يُشكِّل خزّافو رداع جرار الماء من الطين الأحمر الغني بالحديد منذ أكثر من أربعين جيلاً. يُبقي الجسم المسامي الماء بارداً دون حاجة إلى تبريد.',
    materials: 'Iron-red Al-Bayda clay · River-pebble burnish · Acacia-fired glaze',
    materialsAr: 'طين رداع الأحمر · صقل بحصى النهر · زجاج مُحرَق بخشب الأكاسيا',
    price: '10,500 YER', priceNum: 10500,
    image: jar, featured: true,
    availability: { 'bab-al-yaman': 'out_of_stock', 'al-qaa': 'in_stock' },
  },
  {
    slug: 'highland-woven-shawl',
    category: 'Textiles', categoryAr: 'نسيج',
    name: 'Highland Woven Shawl', nameAr: 'شال المرتفعات المنسوج',
    origin: 'Kawkaban & Shibam Kawkaban District', originAr: 'كوكبان ومنطقة شبام كوكبان',
    vessel: 'Hand-Loomed Foot-Pedal Frame', vesselAr: 'نول يدوي بإطار دواسة القدم',
    description: 'Geometric loomed highland wool woven on traditional foot looms.',
    descriptionAr: 'صوف مرتفعات هندسي منسوج على أنوال تقليدية بدواسة القدم.',
    story: "The weavers of Kawkaban perch their foot-pedal looms on the cliff edge of one of Yemen's highest inhabited plateaus, 2,200 metres above the Tihama plain. The wool is hand-spun from local mountain sheep, dyed with pomegranate rind, indigo and turmeric, then woven in the geometric diamond and chevron patterns that identify each weaving family.",
    storyAr: 'يضع نساجو كوكبان أنوالهم على حافة المرتفع على ارتفاع 2200 متر. الصوف مغزول يدوياً من خراف جبلية محلية، مصبوغ بقشر الرمان والنيلة والكركم.',
    materials: 'Mountain wool · Pomegranate · Indigo · Turmeric natural dyes',
    materialsAr: 'صوف جبلي · أصباغ طبيعية: رمان ونيلة وكركم',
    price: '15,000 YER', priceNum: 15000,
    image: scarf, featured: false,
    availability: { 'bab-al-yaman': 'in_stock', 'al-qaa': 'low_stock' },
  },
]

/** Returns 'Available' | 'Limited' | 'Unavailable' */
export function getOverallStatus(product) {
  const vals = Object.values(product.availability || {})
  if (vals.includes('in_stock'))  return 'Available'
  if (vals.includes('low_stock')) return 'Limited'
  return 'Unavailable'
}
