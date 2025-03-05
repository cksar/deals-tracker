import styled from 'styled-components/native';

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