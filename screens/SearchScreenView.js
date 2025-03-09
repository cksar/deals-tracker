import React, { useState } from 'react';
import { SafeAreaView, Image } from 'react-native';
import { Container, ListHeaderContainer, LogoContainer, LogoSmall, LogoLarge } from '../styles/globalStyles';
import { useGames } from '../hooks/useGames';
import { SearchBar } from '../components/SearchBar';
import { GameList } from '../components/GameList';

export function SearchScreenView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSearchQuery, setActiveSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    lowerPrice: '',
    upperPrice: '',
    metacritic: '',
    onSale: false,
    AAA: false,
    sortBy: 'DealRating',
    desc: false,
    steamRating: ''
  });
  const [activeFilters, setActiveFilters] = useState(filters);

  const handleSearch = () => {
    setActiveSearchQuery(searchQuery);
    setActiveFilters(filters);
  };

  const ListHeader = (
    <ListHeaderContainer>
      <LogoContainer>
        <LogoSmall source={require('../assets/logo1.png')} resizeMode="contain" />
        <LogoLarge source={require('../assets/logo2.png')} resizeMode="contain" />
      </LogoContainer>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={handleSearch}
        filters={filters}
        setFilters={setFilters}
      />
    </ListHeaderContainer>
  );

  const { games, loading } = useGames(activeSearchQuery, activeFilters);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <GameList games={games} loading={loading} ListHeaderComponent={ListHeader} />
      </Container>
    </SafeAreaView>
  );
}
