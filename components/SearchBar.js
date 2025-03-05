import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { SearchContainer, SearchInput, SearchButton } from '../styles/searchBarStyles';
import { TouchableOpacity } from 'react-native';

export function SearchBar({ searchQuery, setSearchQuery, onSearch }) {
    return (
        <SearchContainer>
            <FontAwesome name="search" size={20} color="#888" />
            <SearchInput
                placeholder="Buscar jogo..."
                value={searchQuery}
                onChangeText={setSearchQuery}
                onSubmitEditing={onSearch}
            />
            <TouchableOpacity onPress={onSearch}>
                <SearchButton buttonColor="#007BFF">
                    <FontAwesome name="arrow-right" size={20} color="white" />
                </SearchButton>
            </TouchableOpacity>
        </SearchContainer>
    );
}
