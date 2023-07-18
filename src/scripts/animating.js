function RunScript() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.add('showNotTW');
            } else {
                entry.target.classList.remove('showNotTW');
                if (entry.target.classList.contains('open')) {
                    entry.target.classList.remove('open');
                    entry.target.classList.add('closed');
                    entry.target.classList.add('hidden');
                    setTimeout(() => {
                        entry.target.classList.remove('hidden');
                    }, 500); 
                    if (entry.target.classList.contains('fa-chevron-down')) {
                        entry.target.classList.remove('fa-chevron-down');
                        entry.target.classList.add('fa-chevron-right');
                    }
                }
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hiddenNotTW');
    const openCollapsables = document.querySelectorAll('.toggle-not-tailwind');
    [...hiddenElements, ...openCollapsables].forEach((el) => observer.observe(el));
}

export { RunScript };