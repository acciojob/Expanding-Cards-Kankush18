//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
  const panels = document.querySelectorAll(".panel");

  panels.forEach(panel => {
    panel.addEventListener("click", function() {
      panels.forEach(p => {
        p.classList.remove("active");
      });
      this.classList.add("active");
    });
  });
});
