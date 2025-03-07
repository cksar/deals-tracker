import React from 'react';
import { FilterContainer, FilterLabel, FilterInput, ButtonContainer, FilterButton, ClearButton, ButtonText } from '../styles/searchBarStyles';
import { Picker } from '@react-native-picker/picker';

export function FilterInputs({ filters, setFilters, onShowResults, onClearFilters }) {
  return (
    <FilterContainer>
      <FilterLabel>Preço Mínimo</FilterLabel>
      <FilterInput
        placeholder="Ex: 10"
        keyboardType="numeric"
        value={filters.lowerPrice}
        onChangeText={(text) => setFilters({ ...filters, lowerPrice: text })}
      />
      <FilterLabel>Preço Máximo</FilterLabel>
      <FilterInput
        placeholder="Ex: 50"
        keyboardType="numeric"
        value={filters.upperPrice}
        onChangeText={(text) => setFilters({ ...filters, upperPrice: text })}
      />
      <FilterLabel>Metacritic Mínimo</FilterLabel>
      <FilterInput
        placeholder="Ex: 60"
        keyboardType="numeric"
        value={filters.metacritic}
        onChangeText={(text) => setFilters({ ...filters, metacritic: text })}
      />
      <FilterLabel>Ordenar por</FilterLabel>
      <Picker
        selectedValue={filters.sortBy}
        onValueChange={(value) => setFilters({ ...filters, sortBy: value })}
        style={{ height: 50, width: '100%' }}
      >
        <Picker.Item label="DealRating" value="DealRating" />
        <Picker.Item label="Title" value="Title" />
        <Picker.Item label="Savings" value="Savings" />
        <Picker.Item label="Price" value="Price" />
        <Picker.Item label="Metacritic" value="Metacritic" />
        <Picker.Item label="Reviews" value="Reviews" />
        <Picker.Item label="Release" value="Release" />
        <Picker.Item label="Store" value="Store" />
        <Picker.Item label="Recent" value="Recent" />
      </Picker>
      <FilterLabel>Classificação mínima no Steam</FilterLabel>
      <FilterInput
        placeholder="Ex: 80"
        keyboardType="numeric"
        value={filters.steamRating}
        onChangeText={(text) => setFilters({ ...filters, steamRating: text })}
      />
      <FilterLabel>Horas Máximas de Ofertas</FilterLabel>
      <FilterInput
        placeholder="Ex: 2500"
        keyboardType="numeric"
        value={filters.maxAge}
        onChangeText={(text) => setFilters({ ...filters, maxAge: text })}
      />
      
      {/* Botões no fim da tela de filtros */}
      <ButtonContainer>
        <FilterButton onPress={onShowResults}>
          <ButtonText>Exibir Resultados</ButtonText>
        </FilterButton>
        <ClearButton onPress={onClearFilters}>
          <ButtonText>Limpar Filtros</ButtonText>
        </ClearButton>
      </ButtonContainer>
    </FilterContainer>
  );
}
