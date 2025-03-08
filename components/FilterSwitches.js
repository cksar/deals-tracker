import React from 'react';
import { View } from 'react-native';
import { FilterLabel } from '../styles/searchBarStyles';
import { Switch } from 'react-native';

export function FilterSwitches({ filters, setFilters }) {
  return (
    <>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <FilterLabel>Em Promoção</FilterLabel>
        <Switch
          trackColor={{ false: "#444", true: "#0a84ff" }}
          thumbColor={filters.onSale ? "#0a84ff" : "#888"}
          value={filters.onSale}
          onValueChange={(value) => setFilters({ ...filters, onSale: value })}
        />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <FilterLabel>Jogos AAA</FilterLabel>
        <Switch
          trackColor={{ false: "#444", true: "#0a84ff" }}
          thumbColor={filters.AAA ? "#0a84ff" : "#888"}
          value={filters.AAA}
          onValueChange={(value) => setFilters({ ...filters, AAA: value })}
        />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <FilterLabel>Ordenar de forma decrescente</FilterLabel>
        <Switch
          trackColor={{ false: "#444", true: "#0a84ff" }}
          thumbColor={filters.desc ? "#0a84ff" : "#888"}
          value={filters.desc}
          onValueChange={(value) => setFilters({ ...filters, desc: value })}
        />
      </View>
    </>
  );
}
