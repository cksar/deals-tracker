import { useState, useEffect } from 'react';
import { searchGames } from '../utils/api';

export function useGames(searchQuery, filters) {
    const [loading, setLoading] = useState(false);
    const [games, setGames] = useState([]);

    useEffect(() => {
        if (!searchQuery.trim()) {
            setGames([]);
            return;
        }

        const fetchGames = async () => {
            setLoading(true);
            try {
                const response = await searchGames(searchQuery, filters);
                setGames(response);
            } catch (error) {
                console.error('Erro ao buscar jogos:', error);
            } finally {
                setLoading(false);
            }
        };

        const delayDebounce = setTimeout(fetchGames, 500); // Aguarda 500ms antes de fazer a busca

        return () => clearTimeout(delayDebounce);
    }, [searchQuery, filters]);

    return { games, loading };
}
