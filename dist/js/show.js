document.addEventListener("DOMContentLoaded", function () {
  const hiddenElements = document.querySelectorAll('.hidden');

  const hiddenObserver = new IntersectionObserver((entries) => {
    // Sort the entries by their position in the viewport (top value)
    entries.sort((a, b) => a.target.getBoundingClientRect().top - b.target.getBoundingClientRect().top);

    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Stagger the reveal with a delay based on the element's order
        setTimeout(() => {
          entry.target.classList.add('show');
        }, index * 200); // Adjust delay (in milliseconds) as needed
      } else {
        // Remove the class if the element leaves the viewport (so it animates again)
        entry.target.classList.remove('show');
      }
    });
  }, {
    threshold: 0.1 // Trigger when 10% of the element is visible
  });

  hiddenElements.forEach(el => hiddenObserver.observe(el));


});
