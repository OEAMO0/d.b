this.addEventListener("load", () => {
  let intro = document.getElementById("intro");
  setTimeout(() => {
    intro.classList.add('hide')
    document.body.style.overflow = "auto"
  }, 2000);
});
