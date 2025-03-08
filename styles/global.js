import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  background-color: #121212;
`;

export const Input = styled.TextInput`
  height: 40px;
  margin-bottom: 12px;
  border: 1px solid #444;
  padding: 10px;
  border-radius: 8px;
  color: #fff;
  background-color: #1c1c1c;
`;

export const Loader = styled.ActivityIndicator.attrs(() => ({
  size: 'large',
  color: '#0a84ff',
}))``;