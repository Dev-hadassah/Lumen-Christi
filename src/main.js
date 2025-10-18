// 🌐 LOAD HEADER & FOOTER DYNAMICALLY
document.addEventListener("DOMContentLoaded", () => {
  loadHTML("header.html", "header");
  loadHTML("footer.html", "footer");
});

function loadHTML(file, elementId) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch(error => console.error("Error loading file:", error));
}

// 🎞️ UNIVERSAL SLIDER LOGIC (Works for all sliders)
document.querySelectorAll(".slider").forEach(slider => {
  // Select elements inside each slider
  const slides = slider.querySelectorAll(".slide");
  const prevBtn = slider.querySelector(".prev");
  const nextBtn = slider.querySelector(".next");
  const dotsContainer = slider.querySelector(".dots");
  let current = 0;
  let dots = [];

  // 🟢 Create dots dynamically — only if .dots exists
  if (dotsContainer) {
    slides.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.className = `dot w-3 h-3 rounded-full mx-1 cursor-pointer transition-all duration-300 ${
        i === 0 ? "bg-white" : "bg-white opacity-30"
      }`;
      dot.addEventListener("click", () => {
        current = i;
        updateSlide();
      });
      dotsContainer.appendChild(dot);
    });
    dots = dotsContainer.querySelectorAll(".dot");
  }

  // 🔄 Function to update slides and dots
  function updateSlide() {
    slides.forEach((s, i) => {
      s.classList.toggle("hidden", i !== current);
      s.classList.toggle("active", i === current);
    });

    // Update dots only if they exist
    if (dots.length > 0) {
      dots.forEach((d, i) => {
        d.classList.toggle("opacity-30", i !== current);
        d.classList.toggle("bg-white", i === current);
      });
    }
  }

  // ⬅️ Previous button (only if it exists)
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      current = (current - 1 + slides.length) % slides.length;
      updateSlide();
    });
  }

  // ➡️ Next button (only if it exists)
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      current = (current + 1) % slides.length;
      updateSlide();
    });
  }

  // ⏱️ Auto-slide every 5 seconds
  setInterval(() => {
    current = (current + 1) % slides.length;
    updateSlide();
  }, 5000);

  // 🟩 Initialize first slide
  updateSlide();
});
