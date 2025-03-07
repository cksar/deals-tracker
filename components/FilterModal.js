import React from 'react';
import { Modal, TouchableOpacity, View } from 'react-native';
import { ModalContainer, ModalCloseButton } from '../styles/searchBarStyles';
import { FilterInputs } from './FilterInputs';
import { FilterSwitches } from './FilterSwitches';

export function FilterModal({ visible, setVisible, filters, setFilters }) {
  // Função para exibir os resultados (fecha o modal)
  const handleShowResults = () => {
    setVisible(false);
    // Você pode adicionar aqui lógica extra para buscar os resultados com os filtros
  };

  // Função para limpar os filtros (resetando para os valores iniciais)
  const handleClearFilters = () => {
    setFilters({
      lowerPrice: '',
      upperPrice: '',
      metacritic: '',
      onSale: false,
      AAA: false,
      sortBy: 'DealRating',
      desc: false,
      steamRating: '',
      maxAge: ''
    });
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={() => setVisible(false)}
    >
      <ModalContainer>
        <View style={{ flex: 1, justifyContent: 'center', padding: 20, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <ModalCloseButton>X</ModalCloseButton>
            </TouchableOpacity>
            <FilterInputs
              filters={filters}
              setFilters={setFilters}
              onShowResults={handleShowResults}
              onClearFilters={handleClearFilters}
            />
            <FilterSwitches filters={filters} setFilters={setFilters} />
          </View>
        </View>
      </ModalContainer>
    </Modal>
  );
}
