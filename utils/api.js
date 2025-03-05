import axios from 'axios';

const api = axios.create({
    baseURL: 'https://www.cheapshark.com/api/1.0',
    timeout: 5000,
});

export const searchGames = async (title = '') => {
    try {
        const response = await api.get('/deals', {
            params: { storeID: 1, title, lowerPrice: 0, upperPrice: 100 },
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar jogos:', error);
        return [];
    }
};
