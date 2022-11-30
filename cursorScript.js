
const imgs = document.querySelectorAll("img");
imgs.forEach((img) => {
  img.addEventListener("mouseover", () => {
    const primarySource = img.getAttribute("src");
    const secondarySource = primarySource.replace("1", "2");
    img.setAttribute("src", secondarySource);
    document.body.style.cursor = "url('./curs1.png'), auto";
  });
  img.addEventListener("mouseout", () => {
    const primarySource = img.getAttribute("src");
    const secondarySource = primarySource.replace("2", "1");
    img.setAttribute("src", secondarySource);
    document.body.style.cursor = "auto";
  });
});
