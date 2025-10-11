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


const slides = document.querySelectorAll(".slide");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    let currentSlide = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("hidden", i !== index);
        slide.classList.toggle("active", i === index);
      });
    }

    prevBtn.addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    });

    nextBtn.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });

    // Auto slide every 5s
    setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }, 5000);


    
    // Placeholder slides arrays
  const slides1 = [
    "https://via.placeholder.com/600x350",
    "https://via.placeholder.com/600x350/2ecc71/ffffff",
    "https://via.placeholder.com/600x350/e74c3c/ffffff"
  ];
  const slides2 = [
    "https://via.placeholder.com/600x350",
    "https://via.placeholder.com/600x350/3498db/ffffff",
    "https://via.placeholder.com/600x350/f39c12/ffffff"
  ];

  let index1 = 0, index2 = 0;

  const img1 = document.querySelector(".home-slide1 img");
  const img2 = document.querySelector(".home-slide2 img");

  document.querySelector(".prev1").addEventListener("click", () => {
    index1 = (index1 - 1 + slides1.length) % slides1.length;
    img1.src = slides1[index1];
  });
  document.querySelector(".next1").addEventListener("click", () => {
    index1 = (index1 + 1) % slides1.length;
    img1.src = slides1[index1];
  });

  document.querySelector(".prev2").addEventListener("click", () => {
    index2 = (index2 - 1 + slides2.length) % slides2.length;
    img2.src = slides2[index2];
  });
  document.querySelector(".next2").addEventListener("click", () => {
    index2 = (index2 + 1) % slides2.length;
    img2.src = slides2[index2];
  });