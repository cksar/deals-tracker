import React from 'react';
import { Switch } from 'react-native';
import { FilterLabel, FilterSwitchRow } from '../styles/searchBarStyles';

export function FilterSwitches({ filters, setFilters }) {
  return (
    <>
      <FilterSwitchRow>
        <FilterLabel>Em Promoção</FilterLabel>
        <Switch
          trackColor={{ false: "#444", true: "#0a84ff" }}
          thumbColor={filters.onSale ? "#0a84ff" : "#888"}
          value={filters.onSale}
          onValueChange={(value) => setFilters({ ...filters, onSale: value })}
        />
      </FilterSwitchRow>
      <FilterSwitchRow>
        <FilterLabel>Jogos AAA</FilterLabel>
        <Switch
          trackColor={{ false: "#444", true: "#0a84ff" }}
          thumbColor={filters.AAA ? "#0a84ff" : "#888"}
          value={filters.AAA}
          onValueChange={(value) => setFilters({ ...filters, AAA: value })}
        />
      </FilterSwitchRow>
      <FilterSwitchRow>
        <FilterLabel>Ordenar de forma decrescente</FilterLabel>
        <Switch
          trackColor={{ false: "#444", true: "#0a84ff" }}
          thumbColor={filters.desc ? "#0a84ff" : "#888"}
          value={filters.desc}
          onValueChange={(value) => setFilters({ ...filters, desc: value })}
        />
      </FilterSwitchRow>
    </>
  );
}