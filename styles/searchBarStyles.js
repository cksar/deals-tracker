import styled from 'styled-components/native';
import { Picker } from '@react-native-picker/picker';

export const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 12px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  margin-left: 8px;
`;

export const SearchButton = styled.View`
  background-color: ${({ buttonColor }) => buttonColor || '#007BFF'};
  padding: 10px;
  border-radius: 8px;
  margin-left: 8px;
`;

export const FilterContainer = styled.View`
  margin-top: 20px;
`;

export const FilterLabel = styled.Text`
  font-size: 16px;
  margin-bottom: 6px;
`;

export const FilterInput = styled.TextInput`
  height: 40px;
  margin-bottom: 12px;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 8px;
`;

// Caso deseje usar um Picker estilizado:
export const FilterSelect = styled(Picker)`
  height: 40px;
  margin-bottom: 12px;
`;

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalCloseButton = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: flex-end;
  margin-bottom: 20px;
`;

export const ToggleButton = styled.Text`
  font-size: 16px;
  color: #007BFF;
  margin-top: 12px;
  text-align: center;
`;

/* Novos estilos para os botões */
export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const FilterButton = styled.TouchableOpacity`
  flex: 1;
  background-color: #007BFF;
  padding: 10px;
  border-radius: 8px;
  align-items: center;
  margin-right: 10px;
`;

export const ClearButton = styled.TouchableOpacity`
  flex: 1;
  background-color: #ccc;
  padding: 10px;
  border-radius: 8px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
`;
