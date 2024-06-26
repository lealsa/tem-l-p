document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section.fade-in');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    console.log("a")
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});
document.getElementById('nav-toggle').addEventListener('click', function() {
    console.log("Click");
    document.getElementById('nav-links').classList.toggle('showing');
});
