/* =========================================================
   DR. REHAM KOLIB — WEBSITE INTERACTIVE SCRIPT
========================================================= */

const translations = {
    en: {
        brand: "Dr. Reham",
        sidebarTitle: "Where Skin Health Meets Beauty",

        navHome: "Home",
        navAbout: "About",
        navProjects: "Results",
        navContact: "Contact",
        navTreatments: "Treatments",
        navJourney: "Your Journey",
        navFaq: "FAQ",

        heroEyebrow: "Clinical dermatology · Aesthetic medicine",
        heroTitle: "Dr. Reham Kolib",
        heroSubtitle: "Where Skin Health Meets Beauty",

        heroDescription:
            "Personalized dermatological and aesthetic care designed around your skin, your features, and your goals.",

        bookConsultation: "Book a consultation",
        exploreTreatments: "Explore treatments",
        scrollExplore: "Scroll to explore",

        statExperience: "Years of experience",
        statApproach: "Personalized approach",
        statLanguages: "Languages",
        statCare: "Patient-focused care",

        aboutLabel: "About Dr. Reham",
        aboutTitle: "Expertise shaped around you.",

        aboutBody:
            "Dr. Reham Kolib is a Specialist Dermatologist with over 10 years of experience assessing and treating clinical and cosmetic dermatological conditions. After earning her master’s degree in 2018, she pursued advanced certifications in laser and aesthetic treatments. Her practice is grounded in careful listening and customized treatment plans, because every patient and every skin is different.",

        aboutSpecialtyLabel: "Specialty",
        aboutSpecialty: "Clinical and cosmetic dermatology",

        aboutExperienceLabel: "Experience",
        aboutExperience: "10+ years",

        aboutLanguagesLabel: "Languages",
        aboutLanguages: "Arabic and English",

        aboutLearnMore: "Discover the approach",

        treatmentsLabel: "Treatments",
        treatmentsTitle: "Care that starts with understanding.",

        treatmentsBody:
            "From medical dermatology to aesthetic treatments, every treatment plan begins with understanding your individual needs.",

        treatmentFaceTitle: "Facial rejuvenation",
        treatmentFaceBody:
            "Personalized approaches to facial aging, skin laxity, contours, and natural-looking rejuvenation.",

        treatmentFillerTitle: "Dermal fillers",
        treatmentFillerBody:
            "Restore volume, enhance contours, and create balanced results while respecting your natural features.",

        treatmentBotoxTitle: "Botulinum toxin",
        treatmentBotoxBody:
            "Soften expression lines with carefully targeted treatment while maintaining natural facial movement.",

        projectsLabel: "Treatment results",
        projectsTitle: "A closer look at the work.",

        projectsBody:
            "Explore selected aesthetic treatment outcomes through before and after comparisons.",

        projectOneTitle: "Face lifts",
        projectOneBody:
            "Refined facial proportions through a personalized aesthetic treatment plan designed to preserve natural expression.",

        projectTwoTitle: "Filler",
        projectTwoBody:
            "Subtle lip definition and volume, carefully tailored to facial features for a balanced, natural-looking result.",

        projectThreeTitle: "Botox",
        projectThreeBody:
            "Targeted wrinkle treatment planned with precision to soften lines while keeping the face expressive and recognizably yours.",

        before: "Before",
        after: "After",

        bookNow: "Book now",
        learnMore: "Learn more",

        whyLabel: "The approach",
        whyTitle: "Natural results start with thoughtful care.",

        whyOneTitle: "Listen first",
        whyOneBody:
            "Understanding your concerns and expectations is the starting point for every treatment plan.",

        whyTwoTitle: "Assess carefully",
        whyTwoBody:
            "Your skin, facial anatomy, concerns, and individual needs are considered before treatment.",

        whyThreeTitle: "Treat precisely",
        whyThreeBody:
            "Treatments are selected and performed with attention to proportion, balance, and natural expression.",

        whyFourTitle: "Follow up",
        whyFourBody:
            "Your progress matters beyond the treatment itself, with appropriate follow-up and aftercare guidance.",

        journeyLabel: "Your journey",
        journeyTitle: "From consultation to confident care.",

        journeyOneTitle: "Consultation",
        journeyOneBody:
            "Discuss your concerns, goals, previous treatments, and what you would like to achieve.",

        journeyTwoTitle: "Assessment",
        journeyTwoBody:
            "Your skin and facial features are assessed to understand which treatment options may be appropriate.",

        journeyThreeTitle: "Personalized plan",
        journeyThreeBody:
            "A treatment approach is selected according to your individual anatomy, concerns, and goals.",

        journeyFourTitle: "Follow-up",
        journeyFourBody:
            "Your recovery and results are monitored, with guidance on aftercare and future treatment when appropriate.",

        faqLabel: "Frequently asked questions",
        faqHomeTitle: "Before your consultation.",

        homeFaqQ1: "How do I know which treatment is right for me?",
        homeFaqA1:
            "The appropriate treatment depends on your concerns, skin condition, anatomy, medical history, and goals. A consultation allows the doctor to assess these factors and discuss suitable options.",

        homeFaqQ2: "Are aesthetic treatments personalized?",
        homeFaqA2:
            "Yes. Treatment areas, techniques, products, and amounts are selected according to the individual rather than using a single approach for everyone.",

        homeFaqQ3: "Can I discuss several concerns during one consultation?",
        homeFaqA3:
            "Yes. A consultation can be used to discuss your different concerns and understand which treatments may be suitable individually or as part of a broader treatment plan.",

        contactLabel: "Begin a conversation",
        contactTitle: "Start with a dermatology consultation.",

        contactBody:
            "Appointments are available at Cosmesurge Abu Dhabi for clinical dermatology, laser, and aesthetic treatments.",

        callNow: "Call to book",
        whatsapp: "WhatsApp",

        footerSpecialty:
            "Specialist Dermatologist · Cosmesurge Abu Dhabi",

        footerContact: "Contact",
        footerFollow: "Follow",
        footerVisit: "Visit the clinic",

        footerAddress:
            "Cosmesurge Abu Dhabi, Delma region, Abu Dhabi, UAE",

        viewLocation: "View location details",

        footerCopyright:
            "© 2026 Dr. Reham Kolib. All rights reserved.",

        profileSource: "Professional profile",

        menuOpen: "Open navigation menu",
        menuClose: "Close navigation menu",

        comparisonBeforeAfter: "Before and after comparison",
        comparisonSlider: "Move comparison slider",

        procedureVideo: "Treatment showcase",
        procedureDetails: "About the procedure",
        procedureGallery: "Selected client results",

        procedureVideoBody:
            "A closer look at the treatment approach, performed with precision and a focus on natural-looking results.",

        faceProcedureBody:
            "Facelift surgery is a personalized facial rejuvenation procedure designed to address sagging skin, jowling, deeper folds, and loss of definition in the lower face and neck. The approach is selected according to your facial anatomy, skin condition, and aesthetic goals.",

        procedurePointOneLabel: "What it addresses",
        procedurePointOne:
            "A facelift can improve sagging skin, jowling, facial contours, and loose skin around the lower face and neck.",

        procedurePointTwoLabel: "Individualized technique",
        procedurePointTwo:
            "Treatment may involve a mini, standard, or deeper facelift approach depending on your anatomy, degree of aging, and goals.",

        procedurePointThreeLabel: "Recovery and results",
        procedurePointThree:
            "Recovery varies between patients and procedures, with swelling and bruising gradually improving as the face heals.",

        faqTitle: "Frequently asked questions",

        faqQ1: "What areas does a facelift address?",
        faqA1:
            "A facelift primarily addresses the lower two-thirds of the face, including the cheeks, jawline, and areas of loose or sagging skin. Additional procedures may be considered when concerns involve the eyelids, brow, or neck.",

        faqQ2: "What types of facelift are available?",
        faqA2:
            "The technique is individualized. Depending on the degree of sagging and your anatomy, options may include a mini facelift, a standard facelift using a SMAS approach, or a deeper-plane technique.",

        faqQ3: "What is recovery like after a facelift?",
        faqA3:
            "Recovery varies according to the procedure and the individual. Swelling and bruising are expected during the early recovery period and gradually improve. Your doctor will provide specific instructions for returning to normal activities and exercise.",

        galleryPrevious: "Previous image",
        galleryNext: "Next image",

        detailFace: "Facial balance",
        detailFiller: "Lip enhancement",
        detailBotox: "Expression softening",

        faceTitle: "Facial balance and lift",
        faceEyebrow: "Aesthetic dermatology",
        faceBody:
            "A personalized facial treatment plan focused on proportion, definition, and natural-looking refinement.",

        fillerTitle: "Lip filler and facial harmony",
        fillerEyebrow: "Injectable aesthetics",
        fillerBody:
            "Subtle, carefully placed filler can restore balance and definition while respecting the character of your features.",

        botoxTitle: "Wrinkle treatment and softening",
        botoxEyebrow: "Expression-conscious treatment",
        botoxBody:
            "Targeted wrinkle treatment can soften dynamic lines while preserving a natural, expressive appearance.",

        fillerProcedureBody:
            "Dermal fillers are non-surgical injectable treatments used to restore lost volume, soften lines and creases, enhance facial contours, and improve facial balance. The treatment plan is tailored to your features, concerns, and aesthetic goals.",

        fillerPointOneLabel: "What it can address",
        fillerPointOne:
            "Fillers can enhance the lips and cheeks, restore volume, soften lines around the mouth and nose, and improve facial symmetry and contours.",

        fillerPointTwoLabel: "Individualized treatment",
        fillerPointTwo:
            "The filler product, amount, treatment area, and injection approach are selected according to your anatomy and desired result.",

        fillerPointThreeLabel: "Treatment and recovery",
        fillerPointThree:
            "Filler treatments are typically performed during an office visit. Mild swelling or bruising can occur and usually improves over the following days.",

        fillerFaqQ1: "What can dermal fillers be used for?",
        fillerFaqA1:
            "Dermal fillers can restore lost volume, soften lines and creases, enhance the lips and cheeks, improve facial contours, and help create greater balance between facial features.",

        fillerFaqQ2: "How is the right filler selected?",
        fillerFaqA2:
            "The appropriate filler depends on the treatment area, the desired result, and the product's characteristics such as texture, density, and injection depth. Your provider will determine the most suitable option during your consultation.",

        fillerFaqQ3: "How long do filler results last?",
        fillerFaqA3:
            "The duration varies according to the filler, treatment area, and individual patient. Hyaluronic acid fillers commonly last around 6 to 18 months, while some other filler types can last longer.",

        botoxProcedureBody:
            "Botulinum toxin injections are a non-surgical treatment that temporarily reduces targeted muscle activity to soften dynamic wrinkles and fine lines while maintaining natural facial expression.",

        botoxPointOneLabel: "What it can address",
        botoxPointOne:
            "Treatment can soften expression-related lines such as forehead lines, frown lines between the eyebrows, and crow's feet around the eyes.",

        botoxPointTwoLabel: "How it works",
        botoxPointTwo:
            "The treatment temporarily reduces nerve signals to selected muscles, allowing them to relax and making associated wrinkles less visible.",

        botoxPointThreeLabel: "Timing and duration",
        botoxPointThree:
            "Results develop gradually over several days and commonly last around three to six months, depending on the individual and treatment area.",

        botoxFaqQ1: "Which wrinkles can Botox treat?",
        botoxFaqA1:
            "Botox is mainly used for dynamic wrinkles caused by facial movement, including forehead lines, frown lines between the eyebrows, and crow's feet around the eyes. It may also be used in other areas depending on the treatment plan.",

        botoxFaqQ2: "When will I see the results?",
        botoxFaqA2:
            "The effects develop gradually. Some improvement may be noticeable within several days, while the full effect can take around one to two weeks.",

        botoxFaqQ3: "How long do Botox results last?",
        botoxFaqA3:
            "Results commonly last around three to six months. The duration can vary depending on the individual, the treatment area, and the amount used."
    },

    ar: {
        brand: "د. رهام قليب",
        sidebarTitle: "حيث تلتقي صحة البشرة بالجمال",

        navHome: "الرئيسية",
        navAbout: "نبذة عني",
        navProjects: "نتائج علاجية",
        navContact: "تواصل معنا",
        navTreatments: "العلاجات",
        navJourney: "رحلتك",
        navFaq: "الأسئلة الشائعة",

        heroEyebrow: "الأمراض الجلدية السريرية · طب التجميل",
        heroTitle: "د. رهام قليب",
        heroSubtitle: "حيث تلتقي صحة البشرة بالجمال",

        heroDescription:
            "رعاية جلدية وتجميلية مخصصة يتم تصميمها وفقًا لبشرتك وملامحك وأهدافك.",

        bookConsultation: "احجزي استشارتك",
        exploreTreatments: "استكشفي العلاجات",
        scrollExplore: "مرري لاستكشاف المزيد",

        statExperience: "سنوات من الخبرة",
        statApproach: "نهج مخصص",
        statLanguages: "لغتان",
        statCare: "رعاية تركز على المريض",

        aboutLabel: "نبذة عن د. رهام",
        aboutTitle: "خبرة تُصاغ بما يناسبك.",

        aboutBody:
            "د. رهام قليب طبيبة أخصائية في الأمراض الجلدية، تتمتع بخبرة تزيد عن عشر سنوات في تقييم وعلاج الحالات الجلدية السريرية والتجميلية. بعد حصولها على درجة الماجستير عام 2018، واصلت شغفها وحصلت على شهادات متخصصة في علاجات الليزر والتجميل. تعتمد في ممارستها على الاستماع الدقيق ووضع خطط علاجية مخصصة، لأن لكل مريض ولكل بشرة احتياجات مختلفة.",

        aboutSpecialtyLabel: "التخصص",
        aboutSpecialty: "الأمراض الجلدية السريرية والتجميلية",

        aboutExperienceLabel: "الخبرة",
        aboutExperience: "أكثر من 10 سنوات",

        aboutLanguagesLabel: "اللغات",
        aboutLanguages: "العربية والإنجليزية",

        aboutLearnMore: "اكتشفي نهج العلاج",

        treatmentsLabel: "العلاجات",
        treatmentsTitle: "رعاية تبدأ بفهم احتياجاتك.",

        treatmentsBody:
            "من الأمراض الجلدية إلى العلاجات التجميلية، تبدأ كل خطة علاجية بفهم احتياجاتك الفردية.",

        treatmentFaceTitle: "تجديد مظهر الوجه",
        treatmentFaceBody:
            "أساليب مخصصة للتعامل مع علامات تقدم العمر وترهل البشرة وتحديد ملامح الوجه وتحقيق مظهر أكثر نضارة وطبيعية.",

        treatmentFillerTitle: "الفيلر الجلدي",
        treatmentFillerBody:
            "استعادة الحجم وتحسين ملامح الوجه وتحقيق توازن طبيعي مع الحفاظ على خصوصية ملامحك.",

        treatmentBotoxTitle: "توكسين البوتولينوم",
        treatmentBotoxBody:
            "تخفيف خطوط التعبير من خلال علاج دقيق يستهدف العضلات مع الحفاظ على حركة الوجه الطبيعية.",

        projectsLabel: "نتائج علاجية",
        projectsTitle: "نظرة أقرب على العمل.",

        projectsBody:
            "استكشف نتائج مختارة من العلاجات التجميلية من خلال مقارنات قبل وبعد.",

        projectOneTitle: "شد الوجه",
        projectOneBody:
            "تحسين تناسق ملامح الوجه من خلال خطة تجميلية مخصصة تحافظ على التعبير الطبيعي.",

        projectTwoTitle: "فيلر",
        projectTwoBody:
            "تحديد وزيادة حجم الشفاه بشكل متوازن ومدروس ليناسب ملامح الوجه ويمنح نتيجة طبيعية.",

        projectThreeTitle: "بوتوكس",
        projectThreeBody:
            "علاج موجه للتجاعيد بدقة لتنعيم الخطوط مع الحفاظ على تعابير الوجه وشكله الطبيعي.",

        before: "قبل",
        after: "بعد",

        bookNow: "احجز الآن",
        learnMore: "اعرف المزيد",

        whyLabel: "نهج العلاج",
        whyTitle: "النتائج الطبيعية تبدأ برعاية مدروسة.",

        whyOneTitle: "نستمع أولًا",
        whyOneBody:
            "فهم مخاوفك وتوقعاتك هو نقطة البداية لكل خطة علاجية.",

        whyTwoTitle: "نقيّم بعناية",
        whyTwoBody:
            "يتم أخذ بشرتك وتشريح الوجه واحتياجاتك ومخاوفك الفردية بعين الاعتبار قبل العلاج.",

        whyThreeTitle: "نعالج بدقة",
        whyThreeBody:
            "يتم اختيار العلاجات وتنفيذها مع الاهتمام بالتناسق والتوازن والحفاظ على تعبيرات الوجه الطبيعية.",

        whyFourTitle: "المتابعة",
        whyFourBody:
            "تستمر الرعاية بعد العلاج من خلال المتابعة المناسبة وإرشادات العناية.",

        journeyLabel: "رحلتك",
        journeyTitle: "من الاستشارة إلى رعاية مصممة لك.",

        journeyOneTitle: "الاستشارة",
        journeyOneBody:
            "مناقشة مخاوفك وأهدافك والعلاجات السابقة والنتيجة التي ترغبين في الوصول إليها.",

        journeyTwoTitle: "التقييم",
        journeyTwoBody:
            "يتم تقييم البشرة وملامح الوجه لفهم خيارات العلاج المناسبة.",

        journeyThreeTitle: "خطة مخصصة",
        journeyThreeBody:
            "يتم اختيار نهج العلاج وفقًا لتشريح الوجه واحتياجاتك وأهدافك الفردية.",

        journeyFourTitle: "المتابعة",
        journeyFourBody:
            "تتم متابعة التعافي والنتائج مع تقديم الإرشادات المناسبة للعناية والعلاجات المستقبلية عند الحاجة.",

        faqLabel: "الأسئلة الشائعة",
        faqHomeTitle: "قبل الاستشارة.",
        homeFaqQ1: "كيف أعرف العلاج المناسب لي؟",
        homeFaqA1:"يعتمد العلاج المناسب على احتياجاتك وحالة بشرتك وتشريح الوجه والتاريخ الطبي والأهداف المطلوبة. وتتيح الاستشارة تقييم هذه العوامل ومناقشة الخيارات المناسبة.",
        homeFaqQ2: "هل العلاجات التجميلية مخصصة لكل شخص؟",
        homeFaqA2:"نعم. يتم اختيار مناطق العلاج والتقنيات والمنتجات والكميات وفقًا لاحتياجات كل شخص بدلًا من اتباع أسلوب واحد للجميع.",
        homeFaqQ3: "هل يمكنني مناقشة أكثر من مشكلة خلال الاستشارة؟",
        homeFaqA3:"نعم. يمكن خلال الاستشارة مناقشة مختلف مخاوفك وفهم العلاجات التي قد تكون مناسبة لكل مشكلة بشكل منفصل أو ضمن خطة علاجية متكاملة.",
        contactLabel: "لنبدأ الحوار",
        contactTitle: "ابدأ باستشارة جلدية.",
        contactBody:
            "المواعيد متاحة في كوزمسيرج أبوظبي لعلاجات الأمراض الجلدية والليزر والتجميل.",

        callNow: "اتصل للحجز",
        whatsapp: "واتساب",

        footerSpecialty:
            "طبيبة أخصائية في الأمراض الجلدية · كوزمسيرج أبوظبي",

        footerContact: "تواصل معنا",
        footerFollow: "تابعنا",
        footerVisit: "زيارة العيادة",

        footerAddress:
            "كوزمسيرج أبوظبي، منطقة دلما، أبوظبي، الإمارات العربية المتحدة",

        viewLocation: "عرض تفاصيل الموقع",

        footerCopyright:
            "© 2026 د. رهام قليب. جميع الحقوق محفوظة.",

        profileSource: "الملف المهني",

        menuOpen: "فتح القائمة",
        menuClose: "إغلاق القائمة",

        comparisonBeforeAfter: "مقارنة قبل وبعد",
        comparisonSlider: "تحريك مؤشر المقارنة",

        procedureVideo: "عرض توضيحي للعلاج",
        procedureDetails: "عن الإجراء",
        procedureGallery: "نتائج مختارة للمراجعين",

        procedureVideoBody:
            "نظرة أقرب على أسلوب العلاج، المنفذ بدقة مع التركيز على المظهر الطبيعي المتناسق.",

        faceProcedureBody:
            "تعد عملية شد الوجه إجراءً مخصصاً لتجديد شباب ملامح الوجه، صُممت لمعالجة ترهل البشرة وتراجع تحديد خط الفك وثنايا الوجه العميقة. يتم اختيار التقنية المناسبة وفقاً لتشريح الوجه ونوع البشرة وأهدافك الجمالية.",

        procedurePointOneLabel: "ما يعالجه الإجراء",
        procedurePointOne:
            "يساعد شد الوجه على تحسين ترهل الجلد وتحديد خط الفك وملامح الوجه والرقبة.",

        procedurePointTwoLabel: "تقنية مخصصة لكل حالة",
        procedurePointTwo:
            "قد يشمل الإجراء شداً مصغراً أو شداً قياسياً أو تقنية المستوى العميق حسب تشريح الوجه ودرجة الترهل.",

        procedurePointThreeLabel: "التعافي والنتائج",
        procedurePointThree:
            "تختلف فترة التعافي باختلاف الإجراء، حيث تتلاشى الكدمات والتورمات تدريجياً مع التئام الأنسجة.",

        faqTitle: "الأسئلة الشائعة",

        faqQ1: "ما هي المناطق التي يستهدفها شد الوجه؟",
        faqA1:
            "يستهدف شد الوجه بشكل أساسي الثلثين السفليين من الوجه بما في ذلك الخدود، خط الفك، وترهلات الرقبة، ويمكن دمجه مع إجراءات أخرى كالجفون أو الحواجب عند الحاجة.",

        faqQ2: "ما هي تقنيات شد الوجه المتاحة؟",
        faqA2:
            "يتم اختيار التقنية بصورة فردية بحسب درجة الترهل وتشريح الوجه، وتتنوع بين الشد المصغر، شد الـ SMAS، والشد العميق للأنسجة.",

        faqQ3: "كيف تكون فترة التعافي بعد شد الوجه؟",
        faqA3:
            "تختلف فترة التعافي حسب نوع الإجراء. التورم والكدمات أمر متوقع في الأيام الأولى ويتحسن تدريجياً، ويوفر الطبيب كافة التعليمات للعودة الآمنة للنشاط اليومي.",

        galleryPrevious: "الصورة السابقة",
        galleryNext: "الصورة التالية",

        detailFace: "توازن الوجه",
        detailFiller: "تجميل الشفاه",
        detailBotox: "تخفيف التجاعيد",

        faceTitle: "توازن وشد ملامح الوجه",
        faceEyebrow: "طب التجميل والأمراض الجلدية",
        faceBody:
            "خطة علاجية مخصصة للوجه تركز على التناسق والتحديد والتحسين الطبيعي للملامح.",

        fillerTitle: "فيلر الشفاه وتناسق ملامح الوجه",
        fillerEyebrow: "تجميل الحقن",
        fillerBody:
            "يساعد الفيلر الموضوع بدقة على استعادة التوازن والتحديد مع الحفاظ على خصوصية ملامحك.",

        botoxTitle: "علاج وتخفيف التجاعيد",
        botoxEyebrow: "علاج يحافظ على تعبيرات الوجه",
        botoxBody:
            "علاج موجه للتجاعيد يساعد على تخفيف الخطوط التعبيرية مع الحفاظ على مظهر طبيعي وتعبيرات الوجه.",

        fillerProcedureBody:
            "الفيلر الجلدي هو علاج تجميلي قابل للحقن غير جراحي، يُستخدم لاستعادة الحجم المفقود وتنعيم التجاعيد وتحسين ملامح وتناسق الوجه. يتم تصميم الخطة العلاجية بعناية لتلائم ملامحك وتفضيلاتك.",

        fillerPointOneLabel: "ما الذي يمكن تحسينه",
        fillerPointOne:
            "يمكن للفيلر تعزيز الشفاه والخدود، واستعادة الحجم، وتخفيف الخطوط حول الفم والأنف، وتحسين تماثل ملامح الوجه.",

        fillerPointTwoLabel: "علاج فردي ومخصص",
        fillerPointTwo:
            "يتم تحديد نوع الفيلر وكميته ومناطق الحقن بدقة لتناسب بنية الوجه والنتيجة الطبيعية المطلوبة.",

        fillerPointThreeLabel: "الإجراء وفترة التعافي",
        fillerPointThree:
            "يُجرى الحقن داخل العيادة بسهولة. قد تظهر انتفاخات أو كدمات خفيفة سرعان ما تزول خلال أيام قليلة.",

        fillerFaqQ1: "ما هي أبرز استخدامات الفيلر؟",
        fillerFaqA1:
            "يُستخدم لاستعادة الحجم، ملء الخطوط والتجاعيد، تحديد الشفاه وتجميل الخدين، وتحقيق تناسق متوازن بين تفاصيل الوجه.",

        fillerFaqQ2: "كيف يتم اختيار نوع الفيلر المناسب؟",
        fillerFaqA2:
            "يتم الاختيار بناءً على منطقة الحقن، والعمق المطلوب، وخصائص القوام والكثافة للمنتج لتحقيق أنعم وأفضل مظهر طبيعي.",

        fillerFaqQ3: "كم تدوم نتائج حقن الفيلر؟",
        fillerFaqA3:
            "تدوم نتائج فيلر حمض الهيالورونيك عادة من 6 إلى 18 شهراً بحسب المنطقة ونوع المنتج وطبيعة استقلاب الجسم.",

        botoxProcedureBody:
            "تُعد حقن توكسين البوتولينوم إجراءً غير جراحي يقلل مؤقتاً من النشاط العضلي المستهدف لتخفيف التجاعيد الحركية والخطوط الدقيقة دون التأثير على التعبير الطبيعي.",

        botoxPointOneLabel: "ما الذي يمكن علاجه",
        botoxPointOne:
            "يعالج الخطوط التعبيرية مثل تجاعيد الجبهة، وخطوط العبوس بين الحاجبين، والتجاعيد المحيطة بزوايا العينين.",

        botoxPointTwoLabel: "آلية العمل",
        botoxPointTwo:
            "يقلل العلاج مؤقتاً من الإشارات العصبية الواصلة للعضلات المستهدفة مما يسمح لها بالاسترخاء وتنعيم الخطوط الظاهرة.",

        botoxPointThreeLabel: "الجدول الزمني واستمرار النتائج",
        botoxPointThree:
            "تبدأ النتائج بالظهور تدريجياً خلال أيام وتستمر عادةً ما بين 3 إلى 6 أشهر بحسب طبيعة الجسم ومنطقة العلاج.",

        botoxFaqQ1: "ما أنواع التجاعيد التي يعالجها البوتوكس؟",
        botoxFaqA1:
            "يعالج التجاعيد الحركية التعبيرية الناتجة عن حركة العضلات مثل خطوط الجبهة، ما بين الحاجبين، وحول العينين.",

        botoxFaqQ2: "متى تصبح نتائج البوتوكس واضحة؟",
        botoxFaqA2:
            "يبدأ التحسن بالظهور تدريجياً خلال 3 إلى 5 أيام، ويكتمل التأثير النهائي خلال أسبوع إلى أسبوعين.",

        botoxFaqQ3: "كم تستمر نتائج حقن البوتوكس؟",
        botoxFaqA3:
            "تستمر النتائج عادة بين 3 إلى 6 أشهر، ويمكن تكرار الجلسات للحفاظ على نضارة وتناسق المظهر."
    }
};

/* =========================================================
   PROJECT DROPDOWN (Ensures presence & fallback)
========================================================= */

const setupProjectDropdown = () => {
    const projectItem = document
        .querySelector(".site-sidebar__item a[data-i18n='navProjects']")
        ?.closest(".site-sidebar__item");

    if (!projectItem || projectItem.querySelector("details")) {
        return;
    }

    const projectLink = projectItem.querySelector("a");
    if (!projectLink) return;

    const details = document.createElement("details");
    details.className = "site-sidebar__dropdown";
    const summary = document.createElement("summary");

    summary.dataset.i18n = "navProjects";
    summary.textContent = projectLink.textContent;

    const subnav = document.createElement("ul");
    subnav.className = "site-sidebar__subnav";

    [
        ["face_lift.html", "detailFace", "Facial balance"],
        ["filler.html", "detailFiller", "Lip enhancement"],
        ["botox.html", "detailBotox", "Expression softening"]
    ].forEach(([href, key, fallbackText]) => {
        const item = document.createElement("li");
        const link = document.createElement("a");

        link.href = href;
        link.dataset.i18n = key;
        link.textContent = fallbackText;

        item.appendChild(link);
        subnav.appendChild(item);
    });

    details.append(summary, subnav);
    projectItem.replaceChildren(details);
};

/* =========================================================
   PROCEDURE GALLERY
========================================================= */

const initializeProcedureGallery = () => {
    const galleryImages = document.body.dataset.gallery;
    if (!galleryImages) return;

    const images = galleryImages
        .split(",")
        .map((image) => image.trim())
        .filter(Boolean);

    const modal = document.getElementById("procedure-image-modal");
    const modalImage = document.getElementById("procedure-modal-image");
    const modalPrev = document.getElementById("procedure-modal-prev");
    const modalNext = document.getElementById("procedure-modal-next");

    let currentModalIndex = 0;

    const showModalImage = (index) => {
        currentModalIndex = (index + images.length) % images.length;
        if (!modalImage) return;

        modalImage.src = images[currentModalIndex];
        modalImage.alt = `Treatment result ${currentModalIndex + 1}`;
    };

    const openImageModal = (index) => {
        if (!modal || !modalImage) return;

        showModalImage(index);

        if (typeof bootstrap !== "undefined") {
            bootstrap.Modal.getOrCreateInstance(modal).show();
        }
    };

    modalPrev?.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        showModalImage(currentModalIndex - 1);
    });

    modalNext?.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        showModalImage(currentModalIndex + 1);
    });

    document.addEventListener("keydown", (event) => {
        if (!modal?.classList.contains("show")) return;

        if (event.key === "ArrowLeft") {
            event.preventDefault();
            showModalImage(currentModalIndex - 1);
        }

        if (event.key === "ArrowRight") {
            event.preventDefault();
            showModalImage(currentModalIndex + 1);
        }
    });

    document.querySelectorAll(".procedure-carousel").forEach((carousel) => {

    const carouselInner =
        carousel.querySelector(".swiper-wrapper");

    if (!carouselInner) return;

    carouselInner.innerHTML = "";

const repeatedImages = [...images, ...images, ...images];

repeatedImages.forEach((image, index) => {

    const slide = document.createElement("div");
    slide.className = "swiper-slide";

    const img = document.createElement("img");

    img.src = image;
    img.alt = `Treatment result ${(index % images.length) + 1}`;
    img.className = "procedure-gallery-image";

    img.addEventListener("click", () => {
        openImageModal(index % images.length);
    });

    slide.appendChild(img);
    carouselInner.appendChild(slide);
});

    if (images.length <= 1) return;

new Swiper(carousel, {
    effect: "coverflow",

    grabCursor: true,
    centeredSlides: true,

    slidesPerView: "auto",
    spaceBetween: 25,

    loop: true,
    loopAdditionalSlides: images.length,

    speed: 1200,

    autoplay: {
        delay: 1200,
        disableOnInteraction: false,
        pauseOnMouseEnter: false
    },

    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 120,
        modifier: 2.5,
        slideShadows: true
    },

    keyboard: {
        enabled: true
    },

    navigation: {
        nextEl: carousel.querySelector(".swiper-button-next"),
        prevEl: carousel.querySelector(".swiper-button-prev")
    },

    pagination: {
        el: carousel.querySelector(".swiper-pagination"),
        clickable: true
    }
});

});
};
/* =========================================================
   LANGUAGE
========================================================= */

const setLanguage = (language) => {
    const content = translations[language];
    if (!content) return;

    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

    const pageKey = document.body.dataset.page;
    const pageTitle = pageKey ? content[`${pageKey}Title`] : null;

    document.title = pageTitle
        ? `${pageTitle} | ${language === "ar" ? "د. رهام قليب" : "Dr. Reham Kolib"}`
        : language === "ar"
            ? "د. رهام قليب | طبيبة أخصائية في الأمراض الجلدية بأبوظبي"
            : "Dr. Reham Kolib | Specialist Dermatologist in Abu Dhabi";

    document.querySelector('meta[name="description"]')?.setAttribute(
        "content",
        pageKey && content[`${pageKey}Body`]
            ? content[`${pageKey}Body`]
            : language === "ar"
                ? "د. رهام قليب طبيبة أخصائية في الأمراض الجلدية بأبوظبي، تتمتع بخبرة تزيد عن 10 سنوات في الأمراض الجلدية السريرية والتجميلية وعلاجات الليزر والتجميل."
                : "Dr. Reham Kolib is a specialist dermatologist in Abu Dhabi with over 10 years of experience in clinical and cosmetic dermatology, laser, and aesthetic treatments."
    );

    document.querySelector('meta[name="keywords"]')?.setAttribute(
        "content",
        language === "ar"
            ? "د. رهام قليب, طبيبة جلدية أبوظبي, طبيبة جلدية تجميلية, علاجات الليزر أبوظبي, تجميل البشرة الإمارات"
            : "Dr Reham Kolib, dermatologist Abu Dhabi, cosmetic dermatologist UAE, laser treatments Abu Dhabi, aesthetic dermatology"
    );

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const translation = content[element.dataset.i18n];
        if (translation !== undefined) {
            element.textContent = translation;
        }
    });

    document.querySelectorAll("[data-language]").forEach((button) => {
        const isActive = button.dataset.language === language;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });

    const menuToggle = document.querySelector(".menu-toggle");
    menuToggle?.setAttribute(
        "aria-label",
        menuToggle.getAttribute("aria-expanded") === "true"
            ? content.menuClose
            : content.menuOpen
    );

    document.querySelectorAll("[data-comparison]").forEach((comparison) => {
        comparison.setAttribute(
            "aria-label",
            `${content.comparisonBeforeAfter}: ${
                comparison.querySelector("h3")?.textContent || ""
            }`
        );

        comparison.querySelector(".comparison__knob")?.setAttribute(
            "aria-label",
            content.comparisonSlider
        );
    });

    document.querySelector("[data-gallery-prev]")?.setAttribute(
        "aria-label",
        content.galleryPrevious
    );

    document.querySelector("[data-gallery-next]")?.setAttribute(
        "aria-label",
        content.galleryNext
    );

    localStorage.setItem("preferred-language", language);
};

// Language Button Listener via Delegation
document.addEventListener("click", (event) => {
    const langBtn = event.target.closest("[data-language]");
    if (langBtn) {
        setLanguage(langBtn.dataset.language);
    }
});

const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
setLanguage(
    requestedLanguage ||
    localStorage.getItem("preferred-language") ||
    "en"
);

/* =========================================================
   HERO IMAGE LOADING
========================================================= */

const hero = document.querySelector(".hero");
const panels = document.querySelectorAll(".hero__panel");

// Apply hero background from data-hero-bg attribute (set per page in HTML)
panels.forEach((panel) => {
    const bg = panel.dataset.heroBg;
    if (bg) panel.style.backgroundImage = `url("${bg}")`;
});

// Apply video source and poster from body data attributes (set per page in HTML)
const videoEl = document.querySelector(".procedure-video__player");
if (videoEl) {
    const { video, poster } = document.body.dataset;
    if (poster) videoEl.poster = poster;
    if (video) {
        let src = videoEl.querySelector("source");
        if (!src) { src = document.createElement("source"); videoEl.appendChild(src); }
        src.type = "video/mp4";
        src.src = video;
        videoEl.load();
    }
}

const waitForPanel = (panel) => {
    const backgroundImage = getComputedStyle(panel).backgroundImage;
    const imageUrl = backgroundImage.match(/url\(["']?(.*?)["']?\)/)?.[1];
    if (!imageUrl) return Promise.resolve();

    return new Promise((resolve) => {
        const image = new Image();
        image.addEventListener("load", resolve, { once: true });
        image.addEventListener("error", resolve, { once: true });
        image.src = imageUrl;
    });
};

if (hero) {
    Promise.all([...panels].map(waitForPanel)).then(() => {
        hero.classList.add("is-loaded");
    });
}

/* =========================================================
   MENU CONTROLLER
========================================================= */

const setMenuState = (isOpen) => {
    const menuToggle = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".site-sidebar");
    const sidebarBackdrop = document.querySelector(".sidebar-backdrop");

    menuToggle?.classList.toggle("is-active", isOpen);
    menuToggle?.setAttribute("aria-expanded", String(isOpen));

    const currentLanguage = document.documentElement.lang || "en";
    const currentTranslations = translations[currentLanguage] || translations.en;

    menuToggle?.setAttribute(
        "aria-label",
        isOpen ? currentTranslations.menuClose : currentTranslations.menuOpen
    );

    sidebar?.classList.toggle("is-visible", isOpen);
    sidebar?.setAttribute("aria-hidden", String(!isOpen));

    sidebarBackdrop?.classList.toggle("is-visible", isOpen);
    document.body.classList.toggle("menu-is-open", isOpen);
};

document.addEventListener("click", (event) => {
    const toggle = event.target.closest(".menu-toggle");
    if (toggle) {
        setMenuState(toggle.getAttribute("aria-expanded") !== "true");
        return;
    }

    if (event.target.closest(".sidebar-backdrop") || event.target.closest(".site-sidebar a")) {
        setMenuState(false);
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        setMenuState(false);
    }
});

/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealTargets = document.querySelectorAll(
    ".quick-stats__item, " +
    ".about-section__content, " +
    ".about-section__portrait, " +
    ".about-section__fact, " +
    ".section-heading, " +
    ".treatment-card, " +
    ".projects__intro, " +
    ".project__details, " +
    ".comparison, " +
    ".why-card, " +
    ".journey-step, " +
    ".home-faq__accordion .accordion-item, " +
    ".home-contact__content, " +
    ".home-contact__image, " +
    ".procedure-section__heading, " +
    ".procedure-video__player, " +
    ".procedure-carousel, " +
    ".procedure-info__body, " +
    ".procedure-info__grid > div, " +
    ".procedure-faq .accordion-item"
);

revealTargets.forEach((element) => {
    element.classList.add("scroll-reveal");
});

document
    .querySelectorAll(".about-section__content, .home-contact__content")
    .forEach((element) => {
        element.classList.add("from-left");
    });

document
    .querySelectorAll(".about-section__portrait, .home-contact__image")
    .forEach((element) => {
        element.classList.add("from-right");
    });

document
    .querySelectorAll(".comparison, .procedure-video__player, .procedure-carousel")
    .forEach((element) => {
        element.classList.add("scale-up");
    });

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -50px 0px"
        }
    );

    revealTargets.forEach((element) => {
        revealObserver.observe(element);
    });

    document
        .querySelectorAll(".treatment-grid, .why-grid, .journey-list, .procedure-info__grid")
        .forEach((group) => {
            group.classList.add("scroll-stagger");
            [...group.children].forEach((child) => {
                if (!child.classList.contains("scroll-reveal")) {
                    child.classList.add("scroll-reveal");
                }
                revealObserver.observe(child);
            });
        });
} else {
    revealTargets.forEach((element) => {
        element.classList.add("is-visible");
    });
}

/* =========================================================
   HERO PARALLAX
========================================================= */

if (hero) {
    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        if (scrollY < window.innerHeight) {
            panels.forEach((panel) => {
                if (window.innerWidth <= 768) {
                    panel.style.transform = `scale(1.05) translateY(${scrollY * 0.12}px)`;
                } else {
                    panel.style.transform = `scale(1.02) translateY(${scrollY * 0.25}px)`;
                }
            });
        }
    }, { passive: true });
}

/* =========================================================
   BEFORE / AFTER COMPARISON
========================================================= */

const comparisons = document.querySelectorAll("[data-comparison]");

comparisons.forEach((comparison) => {
    const beforeImage = comparison.querySelector(".comparison__image--before");
    const sliderLine = comparison.querySelector(".comparison__line");
    const sliderKnob = comparison.querySelector(".comparison__knob");

    if (!beforeImage || !sliderLine || !sliderKnob) return;

    let currentPosition = 50;
    let isDragging = false;

    const updateSlider = (position) => {
        currentPosition = Math.max(0, Math.min(100, position));

        if (comparison.classList.contains("is-horizontal")) {
            beforeImage.style.clipPath = `inset(0 0 ${100 - currentPosition}% 0)`;
            sliderLine.style.top = `${currentPosition}%`;
            sliderKnob.style.top = `${currentPosition}%`;
        } else {
            beforeImage.style.clipPath = `inset(0 ${100 - currentPosition}% 0 0)`;
            sliderLine.style.left = `${currentPosition}%`;
            sliderKnob.style.left = `${currentPosition}%`;
        }

        sliderKnob.setAttribute("aria-valuenow", Math.round(currentPosition));
    };

    const handleMove = (clientX, clientY) => {
        const bounds = comparison.getBoundingClientRect();
        const position = comparison.classList.contains("is-horizontal")
            ? ((clientY - bounds.top) / bounds.height) * 100
            : ((clientX - bounds.left) / bounds.width) * 100;
        updateSlider(position);
    };

    const updateImageFraming = () => {
        const image = comparison.querySelector(".comparison__image--after img");
        if (!image || !image.naturalWidth || !image.naturalHeight) return;

        const bounds = comparison.getBoundingClientRect();
        const imageRatio = image.naturalWidth / image.naturalHeight;
        const project = comparison.closest(".project");
        if (!project) return;

        const isHorizontal = imageRatio > 1;
        comparison.classList.toggle("is-horizontal", isHorizontal);
        sliderKnob.setAttribute("aria-orientation", isHorizontal ? "horizontal" : "vertical");

        const currentRatio = bounds.width / bounds.height;
        const currentCrop = imageRatio > currentRatio
            ? 1 - currentRatio / imageRatio
            : 1 - imageRatio / currentRatio;

        if (currentCrop <= 0.5) {
            project.classList.remove("has-adjusted-comparison");
            project.style.removeProperty("--comparison-width");
            return;
        }

        const targetRatio = imageRatio > currentRatio ? imageRatio * 0.6 : imageRatio / 0.6;
        const targetWidth = Math.round(bounds.height * targetRatio);
        const projectWidth = project.getBoundingClientRect().width;
        const minimumTextWidth = Math.min(360, projectWidth * 0.4);
        const adjustedWidth = Math.min(targetWidth, projectWidth - minimumTextWidth);

        project.classList.add("has-adjusted-comparison");
        project.style.setProperty("--comparison-width", `${Math.max(240, adjustedWidth)}px`);
    };

    const stopDragging = () => {
        isDragging = false;
        comparison.classList.remove("is-dragging");
    };

    comparison.addEventListener("pointerdown", (event) => {
        isDragging = true;
        comparison.classList.add("is-dragging");
        comparison.setPointerCapture(event.pointerId);
        handleMove(event.clientX, event.clientY);
    });

    comparison.addEventListener("pointermove", (event) => {
        if (isDragging) {
            handleMove(event.clientX, event.clientY);
        }
    });

    comparison.addEventListener("pointerup", stopDragging);
    comparison.addEventListener("pointercancel", stopDragging);

    window.addEventListener("resize", updateImageFraming);

    comparison.querySelectorAll("img").forEach((image) => {
        image.addEventListener("load", updateImageFraming, { once: true });
        if (image.complete) {
            updateImageFraming();
        }
    });

    sliderKnob.addEventListener("keydown", (event) => {
        const increments = {
            ArrowLeft: -5,
            ArrowDown: -5,
            ArrowRight: 5,
            ArrowUp: 5
        };

        if (increments[event.key] !== undefined) {
            event.preventDefault();
            updateSlider(currentPosition + increments[event.key]);
        } else if (event.key === "Home" || event.key === "End") {
            event.preventDefault();
            updateSlider(event.key === "Home" ? 0 : 100);
        }
    });

    updateSlider(currentPosition);
    updateImageFraming();
});

/* =========================================================
   INITIALIZE
========================================================= */

setupProjectDropdown();
initializeProcedureGallery();