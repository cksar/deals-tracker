import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  background-color: #121212;
`;

export const LogoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const LogoSmall = styled.Image`
  width: 100px;
  height: 100px;
  margin-right: 10px;
`;

export const LogoLarge = styled.Image`
  width: 200px;
  height: 200px;
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

export const ListHeaderContainer = styled.View`
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 20px;
`;

export const NoGamesText = styled.Text`
  color: white;
  text-align: center;
  padding: 20px;
`;