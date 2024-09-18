document.querySelectorAll("[data-copy-clipboard]").forEach((t) => {
  t.addEventListener("click", () => {
    const e = t.getAttribute("data-copy-clipboard");
    e !== null && navigator.clipboard.writeText(e);
  });
});
document.querySelectorAll("[data-select-on-click]").forEach((t) => {
  t.addEventListener("focus", (e) => {
    e.target.select();
  });
});
