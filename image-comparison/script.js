const container = document.getElementById("comparison");
      const beforeImage = container.querySelector(".image-before");
      const sliderLine = document.getElementById("sliderLine");
      const sliderKnob = document.getElementById("sliderKnob");

      let isDragging = false;
      let currentPosition = 50; // Percentage

      function updateSlider(position) {
        // Clamp between 0 and 100
        position = Math.max(0, Math.min(100, position));
        currentPosition = position;

        // Update clip-path for before image
        beforeImage.style.clipPath = `inset(0 ${100 - position}% 0 0)`;

        // Update slider line and knob position
        sliderLine.style.left = `${position}%`;
        sliderKnob.style.left = `${position}%`;
      }

      function handleMove(clientX) {
        const rect = container.getBoundingClientRect();
        const x = clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        updateSlider(percentage);
      }

      // Mouse events
      sliderKnob.addEventListener("mousedown", (e) => {
        isDragging = true;
        container.classList.add("dragging");
        e.preventDefault();
      });

      container.addEventListener("mousedown", (e) => {
        if (e.target === sliderKnob) return;
        isDragging = true;
        container.classList.add("dragging");
        handleMove(e.clientX);
      });

      document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        handleMove(e.clientX);
      });

      document.addEventListener("mouseup", () => {
        isDragging = false;
        container.classList.remove("dragging");
      });

      // Touch events
      sliderKnob.addEventListener(
        "touchstart",
        (e) => {
          isDragging = true;
          container.classList.add("dragging");
          e.preventDefault();
        },
        { passive: false },
      );

      container.addEventListener(
        "touchstart",
        (e) => {
          if (e.target === sliderKnob) return;
          isDragging = true;
          container.classList.add("dragging");
          handleMove(e.touches[0].clientX);
        },
        { passive: false },
      );

      document.addEventListener(
        "touchmove",
        (e) => {
          if (!isDragging) return;
          handleMove(e.touches[0].clientX);
        },
        { passive: false },
      );

      document.addEventListener("touchend", () => {
        isDragging = false;
        container.classList.remove("dragging");
      });

      // Keyboard accessibility
      sliderKnob.setAttribute("tabindex", "0");
      sliderKnob.setAttribute("role", "slider");
      sliderKnob.setAttribute("aria-label", "Image comparison slider");
      sliderKnob.setAttribute("aria-valuemin", "0");
      sliderKnob.setAttribute("aria-valuemax", "100");
      sliderKnob.setAttribute("aria-valuenow", "50");

      sliderKnob.addEventListener("keydown", (e) => {
        let newPosition = currentPosition;

        switch (e.key) {
          case "ArrowLeft":
          case "ArrowDown":
            newPosition -= 5;
            e.preventDefault();
            break;
          case "ArrowRight":
          case "ArrowUp":
            newPosition += 5;
            e.preventDefault();
            break;
          case "Home":
            newPosition = 0;
            e.preventDefault();
            break;
          case "End":
            newPosition = 100;
            e.preventDefault();
            break;
        }

        updateSlider(newPosition);
        sliderKnob.setAttribute("aria-valuenow", Math.round(currentPosition));
      });

      // Initialize
      updateSlider(50);