import React from 'react';
import { FlatList, Text } from 'react-native';
import { GameCard } from './GameCard';
import { Loader } from '../styles/global';

export function GameList({ games, loading }) {
    if (loading) return <Loader />;

    if (!games?.length) return <Text>Nenhum jogo encontrado.</Text>;

    return (
        <FlatList
            data={games}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <GameCard game={item} />}
        />
    );
}