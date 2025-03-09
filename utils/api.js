import axios from 'axios';

const api = axios.create({
    baseURL: 'https://www.cheapshark.com/api/1.0',
    timeout: 5000,
});

export const searchGames = async (title = '', filters) => {
    try {
        const lowerPrice = filters.lowerPrice ? parseFloat(filters.lowerPrice) : 0;
        const upperPrice = filters.upperPrice ? parseFloat(filters.upperPrice) : 300;
        const metacritic = filters.metacritic ? parseFloat(filters.metacritic) : 0;
        const steamRating = filters.steamRating ? parseFloat(filters.steamRating) : undefined;

        const params = {
            storeID: 1,
            title,
            lowerPrice,
            upperPrice,
            metacritic,
            onSale: filters.onSale ? 1 : 0,
            sortBy: filters.sortBy || 'DealRating',
            desc: filters.desc ? 1 : 0,
            AAA: filters.AAA ? 1 : 0,
            ...(steamRating !== undefined && { steamRating }),
        };

        const response = await api.get('/deals', { params });
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar jogos:', error);
        return [];
    }
};