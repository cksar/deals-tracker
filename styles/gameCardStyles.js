import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const Card = styled.View`
  padding: 12px;
  margin-bottom: 8px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: ${({ isOnSale }) => (isOnSale ? '#ffeb3b' : '#f9f9f9')};
  flex-direction: row;
  align-items: center;
`;

export const GameImage = styled.Image`
  width: ${screenWidth * 0.15}px;
  height: ${screenWidth * 0.15}px;
  border-radius: 4px;
  margin-right: 12px;
`;

export const InfoContainer = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const PriceText = styled.Text`
  font-size: 14px;
  color: ${({ isOnSale }) => (isOnSale ? 'red' : 'black')};
`;
