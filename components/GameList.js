import React from 'react';
import { FlatList } from 'react-native';
import { GameCard } from './GameCard';
import { Loader, NoGamesText } from '../styles/globalStyles';

export function GameList({ games, loading, ListHeaderComponent }) {
  if (loading) return <Loader />;

  return (
    <FlatList
      data={games.length ? games : [{}]}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) =>
        games.length ? (
          <GameCard game={item} />
        ) : (
          <NoGamesText>Nenhum jogo encontrado</NoGamesText>
        )
      }
      ListHeaderComponent={ListHeaderComponent}
    />
  );
}
