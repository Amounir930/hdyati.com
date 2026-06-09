// --- PRODUCT DATABASE (39 Real Products Extracted from Store) ---
const PRODUCTS = [
  // تخرج (Graduation)
  {
    id: "grad_1",
    category: "تخرج",
    image: "photo/تخرج/1.jpeg",
    title: { ar: "باقة التخرج الكلاسيكية الفخمة", en: "Luxury Classic Graduation Bouquet" },
    desc: { ar: "تنسيق كلاسيكي أنيق مصمم خصيصاً لمناسبات التخرج والنجاح السعيد.", en: "Elegant classic floral arrangement customized for graduation and success milestones." },
    popular: true
  },
  {
    id: "grad_2",
    category: "تخرج",
    image: "photo/تخرج/WhatsApp Image 2026-06-09 at 8.59.18 AM.jpeg",
    title: { ar: "طوق تخرج ملكي بالورد الطبيعي المنعش", en: "Royal Graduation Floral Collar" },
    desc: { ar: "طوق تخرج مميز بالورود والرياحين العطرة يطوق النجاح بجمال الطبيعة.", en: "Premium floral collar handcrafted with fresh fragrant blooms to honor graduation success." },
    popular: true
  },
  {
    id: "grad_3",
    category: "تخرج",
    image: "photo/تخرج/WhatsApp Image 2026-06-09 at 8.59.21 AM.jpeg",
    title: { ar: "بوكيه التخرج الفاخر بألوان متناسقة", en: "Premium Graduation Bouquet" },
    desc: { ar: "مزيج متناسق من الجوري الفخم لتهنئة من تحب بتخرجهم الفريد.", en: "A magnificent blend of royal roses to congratulate your loved ones on their graduation." },
    popular: true
  },
  {
    id: "grad_4",
    category: "تخرج",
    image: "photo/تخرج/WhatsApp Image 2026-06-09 at 8.59.22 AM (2).jpeg",
    title: { ar: "تنسيق تخرج أنيق بالورود البيضاء والذهبية", en: "Elegant White Graduation Arrangement" },
    desc: { ar: "تنسيق راقي يجمع بين نقاء اللون الأبيض وبريق التخرج المبهج.", en: "A refined arrangement combining pure white florals with celebratory golden accents." },
    popular: false
  },
  {
    id: "grad_5",
    category: "تخرج",
    image: "photo/تخرج/WhatsApp Image 2026-06-09 at 8.59.23 AM.jpeg",
    title: { ar: "باقة تخرج متكاملة مع وشاح التخرج الحريري", en: "Complete Graduation Bouquet with Sash" },
    desc: { ar: "باقة حالمة تجمع بين جمال الورد وأناقة وشاح التخرج الحريري المطبوع.", en: "A dreamy bouquet featuring beautiful flowers paired with an elegant silk graduation sash." },
    popular: false
  },

  // ترقية (Promotion)
  {
    id: "promo_1",
    category: "ترقية",
    image: "photo/ترقية/WhatsApp Image 2026-06-09 at 8.59.25 AM (2).jpeg",
    title: { ar: "تنسيق ترقية رسمي فاخر للمكاتب", en: "Official Luxury Promotion Setup" },
    desc: { ar: "تنسيق وقور بالورود الكلاسيكية الفخمة لتقديم التهاني بمناسبة الترقية الجديدة.", en: "A majestic arrangement of classic flowers perfect for office promotion congratulations." },
    popular: true
  },
  {
    id: "promo_2",
    category: "ترقية",
    image: "photo/ترقية/WhatsApp Image 2026-06-09 at 8.59.26 AM (1).jpeg",
    title: { ar: "بوكيه تهنئة بالترقية والمناصب الجديدة", en: "Congratulatory Promotion Bouquet" },
    desc: { ar: "زهور موسمية فاخرة تعبر عن أرقى الأمنيات بمستقبل مهني باهر.", en: "Seasonal luxury flowers conveying best wishes for a stellar professional future." },
    popular: true
  },
  {
    id: "promo_3",
    category: "ترقية",
    image: "photo/ترقية/WhatsApp Image 2026-06-09 at 8.59.26 AM (2).jpeg",
    title: { ar: "تنسيق زهور مكتبية فاخرة مع حامل راقي", en: "Luxurious Desk Floral Arrangement" },
    desc: { ar: "تنسيق زهور متناسق ومستدام للمكاتب التنفيذية يبعث على التفاؤل والجمال.", en: "Corporate-style floral setup on an elegant stand to elevate executive office environments." },
    popular: false
  },
  {
    id: "promo_4",
    category: "ترقية",
    image: "photo/ترقية/WhatsApp Image 2026-06-09 at 8.59.28 AM (1).jpeg",
    title: { ar: "قاعدة خشبية ريفية مع ورود الترقية", en: "Rustic Wooden Base Promotion Flowers" },
    desc: { ar: "دمج بين فخامة الخشب الطبيعي وجاذبية الورود الملونة لتهنئة راقية.", en: "Rustic natural wood elements combined with premium vibrant flowers for unique congratulations." },
    popular: false
  },
  {
    id: "promo_5",
    category: "ترقية",
    image: "photo/ترقية/WhatsApp Image 2026-06-09 at 8.59.28 AM.jpeg",
    title: { ar: "باقة ورد التهنئة الذهبية الفاخرة", en: "Golden Congratulatory Floral Arrangement" },
    desc: { ar: "باقة باهرة باللونين الأصفر والذهبي ترمز للنجاح والتفوق المهني.", en: "A beautiful yellow and gold arrangement symbolizing professional achievement and victory." },
    popular: true
  },

  // حج وعمرة (Hajj)
  {
    id: "hajj_1",
    category: "حج",
    image: "photo/حج/WhatsApp Image 2026-06-09 at 8.59.20 AM.jpeg",
    title: { ar: "تنسيق استقبال الحجاج الفاخر بالبياض والنقاء", en: "Luxury Hajj Welcome Setup" },
    desc: { ar: "تنسيق استقبال روحاني رائع بالورود البيضاء والعبارات الترحيبية المميزة.", en: "A magnificent spiritual welcoming setup with pure white flowers and Hajj greeting cards." },
    popular: true
  },
  {
    id: "hajj_2",
    category: "حج",
    image: "photo/حج/WhatsApp Image 2026-06-09 at 8.59.29 AM (2).jpeg",
    title: { ar: "باقة عودة الحج المبارك والتهاني الطيبة", en: "Blessed Hajj Return Bouquet" },
    desc: { ar: "باقة فخمة ترحب بعودة ضيوف الرحمن لتقديم التهاني بحج مبرور وسعي مشكور.", en: "Congratulate pilgrims returning from their sacred journey with this blessed floral display." },
    popular: true
  },
  {
    id: "hajj_3",
    category: "حج",
    image: "photo/حج/WhatsApp Image 2026-06-09 at 8.59.31 AM (1).jpeg",
    title: { ar: "هدية الحج الروحانية بالورود وأبخرة العود", en: "Spiritual Hajj Gift with Flowers" },
    desc: { ar: "صندوق هدايا فريد يجمع بين الورود البيضاء العطرة والعود الفاخر للمباركة بالحج.", en: "A unique gift box combining fragrant white roses and incense for returning Hajj pilgrims." },
    popular: false
  },
  {
    id: "hajj_4",
    category: "حج",
    image: "photo/حج/WhatsApp Image 2026-06-09 at 8.59.32 AM (1).jpeg",
    title: { ar: "تنسيق تهنئة العمرة الفاخر والتصميم العصري", en: "Premium Umrah Congratulation Design" },
    desc: { ar: "تنسيق ناعم من الروز الأبيض والأغصان الخضراء للتهنئة بالعمرة المقبولة.", en: "A delicate design of white roses and lush greenery congratulating an accepted Umrah." },
    popular: false
  },
  {
    id: "hajj_5",
    category: "حج",
    image: "photo/حج/WhatsApp Image 2026-06-09 at 8.59.32 AM.jpeg",
    title: { ar: "باقة الكعبة المشرفة التذكارية الفريدة", en: "Kaaba Memorial Flower Arrangement" },
    desc: { ar: "تصميم خاص باللونين الأسود والذهبي تعبيراً عن حب مكة المكرمة الكعبة المشرفة.", en: "A custom floral piece themed in black and gold inspired by the Holy Kaaba." },
    popular: true
  },

  // زواج (Wedding)
  {
    id: "wed_1",
    category: "زواج",
    image: "photo/زواج/WhatsApp Image 2026-06-09 at 8.59.20 AM (3).jpeg",
    title: { ar: "مسكة عروس كلاسيكية فاخرة بالبيوني والجوري", en: "Classic Luxury Bridal Bouquet" },
    desc: { ar: "تنسيق يدوي فائق الجودة يضفي جمالاً استثنائياً على العروس في ليلة العمر.", en: "Exquisite hand-tied bridal bouquet adding exceptional elegance to the bride's big day." },
    popular: true
  },
  {
    id: "wed_2",
    category: "زواج",
    image: "photo/زواج/WhatsApp Image 2026-06-09 at 8.59.21 AM (2).jpeg",
    title: { ar: "تنسيق طاولة زفاف ملكي بالزهور المتدلية", en: "Royal Wedding Table Centerpiece" },
    desc: { ar: "تنسيقات زهور فاخرة للصالات وطاولات الحفلات تزيد الزفاف بهاءً ورونقاً.", en: "Opulent table floral arrangements adding premium scale and design to wedding halls." },
    popular: true
  },
  {
    id: "wed_3",
    category: "زواج",
    image: "photo/زواج/WhatsApp Image 2026-06-09 at 8.59.29 AM (1).jpeg",
    title: { ar: "باقة خطوبة رومانسية بالورود الوردية الناعمة", en: "Engagement Bouquet with Pink Roses" },
    desc: { ar: "مزيج ساحر من درجات الوردي لتوثيق لحظات الخطوبة الرومانسية الدافئة.", en: "A charming blend of pink shades designed to celebrate romantic engagement moments." },
    popular: false
  },
  {
    id: "wed_4",
    category: "زواج",
    image: "photo/زواج/WhatsApp Image 2026-06-09 at 8.59.31 AM (2).jpeg",
    title: { ar: "طوق زهور زفاف فاخر لتزيين الممرات والسيارات", en: "Luxury Wedding Floral Crown & Decor" },
    desc: { ar: "أكاليل زهور وتنسيقات حصرية لتزيين سيارات الزفاف وممرات استقبال الضيوف.", en: "Luxury floral wreaths and garlands crafted to decorate wedding cars and guest pathways." },
    popular: false
  },

  // أعياد ميلاد (Birthday)
  {
    id: "bday_1",
    category: "ميلاد",
    image: "photo/ميلاد/WhatsApp Image 2026-06-09 at 8.59.19 AM.jpeg",
    title: { ar: "صندوق ورد عيد الميلاد مع بالون التهنئة المخصص", en: "Birthday Box with Flowers & Balloon" },
    desc: { ar: "صندوق جلدي فاخر يدمج رقة الورد وجاذبية البالون الطائر المطبوع بالاسم.", en: "A luxury leather box combining delicate flowers and a customized floating helium balloon." },
    popular: true
  },
  {
    id: "bday_2",
    category: "ميلاد",
    image: "photo/ميلاد/WhatsApp Image 2026-06-09 at 8.59.22 AM.jpeg",
    title: { ar: "باقة ألوان الحياة المبهجة لأعياد الميلاد", en: "Joyful Colors of Life Bouquet" },
    desc: { ar: "مجموعة زهور ملونة ونابضة بالحياة تشيع البهجة والاحتفال بميلاد من تحب.", en: "Vibrant and colorful floral collection radiating joy for a loved one's birthday." },
    popular: true
  },
  {
    id: "bday_3",
    category: "ميلاد",
    image: "photo/ميلاد/WhatsApp Image 2026-06-09 at 8.59.24 AM (2).jpeg",
    title: { ar: "سلة زهور أعياد الميلاد الفاخرة بتنسيق عصري", en: "Luxury Birthday Flower Basket" },
    desc: { ar: "سلة من القش الطبيعي منسقة بورود الجوري والأنثوريوم لتهنئة مميز.", en: "Natural wicker basket styled with roses and anthuriums for a beautiful birthday gift." },
    popular: false
  },
  {
    id: "bday_4",
    category: "ميلاد",
    image: "photo/ميلاد/WhatsApp Image 2026-06-09 at 8.59.24 AM.jpeg",
    title: { ar: "تنسيق عيد ميلاد ملكي بالورد الأحمر الكلاسيكي", en: "Red Roses Birthday Arrangement" },
    desc: { ar: "عبر عن أسمى مشاعرك بالورد الأحمر الراقية المنسقة في فازة زجاجية.", en: "Convey your deepest emotions with classic red roses arranged in an elegant glass vase." },
    popular: false
  },
  {
    id: "bday_5",
    category: "ميلاد",
    image: "photo/ميلاد/WhatsApp Image 2026-06-09 at 8.59.25 AM.jpeg",
    title: { ar: "باقة الشوكولاتة الفاخرة والزهور المختلطة", en: "Chocolate & Mixed Flowers Bouquet" },
    desc: { ar: "الهدية المثالية التي تجمع بين جمال الورد الطبيعي ولذة الشوكولاتة الفخمة.", en: "The perfect birthday gift combining gorgeous fresh flowers and premium chocolates." },
    popular: true
  },
  {
    id: "bday_6",
    category: "ميلاد",
    image: "photo/ميلاد/WhatsApp Image 2026-06-09 at 8.59.27 AM (1).jpeg",
    title: { ar: "تنسيق عيد ميلاد بناتي وردي ناعم ورقيق", en: "Feminine Pink Birthday Arrangement" },
    desc: { ar: "تنسيق مبهج بألوان الباستيل الوردية يعبر عن الرقة والدلال لرفيقة دربك.", en: "A cheerful pastel pink design conveying tenderness and joy for her birthday." },
    popular: false
  },
  {
    id: "bday_7",
    category: "ميلاد",
    image: "photo/ميلاد/WhatsApp Image 2026-06-09 at 8.59.27 AM.jpeg",
    title: { ar: "صندوق هدايا عيد ميلاد متكامل بالزهور والعطور", en: "All-in-One Birthday Gift Box" },
    desc: { ar: "علبة فاخرة مصممة بعناية تضم باقة زهور وشوكولاتة أو عطر حسب اختياركم.", en: "Bespoke gift box containing fresh flowers paired with chocolates or perfume." },
    popular: false
  },
  {
    id: "bday_8",
    category: "ميلاد",
    image: "photo/ميلاد/WhatsApp Image 2026-06-09 at 8.59.30 AM (1).jpeg",
    title: { ar: "بوكيه عيد ميلاد ملكي بلمسات الذهب الفاتن", en: "Royal Golden Birthday Bouquet" },
    desc: { ar: "أوراق ذهبية منسقة مع الجوري الداكن يعطي طابع الملوك والأناقة الفائقة.", en: "Golden foliage combined with dark velvet roses for a royal birthday masterpiece." },
    popular: true
  },
  {
    id: "bday_9",
    category: "ميلاد",
    image: "photo/ميلاد/WhatsApp Image 2026-06-09 at 8.59.31 AM.jpeg",
    title: { ar: "سلة ورود الربيع للأعياد واللحظات السعيدة", en: "Spring Flowers Birthday Basket" },
    desc: { ar: "ورود متفتحة تشيع عبق الربيع والألوان النضرة لتزين يوم الميلاد.", en: "Freshly blossomed spring flowers in a beautiful arrangement celebrating new beginnings." },
    popular: false
  },

  // هدايا ومناسبات (Gift)
  {
    id: "gift_1",
    category: "هدية",
    image: "photo/هدية/WhatsApp Image 2026-06-09 at 8.59.20 AM (1).jpeg",
    title: { ar: "تنسيق هدايا استقبال مواليد فاخر بقطر", en: "Premium Newborn Gift Setup" },
    desc: { ar: "تصميم أنيق يتناسب مع فرحة قدوم المولود الجديد، مع توزيعات وبطاقة ترحيب.", en: "An elegant setup to celebrate the arrival of the newborn, complete with cards and favors." },
    popular: true
  },
  {
    id: "gift_2",
    category: "هدية",
    image: "photo/هدية/WhatsApp Image 2026-06-09 at 8.59.20 AM (2).jpeg",
    title: { ar: "هدية شيكولاتة فاخرة، كيك وتنسيق ورد متكامل", en: "Chocolate, Cake & Floral Gift Combo" },
    desc: { ar: "أقوى توليفة للمناسبات تجمع بين الكيك الفخم والشوكولاتة والزهور الرائعة.", en: "The ultimate celebration package combining rich cake, luxury chocolates, and fresh flowers." },
    popular: true
  },
  {
    id: "gift_3",
    category: "هدية",
    image: "photo/هدية/WhatsApp Image 2026-06-09 at 8.59.22 AM (1).jpeg",
    title: { ar: "توزيعات مناسبات فاخرة وتصاميم مخصصة", en: "Luxurious Occasion Giveaways" },
    desc: { ar: "توزيعات صغيرة وباقات منسقة بحرفية لتوزيعها على ضيوف حفلاتكم وتجهيزاتكم.", en: "Chic mini floral arrangements and customized favors for your event guests." },
    popular: false
  },
  {
    id: "gift_4",
    category: "هدية",
    image: "photo/هدية/WhatsApp Image 2026-06-09 at 8.59.23 AM (1).jpeg",
    title: { ar: "هدية تذكارية مخصصة بالورود والبراويز الفنية", en: "Customized Memorial Gift with Flowers" },
    desc: { ar: "تنسيق فريد يدمج بين إطار الصورة التذكارية وتنسيق ورد طبيعي يعيش طويلاً.", en: "A unique floral design featuring a photo frame embedded with long-lasting roses." },
    popular: false
  },
  {
    id: "gift_5",
    category: "هدية",
    image: "photo/هدية/WhatsApp Image 2026-06-09 at 8.59.23 AM (2).jpeg",
    title: { ar: "صندوق الهدايا الخشبي الفخم بتنسيق الورد الطبيعي", en: "Luxury Wooden Gift Box Setup" },
    desc: { ar: "علبة خشبية عتيقة فخمة مليئة بالورود والحلويات الراقية للتعبير عن التقدير.", en: "Vintage wooden box loaded with beautiful flowers and sweets expressing true appreciation." },
    popular: true
  },
  {
    id: "gift_6",
    category: "هدية",
    image: "photo/هدية/WhatsApp Image 2026-06-09 at 8.59.24 AM (1).jpeg",
    title: { ar: "باقة زهور المناسبات الكبرى وحفلات الاستقبال", en: "Grand Occasion Floral Bouquet" },
    desc: { ar: "باقة عملاقة من الزهور المنوعة والمستوردة خصيصاً للمناسبات الراقية بقطر.", en: "Giant luxury bouquet handcrafted with imported florals for major Qatari events." },
    popular: false
  },
  {
    id: "gift_7",
    category: "هدية",
    image: "photo/هدية/WhatsApp Image 2026-06-09 at 8.59.25 AM (1).jpeg",
    title: { ar: "تنسيق هدايا العيد والتهاني الاجتماعية المميزة", en: "Holiday & Congratulations Gift Setup" },
    desc: { ar: "تنسيق حصري للمعايدات والزيارات العائلية يضفي طابع الفخامة والأصالة.", en: "An exclusive design for holidays and family visits bringing warmth and prestige." },
    popular: false
  },
  {
    id: "gift_8",
    category: "هدية",
    image: "photo/هدية/WhatsApp Image 2026-06-09 at 8.59.26 AM.jpeg",
    title: { ar: "توزيعات مواليد راقية وتجهيز غرف استقبال بقطر", en: "Elegant Newborn Celebration Giveaways" },
    desc: { ar: "نهتم بأدق التفاصيل لتجهيز غرف استقبال المواليد مع أرقى صواني التوزيعات.", en: "Premium newborn room setup services including luxury customized favor trays." },
    popular: true
  },
  {
    id: "gift_9",
    category: "هدية",
    image: "photo/هدية/WhatsApp Image 2026-06-09 at 8.59.29 AM.jpeg",
    title: { ar: "تنسيق هدايا فاخرة مع كيك وحلويات الحفلات", en: "Premium Gift Arrangement with Cake" },
    desc: { ar: "بوكس هدايا غني ومبتكر يجمع الكيك اللذيذ وتنسيق ورود الجوري الفاتنة.", en: "Rich gift box featuring a delicious cake and beautiful red roses arrangement." },
    popular: false
  },
  {
    id: "gift_10",
    category: "هدية",
    image: "photo/هدية/WhatsApp Image 2026-06-09 at 8.59.30 AM (2).jpeg",
    title: { ar: "هدية مولود جديد ملكية باللونين الأزرق والوردي", en: "Royal Newborn Baby Celebration Gift" },
    desc: { ar: "تنسيق هدايا للمواليد الجدد بتصاميم حصرية وفخمة بالورد والملابس الأنيقة.", en: "Luxury newborn gifts with customized floral and premium baby clothing styling." },
    popular: false
  },
  {
    id: "gift_11",
    category: "هدية",
    image: "photo/هدية/WhatsApp Image 2026-06-09 at 8.59.30 AM.jpeg",
    title: { ar: "صينية تقديم شيكولاتة وتنسيق ورد للضيوف", en: "Chocolate Serving Tray & Flowers Combo" },
    desc: { ar: "تنسيق صينية شوكولاتة فاخرة مدمجة مع باقات زهور لتزيين مجالسكم الكريمة.", en: "Elegant Qatari style chocolate serving tray integrated with premium floral decors." },
    popular: true
  }
];

// --- TRANSLATIONS DICTIONARY ---
const TRANSLATIONS = {
  ar: {
    siteTitle: "هديتي | ورود وتجهيز مناسبات قطر — توصيل لجميع المناطق",
    metaDesc: "هديتي للورود وتجهيز المناسبات في قطر. يوجد توصيل لجميع مناطق قطر. للطلب تواصل معنا عبر واتساب 77403038. الخريطيات - الشارع التجاري - مقابل البنك التجاري.",
    navHome: "الرئيسية",
    navGrad: "باقات التخرج",
    navPromo: "تهنئة ترقية",
    navWedding: "مناسبات زواج",
    navBirthday: "أعياد ميلاد",
    navHajj: "حج وعمرة",
    navGifts: "هدايا وتنسيقات",
    btnSearch: "بحث",
    searchPlaceholder: "ابحث عن باقة ورد، تنسيق، أو هدية...",
    cartTitle: "طلبك من هديتي",
    cartEmpty: "سلتك فارغة حالياً — اختر من منتجاتنا الجميلة!",
    btnAddToCart: "اطلب الآن",
    btnAddedToCart: "تمت الإضافة ✔",
    btnCheckout: "أكمل طلبك عبر واتساب",
    btnContinueShopping: "تصفح المزيد",
    shipping: "التوصيل لجميع مناطق قطر:",
    free: "مجاني 🇶🇦",
    checkoutTitle: "أكمل طلبك — سيتواصل معك فريق هديتي",
    clientName: "اسمك الكريم",
    clientPhone: "رقم واتسابك في قطر",
    clientAddress: "منطقتك في قطر (للتوصيل)",
    paymentMethod: "طريقة الدفع",
    payApple: "Apple Pay",
    payCard: "بطاقة ائتمان / مدى",
    payCod: "دفع عند الاستلام",
    btnPayNow: "أرسل طلبي لهديتي",
    orderSuccessTitle: "تم استلام طلبك بنجاح! 🌸",
    orderSuccessDesc: "شكراً لثقتك بهديتي 💜 سيتواصل معك فريقنا عبر الواتساب قريباً لتنسيق تفاصيل طلبك وتحديد موعد التوصيل.",
    orderReceipt: "منتجاتك المختارة",
    orderNum: "رقم طلبك:",
    btnBackHome: "تصفح مزيد من تشكيلاتنا",
    footerDesc: "هديتي للورود وتجهيز المناسبات — نقدم أجمل باقات الورد وتنسيقات الهدايا الراقية مع توصيل سريع لجميع مناطق قطر. اطلب الآن عبر واتساب.",
    footerContact: "تواصل معنا",
    footerAddress: "الخريطيات-الشارع التجارى-مقابل البنك التجاري - بنايه رقم ٤٥ مكتب رقم ١",
    footerRights: "جميع الحقوق محفوظة © هديتي 2026 | قطر | @hdyati22",
    heroTitle: "هديتي للورود وتجهيز المناسبات",
    heroSub: "في شركة هديتي، نؤمن أن الهدية ليست مجرد غرض، بل هي مشاعر تُنقل. منذ تأسيسنا عام 2021، نتميز بصياغة أجمل اللحظات من خلال باقات وتوزيعات المواليد الفاخرة، وعقود وباقات التخرج الساحرة، وهدايا أعياد الميلاد المبتكرة، إلى جانب ترتيب مناسباتكم وتجهيز حفلاتكم بأرقى التصاميم، وأفخم تشكيلات الشيكولاتة والكيك. كل هذا يقدمه لكم فريق من أمهر منسقي الورود المحترفين لنضمن لكم لمسات فنية راقية، مع الالتزام بتقديم أفضل الأسعار وأسرع خدمة توصيل تغطي جميع مناطق قطر لتلبي تطلعاتكم وتصنع ذكريات لا تُنسى.",
    catAll: "الكل",
    sortBy: "تصفية",
    sortPopular: "الأكثر طلباً",
    toastAdded: "تمت إضافة المنتج إلى طلبك!",
    featuredProducts: "تشكيلاتنا المختارة",
    genericTitle: "تنسيق راقي",
    announce_title: "هديتي للورود وتجهيز المناسبات",
    announce_shipping: "يوجد توصيل لجميع مناطق قطر",
    announce_location: "الموقع",
    brand_name: "هديتي",
    brand_sub: "للورود وتجهيز المناسبات في قطر",
    ig_followers: "متابع",
    ig_posts: "منشور",
    info_phone_lbl: "واتساب:",
    info_ig_lbl: "إنستجرام:",
    working_hours_lbl: "أوقات العمل:",
    working_hours_val: "السبت إلى الخميس 9:00 ص إلى 10:00 مساءً | الجمعة 3:00 ظهراً إلى 10:00 مساءً"
  },
  en: {
    siteTitle: "Hdyati | Flowers & Events in Qatar — Delivery All Areas",
    metaDesc: "Hdyati (@hdyati22) — Flowers & event arrangements in Qatar. Delivery to all Qatar areas. Order via WhatsApp 77403038. Al-Kharaitiyat, Commercial Street, Doha.",
    navHome: "Home",
    navGrad: "Graduation",
    navPromo: "Promotion",
    navWedding: "Weddings",
    navBirthday: "Birthdays",
    navHajj: "Hajj & Umrah",
    navGifts: "Gifts & Arrangements",
    btnSearch: "Search",
    searchPlaceholder: "Search bouquets, arrangements, gifts...",
    genericTitle: "Elegant Arrangement",
    cartTitle: "Your Order",
    cartEmpty: "Your cart is empty — browse our beautiful arrangements!",
    btnAddToCart: "Order Now",
    btnAddedToCart: "Added ✔",
    btnCheckout: "Complete Order via WhatsApp",
    btnContinueShopping: "Browse More",
    shipping: "Delivery (All Qatar):",
    free: "Free 🇶🇦",
    checkoutTitle: "Complete Your Order — Hdyati Team Will Contact You",
    clientName: "Your Name",
    clientPhone: "WhatsApp Number (Qatar)",
    clientAddress: "Your Area in Qatar (for delivery)",
    paymentMethod: "Payment Method",
    payApple: "Apple Pay",
    payCard: "Credit Card / Debit",
    payCod: "Cash on Delivery",
    btnPayNow: "Send Order to Hdyati",
    orderSuccessTitle: "Order Received! 🌸",
    orderSuccessDesc: "Thank you for choosing Hdyati 💜 Our team will contact you on WhatsApp shortly to confirm your order and delivery details.",
    orderReceipt: "Your Selected Items",
    orderNum: "Order #:",
    btnBackHome: "Browse More Arrangements",
    footerDesc: "Hdyati (@hdyati22) — Flowers & event arrangements with delivery to all Qatar areas. Order via WhatsApp.",
    footerContact: "Contact Us",
    footerAddress: "Al-Kharaitiyat, Commercial Street, Opposite Commercial Bank, Building No. 45, Office No. 1",
    footerRights: "All rights reserved © Hdyati 2026 | Qatar | @hdyati22",
    heroTitle: "Hdyati — Flowers & Event Arrangements",
    heroSub: "At Hdyati, we believe that a gift is not just an item, but a transfer of feelings. Since our establishment in 2021, we have excelled in crafting the most beautiful moments through luxury newborn arrangements and giveaways, charming graduation bouquets and collars, and innovative birthday gifts, alongside arranging your special occasions and events with the finest designs, and the most luxurious selections of chocolates and cakes. All of this is presented to you by a team of the most skilled professional florists to ensure elegant artistic touches, with a commitment to providing the best prices and the fastest delivery service covering all regions of Qatar to meet your expectations and make unforgettable memories.",
    catAll: "All",
    sortBy: "Filter",
    sortPopular: "Most Popular",
    toastAdded: "Added to your order!",
    featuredProducts: "Our Arrangements",
    announce_title: "Hdyati for Flowers & Events",
    announce_shipping: "Delivery to all regions of Qatar",
    announce_location: "Location",
    brand_name: "Hdyati",
    brand_sub: "Flowers & Event Arrangements in Qatar",
    ig_followers: "followers",
    ig_posts: "posts",
    info_phone_lbl: "WhatsApp:",
    info_ig_lbl: "Instagram:",
    working_hours_lbl: "Working Hours:",
    working_hours_val: "Saturday to Thursday 9:00 AM - 10:00 PM | Friday 3:00 PM - 10:00 PM"
  }
};

// --- APP STATE ---
let state = {
  lang: "ar",
  theme: "light",
  category: "all",
  searchQuery: "",
  sortBy: "popular",
  cart: [],
  wishlist: []
};

// --- DOM ELEMENTS ---
const elements = {
  html: document.documentElement,
  body: document.body,
  langBtn: document.getElementById("lang-btn"),
  themeBtn: document.getElementById("theme-btn"),
  
  // Navigation & Search
  searchBar: document.getElementById("search-bar"),
  searchBtn: document.getElementById("search-btn"),
  
  // Hero
  heroTitle: document.getElementById("hero-title"),
  heroSub: document.getElementById("hero-sub"),
  heroCta: document.getElementById("hero-cta"),
  
  // Categories Horizontal Links
  catScroll: document.getElementById("category-scroll"),
  
  // Catalog Controls & Products
  featuredTitle: document.getElementById("featured-title"),
  sortLabel: document.getElementById("sort-label"),
  sortSelect: document.getElementById("sort-select"),
  productsGrid: document.getElementById("products-grid"),
  
  // Cart Drawer
  cartToggleBtn: document.getElementById("cart-toggle-btn"),
  cartCountBadge: document.getElementById("cart-count-badge"),
  cartDrawer: document.getElementById("cart-drawer"),
  cartOverlay: document.getElementById("cart-overlay"),
  cartCloseBtn: document.getElementById("cart-close-btn"),
  cartDrawerTitle: document.getElementById("cart-drawer-title"),
  cartItemsContainer: document.getElementById("cart-items"),
  cartSummaryContainer: document.getElementById("cart-summary"),
  cartCheckoutBtn: document.getElementById("cart-checkout-btn"),
  
  // Footer
  footerDesc: document.getElementById("footer-desc"),
  footerContactH: document.getElementById("footer-contact-h"),
  footerAddressText: document.getElementById("footer-address-text"),
  footerRightsText: document.getElementById("footer-rights-text"),
  
  // Checkout Modal
  checkoutModal: document.getElementById("checkout-modal"),
  checkoutClose: document.getElementById("checkout-close"),
  checkoutFormTitle: document.getElementById("checkout-form-title"),
  checkoutForm: document.getElementById("checkout-form"),
  checkoutNameLabel: document.getElementById("checkout-name-label"),
  checkoutPhoneLabel: document.getElementById("checkout-phone-label"),
  checkoutAddressLabel: document.getElementById("checkout-address-label"),
  checkoutPayLabel: document.getElementById("checkout-pay-label"),
  checkoutBtnPay: document.getElementById("checkout-btn-pay"),
  
  // Success Modal
  successModal: document.getElementById("success-modal"),
  successTitle: document.getElementById("success-title"),
  successDesc: document.getElementById("success-desc"),
  successReceiptTitle: document.getElementById("success-receipt-title"),
  successReceiptDetails: document.getElementById("success-receipt-details"),
  successBackBtn: document.getElementById("success-back-btn"),
  
  // Lightbox Modal
  lightboxModal: document.getElementById("lightbox-modal"),
  lightboxClose: document.getElementById("lightbox-close"),
  lightboxImg: document.getElementById("lightbox-img"),
  
  toast: document.getElementById("toast")
};

// --- INITIALIZE APPLICATION ---
function init() {
  loadStateFromLocalStorage();
  bindEvents();
  updateLanguageUI();
  updateThemeUI();
  initHeroVideo();
}

function initHeroVideo() {
  // Only inject the heavy video element on screens wider than 768px to save mobile bandwidth
  if (window.innerWidth > 768) {
    const videoWrap = document.getElementById("hero-video-wrap");
    if (videoWrap) {
      videoWrap.innerHTML = `
        <video autoplay loop muted playsinline style="width: 100%; height: 100%; object-fit: cover; opacity: 0.5;">
          <source src="photo/WhatsApp Video 2026-06-09 at 8.59.28 AM.mp4" type="video/mp4">
        </video>
      `;
    }
  }
}

// --- SAVE / LOAD STATE ---
function saveStateToLocalStorage() {
  localStorage.setItem("hedyaty_cart", JSON.stringify(state.cart));
}

function loadStateFromLocalStorage() {
  const savedCart = localStorage.getItem("hedyaty_cart");
  if (savedCart) state.cart = JSON.parse(savedCart);
  
  const savedLang = localStorage.getItem("hdyati_lang");
  if (savedLang) state.lang = savedLang;
}

// --- BIND EVENT LISTENERS ---
function bindEvents() {
  elements.langBtn.addEventListener("click", toggleLanguage);
  elements.themeBtn.addEventListener("click", toggleTheme);
  
  if (elements.searchBtn) {
    elements.searchBtn.addEventListener("click", performSearch);
  }
  if (elements.searchBar) {
    elements.searchBar.addEventListener("keyup", (e) => {
      if (e.key === "Enter") performSearch();
    });
  }
  
  elements.sortSelect.addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    renderProducts();
  });
  
  elements.cartToggleBtn.addEventListener("click", toggleCartDrawer);
  elements.cartCloseBtn.addEventListener("click", toggleCartDrawer);
  elements.cartOverlay.addEventListener("click", toggleCartDrawer);
  elements.cartCheckoutBtn.addEventListener("click", openCheckoutModal);
  
  elements.checkoutClose.addEventListener("click", toggleCheckoutModal);
  elements.checkoutForm.addEventListener("submit", handleCheckoutSubmit);
  
  elements.successBackBtn.addEventListener("click", () => {
    elements.successModal.classList.remove("open");
  });
  
  elements.heroCta.addEventListener("click", (e) => {
    e.preventDefault();
    elements.productsGrid.scrollIntoView({ behavior: 'smooth' });
  });
  
  bindLightboxEvents();
}

// Navigation link clicks are handled by the category horizontal links scroll

// Bind Lightbox modal events
function bindLightboxEvents() {
  elements.lightboxClose.addEventListener("click", closeLightbox);
  elements.lightboxModal.addEventListener("click", (e) => {
    if (e.target === elements.lightboxModal) {
      closeLightbox();
    }
  });
}

// --- LIGHTBOX OPERATIONS ---
function openLightbox(imgSrc, title) {
  elements.lightboxImg.src = imgSrc;
  elements.lightboxImg.alt = title;
  elements.lightboxModal.classList.add("open");
  elements.body.style.overflow = "hidden";
}

function closeLightbox() {
  elements.lightboxModal.classList.remove("open");
  elements.body.style.overflow = "";
}

// --- TOGGLE CART DRAWER ---
function toggleCartDrawer() {
  elements.cartDrawer.classList.toggle("open");
  elements.cartOverlay.classList.toggle("open");
}

// --- SET DYNAMIC CATEGORIES ---
function setCategory(cat) {
  state.category = cat;
  
  const scrollBtns = elements.catScroll.querySelectorAll(".cat-scroll-btn");
  scrollBtns.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.cat === cat);
  });
  
  renderProducts();
}

function performSearch() {
  state.searchQuery = elements.searchBar.value.trim().toLowerCase();
  renderProducts();
}

// --- RENDER DYNAMIC CATEGORY SCROLL ---
function renderCategories() {
  const t = TRANSLATIONS[state.lang];
  const cats = [
    { id: "all", name: t.catAll, icon: "fa-border-all" },
    { id: "تخرج", name: t.navGrad, icon: "fa-graduation-cap" },
    { id: "ترقية", name: t.navPromo, icon: "fa-briefcase" },
    { id: "زواج", name: t.navWedding, icon: "fa-ring" },
    { id: "ميلاد", name: t.navBirthday, icon: "fa-cake-candles" },
    { id: "حج", name: t.navHajj, icon: "fa-kaaba" },
    { id: "هدية", name: t.navGifts, icon: "fa-gift" }
  ];
  
  elements.catScroll.innerHTML = "";
  cats.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = `cat-scroll-btn ${state.category === cat.id ? "active" : ""}`;
    btn.dataset.cat = cat.id;
    btn.innerHTML = `<i class="fas ${cat.icon}"></i> <span>${cat.name}</span>`;
    btn.addEventListener("click", () => {
      setCategory(cat.id);
      elements.productsGrid.scrollIntoView({ behavior: 'smooth' });
    });
    elements.catScroll.appendChild(btn);
  });
}

// --- RENDER DYNAMIC PRODUCTS CATALOG ---
function filterAndSortProducts() {
  const filtered = PRODUCTS.filter(prod => {
    const matchesCategory = state.category === "all" || prod.category === state.category;
    const matchesSearch = prod.title[state.lang].toLowerCase().includes(state.searchQuery);
    return matchesCategory && matchesSearch;
  });
  
  return filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
}

function orderProductWhatsApp(prodId) {
  const prod = PRODUCTS.find(p => p.id === prodId);
  if (!prod) return;
  const fullDomain = window.location.origin + window.location.pathname;
  const imageUrl = fullDomain + (fullDomain.endsWith("/") ? "" : "/") + prod.image;
  
  const orderMsg = state.lang === "ar"
    ? `السلام عليكم، أود طلب هذا المنتج من متجر هديتي 🌸\n\nكود المنتج: ${prod.id}\nرابط الصورة: ${imageUrl}`
    : `Hello, I would like to order this product from Hdyati Store 🌸\n\nProduct Code: ${prod.id}\nImage Link: ${imageUrl}`;
  
  const waUrl = `https://wa.me/97477403038?text=${encodeURIComponent(orderMsg)}`;
  window.open(waUrl, "_blank");
}

function createProductCard(prod, t) {
  const card = document.createElement("article");
  card.className = "product-card";
  card.innerHTML = `
    <div class="product-card-image" style="cursor: pointer;">
      <img class="lazy-image" src="${prod.image}" alt="${t.genericTitle}" loading="lazy" decoding="async" width="270" height="360">
    </div>
    <div class="product-card-content">
      <div class="product-card-footer">
        <button class="add-to-cart-btn" data-id="${prod.id}">
          <i class="fab fa-whatsapp"></i> <span>${t.btnAddToCart}</span>
        </button>
      </div>
    </div>
  `;
  
  card.querySelector(".product-card-image").addEventListener("click", () => {
    openLightbox(prod.image, prod.title[state.lang]);
  });
  
  card.querySelector(".add-to-cart-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    orderProductWhatsApp(prod.id);
  });
  
  return card;
}

function renderProducts() {
  const t = TRANSLATIONS[state.lang];
  const filtered = filterAndSortProducts();
  
  elements.productsGrid.innerHTML = "";
  if (filtered.length === 0) {
    elements.productsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">${state.lang === 'ar' ? 'لا توجد منتجات مطابقة للبحث.' : 'No products match your search.'}</p>`;
    return;
  }
  
  filtered.forEach(prod => {
    const card = createProductCard(prod, t);
    elements.productsGrid.appendChild(card);
  });
}

// --- SHOPPING CART OPERATIONS ---
function addToCart(prodId, buttonEl) {
  const t = TRANSLATIONS[state.lang];
  const prod = PRODUCTS.find(p => p.id === prodId);
  if (!prod) return;
  
  const cartItem = state.cart.find(item => item.id === prodId);
  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    state.cart.push({ id: prodId, quantity: 1 });
  }
  
  saveStateToLocalStorage();
  updateCartUI();
  showToast(t.toastAdded);
  animateAddToCartButton(buttonEl, t);
}

function animateAddToCartButton(buttonEl, t) {
  const originalHtml = buttonEl.innerHTML;
  buttonEl.innerHTML = `<i class="fas fa-check"></i> <span>${t.btnAddedToCart}</span>`;
  buttonEl.style.backgroundColor = "var(--success)";
  buttonEl.style.borderColor = "var(--success)";
  buttonEl.style.color = "#ffffff";
  buttonEl.disabled = true;
  
  setTimeout(() => {
    buttonEl.innerHTML = originalHtml;
    buttonEl.style.backgroundColor = "";
    buttonEl.style.borderColor = "";
    buttonEl.style.color = "";
    buttonEl.disabled = false;
  }, 1500);
}

function createCartItemRow(item, prod) {
  const div = document.createElement("div");
  div.className = "cart-item";
  const t = TRANSLATIONS[state.lang];
  div.innerHTML = `
    <img src="${prod.image}" alt="${t.genericTitle}">
    <div class="cart-item-details">
      <h4>${t.genericTitle} (${prod.id})</h4>
      <div class="cart-item-qty-ctrl">
        <button class="qty-btn minus" data-id="${item.id}"><i class="fas fa-minus"></i></button>
        <span>${item.quantity}</span>
        <button class="qty-btn plus" data-id="${item.id}"><i class="fas fa-plus"></i></button>
      </div>
    </div>
    <button class="cart-item-delete" data-id="${item.id}"><i class="far fa-trash-alt"></i></button>
  `;
  
  div.querySelector(".qty-btn.minus").addEventListener("click", () => adjustCartQuantity(item.id, -1));
  div.querySelector(".qty-btn.plus").addEventListener("click", () => adjustCartQuantity(item.id, 1));
  div.querySelector(".cart-item-delete").addEventListener("click", () => removeFromCart(item.id));
  
  return div;
}

function updateCartUI() {
  const t = TRANSLATIONS[state.lang];
  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  elements.cartCountBadge.innerText = totalCount;
  elements.cartCountBadge.style.display = totalCount > 0 ? "flex" : "none";
  
  elements.cartItemsContainer.innerHTML = "";
  if (state.cart.length === 0) {
    elements.cartItemsContainer.innerHTML = `<p style="text-align: center; padding: 40px 10px; color: var(--text-muted);">${t.cartEmpty}</p>`;
    elements.cartSummaryContainer.style.display = "none";
    elements.cartCheckoutBtn.style.display = "none";
    return;
  }
  
  elements.cartSummaryContainer.style.display = "block";
  elements.cartCheckoutBtn.style.display = "block";
  
  state.cart.forEach(item => {
    const prod = PRODUCTS.find(p => p.id === item.id);
    if (prod) {
      elements.cartItemsContainer.appendChild(createCartItemRow(item, prod));
    }
  });
  
  elements.cartSummaryContainer.innerHTML = `
    <div class="summary-row">
      <span>${t.shipping}</span>
      <strong style="color: var(--success);">${t.free}</strong>
    </div>
  `;
}

function adjustCartQuantity(prodId, amount) {
  const item = state.cart.find(i => i.id === prodId);
  if (!item) return;
  
  item.quantity += amount;
  if (item.quantity <= 0) {
    removeFromCart(prodId);
  } else {
    saveStateToLocalStorage();
    updateCartUI();
  }
}

function removeFromCart(prodId) {
  const idx = state.cart.findIndex(i => i.id === prodId);
  if (idx > -1) {
    state.cart.splice(idx, 1);
    saveStateToLocalStorage();
    updateCartUI();
  }
}

// --- CHECKOUT SIMULATION ---
function toggleCheckoutModal() {
  elements.checkoutModal.classList.toggle("open");
}

function openCheckoutModal() {
  toggleCartDrawer();
  toggleCheckoutModal();
}

function handleCheckoutSubmit(e) {
  e.preventDefault();
  
  const name = document.getElementById("client-name").value.trim();
  const phone = document.getElementById("client-phone").value.trim();
  const address = document.getElementById("client-address").value.trim();
  const payment = document.querySelector('input[name="payment"]:checked').value;
  
  if (!name || !phone || !address) {
    alert(state.lang === 'ar' ? 'الرجاء تعبئة كافة حقول التوصيل.' : 'Please fill all delivery fields.');
    return;
  }
  
  const orderNumber = "HD-" + Math.floor(100000 + Math.random() * 900000);
  const receiptHTML = buildReceiptHtml();
  const waUrl = buildWhatsAppLink(name, phone, address, payment, orderNumber);
  
  window.open(waUrl, "_blank");
  showSuccessUI(orderNumber, name, phone, address, receiptHTML);
  clearCartAndResetForm();
}

function buildReceiptHtml() {
  const t = TRANSLATIONS[state.lang];
  let html = `<div style="display:flex; flex-direction:column; gap:8px;">`;
  state.cart.forEach(item => {
    const prod = PRODUCTS.find(p => p.id === item.id);
    if (prod) {
      html += `
        <div style="display:flex; justify-content:space-between; font-size:0.88rem; border-bottom:1px dashed #eee; padding-bottom:6px;">
          <span>${t.genericTitle} (${prod.id})</span>
          <strong style="color:var(--primary);">× ${item.quantity}</strong>
        </div>
      `;
    }
  });
  html += `</div>`;
  return html;
}

function buildWhatsAppLink(name, phone, address, payment, orderNum) {
  let payText = "";
  if (payment === "apple") payText = "Apple Pay";
  else if (payment === "card") payText = state.lang === "ar" ? "بطاقة ائتمان / مدى" : "Credit Card / Debit";
  else payText = state.lang === "ar" ? "الدفع عند الاستلام" : "Cash on Delivery";

  const t = TRANSLATIONS[state.lang];
  let productsText = "";
  state.cart.forEach(item => {
    const prod = PRODUCTS.find(p => p.id === item.id);
    if (prod) {
      const fullDomain = window.location.origin + window.location.pathname;
      const imageUrl = fullDomain + (fullDomain.endsWith("/") ? "" : "/") + prod.image;
      productsText += `- ${t.genericTitle} (${prod.id}) × ${item.quantity}\n  رابط الصورة: ${imageUrl}\n`;
    }
  });

  const orderMsg = state.lang === "ar" 
    ? `طلب جديد من متجر هديتي 🌸\n\n👤 الاسم: ${name}\n📱 الجوال: ${phone}\n📍 العنوان: ${address}\n💳 الدفع: ${payText}\n\n📦 المنتجات المطلوبة:\n${productsText}\n🔢 رقم الطلب: ${orderNum}`
    : `New Order from Hdyati Store 🌸\n\n👤 Name: ${name}\n📱 Phone: ${phone}\n📍 Address: ${address}\n💳 Payment: ${payText}\n\n📦 Requested Products:\n${productsText}\n🔢 Order Number: ${orderNum}`;

  return `https://wa.me/97477403038?text=${encodeURIComponent(orderMsg)}`;
}

function showSuccessUI(orderNumber, name, phone, address, receiptHTML) {
  const t = TRANSLATIONS[state.lang];
  elements.successReceiptDetails.innerHTML = `
    <div style="background:var(--input-bg); border:1px solid var(--card-border); border-radius:12px; padding:15px; margin-bottom:15px;">
      <div style="font-weight:600; margin-bottom:8px;">${t.orderNum} <span style="color:var(--primary-reverse); font-weight:700;">${orderNumber}</span></div>
      <div style="font-size:0.85rem; color:var(--text-muted); margin-bottom:12px;">${name} | ${phone} | ${address}</div>
      ${receiptHTML}
    </div>
  `;
  elements.checkoutModal.classList.remove("open");
  elements.successModal.classList.add("open");
}

function clearCartAndResetForm() {
  state.cart = [];
  saveStateToLocalStorage();
  updateCartUI();
  elements.checkoutForm.reset();
}

// --- SWITCH LANGUAGES ---
function toggleLanguage() {
  state.lang = state.lang === "ar" ? "en" : "ar";
  localStorage.setItem("hdyati_lang", state.lang);
  updateLanguageUI();
}

function updateLanguageUI() {
  const t = TRANSLATIONS[state.lang];
  
  elements.html.setAttribute("lang", state.lang);
  elements.html.setAttribute("dir", state.lang === "ar" ? "rtl" : "ltr");
  document.title = t.siteTitle;
  
  elements.body.className = `${state.theme === "dark" ? "dark-mode" : ""} lang-${state.lang}`;
  elements.langBtn.innerHTML = state.lang === "ar" ? `<i class="fas fa-globe"></i> <span class="btn-text">English</span>` : `<i class="fas fa-globe"></i> <span class="btn-text">العربية</span>`;
  
  updateStaticTexts(t);
  updateCheckoutLabels(t);
  
  renderCategories();
  renderProducts();
  updateCartUI();
}

function updateStaticTexts(t) {
  // Translate all static elements decorated with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  if (elements.searchBar) elements.searchBar.placeholder = t.searchPlaceholder;
  if (elements.searchBtn) elements.searchBtn.innerText = t.btnSearch;
  
  elements.heroTitle.innerText = t.heroTitle;
  elements.heroSub.innerText = t.heroSub;
  elements.heroCta.innerText = t.btnContinueShopping;
  
  elements.featuredTitle.innerText = t.featuredProducts;
  elements.sortLabel.innerText = t.sortBy;
  elements.sortSelect.options[0].text = t.sortPopular;
  
  elements.cartDrawerTitle.innerText = t.cartTitle;
  elements.cartCheckoutBtn.innerText = t.btnCheckout;
  
  elements.footerDesc.innerText = t.footerDesc;
  elements.footerContactH.innerText = t.footerContact;
  elements.footerAddressText.innerHTML = `<a href="https://maps.google.com/?q=25.395779,51.422497" target="_blank" style="text-decoration: underline;">${t.footerAddress}</a>`;
  elements.footerRightsText.innerText = t.footerRights;
}

function updateCheckoutLabels(t) {
  elements.checkoutFormTitle.innerText = t.checkoutTitle;
  elements.checkoutNameLabel.innerText = t.clientName;
  elements.checkoutPhoneLabel.innerText = t.clientPhone;
  elements.checkoutAddressLabel.innerText = t.clientAddress;
  elements.checkoutPayLabel.innerText = t.paymentMethod;
  
  document.getElementById("pay-apple-lbl").innerText = t.payApple;
  document.getElementById("pay-card-lbl").innerText = t.payCard;
  document.getElementById("pay-cod-lbl").innerText = t.payCod;
  elements.checkoutBtnPay.innerText = t.btnPayNow;
  
  elements.successTitle.innerText = t.orderSuccessTitle;
  elements.successDesc.innerText = t.orderSuccessDesc;
  elements.successReceiptTitle.innerText = t.orderReceipt;
  elements.successBackBtn.innerText = t.btnBackHome;
  
  injectSEOStructuredData();
}

// --- SWITCH THEMES ---
function toggleTheme() {
  state.theme = state.theme === "light" ? "dark" : "light";
  updateThemeUI();
}

function updateThemeUI() {
  if (state.theme === "dark") {
    elements.body.classList.add("dark-mode");
    elements.themeBtn.innerHTML = `<i class="fas fa-sun"></i> <span class="btn-text">Light Mode</span>`;
  } else {
    elements.body.classList.remove("dark-mode");
    elements.themeBtn.innerHTML = `<i class="fas fa-moon"></i> <span class="btn-text">Dark Mode</span>`;
  }
}

// --- INJECT SEO JSON-LD STRUCTURED DATA SCHEMA ---
function buildSEOProductList() {
  return PRODUCTS.slice(0, 6).map((prod, idx) => ({
    "@type": "ListItem",
    "position": idx + 1,
    "item": {
      "@type": "Product",
      "name": prod.title[state.lang],
      "image": window.location.origin + "/" + prod.image,
      "offers": {
        "@type": "Offer",
        "priceCurrency": "QAR",
        "availability": "https://schema.org/InStock"
      }
    }
  }));
}

function injectSEOStructuredData() {
  const existingScript = document.getElementById("seo-schema-ld");
  if (existingScript) existingScript.remove();
  
  const t = TRANSLATIONS[state.lang];
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": t.featuredProducts,
    "description": t.metaDesc,
    "numberOfItems": PRODUCTS.length,
    "itemListElement": buildSEOProductList()
  };
  
  const script = document.createElement("script");
  script.id = "seo-schema-ld";
  script.type = "application/ld+json";
  script.innerHTML = JSON.stringify(schema, null, 2);
  document.head.appendChild(script);
}

// --- UTILS ---
function showToast(message) {
  elements.toast.querySelector("span").innerText = message;
  elements.toast.classList.add("show");
  
  setTimeout(() => {
    elements.toast.classList.remove("show");
  }, 3500);
}

// Run init on load
window.addEventListener("DOMContentLoaded", init);
