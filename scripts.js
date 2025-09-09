/* IntersectionObserver to reveal sections + animate proficiency bars */
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");

          // Animate progress bars when the Proficiency section appears
          if (entry.target.id === "proficiency") {
            const bars = entry.target.querySelectorAll(".progress-bar span");
            bars.forEach(bar => {
              bar.style.width = bar.getAttribute("data-width");
            });
          }
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach(section => observer.observe(section));
});
