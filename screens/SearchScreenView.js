import React, { useState } from 'react';
import { Container } from '../styles/global';
import { useGames } from '../hooks/useGames';
import { SearchBar } from '../components/SearchBar';
import { GameList } from '../components/GameList';

export function SearchScreenView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const { games, loading } = useGames(searchTerm);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setSearchTerm(searchQuery);
    }
  };

  return (
    <Container>
      <SearchBar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        onSearch={handleSearch} 
      />
      <GameList games={games} loading={loading} />
    </Container>
  );
}