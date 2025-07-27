// Theme Toggle
const toggleBtn = document.getElementById("toggle-theme");
toggleBtn.addEventListener("click", () => {
  const html = document.documentElement;
  const isDark = html.getAttribute("data-theme") === "dark";
  html.setAttribute("data-theme", isDark ? "light" : "dark");
});

// Optional typing animation for .tagline
document.addEventListener("DOMContentLoaded", () => {
  const tagline = document.querySelector(".tagline");
  const text = tagline.textContent;
  tagline.textContent = "";
  let i = 0;
  const typing = setInterval(() => {
    tagline.textContent += text.charAt(i);
    i++;
    if (i > text.length) clearInterval(typing);
  }, 50);
});
