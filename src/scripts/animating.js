function RunScript() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.add('showNotTW');
            } else {
                entry.target.classList.remove('showNotTW');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hiddenNotTW');
    hiddenElements.forEach((el) => observer.observe(el));
}

export { RunScript };