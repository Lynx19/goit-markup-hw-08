(() => {
    const refs = {
        filtersList: document.querySelector('[data-portfolio-filters]'),
        portfolioList: document.querySelector('[data-cards]'),
    };

    refs.filtersList.addEventListener('click', onFilterClick);

    function onFilterClick({ target }) {
        if (target.nodeName !== 'INPUT') return;

        const allCards = refs.portfolioList.querySelectorAll('li[data-category]');
        const category = target.dataset.filter;

        allCards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                showCard(card);
                return;
            }

            hideCard(card);
        });
    }

    function showCard(card) {
        card.classList.remove('visually-hidden');
    }

    function hideCard(card) {
        card.classList.add('visually-hidden');
    }
})();
