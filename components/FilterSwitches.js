import React from 'react';
import { FilterLabel } from '../styles/searchBarStyles';
import { Switch } from 'react-native';

export function FilterSwitches({ filters, setFilters }) {
  return (
    <>
      <FilterLabel>Em Promoção</FilterLabel>
      <Switch
        value={filters.onSale}
        onValueChange={(value) => setFilters({ ...filters, onSale: value })}
      />
      <FilterLabel>Incluindo AAA</FilterLabel>
      <Switch
        value={filters.AAA}
        onValueChange={(value) => setFilters({ ...filters, AAA: value })}
      />
      <FilterLabel>Ordenar de forma decrescente</FilterLabel>
      <Switch
        value={filters.desc}
        onValueChange={(value) => setFilters({ ...filters, desc: value })}
      />
    </>
  );
}
