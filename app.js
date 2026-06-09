/**
 * Hdyati Flowers & Gifts - Application Scripts
 * Premium bilingual toggling, dynamic gallery filtering,
 * modal controller, and direct WhatsApp checkout automation.
 */

// --- Translation Dictionary ---
const translations = {
  ar: {
    nav_home: "الرئيسية",
    nav_about: "من نحن",
    nav_products: "تصنيفاتنا",
    nav_contact: "اتصل بنا",
    cta_order: "اطلب الآن",
    hero_tag: "مرحبًا بكم في هديتي",
    hero_title: "الهدية ليست مجرد غرض، بل هي مشاعر تُنقل",
    hero_desc: "باقات وتوزيعات المواليد الفاخرة، وعقود وباقات التخرج الساحرة، وهدايا أعياد الميلاد المبتكرة وتجهيز حفلاتكم بأرقى التصاميم وأفخم الكيك والشيكولاتة.",
    hero_btn_explore: "استكشف باقاتنا",
    hero_btn_contact: "تواصل معنا",
    about_tag: "قصتنا ولماذا نحن؟",
    about_title: "نحن نصيغ أجمل اللحظات ونبني ذكريات لا تُنسى",
    about_p1: "منذ تأسيسنا عام 2021، نتميز بصياغة أجمل اللحظات من خلال باقات وتوزيعات المواليد الفاخرة، وعقود وباقات التخرج الساحرة، وهدايا أعياد الميلاد المبتكرة، إلى جانب ترتيب مناسباتكم وتجهيز حفلاتكم بأرقى التصاميم، وأفخم تشكيلات الشيكولاتة والكيك.",
    about_p2: "كل هذا يقدمه لكم فريق من أمهر منسقي الورود المحترفين لنضمن لكم لمسات فنية راقية، مع الالتزام بتقديم أفضل الأسعار وأسرع خدمة توصيل تغطي جميع مناطق قطر لتلبي تطلعاتكم وتصنع ذكريات لا تُنسى.",
    badge_since: "منذ تأسيسنا",
    features_tag: "مميزاتنا",
    features_title: "لماذا يختارنا عملاؤنا؟",
    features_desc: "نسعى دائماً لتقديم الأفضل لضمان تجربة تسوق راقية وتوصيل مشاعركم بأدق التفاصيل.",
    feat1_title: "لمسات فنية محترفة",
    feat1_desc: "فريق من أمهر منسقي الورود المحترفين لابتكار تصاميم فريدة تناسب أذواقكم ومناسباتكم.",
    feat2_title: "توصيل سريع وموثوق",
    feat2_desc: "خدمة توصيل سريعة تغطي جميع مناطق قطر، لتصل هداياكم طازجة وبأبهى حلة وفي وقتها المحدد.",
    feat3_title: "أفضل الأسعار والقيمة",
    feat3_desc: "نجمع بين جودة التنسيق الاستثنائية والأسعار المنافسة التي تلائم تطلعاتكم بدون تنازل.",
    categories_tag: "معرض أعمالنا",
    categories_title: "تصفح تصنيفاتنا الاستثنائية",
    categories_desc: "اختر التصنيف المناسب لمناسبتك وتصفح التشكيلات التي صممناها بكل حب وإتقان.",
    cat_all: "الكل",
    cat_grad: "تخرج",
    cat_promo: "ترقية",
    cat_wedding: "زواج",
    cat_birthday: "أعياد ميلاد",
    cat_hajj: "حج وعمرة",
    cat_gifts: "هدايا ومناسبات",
    contact_tag: "تواصل معنا",
    contact_title: "نسعد بخدمتكم وتلبية طلباتكم",
    contact_desc: "تواصل معنا مباشرة عبر الهاتف أو الواتساب، أو قم بزيارة فرعنا في الخريطيات بقطر.",
    info_title: "معلومات الاتصال",
    info_phone_lbl: "الهاتف والواتساب",
    info_loc_lbl: "العنوان",
    info_loc_val: "الخريطيات - الشارع التجاري - مقابل البنك التجاري - بناية رقم ٤٥ مكتب رقم ١",
    info_map_link: "عرض على الخريطة",
    info_hours_lbl: "أوقات العمل",
    info_hours_val1: "السبت - الخميس: 9:00 صباحاً - 10:00 مساءً",
    info_hours_val2: "الجمعة: 3:00 ظهراً - 10:00 مساءً",
    info_socials_lbl: "تابعنا على",
    form_title: "أرسل لنا رسالة",
    form_desc: "سنتواصل معك في أقرب وقت ممكن للإجابة على جميع استفساراتك.",
    form_name_lbl: "الاسم بالكامل",
    form_name_placeholder: "أدخل اسمك الكريم",
    form_phone_lbl: "رقم الجوال",
    form_phone_placeholder: "مثال: 77403038",
    form_msg_lbl: "تفاصيل استفسارك أو مناسبتك",
    form_msg_placeholder: "اكتب لنا تفاصيل طلبك أو تجهيز الحفلة المطلوب...",
    form_submit: "إرسال عبر واتساب",
    footer_brand_desc: "نحن نؤمن أن الهدية ليست مجرد غرض، بل هي مشاعر تُنقل. نسعى لصناعة أجمل الذكريات من خلال باقاتنا الراقية وتصاميمنا الحصرية.",
    footer_links_heading: "روابط سريعة",
    footer_categories_heading: "تصنيفات الهدايا",
    footer_contact_heading: "تواصل معنا بقطر",
    footer_copy: "شركة هديتي للورود والهدايا. جميع الحقوق محفوظة.",
    footer_terms: "الشروط والأحكام",
    footer_privacy: "سياسة الخصوصية",
    modal_order_wa: "اطلب الآن عبر واتساب",
    quick_view_btn: "تفاصيل سريعة",
    error_fill_fields: "يرجى تعبئة جميع الحقول المطلوبة قبل الإرسال.",
    whatsapp_order_prefix: "مرحباً هديتي، أود الاستفسار عن باقة/تنسيق من قسم: ",
    whatsapp_contact_prefix: "مرحباً هديتي، أنا المهتم بـ: "
  },
  en: {
    nav_home: "Home",
    nav_about: "About Us",
    nav_products: "Categories",
    nav_contact: "Contact",
    cta_order: "Order Now",
    hero_tag: "Welcome to Hdyati",
    hero_title: "A gift is not just an item, it's a feeling conveyed",
    hero_desc: "Luxury newborn arrangements and giveaways, enchanting graduation bouquets, innovative birthday gifts, alongside arranging your special events with the finest chocolates and cakes.",
    hero_btn_explore: "Explore Bouquets",
    hero_btn_contact: "Contact Us",
    about_tag: "Our Story",
    about_title: "We craft beautiful moments and lasting memories",
    about_p1: "Since our establishment in 2021, we have stood out in Qatari florist industry by crafting the most beautiful moments. From premium baby gift arrangements to magnificent graduation flower sashes, creative birthday presents, and planning bespoke events with luxury sweets.",
    about_p2: "All of this is presented by a team of the most skilled professional flower designers, ensuring artistic touches, premium value, and fast delivery covering all regions of Qatar.",
    badge_since: "Since 2021",
    features_tag: "Our Values",
    features_title: "Why Choose Us?",
    features_desc: "We strive to deliver the absolute best to ensure your sentiments are conveyed with elegance and precision.",
    feat1_title: "Expert Floral Artists",
    feat1_desc: "A team of elite, creative florists dedicated to handcrafting bespoke designs tailored to your event.",
    feat2_title: "Fast Qatar Delivery",
    feat2_desc: "Reliable, express delivery service across all municipalities in Qatar, bringing flowers fresh and on time.",
    feat3_title: "Best Value & Price",
    feat3_desc: "Enjoy the perfect match between exceptional high-end florist design and competitive pricing scales.",
    categories_tag: "Our Portfolio",
    categories_title: "Browse Our Elegant Categories",
    categories_desc: "Select a category below to explore the customized arrangements we designed with absolute care.",
    cat_all: "All",
    cat_grad: "Graduation",
    cat_promo: "Promotion",
    cat_wedding: "Weddings",
    cat_birthday: "Birthdays",
    cat_hajj: "Hajj & Umrah",
    cat_gifts: "Gifts & Events",
    contact_tag: "Contact Us",
    contact_title: "We are Delighted to Serve You",
    contact_desc: "Reach out to us directly via phone or WhatsApp, or visit our retail branch in Al Kharaitiyat, Qatar.",
    info_title: "Contact Info",
    info_phone_lbl: "Phone & WhatsApp",
    info_loc_lbl: "Location Address",
    info_loc_val: "Al Kharaitiyat - Commercial Street - Opp. Commercial Bank - Bldg 45, Office 1",
    info_map_link: "View on Google Maps",
    info_hours_lbl: "Opening Hours",
    info_hours_val1: "Sat - Thu: 9:00 AM - 10:00 PM",
    info_hours_val2: "Friday: 3:00 PM - 10:00 PM",
    info_socials_lbl: "Follow Us On",
    form_title: "Send Us a Message",
    form_desc: "We will reach out to you shortly to answer any inquiries about your orders.",
    form_name_lbl: "Full Name",
    form_name_placeholder: "Enter your full name",
    form_phone_lbl: "Phone Number",
    form_phone_placeholder: "Example: 77403038",
    form_msg_lbl: "Inquiry or Event Details",
    form_msg_placeholder: "Write down your bouquet details or event organization requests...",
    form_submit: "Send via WhatsApp",
    footer_brand_desc: "We believe that a gift is not merely a physical object, but rather a package of emotions delivered. We strive to craft the best memories with our exquisite floral and premium setups.",
    footer_links_heading: "Quick Links",
    footer_categories_heading: "Gift Categories",
    footer_contact_heading: "Contact In Qatar",
    footer_copy: "Hdyati Flowers & Gifts Co. All Rights Reserved.",
    footer_terms: "Terms & Conditions",
    footer_privacy: "Privacy Policy",
    modal_order_wa: "Order via WhatsApp",
    quick_view_btn: "Quick View",
    error_fill_fields: "Please fill out all the required fields before submitting.",
    whatsapp_order_prefix: "Hello Hdyati, I would like to inquire about this bouquet/arrangement from category: ",
    whatsapp_contact_prefix: "Hello Hdyati, I am interested in: "
  }
};

// --- Product Data Catalog ---
const products = [
  // تخرج (Graduation)
  {
    id: "grad_1",
    category: "تخرج",
    img: "photo/تخرج/1.jpeg",
    titleAr: "باقة التخرج الكلاسيكية الفخمة",
    titleEn: "Luxury Classic Graduation Bouquet",
    descAr: "تنسيق كلاسيكي أنيق مصمم خصيصاً لمناسبات التخرج والنجاح السعيد.",
    descEn: "Elegant classic floral arrangement customized for graduation and success milestones."
  },
  {
    id: "grad_2",
    category: "تخرج",
    img: "photo/تخرج/WhatsApp Image 2026-06-09 at 8.59.18 AM.jpeg",
    titleAr: "طوق تخرج ملكي بالورد الطبيعي المنعش",
    titleEn: "Royal Graduation Floral Collar",
    descAr: "طوق تخرج مميز بالورود والرياحين العطرة يطوق النجاح بجمال الطبيعة.",
    descEn: "Premium floral collar handcrafted with fresh fragrant blooms to honor graduation success."
  },
  {
    id: "grad_3",
    category: "تخرج",
    img: "photo/تخرج/WhatsApp Image 2026-06-09 at 8.59.21 AM.jpeg",
    titleAr: "بوكيه التخرج الفاخر بألوان متناسقة",
    titleEn: "Premium Graduation Bouquet",
    descAr: "مزيج متناسق من الجوري الفخم لتهنئة من تحب بتخرجهم الفريد.",
    descEn: "A magnificent blend of royal roses to congratulate your loved ones on their graduation."
  },
  {
    id: "grad_4",
    category: "تخرج",
    img: "photo/تخرج/WhatsApp Image 2026-06-09 at 8.59.22 AM (2).jpeg",
    titleAr: "تنسيق تخرج أنيق بالورود البيضاء والذهبية",
    titleEn: "Elegant White Graduation Arrangement",
    descAr: "تنسيق راقي يجمع بين نقاء اللون الأبيض وبريق التخرج المبهج.",
    descEn: "A refined arrangement combining pure white florals with celebratory golden accents."
  },
  {
    id: "grad_5",
    category: "تخرج",
    img: "photo/تخرج/WhatsApp Image 2026-06-09 at 8.59.23 AM.jpeg",
    titleAr: "باقة تخرج متكاملة مع وشاح التخرج الحريري",
    titleEn: "Complete Graduation Bouquet with Sash",
    descAr: "باقة حالمة تجمع بين جمال الورد وأناقة وشاح التخرج الحريري المطبوع.",
    descEn: "A dreamy bouquet featuring beautiful flowers paired with an elegant silk graduation sash."
  },

  // ترقية (Promotion)
  {
    id: "promo_1",
    category: "ترقية",
    img: "photo/ترقية/WhatsApp Image 2026-06-09 at 8.59.25 AM (2).jpeg",
    titleAr: "تنسيق ترقية رسمي فاخر للمكاتب",
    titleEn: "Official Luxury Promotion Setup",
    descAr: "تنسيق وقور بالورود الكلاسيكية الفخمة لتقديم التهاني بمناسبة الترقية الجديدة.",
    descEn: "A majestic arrangement of classic flowers perfect for office promotion congratulations."
  },
  {
    id: "promo_2",
    category: "ترقية",
    img: "photo/ترقية/WhatsApp Image 2026-06-09 at 8.59.26 AM (1).jpeg",
    titleAr: "بوكيه تهنئة بالترقية والمناصب الجديدة",
    titleEn: "Congratulatory Promotion Bouquet",
    descAr: "زهور موسمية فاخرة تعبر عن أرقى الأمنيات بمستقبل مهني باهر.",
    descEn: "Seasonal luxury flowers conveying best wishes for a stellar professional future."
  },
  {
    id: "promo_3",
    category: "ترقية",
    img: "photo/ترقية/WhatsApp Image 2026-06-09 at 8.59.26 AM (2).jpeg",
    titleAr: "تنسيق زهور مكتبية فاخرة مع حامل راقي",
    titleEn: "Luxurious Desk Floral Arrangement",
    descAr: "تنسيق زهور متناسق ومستدام للمكاتب التنفيذية يبعث على التفاؤل والجمال.",
    descEn: "Corporate-style floral setup on an elegant stand to elevate executive office environments."
  },
  {
    id: "promo_4",
    category: "ترقية",
    img: "photo/ترقية/WhatsApp Image 2026-06-09 at 8.59.28 AM (1).jpeg",
    titleAr: "قاعدة خشبية ريفية مع ورود الترقية",
    titleEn: "Rustic Wooden Base Promotion Flowers",
    descAr: "دمج بين فخامة الخشب الطبيعي وجاذبية الورود الملونة لتهنئة راقية.",
    descEn: "Rustic natural wood elements combined with premium vibrant flowers for unique congratulations."
  },
  {
    id: "promo_5",
    category: "ترقية",
    img: "photo/ترقية/WhatsApp Image 2026-06-09 at 8.59.28 AM.jpeg",
    titleAr: "باقة ورد التهنئة الذهبية الفاخرة",
    titleEn: "Golden Congratulatory Floral Arrangement",
    descAr: "باقة باهرة باللونين الأصفر والذهبي ترمز للنجاح والتفوق المهني.",
    descEn: "A beautiful yellow and gold arrangement symbolizing professional achievement and victory."
  },

  // حج وعمرة (Hajj)
  {
    id: "hajj_1",
    category: "حج",
    img: "photo/حج/WhatsApp Image 2026-06-09 at 8.59.20 AM.jpeg",
    titleAr: "تنسيق استقبال الحجاج الفاخر بالبياض والنقاء",
    titleEn: "Luxury Hajj Welcome Setup",
    descAr: "تنسيق استقبال روحاني رائع بالورود البيضاء والعبارات الترحيبية المميزة.",
    descEn: "A magnificent spiritual welcoming setup with pure white flowers and Hajj greeting cards."
  },
  {
    id: "hajj_2",
    category: "حج",
    img: "photo/حج/WhatsApp Image 2026-06-09 at 8.59.29 AM (2).jpeg",
    titleAr: "باقة عودة الحج المبارك والتهاني الطيبة",
    titleEn: "Blessed Hajj Return Bouquet",
    descAr: "باقة فخمة ترحب بعودة ضيوف الرحمن لتقديم التهاني بحج مبرور وسعي مشكور.",
    descEn: "Congratulate pilgrims returning from their sacred journey with this blessed floral display."
  },
  {
    id: "hajj_3",
    category: "حج",
    img: "photo/حج/WhatsApp Image 2026-06-09 at 8.59.31 AM (1).jpeg",
    titleAr: "هدية الحج الروحانية بالورود وأبخرة العود",
    titleEn: "Spiritual Hajj Gift with Flowers",
    descAr: "صندوق هدايا فريد يجمع بين الورود البيضاء العطرة والعود الفاخر للمباركة بالحج.",
    descEn: "A unique gift box combining fragrant white roses and incense for returning Hajj pilgrims."
  },
  {
    id: "hajj_4",
    category: "حج",
    img: "photo/حج/WhatsApp Image 2026-06-09 at 8.59.32 AM (1).jpeg",
    titleAr: "تنسيق تهنئة العمرة الفاخر والتصميم العصري",
    titleEn: "Premium Umrah Congratulation Design",
    descAr: "تنسيق ناعم من الروز الأبيض والأغصان الخضراء للتهنئة بالعمرة المقبولة.",
    descEn: "A delicate design of white roses and lush greenery congratulating an accepted Umrah."
  },
  {
    id: "hajj_5",
    category: "حج",
    img: "photo/حج/WhatsApp Image 2026-06-09 at 8.59.32 AM.jpeg",
    titleAr: "باقة الكعبة المشرفة التذكارية الفريدة",
    titleEn: "Kaaba Memorial Flower Arrangement",
    descAr: "تصميم خاص باللونين الأسود والذهبي تعبيراً عن حب مكة المكرمة الكعبة المشرفة.",
    descEn: "A custom floral piece themed in black and gold inspired by the Holy Kaaba."
  },

  // زواج (Wedding)
  {
    id: "wed_1",
    category: "زواج",
    img: "photo/زواج/WhatsApp Image 2026-06-09 at 8.59.20 AM (3).jpeg",
    titleAr: "مسكة عروس كلاسيكية فاخرة بالبيوني والجوري",
    titleEn: "Classic Luxury Bridal Bouquet",
    descAr: "تنسيق يدوي فائق الجودة يضفي جمالاً استثنائياً على العروس في ليلة العمر.",
    descEn: "Exquisite hand-tied bridal bouquet adding exceptional elegance to the bride's big day."
  },
  {
    id: "wed_2",
    category: "زواج",
    img: "photo/زواج/WhatsApp Image 2026-06-09 at 8.59.21 AM (2).jpeg",
    titleAr: "تنسيق طاولة زفاف ملكي بالزهور المتدلية",
    titleEn: "Royal Wedding Table Centerpiece",
    descAr: "تنسيقات زهور فاخرة للصالات وطاولات الحفلات تزيد الزفاف بهاءً ورونقاً.",
    descEn: "Opulent table floral arrangements adding premium scale and design to wedding halls."
  },
  {
    id: "wed_3",
    category: "زواج",
    img: "photo/زواج/WhatsApp Image 2026-06-09 at 8.59.29 AM (1).jpeg",
    titleAr: "باقة خطوبة رومانسية بالورود الوردية الناعمة",
    titleEn: "Engagement Bouquet with Pink Roses",
    descAr: "مزيج ساحر من درجات الوردي لتوثيق لحظات الخطوبة الرومانسية الدافئة.",
    descEn: "A charming blend of pink shades designed to celebrate romantic engagement moments."
  },
  {
    id: "wed_4",
    category: "زواج",
    img: "photo/زواج/WhatsApp Image 2026-06-09 at 8.59.31 AM (2).jpeg",
    titleAr: "طوق زهور زفاف فاخر لتزيين الممرات والسيارات",
    titleEn: "Luxury Wedding Floral Crown & Decor",
    descAr: "أكاليل زهور وتنسيقات حصرية لتزيين سيارات الزفاف وممرات استقبال الضيوف.",
    descEn: "Luxury floral wreaths and garlands crafted to decorate wedding cars and guest pathways."
  },

  // أعياد ميلاد (Birthday)
  {
    id: "bday_1",
    category: "ميلاد",
    img: "photo/ميلاد/WhatsApp Image 2026-06-09 at 8.59.19 AM.jpeg",
    titleAr: "صندوق ورد عيد الميلاد مع بالون التهنئة المخصص",
    titleEn: "Birthday Box with Flowers & Balloon",
    descAr: "صندوق جلدي فاخر يدمج رقة الورد وجاذبية البالون الطائر المطبوع بالاسم.",
    descEn: "A luxury leather box combining delicate flowers and a customized floating helium balloon."
  },
  {
    id: "bday_2",
    category: "ميلاد",
    img: "photo/ميلاد/WhatsApp Image 2026-06-09 at 8.59.22 AM.jpeg",
    titleAr: "باقة ألوان الحياة المبهجة لأعياد الميلاد",
    titleEn: "Joyful Colors of Life Bouquet",
    descAr: "مجموعة زهور ملونة ونابضة بالحياة تشيع البهجة والاحتفال بميلاد من تحب.",
    descEn: "Vibrant and colorful floral collection radiating joy for a loved one's birthday."
  },
  {
    id: "bday_3",
    category: "ميلاد",
    img: "photo/ميلاد/WhatsApp Image 2026-06-09 at 8.59.24 AM (2).jpeg",
    titleAr: "سلة زهور أعياد الميلاد الفاخرة بتنسيق عصري",
    titleEn: "Luxury Birthday Flower Basket",
    descAr: "سلة من القش الطبيعي منسقة بورود الجوري والأنثوريوم لتهنئة مميزة.",
    descEn: "Natural wicker basket styled with roses and anthuriums for a beautiful birthday gift."
  },
  {
    id: "bday_4",
    category: "ميلاد",
    img: "photo/ميلاد/WhatsApp Image 2026-06-09 at 8.59.24 AM.jpeg",
    titleAr: "تنسيق عيد ميلاد ملكي بالورد الأحمر الكلاسيكي",
    titleEn: "Red Roses Birthday Arrangement",
    descAr: "عبر عن أسمى مشاعرك بالورد الأحمر الراقية المنسقة في فازة زجاجية.",
    descEn: "Convey your deepest emotions with classic red roses arranged in an elegant glass vase."
  },
  {
    id: "bday_5",
    category: "ميلاد",
    img: "photo/ميلاد/WhatsApp Image 2026-06-09 at 8.59.25 AM.jpeg",
    titleAr: "باقة الشوكولاتة الفاخرة والزهور المختلطة",
    titleEn: "Chocolate & Mixed Flowers Bouquet",
    descAr: "الهدية المثالية التي تجمع بين جمال الورد الطبيعي ولذة الشوكولاتة الفخمة.",
    descEn: "The perfect birthday gift combining gorgeous fresh flowers and premium chocolates."
  },
  {
    id: "bday_6",
    category: "ميلاد",
    img: "photo/ميلاد/WhatsApp Image 2026-06-09 at 8.59.27 AM (1).jpeg",
    titleAr: "تنسيق عيد ميلاد بناتي وردي ناعم ورقيق",
    titleEn: "Feminine Pink Birthday Arrangement",
    descAr: "تنسيق مبهج بألوان الباستيل الوردية يعبر عن الرقة والدلال لرفيقة دربك.",
    descEn: "A cheerful pastel pink design conveying tenderness and joy for her birthday."
  },
  {
    id: "bday_7",
    category: "ميلاد",
    img: "photo/ميلاد/WhatsApp Image 2026-06-09 at 8.59.27 AM.jpeg",
    titleAr: "صندوق هدايا عيد ميلاد متكامل بالزهور والعطور",
    titleEn: "All-in-One Birthday Gift Box",
    descAr: "علبة فاخرة مصممة بعناية تضم باقة زهور وشوكولاتة أو عطر حسب اختياركم.",
    descEn: "Bespoke gift box containing fresh flowers paired with chocolates or perfume."
  },
  {
    id: "bday_8",
    category: "ميلاد",
    img: "photo/ميلاد/WhatsApp Image 2026-06-09 at 8.59.30 AM (1).jpeg",
    titleAr: "بوكيه عيد ميلاد ملكي بلمسات الذهب الفاتن",
    titleEn: "Royal Golden Birthday Bouquet",
    descAr: "أوراق ذهبية منسقة مع الجوري الداكن يعطي طابع الملوك والأناقة الفائقة.",
    descEn: "Golden foliage combined with dark velvet roses for a royal birthday masterpiece."
  },
  {
    id: "bday_9",
    category: "ميلاد",
    img: "photo/ميلاد/WhatsApp Image 2026-06-09 at 8.59.31 AM.jpeg",
    titleAr: "سلة ورود الربيع للأعياد واللحظات السعيدة",
    titleEn: "Spring Flowers Birthday Basket",
    descAr: "ورود متفتحة تشيع عبق الربيع والألوان النضرة لتزين يوم الميلاد.",
    descEn: "Freshly blossomed spring flowers in a beautiful arrangement celebrating new beginnings."
  },

  // هدايا ومناسبات (Gift)
  {
    id: "gift_1",
    category: "هدية",
    img: "photo/هدية/WhatsApp Image 2026-06-09 at 8.59.20 AM (1).jpeg",
    titleAr: "تنسيق هدايا استقبال مواليد فاخر بقطر",
    titleEn: "Premium Newborn Gift Setup",
    descAr: "تصميم أنيق يتناسب مع فرحة قدوم المولود الجديد، مع توزيعات وبطاقة ترحيب.",
    descEn: "An elegant setup to celebrate the arrival of the newborn, complete with cards and favors."
  },
  {
    id: "gift_2",
    category: "هدية",
    img: "photo/هدية/WhatsApp Image 2026-06-09 at 8.59.20 AM (2).jpeg",
    titleAr: "هدية شيكولاتة فاخرة، كيك وتنسيق ورد متكامل",
    titleEn: "Chocolate, Cake & Floral Gift Combo",
    descAr: "أقوى توليفة للمناسبات تجمع بين الكيك الفخم والشوكولاتة والزهور الرائعة.",
    descEn: "The ultimate celebration package combining rich cake, luxury chocolates, and fresh flowers."
  },
  {
    id: "gift_3",
    category: "هدية",
    img: "photo/هدية/WhatsApp Image 2026-06-09 at 8.59.22 AM (1).jpeg",
    titleAr: "توزيعات مناسبات فاخرة وتصاميم مخصصة",
    titleEn: "Luxurious Occasion Giveaways",
    descAr: "توزيعات صغيرة وباقات منسقة بحرفية لتوزيعها على ضيوف حفلاتكم وتجهيزاتكم.",
    descEn: "Chic mini floral arrangements and customized favors for your event guests."
  },
  {
    id: "gift_4",
    category: "هدية",
    img: "photo/هدية/WhatsApp Image 2026-06-09 at 8.59.23 AM (1).jpeg",
    titleAr: "هدية تذكارية مخصصة بالورود والبراويز الفنية",
    titleEn: "Customized Memorial Gift with Flowers",
    descAr: "تنسيق فريد يدمج بين إطار الصورة التذكارية وتنسيق ورد طبيعي يعيش طويلاً.",
    descEn: "A unique floral design featuring a photo frame embedded with long-lasting roses."
  },
  {
    id: "gift_5",
    category: "هدية",
    img: "photo/هدية/WhatsApp Image 2026-06-09 at 8.59.23 AM (2).jpeg",
    titleAr: "صندوق الهدايا الخشبي الفخم بتنسيق الورد الطبيعي",
    titleEn: "Luxury Wooden Gift Box Setup",
    descAr: "علبة خشبية عتيقة فخمة مليئة بالورود والحلويات الراقية للتعبير عن التقدير.",
    descEn: "Vintage wooden box loaded with beautiful flowers and sweets expressing true appreciation."
  },
  {
    id: "gift_6",
    category: "هدية",
    img: "photo/هدية/WhatsApp Image 2026-06-09 at 8.59.24 AM (1).jpeg",
    titleAr: "باقة زهور المناسبات الكبرى وحفلات الاستقبال",
    titleEn: "Grand Occasion Floral Bouquet",
    descAr: "باقة عملاقة من الزهور المنوعة والمستوردة خصيصاً للمناسبات الراقية بقطر.",
    descEn: "Giant luxury bouquet handcrafted with imported florals for major Qatari events."
  },
  {
    id: "gift_7",
    category: "هدية",
    img: "photo/هدية/WhatsApp Image 2026-06-09 at 8.59.25 AM (1).jpeg",
    titleAr: "تنسيق هدايا العيد والتهاني الاجتماعية المميزة",
    titleEn: "Holiday & Congratulations Gift Setup",
    descAr: "تنسيق حصري للمعايدات والزيارات العائلية يضفي طابع الفخامة والأصالة.",
    descEn: "An exclusive design for holidays and family visits bringing warmth and prestige."
  },
  {
    id: "gift_8",
    category: "هدية",
    img: "photo/هدية/WhatsApp Image 2026-06-09 at 8.59.26 AM.jpeg",
    titleAr: "توزيعات مواليد راقية وتجهيز غرف استقبال بقطر",
    titleEn: "Elegant Newborn Celebration Giveaways",
    descAr: "نهتم بأدق التفاصيل لتجهيز غرف استقبال المواليد مع أرقى صواني التوزيعات.",
    descEn: "Premium newborn room setup services including luxury customized favor trays."
  },
  {
    id: "gift_9",
    category: "هدية",
    img: "photo/هدية/WhatsApp Image 2026-06-09 at 8.59.29 AM.jpeg",
    titleAr: "تنسيق هدايا فاخرة مع كيك وحلويات الحفلات",
    titleEn: "Premium Gift Arrangement with Cake",
    descAr: "بوكس هدايا غني ومبتكر يجمع الكيك اللذيذ وتنسيق ورود الجوري الفاتنة.",
    descEn: "Rich gift box featuring a delicious cake and beautiful red roses arrangement."
  },
  {
    id: "gift_10",
    category: "هدية",
    img: "photo/هدية/WhatsApp Image 2026-06-09 at 8.59.30 AM (2).jpeg",
    titleAr: "هدية مولود جديد ملكية باللونين الأزرق والوردي",
    titleEn: "Royal Newborn Baby Celebration Gift",
    descAr: "تنسيق هدايا للمواليد الجدد بتصاميم حصرية وفخمة بالورد والملابس الأنيقة.",
    descEn: "Luxury newborn gifts with customized floral and premium baby clothing styling."
  },
  {
    id: "gift_11",
    category: "هدية",
    img: "photo/هدية/WhatsApp Image 2026-06-09 at 8.59.30 AM.jpeg",
    titleAr: "صينية تقديم شيكولاتة وتنسيق ورد للضيوف",
    titleEn: "Chocolate Serving Tray & Flowers Combo",
    descAr: "تنسيق صينية شوكولاتة فاخرة مدمجة مع باقات زهور لتزيين مجالسكم الكريمة.",
    descEn: "Elegant Qatari style chocolate serving tray integrated with premium floral decors."
  }
];

// --- Application State ---
let currentLang = localStorage.getItem("hdyati_lang") || "ar";

// --- DOM Elements Cache ---
const elements = {
  header: document.getElementById("header"),
  langToggle: document.getElementById("lang-toggle"),
  langText: document.getElementById("lang-text"),
  menuToggle: document.getElementById("menu-toggle"),
  navMenu: document.getElementById("nav-menu"),
  galleryGrid: document.getElementById("gallery-grid"),
  filterButtons: document.querySelectorAll(".filter-btn"),
  modal: document.getElementById("quick-view-modal"),
  modalImg: document.getElementById("modal-img"),
  modalCat: document.getElementById("modal-cat"),
  modalTitle: document.getElementById("modal-title"),
  modalDesc: document.getElementById("modal-desc"),
  modalClose: document.getElementById("modal-close"),
  modalOrderBtn: document.getElementById("modal-order-btn"),
  contactForm: document.getElementById("contact-form"),
  backToTop: document.getElementById("back-to-top"),
  yearSpan: document.getElementById("year"),
  formName: document.getElementById("form-name"),
  formPhone: document.getElementById("form-phone"),
  formMessage: document.getElementById("form-message")
};

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  setLanguage(currentLang);
  setupEventListeners();
  renderGallery("all");
  updateYear();
});

// --- Update Current Copyright Year ---
function updateYear() {
  if (elements.yearSpan) {
    elements.yearSpan.textContent = new Date().getFullYear();
  }
}

// --- Event Listeners Setup ---
function setupEventListeners() {
  // Lang Toggle
  if (elements.langToggle) {
    elements.langToggle.addEventListener("click", toggleLanguage);
  }

  // Mobile Menu Toggler
  if (elements.menuToggle && elements.navMenu) {
    elements.menuToggle.addEventListener("click", () => {
      elements.menuToggle.classList.toggle("active");
      elements.navMenu.classList.toggle("active");
    });

    // Close menu when clicking links
    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        elements.menuToggle.classList.remove("active");
        elements.navMenu.classList.remove("active");
      });
    });
  }

  // Header Scroll Shadow
  window.addEventListener("scroll", handleHeaderScroll);

  // Gallery Filter Buttons
  elements.filterButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const filter = e.currentTarget.getAttribute("data-filter");
      
      elements.filterButtons.forEach(b => b.classList.remove("active"));
      e.currentTarget.classList.add("active");
      
      renderGallery(filter);
    });
  });

  // Modal Close Actions
  if (elements.modalClose) {
    elements.modalClose.addEventListener("click", closeModal);
  }
  if (elements.modal) {
    elements.modal.addEventListener("click", (e) => {
      if (e.target === elements.modal) closeModal();
    });
  }

  // Back to Top Scroll
  if (elements.backToTop) {
    elements.backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Contact Form Custom WhatsApp Redirect
  if (elements.contactForm) {
    elements.contactForm.addEventListener("submit", handleContactSubmit);
  }
}

// --- Header Scroll Behavior ---
function handleHeaderScroll() {
  if (window.scrollY > 50) {
    elements.header.classList.add("scrolled");
    elements.backToTop.classList.add("active");
  } else {
    elements.header.classList.remove("scrolled");
    elements.backToTop.classList.remove("active");
  }
}

// --- Bilingual Switcher Logic ---
function toggleLanguage() {
  currentLang = currentLang === "ar" ? "en" : "ar";
  localStorage.setItem("hdyati_lang", currentLang);
  setLanguage(currentLang);
  
  // Re-render gallery to update card text
  const activeFilterBtn = document.querySelector(".filter-btn.active");
  const activeFilter = activeFilterBtn ? activeFilterBtn.getAttribute("data-filter") : "all";
  renderGallery(activeFilter);
}

function setLanguage(lang) {
  const html = document.documentElement;
  html.setAttribute("lang", lang);
  html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  
  // Update lang toggle text and button layout
  if (elements.langText) {
    elements.langText.textContent = lang === "ar" ? "English" : "العربية";
  }

  // Translate static data-i18n items
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update inputs placeholder
  updatePlaceholders(lang);
}

// Update form input placeholders dynamically
function updatePlaceholders(lang) {
  if (elements.formName) {
    elements.formName.placeholder = translations[lang].form_name_placeholder;
  }
  if (elements.formPhone) {
    elements.formPhone.placeholder = translations[lang].form_phone_placeholder;
  }
  if (elements.formMessage) {
    elements.formMessage.placeholder = translations[lang].form_msg_placeholder;
  }
}

// --- Render Gallery Items dynamically ---
function renderGallery(filter) {
  if (!elements.galleryGrid) return;
  
  // Clear existing items
  elements.galleryGrid.innerHTML = "";
  
  // Filter products
  const filteredProducts = filter === "all" 
    ? products 
    : products.filter(p => p.category === filter);
    
  // Append items
  filteredProducts.forEach(prod => {
    const card = document.createElement("div");
    card.className = "gallery-item";
    
    const title = currentLang === "ar" ? prod.titleAr : prod.titleEn;
    const catText = translations[currentLang][`cat_${prod.category === "ميلاد" ? "birthday" : prod.category === "حج" ? "hajj" : prod.category === "زواج" ? "wedding" : prod.category === "تخرج" ? "grad" : prod.category === "ترقية" ? "promo" : "gifts"}`];
    
    card.innerHTML = `
      <div class="gallery-img-wrapper">
        <img class="gallery-img" src="${prod.img}" alt="${title}" loading="lazy">
        <div class="gallery-img-overlay">
          <button class="gallery-action-btn" onclick="openQuickView('${prod.id}')" aria-label="${translations[currentLang].quick_view_btn}">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
      <div class="gallery-info">
        <span class="gallery-cat">${catText}</span>
        <h3 class="gallery-title">${title}</h3>
        <button class="gallery-details-btn" onclick="openQuickView('${prod.id}')">
          <i class="fa-solid fa-circle-info"></i>
          <span>${translations[currentLang].quick_view_btn}</span>
        </button>
      </div>
    `;
    elements.galleryGrid.appendChild(card);
  });
}

// Make openQuickView globally accessible
window.openQuickView = function(productId) {
  const prod = products.find(p => p.id === productId);
  if (!prod) return;
  
  const title = currentLang === "ar" ? prod.titleAr : prod.titleEn;
  const desc = currentLang === "ar" ? prod.descAr : prod.descEn;
  const catKey = prod.category === "ميلاد" ? "birthday" : prod.category === "حج" ? "hajj" : prod.category === "زواج" ? "wedding" : prod.category === "تخرج" ? "grad" : prod.category === "ترقية" ? "promo" : "gifts";
  const catText = translations[currentLang][`cat_${catKey}`];
  
  if (elements.modalImg) elements.modalImg.src = prod.img;
  if (elements.modalCat) elements.modalCat.textContent = catText;
  if (elements.modalTitle) elements.modalTitle.textContent = title;
  if (elements.modalDesc) elements.modalDesc.textContent = desc;
  
  // Format WhatsApp Checkout Link
  // Qatari Shop number: 77403038 (International: +97477403038)
  const fullDomain = window.location.origin + window.location.pathname;
  const imageUrl = fullDomain + (fullDomain.endsWith("/") ? "" : "/") + prod.img;
  const textPrefix = translations[currentLang].whatsapp_order_prefix;
  
  const waMsg = `${textPrefix}${catText} (${title}).\nرابط الصورة: ${imageUrl}`;
  const encodedMsg = encodeURIComponent(waMsg);
  
  if (elements.modalOrderBtn) {
    elements.modalOrderBtn.href = `https://wa.me/97477403038?text=${encodedMsg}`;
  }
  
  if (elements.modal) {
    elements.modal.classList.add("active");
    document.body.style.overflow = "hidden"; // disable scroll
  }
};

// Make filterGallery globally accessible for footer link clicks
window.filterGallery = function(category) {
  // Find filter button and click it
  const filterBtn = document.querySelector(`.filter-btn[data-filter="${category}"]`);
  if (filterBtn) {
    filterBtn.click();
  }
};

function closeModal() {
  if (elements.modal) {
    elements.modal.classList.remove("active");
    document.body.style.overflow = ""; // restore scroll
  }
}

// --- Contact Form Submission Handler ---
function handleContactSubmit(e) {
  e.preventDefault();
  
  const name = elements.formName ? elements.formName.value.trim() : "";
  const phone = elements.formPhone ? elements.formPhone.value.trim() : "";
  const message = elements.formMessage ? elements.formMessage.value.trim() : "";
  
  if (!name || !phone || !message) {
    alert(translations[currentLang].error_fill_fields);
    return;
  }
  
  // Assemble custom Qatari-friendly message
  const welcomeText = translations[currentLang].whatsapp_contact_prefix;
  const fullMessage = `${welcomeText}\n👤 الاسم: ${name}\n📱 الجوال: ${phone}\n💬 الاستفسار: ${message}`;
  
  const encodedText = encodeURIComponent(fullMessage);
  const waUrl = `https://wa.me/97477403038?text=${encodedText}`;
  
  // Open WhatsApp in a new window/tab
  window.open(waUrl, "_blank");
  
  // Reset Form
  elements.contactForm.reset();
}
