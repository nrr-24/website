document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".particle-btn");

    /* =========================================
       PARTICLE THEMES
       Gold butterflies disappear on yellow
       backgrounds, so those buttons get the
       brown set instead.

       - Auto: solid yellow/light backgrounds
         and buttons that FILL gold on hover
         (.text-link, .hero__secondary-link)
       - Manual override: add
         data-particle="brown" or "gold"
       ========================================= */

    const THEMES = {
        gold: {
            image: "images/side-butterfly-gold.png",
            color: "#d6b36a"
        },
        brown: {
            image: "images/side-butterfly-brown.png",
            color: "#7a5230"
        }
    };

    const FILLS_GOLD_ON_HOVER = ".hero__secondary-link, .text-link";

    function isYellowish(cssColor) {

        const match = cssColor.match(
            /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/
        );

        if (!match) return false;

        const [r, g, b] = match.slice(1, 4).map(Number);
        const alpha = match[4] === undefined ? 1 : parseFloat(match[4]);

        // Must be mostly opaque, warm, and light
        return alpha > 0.5 && r > 170 && g > 130 && b < 170 && r > b + 40;

    }

    function getParticleTheme(button) {

        const forced = button.dataset.particle;

        if (forced && THEMES[forced]) return THEMES[forced];

        if (button.matches(FILLS_GOLD_ON_HOVER)) return THEMES.brown;

        const background = getComputedStyle(button).backgroundColor;

        return isYellowish(background) ? THEMES.brown : THEMES.gold;

    }


    /* =========================================
       CREATE PARTICLE LAYER
       ========================================= */

    buttons.forEach(button => {

        const layer = document.createElement("span");

        layer.className = "particle-layer";

        button.appendChild(layer);


        /* =====================================
           HOVER
           ===================================== */

        button.addEventListener("mouseenter", () => {

            createHoverParticles(button);

        });


        /* =====================================
           CLICK
           ===================================== */

        button.addEventListener("click", () => {

            createBurst(button);

        });

    });


    /* =========================================
       HOVER PARTICLES
       ========================================= */

    function createHoverParticles(button, { butterflyCount = 2, sparkleCount = 3, ambient = false } = {}) {

        const layer = button.querySelector(".particle-layer");
        const theme = getParticleTheme(button);


        /* Butterflies */

        for (let i = 0; i < butterflyCount; i++) {

            const particle = document.createElement("img");

            particle.src = theme.image;

            particle.className = ambient
                ? "butterfly-particle butterfly-float butterfly-ambient"
                : "butterfly-particle butterfly-float";


            const startX =
                20 + Math.random() * 60;

            const startY = ambient ? 50 : 40 + Math.random() * 20;


            const x =
                (Math.random() - 0.5) * (ambient ? 40 : 90);

            const y = ambient ? -8 - Math.random() * 12 : -25 - Math.random() * 55;


            const rotation =
                (Math.random() - 0.5) * 50;


            particle.style.left = `${startX}%`;
            particle.style.top = `${startY}%`;

            particle.style.setProperty("--x", `${x}px`);
            particle.style.setProperty("--y", `${y}px`);
            particle.style.setProperty(
                "--rotation",
                `${rotation}deg`
            );

            particle.style.animationDelay =
                `${i * 120}ms`;


            layer.appendChild(particle);


            particle.addEventListener(
                "animationend",
                () => particle.remove()
            );

        }


        /* Sparkles */

        for (let i = 0; i < sparkleCount; i++) {

            const sparkle =
                document.createElement("span");

            sparkle.className =
                "sparkle-particle sparkle-float";


            const startX =
                20 + Math.random() * 60;

            const startY =
                30 + Math.random() * 40;


            const x =
                (Math.random() - 0.5) * 100;

            const y =
                -15 - Math.random() * 55;


            sparkle.style.left =
                `${startX}%`;

            sparkle.style.top =
                `${startY}%`;

            sparkle.style.setProperty(
                "--x",
                `${x}px`
            );

            sparkle.style.setProperty(
                "--y",
                `${y}px`
            );


            sparkle.style.color =
                theme.color;


            sparkle.style.animationDelay =
                `${Math.random() * 200}ms`;


            layer.appendChild(sparkle);


            sparkle.addEventListener(
                "animationend",
                () => sparkle.remove()
            );

        }

    }


    /* =========================================
       MOBILE AMBIENT BUTTERFLIES
       Only animate buttons while they are visible.
       ========================================= */

    const isMobileViewport = window.matchMedia(
        "(max-width: 768px), (hover: none) and (pointer: coarse)"
    ).matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isMobileViewport && !prefersReducedMotion && "IntersectionObserver" in window) {
        const timers = new Map();

        const stopParticles = (button) => {
            window.clearTimeout(timers.get(button));
            timers.delete(button);
        };

        const startParticles = (button) => {
            if (timers.has(button)) return;

            const emitButterfly = () => {
                if (!button.isConnected || document.visibilityState !== "visible") {
                    stopParticles(button);
                    return;
                }

                createHoverParticles(button, { butterflyCount: 1, sparkleCount: 0, ambient: true });
                timers.set(button, window.setTimeout(emitButterfly, 1200 + Math.random() * 400));
            };

            timers.set(button, window.setTimeout(emitButterfly, 250 + Math.random() * 1200));
        };

        const particleObserver = new IntersectionObserver((entries) => {
            entries.forEach(({ target, isIntersecting }) => {
                if (isIntersecting) {
                    startParticles(target);
                } else {
                    stopParticles(target);
                }
            });
        }, { threshold: 0.2 });

        buttons.forEach((button) => particleObserver.observe(button));

        document.addEventListener("visibilitychange", () => {
            if (document.visibilityState === "hidden") {
                buttons.forEach(stopParticles);
                return;
            }

            buttons.forEach((button) => {
                const bounds = button.getBoundingClientRect();
                if (bounds.bottom > 0 && bounds.top < window.innerHeight) {
                    startParticles(button);
                }
            });
        });
    }


    /* =========================================
       CLICK BURST
       ========================================= */

    function createBurst(button) {

        const layer =
            button.querySelector(".particle-layer");

        const theme = getParticleTheme(button);


        /*
         * Keep this relatively small.
         * It should feel elegant rather than
         * like a confetti explosion.
         */

        const butterflyCount = 5;
        const sparkleCount = 7;


        /* =====================================
           BUTTERFLIES
           ===================================== */

        for (let i = 0; i < butterflyCount; i++) {

            const particle =
                document.createElement("img");

            particle.src =
                theme.image;

            particle.className =
                "butterfly-particle butterfly-burst";


            particle.style.left = "50%";
            particle.style.top = "50%";


            /*
             * Random angle
             */

            const angle =
                (Math.PI * 2 / butterflyCount) * i
                + (Math.random() - 0.5) * 0.5;


            /*
             * Random distance
             */

            const distance =
                45 + Math.random() * 45;


            const x =
                Math.cos(angle) * distance;

            const y =
                Math.sin(angle) * distance;


            const rotation =
                (Math.random() - 0.5) * 180;


            particle.style.setProperty(
                "--x",
                `${x}px`
            );

            particle.style.setProperty(
                "--y",
                `${y}px`
            );

            particle.style.setProperty(
                "--rotation",
                `${rotation}deg`
            );


            particle.style.animationDelay =
                `${Math.random() * 80}ms`;


            layer.appendChild(particle);


            particle.addEventListener(
                "animationend",
                () => particle.remove()
            );

        }


        /* =====================================
           SPARKLES
           ===================================== */

        for (let i = 0; i < sparkleCount; i++) {

            const sparkle =
                document.createElement("span");

            sparkle.className =
                "sparkle-particle sparkle-burst";


            sparkle.style.left = "50%";
            sparkle.style.top = "50%";


            const angle =
                Math.random() * Math.PI * 2;


            const distance =
                35 + Math.random() * 55;


            const x =
                Math.cos(angle) * distance;

            const y =
                Math.sin(angle) * distance;


            sparkle.style.setProperty(
                "--x",
                `${x}px`
            );

            sparkle.style.setProperty(
                "--y",
                `${y}px`
            );


            sparkle.style.color =
                theme.color;


            sparkle.style.animationDelay =
                `${Math.random() * 100}ms`;


            layer.appendChild(sparkle);


            sparkle.addEventListener(
                "animationend",
                () => sparkle.remove()
            );

        }

    }

});