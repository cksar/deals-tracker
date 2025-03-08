import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { SearchContainer, SearchInput, SearchButton, ToggleButton, FilterIconButton } from '../styles/searchBarStyles';
import { TouchableOpacity } from 'react-native';
import { FilterModal } from './FilterModal';

export function SearchBar({ searchQuery, setSearchQuery, onSearch, filters, setFilters }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <SearchContainer>
        <FontAwesome name="search" size={20} color="#888" />
        <SearchInput
          placeholder="Buscar jogo..."
          placeholderTextColor="#888"
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={onSearch}
        />

        <TouchableOpacity onPress={() => setShowModal(true)}>
          <FilterIconButton>
            <FontAwesome name="filter" size={20} color="#888" />
          </FilterIconButton>
        </TouchableOpacity>
      </SearchContainer>

      <TouchableOpacity onPress={onSearch}>
        <SearchButton buttonColor="#0a84ff">
          <FontAwesome name="arrow-right" size={20} color="white" />
        </SearchButton>
      </TouchableOpacity>

      <FilterModal
        visible={showModal}
        setVisible={setShowModal}
        filters={filters}
        setFilters={setFilters}
      />
    </>
  );
}