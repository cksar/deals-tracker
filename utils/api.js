import axios from 'axios';

const api = axios.create({
    baseURL: 'https://www.cheapshark.com/api/1.0',
    timeout: 5000,
});

export const searchGames = async (title = '', filters) => {
    try {
        const response = await api.get('/deals', {
            params: {
                storeID: 1,
                title,
                lowerPrice: filters.lowerPrice || 0,
                upperPrice: filters.upperPrice || 2000,
                metacritic: filters.metacritic || 0,
                onSale: filters.onSale ? 1 : 0,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar jogos:', error);
        return [];
    }
};
