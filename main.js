document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".skill-bar")) {
    const skillBars = document.querySelectorAll(".skill-bar");

    skillBars.forEach((bar) => {
      const width = bar.style.width;
      bar.style.width = "0";

      setTimeout(() => {
        bar.style.width = width;
      }, 100);
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  const achievementCards = document.querySelectorAll(".achievement-card");
  achievementCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)";
      this.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.2)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "";
      this.style.boxShadow = "";
    });
  });
});
