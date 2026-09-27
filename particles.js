document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".particle-btn");

    const butterflyImage = "images/side-butterfly-gold.png";


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

    function createHoverParticles(button) {

        const layer = button.querySelector(".particle-layer");

        /*
         * Only a few particles.
         * Change these numbers if you want more.
         */

        const butterflyCount = 2;
        const sparkleCount = 3;


        /* Butterflies */

        for (let i = 0; i < butterflyCount; i++) {

            const particle = document.createElement("img");

            particle.src = butterflyImage;

            particle.className =
                "butterfly-particle butterfly-float";


            const startX =
                20 + Math.random() * 60;

            const startY =
                40 + Math.random() * 20;


            const x =
                (Math.random() - 0.5) * 90;

            const y =
                -25 - Math.random() * 55;


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


            /* Uses your existing gold */

            sparkle.style.color =
                "#d6b36a";


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
       CLICK BURST
       ========================================= */

    function createBurst(button) {

        const layer =
            button.querySelector(".particle-layer");


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
                butterflyImage;

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
                "#d6b36a";


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