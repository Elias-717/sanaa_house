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
    name: 'Haraz Udaini Coffee', nameAr: 'قهوة حرازي عديني',
    origin: 'Haraz Mountains, Bani Matar highlands', originAr: 'جبال حراز، مرتفعات بني مطر',
    vessel: 'Handcast Khanjar Brass Dallah', vesselAr: 'دلة نحاسية خنجرية مصبوبة يدوياً',
    description: 'A heirloom Udaini landrace from cloud-swept highland terraces, naturally dry-processed and roasted over embers.',
    descriptionAr: 'سلالة حرازي عديني أصيلة من مدرجات مرتفعة تكتنفها الغيوم، مُجفَّفة طبيعياً ومُحمَّصة على الجمر.',
    story: "Haraz is one of Yemen's most celebrated growing regions, its terraces carved by hand into the Bani Matar highlands between 1,500 and 2,800 metres. The Udaini is an heirloom landrace long cultivated here. Cherries are sun-dried whole on raised beds in the centuries-old natural method, hand-sorted, and roasted over embers for the spiced, winey, dark-chocolate character that made Yemeni coffee famous.",
    storyAr: 'تُعدّ حراز من أشهر مناطق زراعة البن في اليمن، بمدرجاتها المنحوتة يدوياً في مرتفعات بني مطر على ارتفاع يتراوح بين 1500 و2800 متر. العديني سلالة أصيلة تُزرع هنا منذ القدم. تُجفَّف الثمار كاملةً تحت الشمس بالطريقة الطبيعية العريقة، ثم تُصنَّف يدوياً وتُحمَّص على الجمر.',
    materials: 'Heirloom Udaini landrace · Natural dry-process · Hammered brass dallah',
    materialsAr: 'سلالة عديني أصيلة · تجفيف طبيعي · دلة نحاسية مطروقة',
    price: '7,000 YER', priceNum: 7000,
    image: coffee, featured: true,
    availability: { 'bab-al-yaman': 'in_stock', 'al-qaa': 'low_stock' },
  },
  {
    slug: 'doani-sidr-honey',
    category: 'Honey', categoryAr: 'عسل',
    name: "Do'ani Sidr Honey", nameAr: 'عسل سدر دوعني',
    origin: "Wadi Do'an, Hadhramaut Governorate", originAr: 'وادي دوعن، محافظة حضرموت',
    vessel: 'Turned Horn Glass Flacon', vesselAr: 'قارورة قرن زجاجية مخرطة',
    description: 'Raw monofloral Do\'ani Sidr — unheated, unfiltered nectar from wild Christ\'s-thorn jujube.',
    descriptionAr: 'عسل سدر دوعني خام أحادي الزهرة — غير مُسخَّن وغير مُصفَّى من شجر السدر البري.',
    story: "The Sidr tree (Ziziphus spina-christi) blooms for only a few weeks each autumn in the arid canyon depths of Wadi Do'an — the most prized named origin for Yemeni honey. Our guild beekeepers work hives on remote valley slopes, harvesting the dense, caramel-forward honey by hand. It is pressed cold through palm-fibre cloth: unheated, unfiltered, with nothing added.",
    storyAr: 'تتفتح شجرة السدر (زيزيفوس سبينا-كريستي) أسابيع قليلة فقط كل خريف في أعماق وادي دوعن القاحلة — أعرق منشأ لعسل اليمن. يعمل نحّالو حرفتنا على خلايا في منحدرات الوادي النائية، ويحصدون العسل الكثيف يدوياً. يُعصر بارداً عبر ليف النخيل: دون تسخين أو تصفية أو إضافات.',
    materials: 'Raw monofloral Sidr nectar · Autumn harvest · Palm-fibre pressed',
    materialsAr: 'رحيق سدر خام أحادي الزهرة · حصاد خريفي · معصور بليف النخيل',
    price: '21,000 YER', priceNum: 21000,
    image: honey, featured: true,
    availability: { 'bab-al-yaman': 'in_stock', 'al-qaa': 'out_of_stock' },
  },
  {
    slug: 'makhmariya-al-arais',
    category: 'Perfume', categoryAr: 'عطر',
    name: 'Makhmariya al-Arais', nameAr: 'مخمرية العرائس',
    origin: "Old City of Sana'a, Amanat Al-Asimah", originAr: 'صنعاء القديمة، أمانة العاصمة',
    vessel: 'Hand-Etched Brass-Crested Flacon', vesselAr: 'قارورة نحاسية محفورة يدوياً',
    description: 'The traditional Yemeni bridal perfume oil — a fermented blend of oud, amber and spice.',
    descriptionAr: 'عطر العرائس اليمني التقليدي — مزيج مُخمَّر من العود والعنبر والتوابل.',
    story: "Makhmariya al-Arais is the fragrance Yemeni brides have worn for generations. The name comes from takhmir — the slow fermentation of oud and botanicals in sealed vessels. Our masters blend agarwood oud with amber, white mahlab, cardamom and clove, maturing the oil for months into an alcohol-free attar that opens spiced and warm, then settles into deep resinous wood over many hours.",
    storyAr: 'مخمرية العرائس هو العطر الذي ترتديه العروس اليمنية منذ أجيال. يأتي الاسم من التخمير — تنضيج العود والنباتات ببطء في أوعية مختومة. يمزج أساتذتنا العود مع العنبر والمحلب الأبيض والهيل والقرنفل، ويُنضِجون الزيت أشهراً ليصبح عطراً خالياً من الكحول يبدأ دافئاً بالتوابل ثم يستقر على خشب راتنجي عميق.',
    materials: 'Agarwood oud · Amber · White mahlab · Cardamom · Clove',
    materialsAr: 'عود · عنبر · محلب أبيض · هيل · قرنفل',
    price: '6,500 YER', priceNum: 6500,
    image: perfume, featured: false,
    availability: { 'bab-al-yaman': 'low_stock', 'al-qaa': 'out_of_stock' },
  },
  {
    slug: 'adeni-bakhoor',
    category: 'Incense', categoryAr: 'بخور',
    name: 'Adeni Bakhoor', nameAr: 'بخور عدني',
    origin: "Aden recipe · Socotra Boswellia", originAr: 'وصفة عدنية · لبان سقطري',
    vessel: 'Fired Clay Tower-House Mabkhara', vesselAr: 'مبخرة طينية مُحرَّقة من أبراج صنعاء',
    description: 'A handmade Adeni blend of agarwood soaked in oils, resins and Socotra frankincense.',
    descriptionAr: 'خلطة عدنية مصنوعة يدوياً من العود المنقوع بالزيوت والرواتج ولبان سقطرى.',
    story: "Bakhoor-making in Yemen is a kitchen art guarded within families — tradition holds that Queen Arwa sent chests of it to the holy cities a thousand years ago. Our Adeni-style blend begins with agarwood chips soaked in fragrant oils, musk and rose water, then layered with tears of Socotra Boswellia frankincense. A single piece smouldered on a clay mabkhara scents a whole room for hours.",
    storyAr: 'صناعة البخور في اليمن فنٌّ منزلي تحرسه العائلات — وتقول الرواية إن الملكة أروى أرسلت صناديقه إلى المدن المقدسة قبل ألف عام. تبدأ خلطتنا العدنية برقائق العود المنقوعة بالزيوت العطرية والمسك وماء الورد، ثم تُضاف إليها دموع لبان سقطرى. قطعة واحدة على المبخرة الطينية تعطّر الغرفة ساعات.',
    materials: 'Agarwood oud · Socotra Boswellia · Musk · Rose water',
    materialsAr: 'عود · لبان سقطري · مسك · ماء ورد',
    price: '3,700 YER', priceNum: 3700,
    image: bukhoor, featured: false,
    availability: { 'bab-al-yaman': 'in_stock', 'al-qaa': 'in_stock' },
  },
  {
    slug: 'madar-water-vessel',
    category: 'Pottery', categoryAr: 'فخار',
    name: "Madar Water Vessel", nameAr: 'جرة المَدَر للماء',
    origin: 'Highland potters, Yemeni tradition', originAr: 'خزّافو المرتفعات، التراث اليمني',
    vessel: 'Unglazed Hand-Built Terracotta', vesselAr: 'فخار طيني مشكَّل يدوياً دون طلاء',
    description: 'Unglazed terracotta that cools water by evaporation — once part of every bride\'s trousseau.',
    descriptionAr: 'فخار طيني غير مطلي يُبرِّد الماء بالتبخّر — كان جزءاً من جهاز كل عروس.',
    story: "The unglazed water vessel — sharbat al-'arus — traditionally travelled with a Yemeni bride to her new home. Hand-built from local madar clay over a mold and finished with coils, its porous walls let a little water seep and evaporate, keeping the rest cool through the summer heat without any refrigeration. Lead-free, unglazed, and shaped exactly as it has been for centuries.",
    storyAr: 'وعاء الماء غير المطلي — شربة العروس — كان يرافق العروس اليمنية إلى بيتها الجديد. يُشكَّل يدوياً من طين المَدَر المحلي على قالب ويُكمَّل بالحبال الطينية، وتسمح جدرانه المسامية بترشّح قليل من الماء وتبخّره، فيبقى الباقي بارداً في حرّ الصيف دون تبريد. خالٍ من الرصاص وغير مطلي، ومُشكَّل كما كان منذ قرون.',
    materials: 'Local madar clay · Coil-and-mold built · Lead-free unglazed',
    materialsAr: 'طين المَدَر المحلي · مُشكَّل بالقالب والحبال · خالٍ من الرصاص دون طلاء',
    price: '10,500 YER', priceNum: 10500,
    image: jar, featured: true,
    availability: { 'bab-al-yaman': 'out_of_stock', 'al-qaa': 'in_stock' },
  },
  {
    slug: 'habirah-shawl',
    category: 'Textiles', categoryAr: 'نسيج',
    name: 'Habirah Handwoven Shawl', nameAr: 'شال الحَبَرة المنسوج',
    origin: 'Kawkaban highland weavers', originAr: 'نسّاجو مرتفعات كوكبان',
    vessel: 'Traditional Wooden Handloom', vesselAr: 'نول خشبي تقليدي',
    description: 'A large Habirah wrap woven on a wooden loom from locally spun, naturally dyed fibre.',
    descriptionAr: 'شال حَبَرة كبير منسوج على نول خشبي من خيوط محلية مصبوغة طبيعياً.',
    story: "The Habirah is a large handwoven Yemeni wrap, worked on a traditional wooden loom from locally spun cotton and highland wool. The weavers of Kawkaban — perched 2,200 metres above the Tihama plain — spin the fibre by hand and colour it with natural dyes: pomegranate rind for burnt orange, indigo for deep blue, turmeric for gold. Drape it one way for one pattern, the other for a second — the geometric designs are held in the fingers, never written down.",
    storyAr: 'الحَبَرة شالٌ يمني كبير منسوج يدوياً على نول خشبي تقليدي من قطن محلي وصوف المرتفعات. ينسج أهل كوكبان — على ارتفاع 2200 متر فوق سهل تهامة — الخيوط يدوياً ويصبغونها بأصباغ طبيعية: قشر الرمان للبرتقالي، والنيلة للأزرق العميق، والكركم للذهبي. تلفّه باتجاه فتظهر نقشة، وبالآخر فتظهر أخرى — والأنماط الهندسية محفوظة في الأصابع لا في الورق.',
    materials: 'Locally spun cotton & wool · Pomegranate · Indigo · Turmeric',
    materialsAr: 'قطن وصوف محلي الغزل · رمان · نيلة · كركم',
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

/**
 * Last time availability data was manually updated by the maintainer.
 * Update this date whenever store stock is changed in the data file.
 */
export const availabilityUpdatedAt = '2026-10-03'
