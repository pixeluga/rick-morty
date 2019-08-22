export const sortByName = (cards) => {
    return cards.sort((card1, card2) => {
        if (card1.name > card2.name) {
            return 1;
        } else if (
            card1.name < card2.name
        ) {
            return -1;
        }

        return 0;
    });
};

export const sortByStatus = (cards) => {
    return cards.sort((card1, card2) => {
        if (card1.status > card2.status) {
            return 1;
        } else if (
            card1.status < card2.status
        ) {
            return -1;
        }

        return 0;
    });
};

export const sortBySpecies = (cards) => {
    return cards.sort((card1, card2) => {
        if (card1.species > card2.species) {
            return 1;
        } else if (
            card1.species < card2.species
        ) {
            return -1;
        }

        return 0;
    });
};

export const sortByGroup = (type, cards) => {
    if (type === 'name') {
        return sortByName(cards);
    } else if (type === 'status') {
        return sortByStatus(cards);
    } else if (type === 'species') {
        return sortBySpecies(cards);
    }

    return cards;
};
