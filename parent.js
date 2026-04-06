document.addEventListener('DOMContentLoaded', function () {
    const expandButtons = document.querySelectorAll('.expand-btn');

    expandButtons.forEach(button => {
        button.addEventListener('click', toggleSection);
        button.addEventListener('keypress', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleSection.call(this);
            }
        });
    });

    function toggleSection(event) {
        const button = event.target.closest('.expand-btn');
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        const contentId = button.getAttribute('aria-controls');
        const content = document.getElementById(contentId);

        if (isExpanded) {
            button.setAttribute('aria-expanded', 'false');
            content.style.maxHeight = '0';
            content.style.opacity = '0';
        } else {
            button.setAttribute('aria-expanded', 'true');
            content.style.maxHeight = content.scrollHeight + 'px';
            content.style.opacity = '1';
        }
    }
});

// Close other sections when opening a new one (optional - remove if you want multiple open)
// Uncomment the code below if you want only one section open at a time
/*
document.addEventListener('DOMContentLoaded', function () {
    const expandButtons = document.querySelectorAll('.expand-btn');

    expandButtons.forEach(button => {
        button.addEventListener('click', function () {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            const contentId = this.getAttribute('aria-controls');
            const content = document.getElementById(contentId);

            if (!isExpanded) {
                expandButtons.forEach(otherButton => {
                    const otherContentId = otherButton.getAttribute('aria-controls');
                    const otherContent = document.getElementById(otherContentId);
                    otherButton.setAttribute('aria-expanded', 'false');
                    otherContent.style.maxHeight = '0';
                    otherContent.style.opacity = '0';
                });

                this.setAttribute('aria-expanded', 'true');
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.opacity = '1';
            }
        });

        button.addEventListener('keypress', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
});
*/
