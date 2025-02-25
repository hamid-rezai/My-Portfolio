document.addEventListener("DOMContentLoaded", function () {

  const progressBars = document.querySelectorAll(".still");

  const progressObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          entry.target.classList.add("move");
          
        }else{
          entry.target.classList.remove("move");

        }
      });
    },
  );

  progressBars.forEach((bar) => {
    progressObserver.observe(bar);
  });
});
