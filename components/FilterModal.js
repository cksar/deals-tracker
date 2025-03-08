import React from 'react';
import { Modal, View } from 'react-native';
import {
  ModalContainer,
  Separator,
  ButtonContainer,
  FilterButton,
  ClearButton,
  ButtonText
} from '../styles/searchBarStyles';
import { FilterInputs } from './FilterInputs';
import { FilterSwitches } from './FilterSwitches';

export function FilterModal({ visible, setVisible, filters, setFilters }) {
  const handleShowResults = () => {
    setVisible(false);
  };

  const handleClearFilters = () => {
    setFilters({
      lowerPrice: '',
      upperPrice: '',
      metacritic: '',
      onSale: false,
      AAA: false,
      sortBy: 'DealRating',
      desc: false,
      steamRating: ''
    });
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={() => { }}
    >
      <ModalContainer>
        <View style={{ backgroundColor: "#1c1c1c", padding: 20, borderRadius: 10 }}>
          <FilterInputs filters={filters} setFilters={setFilters} />

          <Separator />

          <FilterSwitches filters={filters} setFilters={setFilters} />

          <Separator />

          <ButtonContainer>
            <FilterButton onPress={handleShowResults}>
              <ButtonText>Exibir Resultados</ButtonText>
            </FilterButton>
            <ClearButton onPress={handleClearFilters}>
              <ButtonText>Limpar Filtros</ButtonText>
            </ClearButton>
          </ButtonContainer>
        </View>
      </ModalContainer>
    </Modal>
  );
}