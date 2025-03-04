import * as React from 'react';
import { ActivityIndicator, Text, View, TextInput, Image } from 'react-native';
import { searchGames } from '../utils/api';

export function Search() {
  const [loading, setLoading] = React.useState(true);
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    async function fetchGames() {
      try {
        const response = await searchGames(); // Aguarda a resposta da API
        setList(response); // Define a lista corretamente
      } catch (error) {
        console.error('Erro ao buscar jogos:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchGames();
  }, []); // O array vazio evita reexecuções desnecessárias

  return (
    <View>
      <TextInput style={inputStyle} placeholder="Buscar jogo..." />
      {loading && <ActivityIndicator size={'large'} />}

      {list.map((game, index) => (
        <View key={index} style={{ padding: 8 }}>
          <Image
            style={{
              width: 50,
              height: 50
            }}
            source={{
              uri: game.thumb,
            }}
          />
          <Text>{game.title}</Text>
          <Text>{game.metacriticScore}</Text>
          <Text>{game.normalPrice}</Text>
          <Text>{game.salePrice}</Text>
        </View>
      ))}
    </View>
  );
}

const inputStyle = {
  height: 40,
  margin: 12,
  borderWidth: 1,
  padding: 10,
};