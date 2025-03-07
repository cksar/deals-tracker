import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Container } from '../styles/global';
import { useGames } from '../hooks/useGames';
import { SearchBar } from '../components/SearchBar';
import { GameList } from '../components/GameList';

export function SearchScreenView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    lowerPrice: '',
    upperPrice: '',
    metacritic: '',
    onSale: false,
    AAA: false,
    sortBy: 'DealRating',
    desc: false,
    steamRating: '',
    maxAge: ''
  });

  const { games, loading } = useGames(searchTerm, filters);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setSearchTerm(searchQuery);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearch={handleSearch}
          filters={filters}
          setFilters={setFilters}
        />
        <GameList games={games} loading={loading} />
      </Container>
    </SafeAreaView>
  );
}
