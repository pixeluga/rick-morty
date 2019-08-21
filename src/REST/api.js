export const api = {
    async fetchCards (URL) {

        const link = URL ? URL : "https://rickandmortyapi.com/api/character/";

        const response = await fetch(link);

        const { results, info } = await response.json();

        return { results, info };
    },
};
