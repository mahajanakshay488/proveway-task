const cards = document.querySelectorAll(".card");
cards.forEach(elem => {
    elem.addEventListener('click', ()=>{
        cards.forEach(elem => elem.classList.remove('active-card'));
        elem.classList.add('active-card');
    });
});