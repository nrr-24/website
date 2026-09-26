/**
 * =========================================================================
 * CENTRAL SITE COMPONENTS: SIDEBAR, CTA (START A CONVERSATION), & FOOTER
 * =========================================================================
 * 
 * WHERE TO EDIT:
 * 1. SIDEBAR & NAVIGATION: Edit `getSidebarHTML()` below to change nav links,
 *    brand title, or dropdown pages.
 * 2. CTA (START A CONVERSATION): Edit `getCTAHTML()` below to update consultation
 *    copy, telephone number, WhatsApp link, or image.
 * 3. FOOTER: Edit `getFooterHTML()` below to update clinic contact numbers,
 *    WhatsApp, social media links, address, or Google Maps embed.
 * 
 * Any changes made here automatically update ALL pages:
 * - index.html
 * - face_lift.html
 * - filler.html
 * - botox.html
 */

(function () {
    'use strict';

    // Determine current page context
    const pathname = window.location.pathname;
    const isIndex = pathname.endsWith('index.html') || pathname.endsWith('/') || !pathname.includes('.html');
    const prefix = isIndex ? '' : 'index.html';

    /**
     * 1. SIDEBAR & MENU NAVIGATION HTML
     */
    function getSidebarHTML() {
        return `
<!-- Language Switcher -->
<div class="language-switcher" aria-label="Language selection">
    <button
        class="language-switcher__button is-active"
        type="button"
        data-language="en"
        aria-pressed="true"
    >
        EN
    </button>
    <span aria-hidden="true">/</span>
    <button
        class="language-switcher__button"
        type="button"
        data-language="ar"
        aria-pressed="false"
    >
        العربية
    </button>
</div>

<!-- Menu Button -->
<button
    class="menu-toggle"
    type="button"
    aria-controls="site-sidebar"
    aria-expanded="false"
    aria-label="Open navigation menu"
>
    <span class="menu-toggle__line"></span>
    <span class="menu-toggle__line"></span>
    <span class="menu-toggle__line"></span>
</button>

<div
    class="sidebar-backdrop"
    data-menu-close
    aria-hidden="true"
></div>

<!-- Sidebar Drawer -->
<aside
    class="site-sidebar"
    id="site-sidebar"
    aria-label="Primary navigation"
    aria-hidden="true"
>
    <div class="site-sidebar__inner">
        <p class="site-sidebar__eyebrow" data-i18n="brand">
            Dr. Reham
        </p>

        <p class="site-sidebar__title" data-i18n="sidebarTitle">
            Where Skin Health Meets Beauty
        </p>

        <nav aria-label="Main navigation">
            <ul class="site-sidebar__nav">
                <li class="site-sidebar__item">
                    <a href="${prefix}#home" data-i18n="navHome">
                        Home
                    </a>
                </li>

                <li class="site-sidebar__item">
                    <a href="${prefix}#about" data-i18n="navAbout">
                        About
                    </a>
                </li>

                <li class="site-sidebar__item">
                    <a href="${prefix}#treatments" data-i18n="navTreatments">
                        Treatments
                    </a>
                </li>

                <li class="site-sidebar__item">
                    <details class="site-sidebar__dropdown">
                        <summary data-i18n="navProjects">
                            Results
                        </summary>
                        <ul class="site-sidebar__subnav">
                            <li>
                                <a href="face_lift.html" data-i18n="detailFace">
                                    Facial balance
                                </a>
                            </li>
                            <li>
                                <a href="filler.html" data-i18n="detailFiller">
                                    Lip enhancement
                                </a>
                            </li>
                            <li>
                                <a href="botox.html" data-i18n="detailBotox">
                                    Expression softening
                                </a>
                            </li>
                        </ul>
                    </details>
                </li>

                <li class="site-sidebar__item">
                    <a href="${prefix}#journey" data-i18n="navJourney">
                        Your Journey
                    </a>
                </li>

                <li class="site-sidebar__item">
                    <a href="#faq" data-i18n="navFaq">
                        FAQ
                    </a>
                </li>

                <li class="site-sidebar__item">
                    <a href="#contact" data-i18n="navContact">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</aside>
`;
    }

    /**
     * 2. CTA: BEGIN A CONVERSATION SECTION HTML
     */
    function getCTAHTML() {
        return `
<section
    class="content-section home-contact container"
    id="contact"
    aria-labelledby="contact-title"
>
    <div class="home-contact__content">
        <p
            class="section-label"
            data-i18n="contactLabel"
        >
            Begin a conversation
        </p>

        <h2
            id="contact-title"
            data-i18n="contactTitle"
        >
            Start with a dermatology consultation.
        </h2>

        <p data-i18n="contactBody">
            Appointments are available at Cosmesurge Abu Dhabi for clinical dermatology, laser, and aesthetic treatments.
        </p>

        <div class="home-contact__actions">
            <a
                class="book-button"
                href="tel:+97180026763"
                data-i18n="callNow"
            >
                Call to book
            </a>

            <a
                class="text-link"
                href="https://wa.me/971544052905"
                target="_blank"
                rel="noopener noreferrer"
                data-i18n="whatsapp"
            >
                WhatsApp
                <span aria-hidden="true">→</span>
            </a>
        </div>
    </div>

    <!-- Consultation image -->
    <figure class="home-contact__image">
        <img
            src="images/consult.png"
            alt="Dermatology consultation"
        >
    </figure>
</section>
`;
    }

    /**
     * 3. SITE FOOTER HTML
     */
    function getFooterHTML() {
        return `
<footer class="site-footer">
    <div class="site-footer__main container">
        <div>
            <p
                class="site-footer__brand"
                data-i18n="brand"
            >
                Dr. Reham
            </p>

            <p
                class="site-footer__muted"
                data-i18n="footerSpecialty"
            >
                Specialist Dermatologist · Cosmesurge Abu Dhabi
            </p>
        </div>

        <div class="site-footer__column">
            <p
                class="site-footer__heading"
                data-i18n="footerContact"
            >
                Contact
            </p>

            <a href="tel:+97180026763">
                +971 800 26763
            </a>

            <a
                href="https://wa.me/971544052905"
                target="_blank"
                rel="noopener noreferrer"
            >
                WhatsApp
            </a>
        </div>

        <div class="site-footer__column">
            <p
                class="site-footer__heading"
                data-i18n="footerFollow"
            >
                Follow
            </p>

            <a
                href="https://www.instagram.com/dr.reham.kolib/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Instagram · @dr.reham.kolib
            </a>

            <a
                href="https://www.snapchat.com/add/drrehamkolib"
                target="_blank"
                rel="noopener noreferrer"
            >
                Snapchat · @drrehamkolib
            </a>
        </div>
    </div>

    <div class="site-footer__map container">
        <div>
            <p
                class="site-footer__heading"
                data-i18n="footerVisit"
            >
                Visit the clinic
            </p>

            <p
                class="site-footer__muted"
                data-i18n="footerAddress"
            >
                Cosmesurge Abu Dhabi, Delma region, Abu Dhabi, UAE
            </p>

            <a
                href="https://m.edarabia.com/dr-reham-kolib/"
                target="_blank"
                rel="noopener noreferrer"
                data-i18n="viewLocation"
            >
                View location details
            </a>
        </div>

        <iframe
            title="Cosmesurge Abu Dhabi location map"
            src="https://www.google.com/maps?q=Cosmesurge+Abu Dhabi&output=embed"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>

    <div class="site-footer__bottom container">
        <span data-i18n="footerCopyright">
            © 2026 Dr. Reham Kolib. All rights reserved.
        </span>

        <a
            href="https://m.edarabia.com/dr-reham-kolib/"
            target="_blank"
            rel="noopener noreferrer"
            data-i18n="profileSource"
        >
            Professional profile
        </a>
    </div>
</footer>
`;
    }

    /**
     * Mount components into place
     */
    function mountComponents() {
        const sidebarMount = document.getElementById('sidebar-mount');
        if (sidebarMount) {
            sidebarMount.outerHTML = getSidebarHTML();
        }

        const ctaMount = document.getElementById('cta-mount');
        if (ctaMount) {
            ctaMount.outerHTML = getCTAHTML();
        }

        const footerMount = document.getElementById('footer-mount');
        if (footerMount) {
            footerMount.outerHTML = getFooterHTML();
        }
    }

    // Execute immediately as DOM is parsed
    mountComponents();

    // Also listen for DOMContentLoaded as fallback
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', mountComponents);
    }
})();
