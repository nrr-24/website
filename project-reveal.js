/* =========================================================
   PROJECT CARD REVEAL — GSAP ScrollTrigger
   Homepage only. Applies to the three result cards in the
   "Results" section (#projects .project). Each card simply
   rises and fades into place as it enters the viewport —
   no pinning, no dimming, no scale-down handoff.
========================================================= */

(function () {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
        return; // GSAP failed to load — cards still show via the site's existing reveal
    }

    gsap.registerPlugin(ScrollTrigger);

    const initProjectReveal = () => {
        const cards = gsap.utils.toArray("#projects .project");
        if (!cards.length) return;

        const prefersReduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReduced) return;

        cards.forEach((card) => {
            gsap.fromTo(
                card,
                { autoAlpha: 0, y: 60 },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.9,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 82%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
    };

    if (document.readyState === "complete") {
        initProjectReveal();
    } else {
        window.addEventListener("load", initProjectReveal);
    }
})();
