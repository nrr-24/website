const hero = document.querySelector(".hero");
const panels = document.querySelectorAll(".hero__panel");
const menuToggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".site-sidebar");
const sidebarBackdrop = document.querySelector(".sidebar-backdrop");
const navigationLinks = document.querySelectorAll(".site-sidebar a");
const comparisons = document.querySelectorAll("[data-comparison]");
const languageButtons = document.querySelectorAll("[data-language]");

const translations = {
	en: {
		brand: "Dr. Reham",
		sidebarTitle: "Where Skin Health Meets Beauty",
		navHome: "Home",
		navAbout: "About",
		navProjects: "Projects",
		navContact: "Contact",
		heroEyebrow: "Clinical dermatology · Aesthetic medicine",
		heroTitle: "Dr. Reham Kolib",
		heroSubtitle: "Where Skin Health Meets Beauty",
		aboutLabel: "About Dr. Reham",
		aboutTitle: "Expertise shaped around you.",
		aboutBody: "Dr. Reham Kolib is a Specialist Dermatologist with over 10 years of experience assessing and treating clinical and cosmetic dermatological conditions. After earning her master’s degree in 2018, she pursued advanced certifications in laser and aesthetic treatments. Her practice is grounded in careful listening and customized treatment plans, because every patient and every skin is different.",
		aboutSpecialtyLabel: "Specialty",
		aboutSpecialty: "Clinical and cosmetic dermatology",
		aboutExperienceLabel: "Experience",
		aboutExperience: "10+ years",
		aboutLanguagesLabel: "Languages",
		aboutLanguages: "Arabic and English",
		projectsLabel: "Treatment results",
		projectsTitle: "A closer look at the work.",
		projectsBody: "Explore selected aesthetic treatment outcomes through before and after comparisons.",
		projectOneTitle: "Face lifts",
		projectOneBody: "Refined facial proportions through a personalized aesthetic treatment plan designed to preserve natural expression.",
		projectTwoTitle: "Filler",
		projectTwoBody: "Subtle lip definition and volume, carefully tailored to facial features for a balanced, natural-looking result.",
		projectThreeTitle: "Botox",
		projectThreeBody: "Targeted wrinkle treatment planned with precision to soften lines while keeping the face expressive and recognizably yours.",
		before: "Before",
		after: "After",
		bookNow: "Book now",
		learnMore: "Learn more",
		contactLabel: "Begin a conversation",
		contactTitle: "Start with a dermatology consultation.",
		contactBody: "Appointments are available at Cosmesurge Abu Dhabi for clinical dermatology, laser, and aesthetic treatments.",
		callNow: "Call to book",
		footerSpecialty: "Specialist Dermatologist · Cosmesurge Abu Dhabi",
		footerContact: "Contact",
		footerFollow: "Follow",
		footerVisit: "Visit the clinic",
		footerAddress: "Cosmesurge Abu Dhabi, Delma region, Abu Dhabi, UAE",
		viewLocation: "View location details",
		footerCopyright: "© 2026 Dr. Reham Kolib. All rights reserved.",
		profileSource: "Professional profile",
		menuOpen: "Open navigation menu",
		menuClose: "Close navigation menu",
		comparisonBeforeAfter: "Before and after comparison",
		comparisonSlider: "Move comparison slider",
		procedureVideo: "Treatment showcase",
		procedureDetails: "About the procedure",
		procedureGallery: "Selected client results",
		procedureVideoBody: "A closer look at the treatment approach, performed with precision and a focus on natural-looking results.",
        faceProcedureBody: "Facelift surgery is a personalized facial rejuvenation procedure designed to address sagging skin, jowling, deeper folds, and loss of definition in the lower face and neck. The approach is selected according to your facial anatomy, skin condition, and aesthetic goals.",
        procedurePointOneLabel: "What it addresses",
        procedurePointOne: "A facelift can improve sagging skin, jowling, facial contours, and loose skin around the lower face and neck.",
        procedurePointTwoLabel: "Individualized technique",
        procedurePointTwo: "Treatment may involve a mini, standard, or deeper facelift approach depending on your anatomy, degree of aging, and goals.",
        procedurePointThreeLabel: "Recovery and results",
        procedurePointThree: "Recovery varies between patients and procedures, with swelling and bruising gradually improving as the face heals.",
		faqTitle: "Frequently asked questions",
        faqQ1: "What areas does a facelift address?",
        faqA1: "A facelift primarily addresses the lower two-thirds of the face, including the cheeks, jawline, and areas of loose or sagging skin. Additional procedures may be considered when concerns involve the eyelids, brow, or neck.",
        faqQ2: "What types of facelift are available?",
        faqA2: "The technique is individualized. Depending on the degree of sagging and your anatomy, options may include a mini facelift, a standard facelift using a SMAS approach, or a deeper-plane technique.",
        faqQ3: "What is recovery like after a facelift?",
        faqA3: "Recovery varies according to the procedure and the individual. Swelling and bruising are expected during the early recovery period and gradually improve. Your doctor will provide specific instructions for returning to normal activities and exercise.",
		galleryPrevious: "Previous image",
		galleryNext: "Next image",
		detailFace: "Facial balance",
		detailFiller: "Lip enhancement",
		detailBotox: "Expression softening",
		faceTitle: "Facial balance and lift",
		faceEyebrow: "Aesthetic dermatology",
		faceBody: "A personalized facial treatment plan focused on proportion, definition, and natural-looking refinement.",
		fillerTitle: "Lip filler and facial harmony",
		fillerEyebrow: "Injectable aesthetics",
		fillerBody: "Subtle, carefully placed filler can restore balance and definition while respecting the character of your features.",
		botoxTitle: "Wrinkle treatment and softening",
		botoxEyebrow: "Expression-conscious treatment",
		botoxBody: "Targeted wrinkle treatment can soften dynamic lines while preserving a natural, expressive appearance.",
        fillerProcedureBody:"Dermal fillers are non-surgical injectable treatments used to restore lost volume, soften lines and creases, enhance facial contours, and improve facial balance. The treatment plan is tailored to your features, concerns, and aesthetic goals.",
        fillerPointOneLabel:"What it can address",
        fillerPointOne:"Fillers can enhance the lips and cheeks, restore volume, soften lines around the mouth and nose, and improve facial symmetry and contours.",
        fillerPointTwoLabel:"Individualized treatment",
        fillerPointTwo:"The filler product, amount, treatment area, and injection approach are selected according to your anatomy and desired result.",
        fillerPointThreeLabel:"Treatment and recovery",
        fillerPointThree:"Filler treatments are typically performed during an office visit. Mild swelling or bruising can occur and usually improves over the following days.",
        fillerFaqQ1:"What can dermal fillers be used for?",
        fillerFaqA1:"Dermal fillers can restore lost volume, soften lines and creases, enhance the lips and cheeks, improve facial contours, and help create greater balance between facial features.",
        fillerFaqQ2:"How is the right filler selected?",
        fillerFaqA2:"The appropriate filler depends on the treatment area, the desired result, and the product's characteristics such as texture, density, and injection depth. Your provider will determine the most suitable option during your consultation.",
        fillerFaqQ3:"How long do filler results last?",
        fillerFaqA3:"The duration varies according to the filler, treatment area, and individual patient. Hyaluronic acid fillers commonly last around 6 to 18 months, while some other filler types can last longer.",
        botoxProcedureBody: "Botulinum toxin injections are a non-surgical treatment that temporarily reduces targeted muscle activity to soften dynamic wrinkles and fine lines while maintaining natural facial expression.",
        botoxPointOneLabel: "What it can address",
        botoxPointOne: "Treatment can soften expression-related lines such as forehead lines, frown lines between the eyebrows, and crow's feet around the eyes.",
        botoxPointTwoLabel: "How it works",
        botoxPointTwo: "The treatment temporarily reduces nerve signals to selected muscles, allowing them to relax and making associated wrinkles less visible.",
        botoxPointThreeLabel: "Timing and duration",
        botoxPointThree: "Results develop gradually over several days and commonly last around three to six months, depending on the individual and treatment area.",
        botoxFaqQ1:"Which wrinkles can Botox treat?",
        botoxFaqA1:"Botox is mainly used for dynamic wrinkles caused by facial movement, including forehead lines, frown lines between the eyebrows, and crow's feet around the eyes. It may also be used in other areas depending on the treatment plan.",
        botoxFaqQ2:"When will I see the results?",
        botoxFaqA2:"The effects develop gradually. Some improvement may be noticeable within several days, while the full effect can take around one to two weeks.",
        botoxFaqQ3:"How long do Botox results last?",
        botoxFaqA3:"Results commonly last around three to six months. The duration can vary depending on the individual, the treatment area, and the amount used.",
        heroDescription:
    "Personalized dermatological and aesthetic care designed around your skin, your features, and your goals.",

bookConsultation: "Book a consultation",
exploreTreatments: "Explore treatments",
scrollExplore: "Scroll to explore",

statExperience: "Years of experience",
statApproach: "Personalized approach",
statLanguages: "Languages",
statCare: "Patient-focused care",

aboutLearnMore: "Discover the approach",

navTreatments: "Treatments",
navJourney: "Your Journey",
navFaq: "FAQ",

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

whatsapp: "WhatsApp"
    },
	ar: {
		brand: "د. رهام قليب",
		sidebarTitle: "حيث تلتقي صحة البشرة بالجمال",
		navHome: "الرئيسية",
		navAbout: "نبذة عني",
		navProjects: "المشاريع",
		navContact: "تواصل معنا",
		heroEyebrow: "الأمراض الجلدية السريرية · طب التجميل",
		heroTitle: "د. رهام قليب",
		heroSubtitle: "حيث تلتقي صحة البشرة بالجمال",
		aboutLabel: "نبذة عن د. رهام",
		aboutTitle: "خبرة تُصاغ بما يناسبك.",
		aboutBody: "د. رهام قليب طبيبة أخصائية في الأمراض الجلدية، تتمتع بخبرة تزيد عن عشر سنوات في تقييم وعلاج الحالات الجلدية السريرية والتجميلية. بعد حصولها على درجة الماجستير عام 2018، واصلت شغفها وحصلت على شهادات متخصصة في علاجات الليزر والتجميل. تعتمد في ممارستها على الاستماع الدقيق ووضع خطط علاجية مخصصة، لأن لكل مريض ولكل بشرة احتياجات مختلفة.",
		aboutSpecialtyLabel: "التخصص",
		aboutSpecialty: "الأمراض الجلدية السريرية والتجميلية",
		aboutExperienceLabel: "الخبرة",
		aboutExperience: "أكثر من 10 سنوات",
		aboutLanguagesLabel: "اللغات",
		aboutLanguages: "العربية والإنجليزية",
		projectsLabel: "نتائج علاجية",
		projectsTitle: "نظرة أقرب على العمل.",
		projectsBody: "استكشف نتائج مختارة من العلاجات التجميلية من خلال مقارنات قبل وبعد.",
		projectOneTitle: "شد الوجه",
		projectOneBody: "تحسين تناسق ملامح الوجه من خلال خطة تجميلية مخصصة تحافظ على التعبير الطبيعي.",
		projectTwoTitle: "فيلر",
		projectTwoBody: "تحديد وزيادة حجم الشفاه بشكل متوازن ومدروس ليناسب ملامح الوجه ويمنح نتيجة طبيعية.",
		projectThreeTitle: "بوتوكس",
		projectThreeBody: "علاج موجه للتجاعيد بدقة لتنعيم الخطوط مع الحفاظ على تعابير الوجه وشكله الطبيعي.",
		before: "قبل",
		after: "بعد",
		bookNow: "احجز الآن",
		learnMore: "اعرف المزيد",
		contactLabel: "لنبدأ الحوار",
		contactTitle: "ابدأ باستشارة جلدية.",
		contactBody: "المواعيد متاحة في كوزمسيرج أبوظبي لعلاجات الأمراض الجلدية والليزر والتجميل.",
		callNow: "اتصل للحجز",
		footerSpecialty: "طبيبة أخصائية في الأمراض الجلدية · كوزمسيرج أبوظبي",
		footerContact: "تواصل",
		footerFollow: "تابعنا",
		footerVisit: "قم بزيارة العيادة",
		footerAddress: "كوزمسيرج أبوظبي، منطقة الدلما، أبوظبي، الإمارات العربية المتحدة",
		viewLocation: "عرض تفاصيل الموقع",
		footerCopyright: "© 2026 د. رهام قليب. جميع الحقوق محفوظة.",
		profileSource: "الملف المهني",
		menuOpen: "فتح قائمة التنقل",
		menuClose: "إغلاق قائمة التنقل",
		comparisonBeforeAfter: "مقارنة قبل وبعد",
		comparisonSlider: "تحريك شريط المقارنة",
		procedureVideo: "عرض العلاج",
		procedureDetails: "معلومات عن الإجراء",
		procedureGallery: "نتائج مختارة للعملاء",
		procedureVideoBody: "نظرة أقرب على طريقة العلاج، بتنفيذ دقيق وتركيز على نتائج طبيعية المظهر.",
        faceProcedureBody: "تُعد جراحة شد الوجه إجراءً مخصصًا لتجديد مظهر الوجه، وتهدف إلى معالجة ترهل الجلد والخدين وخط الفك والتجاعيد العميقة وفقدان التحديد في الجزء السفلي من الوجه والرقبة. ويتم اختيار الأسلوب المناسب وفقًا لتشريح الوجه وحالة البشرة والأهداف الجمالية لكل شخص.",
        procedurePointOneLabel: "ما يعالجه الإجراء",
        procedurePointOne: "يمكن لشد الوجه تحسين ترهل الجلد والخدين وتحديد ملامح الوجه والجلد المترهل في الجزء السفلي من الوجه والرقبة.",
        procedurePointTwoLabel: "تقنية مخصصة",
        procedurePointTwo: "قد يشمل العلاج شدًا مصغرًا أو شدًا تقليديًا أو تقنية أعمق، وذلك وفقًا لتشريح الوجه ودرجة التغيرات المرتبطة بالعمر والأهداف المطلوبة.",
        procedurePointThreeLabel: "التعافي والنتائج",
        procedurePointThree: "تختلف فترة التعافي من شخص لآخر ومن إجراء لآخر، بينما يتحسن التورم والكدمات تدريجيًا خلال فترة التعافي.",
		faqTitle: "الأسئلة الشائعة",
        faqQ1: "ما المناطق التي يعالجها شد الوجه؟",
        faqA1: "يركز شد الوجه بشكل أساسي على الثلثين السفليين من الوجه، بما في ذلك الخدين وخط الفك ومناطق الجلد المترهل. وقد يتم التفكير في إجراءات إضافية عند وجود مشكلات تتعلق بالجفون أو الحاجب أو الرقبة.",
        faqQ2: "ما أنواع شد الوجه المتاحة؟",
        faqA2: "يتم تحديد التقنية وفقًا لكل حالة. وبناءً على درجة الترهل وتشريح الوجه، قد تشمل الخيارات شد الوجه المصغر أو الشد التقليدي بتقنية SMAS أو تقنيات شد أعمق.",
        faqQ3: "كيف تكون فترة التعافي بعد شد الوجه؟",
        faqA3: "تختلف فترة التعافي حسب نوع الإجراء وحالة كل شخص. من المتوقع حدوث بعض التورم والكدمات في الفترة الأولى، ثم تتحسن تدريجيًا. وسيتم تقديم تعليمات خاصة حول العناية والعودة إلى الأنشطة اليومية والتمارين.",
		galleryPrevious: "الصورة السابقة",
		galleryNext: "الصورة التالية",
		detailFace: "توازن ملامح الوجه",
		detailFiller: "تحسين الشفاه",
		detailBotox: "تنعيم تعابير الوجه",
		faceTitle: "توازن ورفع ملامح الوجه",
		faceEyebrow: "الأمراض الجلدية التجميلية",
		faceBody: "خطة علاجية مخصصة للوجه تركز على التناسق والتحديد وتحسين الملامح بشكل طبيعي.",
		fillerTitle: "فيلر الشفاه وتناسق الوجه",
		fillerEyebrow: "التجميل بالحقن",
		fillerBody: "يمكن للفيلر الموضعي والمدروس أن يعيد التوازن والتحديد مع الحفاظ على طبيعة ملامحك.",
		botoxTitle: "علاج التجاعيد وتنعيم الخطوط",
		botoxEyebrow: "علاج يحافظ على تعابير الوجه",
		botoxBody: "يساعد علاج التجاعيد الموجه على تنعيم الخطوط التعبيرية مع الحفاظ على مظهر طبيعي وحيوي.",
        fillerProcedureBody:"الفيلر الجلدي هو إجراء غير جراحي يعتمد على الحقن لاستعادة الحجم المفقود وتخفيف الخطوط والتجاعيد وتحسين ملامح الوجه وتعزيز تناسقه. ويتم تصميم خطة العلاج بما يتناسب مع ملامح الوجه واحتياجات كل شخص وأهدافه الجمالية.",
        fillerPointOneLabel:"ما الذي يمكن تحسينه",
        fillerPointOne:"يمكن للفيلر تحسين مظهر الشفاه والخدين، واستعادة الحجم، وتخفيف الخطوط حول الفم والأنف، وتحسين تناسق ملامح الوجه وتحديدها.",
        fillerPointTwoLabel:    "علاج مخصص",
        fillerPointTwo:"يتم اختيار نوع الفيلر وكميته والمنطقة المراد علاجها وطريقة الحقن وفقًا لتشريح الوجه والنتيجة المطلوبة.",
        fillerPointThreeLabel:"العلاج والتعافي",
        fillerPointThree:"يتم إجراء الفيلر عادةً خلال زيارة للعيادة. وقد يحدث بعض التورم أو الكدمات الخفيفة، والتي تتحسن عادةً خلال الأيام التالية.",
        fillerFaqQ1:"ما استخدامات الفيلر الجلدي؟",
        fillerFaqA1:"يمكن استخدام الفيلر الجلدي لاستعادة الحجم المفقود وتخفيف الخطوط والتجاعيد وتحسين مظهر الشفاه والخدين وتحديد ملامح الوجه وتعزيز التناسق بين أجزاء الوجه.",
        fillerFaqQ2:"كيف يتم اختيار نوع الفيلر المناسب؟",
        fillerFaqA2: "يعتمد اختيار الفيلر المناسب على المنطقة المراد علاجها والنتيجة المطلوبة وخصائص المنتج مثل القوام والكثافة وعمق الحقن. ويتم تحديد الخيار الأنسب خلال الاستشارة.",
        fillerFaqQ3:"كم تستمر نتائج الفيلر؟",
        fillerFaqA3:"تختلف مدة النتائج حسب نوع الفيلر والمنطقة المعالجة وحالة كل شخص. وعادةً ما تستمر أنواع حمض الهيالورونيك من حوالي 6 إلى 18 شهرًا، بينما قد تستمر بعض أنواع الفيلر الأخرى لفترة أطول.",
        botoxProcedureBody:"تُعد حقن توكسين البوتولينوم إجراءً غير جراحي يقلل مؤقتًا من نشاط عضلات معينة بهدف تخفيف التجاعيد الديناميكية والخطوط الدقيقة مع الحفاظ على مظهر طبيعي وتعبيرات الوجه.",
        botoxPointOneLabel:"ما الذي يمكن تحسينه",
        botoxPointOne:"يمكن للعلاج تخفيف الخطوط المرتبطة بتعبيرات الوجه مثل خطوط الجبهة وخطوط العبوس بين الحاجبين والتجاعيد حول العينين.",
        botoxPointTwoLabel:"كيف يعمل",
        botoxPointTwo:"يعمل العلاج مؤقتًا على تقليل الإشارات العصبية إلى العضلات المستهدفة، مما يسمح لها بالاسترخاء ويجعل التجاعيد المرتبطة بحركتها أقل وضوحًا.",
        botoxPointThreeLabel:"التوقيت ومدة النتائج",
        botoxPointThree:"تظهر النتائج تدريجيًا خلال عدة أيام، وتستمر عادةً لمدة تتراوح بين ثلاثة وستة أشهر، حسب الشخص والمنطقة المعالجة.",
        botoxFaqQ1:"ما التجاعيد التي يمكن علاجها بالبوتوكس؟",
        botoxFaqA1:"يُستخدم البوتوكس بشكل أساسي لعلاج التجاعيد الديناميكية الناتجة عن حركة عضلات الوجه، مثل خطوط الجبهة وخطوط العبوس بين الحاجبين والتجاعيد حول العينين. ويمكن استخدامه أيضًا في مناطق أخرى وفقًا لخطة العلاج.",
        botoxFaqQ2:"متى تظهر نتائج البوتوكس؟",
        botoxFaqA2:"تظهر التأثيرات تدريجيًا. قد يبدأ بعض التحسن خلال عدة أيام، بينما قد يستغرق ظهور التأثير الكامل حوالي أسبوع إلى أسبوعين.",
        botoxFaqQ3:"كم تستمر نتائج البوتوكس؟",
        botoxFaqA3:"تستمر النتائج عادةً لمدة تتراوح بين ثلاثة وستة أشهر. وقد تختلف المدة حسب الشخص والمنطقة المعالجة والكمية المستخدمة.",
        heroDescription:
    "رعاية جلدية وتجميلية مخصصة يتم تصميمها وفقًا لبشرتك وملامحك وأهدافك.",

bookConsultation: "احجزي استشارتك",
exploreTreatments: "استكشفي العلاجات",
scrollExplore: "مرري لاستكشاف المزيد",

statExperience: "سنوات من الخبرة",
statApproach: "نهج مخصص",
statLanguages: "لغتان",
statCare: "رعاية تركز على المريض",

aboutLearnMore: "اكتشفي نهج العلاج",

navTreatments: "العلاجات",
navJourney: "رحلتك",
navFaq: "الأسئلة الشائعة",

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
homeFaqA1:
    "يعتمد العلاج المناسب على احتياجاتك وحالة بشرتك وتشريح الوجه والتاريخ الطبي والأهداف المطلوبة. وتتيح الاستشارة تقييم هذه العوامل ومناقشة الخيارات المناسبة.",

homeFaqQ2: "هل العلاجات التجميلية مخصصة لكل شخص؟",
homeFaqA2:
    "نعم. يتم اختيار مناطق العلاج والتقنيات والمنتجات والكميات وفقًا لاحتياجات كل شخص بدلًا من اتباع أسلوب واحد للجميع.",

homeFaqQ3: "هل يمكنني مناقشة أكثر من مشكلة خلال الاستشارة؟",
homeFaqA3:
    "نعم. يمكن خلال الاستشارة مناقشة مختلف مخاوفك وفهم العلاجات التي قد تكون مناسبة لكل مشكلة بشكل منفصل أو ضمن خطة علاجية متكاملة.",

whatsapp: "واتساب"
	}
};

const setupProjectDropdown = () => {
	const projectItem = document.querySelector(".site-sidebar__item a[data-i18n=navProjects]")?.closest(".site-sidebar__item");
	if (!projectItem || projectItem.querySelector("details")) return;

	const projectLink = projectItem.querySelector("a");
	const details = document.createElement("details");
	const summary = document.createElement("summary");
	summary.dataset.i18n = "navProjects";
	summary.textContent = projectLink.textContent;
	const subnav = document.createElement("ul");
	subnav.className = "site-sidebar__subnav";
	[
		["face_lift.html", "detailFace"],
		["filler.html", "detailFiller"],
		["botox.html", "detailBotox"]
	].forEach(([href, key]) => {
		const item = document.createElement("li");
		const link = document.createElement("a");
		link.href = href;
		link.dataset.i18n = key;
		item.append(link);
		subnav.append(item);
	});
	details.append(summary, subnav);
	projectItem.replaceChildren(details);
};



const initializeProcedureGallery = () => {
    const galleryImages = document.body.dataset.gallery;

    if (!galleryImages) {
        return;
    }

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
        currentModalIndex =
            (index + images.length) % images.length;

        modalImage.src = images[currentModalIndex];
        modalImage.alt =
            `Treatment result ${currentModalIndex + 1}`;
    };

    const openImageModal = (index) => {
        if (!modal || !modalImage) {
            return;
        }

        showModalImage(index);

        bootstrap.Modal
            .getOrCreateInstance(modal)
            .show();
    };

    // -----------------------------
    // MODAL ARROWS
    // -----------------------------

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

    // -----------------------------
    // KEYBOARD ARROWS
    // -----------------------------

    document.addEventListener("keydown", (event) => {
        if (!modal?.classList.contains("show")) {
            return;
        }

        if (event.key === "ArrowLeft") {
            event.preventDefault();
            showModalImage(currentModalIndex - 1);
        }

        if (event.key === "ArrowRight") {
            event.preventDefault();
            showModalImage(currentModalIndex + 1);
        }
    });

    // -----------------------------
    // CAROUSEL
    // -----------------------------

    document
        .querySelectorAll(".procedure-carousel")
        .forEach((carousel) => {

            const carouselInner =
                carousel.querySelector(".carousel-inner");

            if (!carouselInner) {
                return;
            }

            carouselInner.innerHTML = "";

            images.forEach((image, index) => {
                const item = document.createElement("div");

                item.className =
                    `carousel-item${index === 0 ? " active" : ""}`;

                const img = document.createElement("img");

                img.src = image;
                img.className =
                    "d-block w-100 procedure-gallery-image";

                img.alt =
                    `Treatment result ${index + 1}`;

                img.addEventListener("click", () => {
                    openImageModal(index);
                });

                item.appendChild(img);
                carouselInner.appendChild(item);
            });

            if (images.length <= 1) {
                carousel
                    .querySelector(".carousel-control-prev")
                    ?.remove();

                carousel
                    .querySelector(".carousel-control-next")
                    ?.remove();

                carousel.removeAttribute("data-bs-ride");
                carousel.removeAttribute("data-bs-interval");
            }
        });
};

// const ensureFooterStructure = () => {
// 	const footer = document.querySelector(".site-footer");
// 	if (!footer || footer.querySelector(".site-footer__map")) return;

// 	const bottom = footer.querySelector(".site-footer__bottom");
// 	const map = document.createElement("div");
// 	map.className = "site-footer__map container";
// 	map.innerHTML = `
// 		<div>
// 			<p class="site-footer__heading" data-i18n="footerVisit">Visit the clinic</p>
// 			<p class="site-footer__muted" data-i18n="footerAddress">Cosmesurge Abu Dhabi, Delma region, Abu Dhabi, UAE</p>
// 			<a href="https://m.edarabia.com/dr-reham-kolib/" target="_blank" rel="noopener noreferrer" data-i18n="viewLocation">View location details</a>
// 		</div>
// 		<iframe title="Cosmesurge Abu Dhabi location map" src="https://www.google.com/maps?q=Cosmesurge+Abu+Dhabi&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
// 	`;
// 	footer.insertBefore(map, bottom);
// };

setupProjectDropdown();
initializeProcedureGallery();
// ensureFooterStructure();

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
	document.querySelector('meta[name="description"]')?.setAttribute("content", pageKey && content[`${pageKey}Body`] ? content[`${pageKey}Body`] : language === "ar"
		? "د. رهام قليب طبيبة أخصائية في الأمراض الجلدية بأبوظبي، تتمتع بخبرة تزيد عن 10 سنوات في الأمراض الجلدية السريرية والتجميلية وعلاجات الليزر والتجميل."
		: "Dr. Reham Kolib is a specialist dermatologist in Abu Dhabi with over 10 years of experience in clinical and cosmetic dermatology, laser, and aesthetic treatments.");
	document.querySelector('meta[name="keywords"]')?.setAttribute("content", language === "ar"
		? "د. رهام قليب, طبيبة جلدية أبوظبي, طبيبة جلدية تجميلية, علاجات الليزر أبوظبي, تجميل البشرة الإمارات"
		: "Dr Reham Kolib, dermatologist Abu Dhabi, cosmetic dermatologist UAE, laser treatments Abu Dhabi, aesthetic dermatology");

	document.querySelectorAll("[data-i18n]").forEach((element) => {
		element.textContent = content[element.dataset.i18n];
	});
	languageButtons.forEach((button) => {
		const isActive = button.dataset.language === language;
		button.classList.toggle("is-active", isActive);
		button.setAttribute("aria-pressed", String(isActive));
	});
	menuToggle?.setAttribute("aria-label", menuToggle.getAttribute("aria-expanded") === "true" ? content.menuClose : content.menuOpen);
	comparisons.forEach((comparison) => {
		comparison.setAttribute("aria-label", `${content.comparisonBeforeAfter}: ${comparison.querySelector("h3")?.textContent || ""}`);
		comparison.querySelector(".comparison__knob").setAttribute("aria-label", content.comparisonSlider);
	});
	document.querySelector("[data-gallery-prev]")?.setAttribute("aria-label", content.galleryPrevious);
	document.querySelector("[data-gallery-next]")?.setAttribute("aria-label", content.galleryNext);
	localStorage.setItem("preferred-language", language);
};

languageButtons.forEach((button) => {
	button.addEventListener("click", () => setLanguage(button.dataset.language));
});

setLanguage(
    new URLSearchParams(window.location.search).get("lang") ||
    localStorage.getItem("preferred-language") ||
    "en"
);

document.body.classList.add("js-ready");

const waitForPanel = (panel) => {
    const backgroundImage = getComputedStyle(panel).backgroundImage;

    const imageUrl = backgroundImage.match(
        /url\(["']?(.*?)["']?\)/
    )?.[1];

    if (!imageUrl) {
        return Promise.resolve();
    }

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

// Keep all menu state in one place so the button, sidebar, backdrop, and body stay synchronized.
const setMenuState = (isOpen) => {
	menuToggle?.classList.toggle("is-active", isOpen);
	menuToggle?.setAttribute("aria-expanded", String(isOpen));
	const currentLanguage = document.documentElement.lang || "en";
	menuToggle?.setAttribute("aria-label", isOpen ? translations[currentLanguage].menuClose : translations[currentLanguage].menuOpen);
	sidebar?.classList.toggle("is-visible", isOpen);
	sidebar?.setAttribute("aria-hidden", String(!isOpen));
	sidebarBackdrop?.classList.toggle("is-visible", isOpen);
	document.body.classList.toggle("menu-is-open", isOpen);
};

menuToggle?.addEventListener("click", () => {
	setMenuState(menuToggle.getAttribute("aria-expanded") !== "true");
});

sidebarBackdrop?.addEventListener("click", () => setMenuState(false));

navigationLinks.forEach((link) => {
	link.addEventListener("click", () => setMenuState(false));
});

sidebar?.addEventListener("click", (event) => {
	if (event.target.closest("a")) setMenuState(false);
});

document.addEventListener("keydown", (event) => {
	if (event.key === "Escape") {
		setMenuState(false);
	}
});

// Reveal each text group as it enters the viewport, keeping the motion subtle and interruptible.
const revealObserver = new IntersectionObserver((entries, observer) => {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) return;
		entry.target.classList.add("reveal-visible");
		observer.unobserve(entry.target);
	});
}, { threshold: 0.2, rootMargin: "0px 0px -8%" });

document.querySelectorAll(".projects__intro, .project__details, .content-section, .about-section, .procedure-video, .procedure-gallery, .procedure-info, .procedure-faq, .treatment-grid, .client-gallery").forEach((section) => {
	revealObserver.observe(section);
});

// Subtle Hero Parallax Effect
if (hero) {
    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        // Only run parallax if we're near the top to save performance
        if (scrollY < window.innerHeight) {
            panels.forEach(panel => {
                panel.style.transform = `scale(1.02) translateY(${scrollY * 0.25}px)`;
            });
        }
    }, { passive: true });
}

// Initialize each project comparison independently so dragging one does not affect the others.
comparisons.forEach((comparison) => {
	const beforeImage = comparison.querySelector(".comparison__image--before");
	const sliderLine = comparison.querySelector(".comparison__line");
	const sliderKnob = comparison.querySelector(".comparison__knob");
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
		if (!image.naturalWidth || !image.naturalHeight) return;

		const bounds = comparison.getBoundingClientRect();
		const imageRatio = image.naturalWidth / image.naturalHeight;
		const project = comparison.closest(".project");
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

		// A 20% crop means the container ratio must stay within 80% of the image ratio.
		const targetRatio = imageRatio > currentRatio
			? imageRatio * 0.6
			: imageRatio / 0.6;
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
		if (isDragging) handleMove(event.clientX, event.clientY);
	});

	comparison.addEventListener("pointerup", stopDragging);
	comparison.addEventListener("pointercancel", stopDragging);
	window.addEventListener("resize", updateImageFraming);
	comparison.querySelectorAll("img").forEach((image) => {
		image.addEventListener("load", updateImageFraming, { once: true });
		if (image.complete) updateImageFraming();
	});

	sliderKnob.addEventListener("keydown", (event) => {
		const increments = { ArrowLeft: -5, ArrowDown: -5, ArrowRight: 5, ArrowUp: 5 };
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

// document.querySelectorAll("[data-client-gallery]").forEach((gallery) => {
// 	const cards = [...gallery.querySelectorAll(".client-gallery__card")];
// 	let activeIndex = 0;
// 	let timer;

// 	const showCard = (nextIndex) => {
// 		activeIndex = (nextIndex + cards.length) % cards.length;
// 		cards.forEach((card, index) => {
// 			card.classList.toggle("is-active", index === activeIndex);
// 			card.setAttribute("aria-hidden", String(index !== activeIndex));
// 		});
// 	};

// 	const startAutoPlay = () => {
// 		clearInterval(timer);
// 		timer = setInterval(() => showCard(activeIndex + 1), 500);
// 	};

// 	gallery.querySelector("[data-gallery-prev]").addEventListener("click", () => {
// 		showCard(activeIndex - 1);
// 		startAutoPlay();
// 	});
// 	gallery.querySelector("[data-gallery-next]").addEventListener("click", () => {
// 		showCard(activeIndex + 1);
// 		startAutoPlay();
// 	});
// 	gallery.addEventListener("mouseenter", () => clearInterval(timer));
// 	gallery.addEventListener("mouseleave", startAutoPlay);
// 	gallery.addEventListener("focusin", () => clearInterval(timer));
// 	gallery.addEventListener("focusout", startAutoPlay);
// 	showCard(0);
// 	startAutoPlay();
// });
