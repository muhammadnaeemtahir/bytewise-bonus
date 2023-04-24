const animations = document.querySelectorAll("[data-src]");

const loadAnimation = (animation) => {
  const container = animation.target;
  const path = container.getAttribute("data-src");
  bodymovin.loadAnimation({
    container: container,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: path,
  });
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      loadAnimation(entry);
      observer.unobserve(entry.target);
    }
  });
});

animations.forEach((animation) => {
  observer.observe(animation);
});
