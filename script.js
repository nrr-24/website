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
		comparisonSlider: "Move comparison slider"
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
		comparisonSlider: "تحريك شريط المقارنة"
	}
};

const setLanguage = (language) => {
	const content = translations[language];
	if (!content) return;

	document.documentElement.lang = language;
	document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
	document.title = language === "ar"
		? "د. رهام قليب | طبيبة أخصائية في الأمراض الجلدية بأبوظبي"
		: "Dr. Reham Kolib | Specialist Dermatologist in Abu Dhabi";
	document.querySelector('meta[name="description"]').setAttribute("content", language === "ar"
		? "د. رهام قليب طبيبة أخصائية في الأمراض الجلدية بأبوظبي، تتمتع بخبرة تزيد عن 10 سنوات في الأمراض الجلدية السريرية والتجميلية وعلاجات الليزر والتجميل."
		: "Dr. Reham Kolib is a specialist dermatologist in Abu Dhabi with over 10 years of experience in clinical and cosmetic dermatology, laser, and aesthetic treatments.");
	document.querySelector('meta[name="keywords"]').setAttribute("content", language === "ar"
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
	menuToggle.setAttribute("aria-label", menuToggle.getAttribute("aria-expanded") === "true" ? content.menuClose : content.menuOpen);
	comparisons.forEach((comparison) => {
		comparison.setAttribute("aria-label", `${content.comparisonBeforeAfter}: ${comparison.querySelector("h3")?.textContent || ""}`);
		comparison.querySelector(".comparison__knob").setAttribute("aria-label", content.comparisonSlider);
	});
	localStorage.setItem("preferred-language", language);
};

languageButtons.forEach((button) => {
	button.addEventListener("click", () => setLanguage(button.dataset.language));
});

setLanguage(localStorage.getItem("preferred-language") || new URLSearchParams(window.location.search).get("lang") || "en");

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

Promise.all([...panels].map(waitForPanel)).then(() => {
	hero.classList.add("is-loaded");
});

// Keep all menu state in one place so the button, sidebar, backdrop, and body stay synchronized.
const setMenuState = (isOpen) => {
	menuToggle.classList.toggle("is-active", isOpen);
	menuToggle.setAttribute("aria-expanded", String(isOpen));
	const currentLanguage = document.documentElement.lang || "en";
	menuToggle.setAttribute("aria-label", isOpen ? translations[currentLanguage].menuClose : translations[currentLanguage].menuOpen);
	sidebar.classList.toggle("is-visible", isOpen);
	sidebar.setAttribute("aria-hidden", String(!isOpen));
	sidebarBackdrop.classList.toggle("is-visible", isOpen);
	document.body.classList.toggle("menu-is-open", isOpen);
};

menuToggle.addEventListener("click", () => {
	setMenuState(menuToggle.getAttribute("aria-expanded") !== "true");
});

sidebarBackdrop.addEventListener("click", () => setMenuState(false));

navigationLinks.forEach((link) => {
	link.addEventListener("click", () => setMenuState(false));
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
