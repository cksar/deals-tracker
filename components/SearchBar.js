import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { SearchContainer, SearchInput, SearchButton, ToggleButton } from '../styles/searchBarStyles';
import { TouchableOpacity } from 'react-native';
import { FilterModal } from './FilterModal';

export function SearchBar({
    searchQuery,
    setSearchQuery,
    onSearch,
    filters,
    setFilters
}) {
    const [showModal, setShowModal] = useState(false); // Estado para controlar a visibilidade do modal

    return (
        <>
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

                {/* Botão para abrir o modal de filtros */}
                <TouchableOpacity onPress={() => setShowModal(true)}>
                    <ToggleButton>Mostrar Filtros</ToggleButton>
                </TouchableOpacity>
            </SearchContainer>

            {/* Modal para exibir filtros */}
            <FilterModal
                visible={showModal}
                setVisible={setShowModal}
                filters={filters}
                setFilters={setFilters}
            />
        </>
    );
}
