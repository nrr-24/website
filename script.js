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
		sidebarTitle: "Clinical expertise, refined aesthetic care.",
		navHome: "Home",
		navAbout: "About",
		navProjects: "Projects",
		navContact: "Contact",
		heroEyebrow: "Clinical dermatology · Aesthetic medicine",
		heroTitle: "Healthy skin. Natural results.",
		heroSubtitle: "Personalized dermatology and aesthetic treatments designed around you.",
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
		projectOneTitle: "Facial balance",
		projectOneBody: "Refined facial proportions through a personalized aesthetic treatment plan designed to preserve natural expression.",
		projectTwoTitle: "Lip enhancement",
		projectTwoBody: "Subtle lip definition and volume, carefully tailored to facial features for a balanced, natural-looking result.",
		projectThreeTitle: "Expression softening",
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
		procedurePointOneLabel: "Personalized plan",
		procedurePointOne: "A consultation-led treatment designed around your features and goals.",
		procedurePointTwoLabel: "Natural finish",
		procedurePointTwo: "Balanced results that respect your proportions and expression.",
		procedurePointThreeLabel: "Expert guidance",
		procedurePointThree: "Clear preparation and aftercare guidance from consultation to follow-up.",
		faqTitle: "Frequently asked questions",
		faqQ1: "How is the right treatment selected?",
		faqA1: "The treatment is selected after a consultation that considers your concerns, anatomy, medical history, and desired outcome.",
		faqQ2: "How long does a consultation take?",
		faqA2: "Your consultation includes assessment, discussion of options, and aftercare guidance. The exact timing depends on your needs.",
		faqQ3: "When will I see the result?",
		faqA3: "Timing varies by treatment. Dr. Reham will explain what to expect, including any settling period and follow-up plan.",
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
		botoxBody: "Targeted wrinkle treatment can soften dynamic lines while preserving a natural, expressive appearance."
	},
	ar: {
		brand: "د. رهام قليب",
		sidebarTitle: "خبرة جلدية ورعاية تجميلية متقدمة.",
		navHome: "الرئيسية",
		navAbout: "نبذة عني",
		navProjects: "المشاريع",
		navContact: "تواصل معنا",
		heroEyebrow: "الأمراض الجلدية السريرية · طب التجميل",
		heroTitle: "بشرة صحية. نتائج طبيعية.",
		heroSubtitle: "علاجات جلدية وتجميلية مخصصة صُممت لتناسبك.",
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
		projectOneTitle: "توازن ملامح الوجه",
		projectOneBody: "تحسين تناسق ملامح الوجه من خلال خطة تجميلية مخصصة تحافظ على التعبير الطبيعي.",
		projectTwoTitle: "تحسين الشفاه",
		projectTwoBody: "تحديد وزيادة حجم الشفاه بشكل متوازن ومدروس ليناسب ملامح الوجه ويمنح نتيجة طبيعية.",
		projectThreeTitle: "تنعيم تعابير الوجه",
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
		procedurePointOneLabel: "خطة مخصصة",
		procedurePointOne: "علاج يبدأ باستشارة ويُصمم بما يناسب ملامحك وأهدافك.",
		procedurePointTwoLabel: "نتيجة طبيعية",
		procedurePointTwo: "نتائج متوازنة تحترم تناسق ملامحك وتعابير وجهك.",
		procedurePointThreeLabel: "إرشاد متخصص",
		procedurePointThree: "إرشادات واضحة للتحضير والعناية بعد العلاج من الاستشارة حتى المتابعة.",
		faqTitle: "الأسئلة الشائعة",
		faqQ1: "كيف يتم اختيار العلاج المناسب؟",
		faqA1: "يتم اختيار العلاج بعد استشارة تراعي احتياجاتك وملامحك وتاريخك الطبي والنتيجة التي ترغبين في الوصول إليها.",
		faqQ2: "كم تستغرق الاستشارة؟",
		faqA2: "تشمل الاستشارة التقييم ومناقشة الخيارات وإرشادات العناية بعد العلاج، وتختلف مدتها حسب احتياجاتك.",
		faqQ3: "متى تظهر النتيجة؟",
		faqA3: "يختلف توقيت ظهور النتيجة حسب نوع العلاج. ستوضح لك د. رهام ما يمكن توقعه وخطة المتابعة.",
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
		botoxBody: "يساعد علاج التجاعيد الموجه على تنعيم الخطوط التعبيرية مع الحفاظ على مظهر طبيعي وحيوي."
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

const renderProcedurePage = () => {
	const pageKey = document.body.dataset.page;
	const main = document.querySelector(".detail-main");
	if (!pageKey || !main || main.querySelector(".procedure-video")) return;

	main.className = "detail-main procedure-page-main";
	const videoSource = document.body.dataset.video;
	const videoPoster = document.body.dataset.poster;
	const carouselImages = (document.body.dataset.gallery || "").split(",").map((image) => image.trim()).filter(Boolean);
	const carouselId = `${pageKey}-client-carousel`;
	main.innerHTML = `
		<section class="procedure-video" aria-labelledby="procedure-video-title">
			<div class="procedure-section__heading">
				<p class="section-label" data-i18n="${pageKey}Eyebrow"></p>
				<h2 id="procedure-video-title" data-i18n="procedureVideo">Treatment showcase</h2>
				<p data-i18n="procedureVideoBody"></p>
			</div>
			<!-- Replace the local video path below with a final local file or hosted video URL. -->
			<video class="procedure-video__player" controls muted loop playsinline preload="metadata" poster="${videoPoster}">
				<source src="${videoSource}" type="video/mp4">
			</video>
		</section>
		<section class="procedure-info" aria-labelledby="procedure-info-title">
			<p class="section-label" data-i18n="${pageKey}Eyebrow"></p>
			<h2 id="procedure-info-title" data-i18n="procedureDetails">About the procedure</h2>
			<p class="procedure-info__body" data-i18n="${pageKey}Body"></p>
			<div class="procedure-info__grid">
				<div><strong data-i18n="procedurePointOneLabel">Personalized plan</strong><span data-i18n="procedurePointOne">A consultation-led treatment designed around your features and goals.</span></div>
				<div><strong data-i18n="procedurePointTwoLabel">Natural finish</strong><span data-i18n="procedurePointTwo">Balanced results that respect your proportions and expression.</span></div>
				<div><strong data-i18n="procedurePointThreeLabel">Expert guidance</strong><span data-i18n="procedurePointThree">Clear preparation and aftercare guidance from consultation to follow-up.</span></div>
			</div>
		</section>
		<section class="procedure-gallery" aria-labelledby="procedure-gallery-title">
			<div class="procedure-section__heading">
				<p class="section-label" data-i18n="${pageKey}Eyebrow"></p>
				<h2 id="procedure-gallery-title" data-i18n="procedureGallery">Selected client results</h2>
			</div>
			<div id="${carouselId}" class="carousel slide procedure-carousel" data-bs-ride="carousel" data-bs-interval="5000">
				<div class="carousel-inner">
					${carouselImages.map((image, index) => `<div class="carousel-item${index === 0 ? " active" : ""}"><img src="${image.startsWith("images/") ? image : `images/${image}`}" class="d-block w-100" alt="Selected client result ${index + 1}" loading="lazy"></div>`).join("")}
				</div>
				<button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden" data-i18n="galleryPrevious">Previous image</span></button>
				<button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden" data-i18n="galleryNext">Next image</span></button>
			</div>
		</section>
		<section class="procedure-faq" aria-labelledby="procedure-faq-title">
			<p class="section-label" data-i18n="procedureDetails"></p>
			<h2 id="procedure-faq-title" data-i18n="faqTitle">Frequently asked questions</h2>
			<div class="accordion accordion-flush" id="${pageKey}-faq">
				${[1, 2, 3].map((index) => `<div class="accordion-item"><h3 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${pageKey}-faq-${index}" aria-expanded="false" aria-controls="${pageKey}-faq-${index}" data-i18n="faqQ${index}"></button></h3><div id="${pageKey}-faq-${index}" class="accordion-collapse collapse" data-bs-parent="#${pageKey}-faq"><div class="accordion-body" data-i18n="faqA${index}"></div></div></div>`).join("")}
			</div>
		</section>
		<section class="content-section container procedure-booking" id="contact" aria-labelledby="procedure-booking-title">
			<p class="section-label" data-i18n="contactLabel">Begin a conversation</p>
			<h2 id="procedure-booking-title" data-i18n="contactTitle">Start with a dermatology consultation.</h2>
			<p data-i18n="contactBody">Appointments are available at Cosmesurge Abu Dhabi for clinical dermatology, laser, and aesthetic treatments.</p>
			<a class="book-button procedure-page-main__cta" href="tel:+97180026763" data-i18n="bookNow">Book now</a>
		</section>
	`;
};

const initializeProcedureControls = () => {
	document.querySelectorAll(".procedure-carousel").forEach((carousel) => {
		const items = [...carousel.querySelectorAll(".carousel-item")];
		const showItem = (index) => {
			const nextIndex = (index + items.length) % items.length;
			items.forEach((item, itemIndex) => item.classList.toggle("active", itemIndex === nextIndex));
			carousel.dataset.activeIndex = String(nextIndex);
		};
		const move = (direction) => showItem(Number(carousel.dataset.activeIndex || 0) + direction);
		if (!window.bootstrap) {
			carousel.querySelector(".carousel-control-prev")?.addEventListener("click", () => move(-1));
			carousel.querySelector(".carousel-control-next")?.addEventListener("click", () => move(1));
		}
		showItem(0);
		if (!window.bootstrap) setInterval(() => move(1), 5000);
	});

	const hasBootstrapBundle = Boolean(document.querySelector('script[src*="bootstrap.bundle"]'));
	if (hasBootstrapBundle || window.bootstrap) return;

	document.querySelectorAll(".procedure-faq .accordion-button").forEach((button) => {
		button.addEventListener("click", () => {
			const panel = document.querySelector(button.dataset.bsTarget);
			const isOpen = panel.classList.contains("show");
			document.querySelectorAll(".procedure-faq .accordion-collapse").forEach((item) => item.classList.remove("show"));
			document.querySelectorAll(".procedure-faq .accordion-button").forEach((item) => {
				item.classList.add("collapsed");
				item.setAttribute("aria-expanded", "false");
			});
			if (!isOpen) {
				panel.classList.add("show");
				button.classList.remove("collapsed");
				button.setAttribute("aria-expanded", "true");
			}
		});
	});
};

const ensureFooterStructure = () => {
	const footer = document.querySelector(".site-footer");
	if (!footer || footer.querySelector(".site-footer__map")) return;

	const bottom = footer.querySelector(".site-footer__bottom");
	const map = document.createElement("div");
	map.className = "site-footer__map container";
	map.innerHTML = `
		<div>
			<p class="site-footer__heading" data-i18n="footerVisit">Visit the clinic</p>
			<p class="site-footer__muted" data-i18n="footerAddress">Cosmesurge Abu Dhabi, Delma region, Abu Dhabi, UAE</p>
			<a href="https://m.edarabia.com/dr-reham-kolib/" target="_blank" rel="noopener noreferrer" data-i18n="viewLocation">View location details</a>
		</div>
		<iframe title="Cosmesurge Abu Dhabi location map" src="https://www.google.com/maps?q=Cosmesurge+Abu+Dhabi&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
	`;
	footer.insertBefore(map, bottom);
};

setupProjectDropdown();
renderProcedurePage();
initializeProcedureControls();
ensureFooterStructure();

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

	setLanguage(new URLSearchParams(window.location.search).get("lang") || localStorage.getItem("preferred-language") || "en");

document.body.classList.add("js-ready");

const waitForPanel = (panel) => {
	const backgroundImage = getComputedStyle(panel).backgroundImage;
	const imageUrl = backgroundImage.match(/url\(["']?(.*?)["']?\)/)?.[1];

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

document.querySelectorAll(".projects__intro, .project__details, .content-section, .about-section").forEach((section) => {
	revealObserver.observe(section);
});

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

document.querySelectorAll("[data-client-gallery]").forEach((gallery) => {
	const cards = [...gallery.querySelectorAll(".client-gallery__card")];
	let activeIndex = 0;
	let timer;

	const showCard = (nextIndex) => {
		activeIndex = (nextIndex + cards.length) % cards.length;
		cards.forEach((card, index) => {
			card.classList.toggle("is-active", index === activeIndex);
			card.setAttribute("aria-hidden", String(index !== activeIndex));
		});
	};

	const startAutoPlay = () => {
		clearInterval(timer);
		timer = setInterval(() => showCard(activeIndex + 1), 500);
	};

	gallery.querySelector("[data-gallery-prev]").addEventListener("click", () => {
		showCard(activeIndex - 1);
		startAutoPlay();
	});
	gallery.querySelector("[data-gallery-next]").addEventListener("click", () => {
		showCard(activeIndex + 1);
		startAutoPlay();
	});
	gallery.addEventListener("mouseenter", () => clearInterval(timer));
	gallery.addEventListener("mouseleave", startAutoPlay);
	gallery.addEventListener("focusin", () => clearInterval(timer));
	gallery.addEventListener("focusout", startAutoPlay);
	showCard(0);
	startAutoPlay();
});
