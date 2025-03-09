import React from 'react';
import { Modal } from 'react-native';
import {
  ModalContainer,
  Separator,
  ButtonContainer,
  FilterButton,
  ClearButton,
  ButtonText,
  ModalContent
} from '../styles/searchBarStyles';
import { FilterInputs } from './FilterInputs';
import { FilterSwitches } from './FilterSwitches';

export function FilterModal({ visible, setVisible, filters, setFilters, onApply }) {
  const handleShowResults = () => {
    if (onApply) onApply();
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
        <ModalContent>
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
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
}