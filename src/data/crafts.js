import coffee  from '@/assets/coffee.webp'
import honey   from '@/assets/honey.webp'
import perfume from '@/assets/perfume.webp'
import jar     from '@/assets/jar.webp'
import scarf   from '@/assets/scarf.webp'

export const crafts = [
  {
    slug: 'coffee',
    title: "The Roaster's Vigil", titleAr: 'سهر المحمصاتي',
    subtitle: 'Coffee · Haraz Mountains', subtitleAr: 'القهوة · جبال حراز',
    intro: "At 2,000 metres above the Tihama coast, before the first call to prayer reaches the canyon, the roaster lights his frankincense embers. The beans — hand-picked from terraces that have not changed shape in five centuries — begin their slow transformation from green to amber to deep ochre.",
    introAr: 'على ارتفاع ألفي متر فوق ساحل تهامة، قبل أذان الفجر، يُشعل المحمّص جمر اللبان. الحبوب، المقطوفة يدوياً من مدرجات لم تتغير منذ خمسة قرون، تبدأ تحولها البطيء.',
    body: "The Haraz roasting method is unhurried by design. A shallow iron pan — the same shape as those depicted on 14th-century Rasulid pottery shards — sits directly over embers of frankincense wood. The roaster stirs with a long-handled silver spoon, reading the bean's colour and listening to its second crack rather than consulting a timer. The entire batch takes forty minutes. No two batches are identical.",
    bodyAr: 'طريقة تحميص حراز متأنية بطبيعتها. مقلاة حديدية ضحلة تجلس مباشرة فوق جمر خشب اللبان. يحرك المحمّص بملعقة فضية طويلة، يقرأ لون الحبة ويستمع إلى صوتها بدلاً من ساعة التوقيت.',
    image: coffee,
  },
  {
    slug: 'honey',
    title: 'The Cliff-Edge Apiary', titleAr: 'مناحل حافة الجرف',
    subtitle: "Honey · Wadi Do'an", subtitleAr: 'العسل · وادي دوعن',
    intro: "Wadi Do'an cuts three hundred metres deep through the limestone plateau of Hadhramaut. On its vertical walls, our guild beekeepers anchor their hives in crevices that no road reaches. The sidr tree below flowers for ten days a year. Nothing else will do.",
    introAr: 'يقطع وادي دوعن ثلاثمائة متر في عمق هضبة حضرموت الكلسية. على جدرانه الرأسية يرسي نحّالونا خلاياهم في شقوق لا تصلها طريق.',
    body: "Harvesting requires the beekeeper to descend the cliff face on a rope, work the hive with bare hands — the smoke from dried dung calms but does not sedate — and carry the full comb back up in a cloth sling. The honey is pressed cold through a double layer of palm-fibre cloth and poured directly into the flacon. No heat treatment. No filtration beyond the cloth. Shelf life measured in years, not weeks.",
    bodyAr: 'يتطلب الحصاد أن ينزل النحال على الحبل، يعمل الخلية بيديه العاريتين، ويحمل القرص الممتلئ في قماشة. يُعصر العسل بارداً عبر طبقتين من ليف النخيل ويُسكب مباشرة في القارورة.',
    image: honey,
  },
  {
    slug: 'pottery',
    title: 'The Wheel and the Pit', titleAr: 'العجلة والحفرة',
    subtitle: "Pottery · Rada'a District", subtitleAr: 'الفخار · منطقة رداع',
    intro: "The potters of Rada'a do not use an electric wheel. The kick wheel — a heavy stone disc driven by the foot — has been the technology here since before the Himyarite kingdom. What changes is only the potter's skill, accumulated over a lifetime of repetition.",
    introAr: 'لا يستخدم خزّافو رداع عجلة كهربائية. عجلة الدواسة ذات القرص الحجري الثقيل هي التقنية المستخدمة هنا منذ ما قبل المملكة الحميرية.',
    body: "The red clay of Al-Bayda is dug from the same hillside bed each spring, dried, crushed by hand and mixed with water over three days before it is ready to throw. A water jar takes twenty minutes to open, pull and collar. It then dries in shade for a week, is burnished with a smooth river pebble that the potter keeps tied to his belt, and is fired in an open pit with acacia wood. The firing takes one night. The cooling takes two days.",
    bodyAr: 'يُحفر طين رداع الأحمر من نفس الهضبة في كل ربيع، يُجفف ويُسحق يدوياً ويُمزج بالماء على مدى ثلاثة أيام. تستغرق جرة الماء عشرين دقيقة للتشكيل، وتُصقل بحصاة نهرية.',
    image: jar,
  },
  {
    slug: 'weaving',
    title: 'The Loom at the Cliff Edge', titleAr: 'النول على حافة الجرف',
    subtitle: 'Textiles · Kawkaban', subtitleAr: 'النسيج · كوكبان',
    intro: "Kawkaban sits at 2,200 metres on a sheer basalt escarpment west of Sana'a. The village has no road access in winter. The weavers have nowhere to go, and so they weave — for eight months of the year, from before sunrise until the light fails.",
    introAr: 'تقع كوكبان على ارتفاع 2200 متر على حافة بازلتية شاهقة. ليس للقرية وصول بالطريق في الشتاء. النساجون ليس لديهم أين يذهبون، فيُنسجون.',
    body: "The wool is shorn from mountain sheep in April, washed in snowmelt water, hand-spun on a drop spindle — a skill women teach daughters before they teach them to read — and dyed in clay pots over open fires. Pomegranate rind produces burnt orange. Weld plant gives yellow. Indigo blocks, traded up from the Tihama coast, provide the deep blue. The geometric patterns are not written down. They are held in the fingers.",
    bodyAr: 'يُجزّ الصوف من الخراف الجبلية في أبريل، يُغسل بماء الثلج، يُغزل يدوياً. الأنماط الهندسية غير مكتوبة. إنها محفورة في الأصابع.',
    image: scarf,
  },
  {
    slug: 'perfume',
    title: 'The Six-Month Seal', titleAr: 'الختم لستة أشهر',
    subtitle: "Perfume · Old Sana'a", subtitleAr: 'العطر · صنعاء القديمة',
    intro: "The attar quarter of Old Sana'a occupies a single alley in the northeast corner of the souq. Twelve workshops. Four families. One tradition that predates the Ottoman towers visible above their rooftops.",
    introAr: 'يشغل حي العطّارين في صنعاء القديمة زقاقاً واحداً في الزاوية الشمالية الشرقية من السوق. اثنا عشر ورشة. أربع عائلات.',
    body: "Our master blends wild Haraz rose with Hadhramaut jasmine, fixes them against a base of aged Socotra oud — a wood whose resin content increases the longer it is stored — then seals the blend in a hammered copper vessel for a minimum of six months. Nothing is added after sealing. The blend breathes, marries and changes. What emerges after six months is not what was poured in. It is what time made of it.",
    bodyAr: 'يمزج أستاذنا وردة حراز البرية مع ياسمين حضرموت، يثبتهما على قاعدة من عود سقطرى معتَّق، ثم يختم المزيج في وعاء نحاسي لمدة ستة أشهر. ما يخرج بعد ستة أشهر ليس ما سُكب. إنه ما صنعه الوقت.',
    image: perfume,
  },
]
