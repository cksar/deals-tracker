import styled from 'styled-components/native';
import { Picker } from '@react-native-picker/picker';

export const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #1c1c1c;
  border: 1px solid #444;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 12px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  background-color: transparent;
  color: #ffffff;
  font-size: 16px;
  padding: 10px;
  border-width: 0;
  outline: none;
  shadow-opacity: 0;
  elevation: 0;
`;

export const FilterIconButton = styled.View`
  padding: 8px;
  background-color: #444;
  border-radius: 8px;
`;

export const SearchButton = styled.View`
  background-color: #0a84ff;
  padding: 12px;
  border-radius: 8px;
  margin-top: 12px;
  align-items: center;
`;

export const FilterContainer = styled.View`
  margin-top: 20px;
`;

export const FilterLabel = styled.Text`
  font-size: 16px;
  margin-bottom: 6px;
  color: #ccc;
`;

export const FilterInput = styled.TextInput`
  height: 40px;
  margin-bottom: 12px;
  border: 1px solid #444;
  padding: 10px;
  border-radius: 8px;
  color: #fff;
  background-color: #1c1c1c;
`;

export const FilterSelect = styled(Picker)`
  height: 40px;
  margin-bottom: 12px;
  color: #fff;
  background-color: #1c1c1c;
  border: 1px solid #444;
  border-radius: 8px;
`;

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalContent = styled.View`
  background-color: #1c1c1c;
  padding: 20px;
  border-radius: 10px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const FilterButton = styled.TouchableOpacity`
  flex: 1;
  background-color: #0a84ff;
  padding: 10px;
  border-radius: 8px;
  align-items: center;
  margin-right: 10px;
`;

export const ClearButton = styled.TouchableOpacity`
  flex: 1;
  background-color: #444;
  padding: 10px;
  border-radius: 8px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const Separator = styled.View`
  height: 1px;
  background-color: #444;
  margin-vertical: 12px;
`;

export const FilterSwitchRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;