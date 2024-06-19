document.addEventListener('DOMContentLoaded', function() {
    const list = document.querySelectorAll('[data-about-list]');
    const filmografia = document.querySelector('#filmografia');
    const personagens = document.querySelector('#personagens');
    const clube = document.querySelector('#clube');
    const top = document.querySelector('#top');

    filmografia.addEventListener('click', function(event) {
        event.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });

    personagens.addEventListener('click', function(event) {
        event.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });

    clube.addEventListener('click', function(event) {
        event.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });

    top.addEventListener('click', function(event) {
        event.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });


    list.forEach(item => {
        item.addEventListener('click', function(event) {
            openList(event);
        });
    });
});

function openList(event) {
    const classe = 'about__list__item--is-open';
    const elementoPai = event.target.closest('.about__list__item');

    elementoPai.classList.toggle(classe);
}