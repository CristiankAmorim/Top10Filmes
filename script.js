function toggleClass(element) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (card !== element) {
            card.classList.remove('selecionado');
        }
    });

    element.classList.toggle('selecionado');
}