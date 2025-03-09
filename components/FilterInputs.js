import React from 'react';
import { FilterContainer, FilterLabel, FilterInput, FilterSelect, Separator } from '../styles/searchBarStyles';
import { Picker } from '@react-native-picker/picker';

export function FilterInputs({ filters, setFilters }) {
  return (
    <FilterContainer>
      <FilterLabel>Preço Mínimo</FilterLabel>
      <FilterInput
        placeholderTextColor="#888"
        value={filters.lowerPrice}
        onChangeText={(text) => setFilters({ ...filters, lowerPrice: text })}
        keyboardType="numeric"
      />

      <FilterLabel>Preço Máximo</FilterLabel>
      <FilterInput
        placeholderTextColor="#888"
        value={filters.upperPrice}
        onChangeText={(text) => setFilters({ ...filters, upperPrice: text })}
        keyboardType="numeric"
      />
      <FilterLabel>Nota mínima do Metacritic</FilterLabel>
      <FilterInput
        placeholderTextColor="#888"
        value={filters.metacritic}
        onChangeText={(text) => setFilters({ ...filters, metacritic: text })}
        keyboardType="numeric"
      />

      <Separator />

      <FilterLabel>Ordenar por</FilterLabel>
      <FilterSelect
        selectedValue={filters.sortBy}
        onValueChange={(value) => setFilters({ ...filters, sortBy: value })}
        style={{ width: "100%", height: 50 }}
        itemStyle={{ fontSize: 16 }}
      >
        <Picker.Item label="Nota" value="DealRating" />
        <Picker.Item label="Título" value="Title" />
        <Picker.Item label="Desconto" value="Savings" />
        <Picker.Item label="Preço" value="Price" />
        <Picker.Item label="Metacritic" value="Metacritic" />
        <Picker.Item label="Avaliações" value="Reviews" />
        <Picker.Item label="Lançamento" value="Release" />
        <Picker.Item label="Loja" value="Store" />
        <Picker.Item label="Recentes" value="Recent" />
      </FilterSelect>
      <FilterLabel>Nota mínima na Steam</FilterLabel>
      <FilterInput
        placeholder="80"
        placeholderTextColor="#888"
        value={filters.steamRating}
        onChangeText={(text) => setFilters({ ...filters, steamRating: text })}
        keyboardType="numeric"
      />
    </FilterContainer>
  );
}