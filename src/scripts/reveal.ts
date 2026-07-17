const revealElements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

const showAll = () => {
  for (const element of revealElements) {
    element.classList.add("reveal-visible");
  }
};

if (!("IntersectionObserver" in window) || revealElements.length === 0) {
  showAll();
} else {
  document.documentElement.classList.add("reveal-enabled");

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) {
          continue;
        }

        const element = entry.target as HTMLElement;
        element.classList.add("reveal-visible");
        observer.unobserve(element);
      }
    },
    {
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.12
    }
  );

  for (const element of revealElements) {
    observer.observe(element);
  }
}
