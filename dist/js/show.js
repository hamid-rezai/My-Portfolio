const observer = new IntersectionObserver((enteries) => {
  enteries.forEach((entery) => {
    console.log(entery)
    if (entery.isIntersecting) {
      entery.target.classList.add("show");
    } else {
      entery.target.classList.remove("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));


const observer2 = new IntersectionObserver((enteries) => {
  enteries.forEach((entery) => {
    console.log(entery)
    if (entery.isIntersecting) {
      entery.target.classList.add("move");
    } else {
      entery.target.classList.remove("move");
    }
  });
});
const processEl = document.querySelectorAll(".still");
processEl.forEach((el) => observer2.observe(el));
