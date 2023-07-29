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
                    if (entry.target.classList.contains('collapse-toggle')){
                        entry.target.classList.add('h-0');
                        entry.target.classList.add('hidden');
                        setTimeout(() => {
                            entry.target.classList.remove('hidden');
                        }, 300); 
                    } else if (entry.target.classList.contains('fa-chevron-down') && entry.target.classList.contains('arrow-toggle')) {
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