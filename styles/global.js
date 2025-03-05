import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  background-color: #fff;
`;

export const Input = styled.TextInput`
  height: 40px;
  margin-bottom: 12px;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 8px;
`;

export const Loader = styled.ActivityIndicator.attrs(() => ({
  size: 'large',
  color: '#007BFF',
}))``;
