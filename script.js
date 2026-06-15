document.addEventListener("DOMContentLoaded", () => {
  const titles = document.querySelectorAll("section h2");
  titles.forEach(title => {
    title.style.cursor = "pointer";
    title.addEventListener("click", () => {
      const content = title.nextElementSibling;
      if (content.style.display === "none") {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  });
});
