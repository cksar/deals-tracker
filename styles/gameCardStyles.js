import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const Card = styled.View`
  padding: 12px;
  margin-bottom: 8px;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 8px;
`;

export const ContentContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ImageContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const GameImage = styled.Image`
  width: ${screenWidth * 0.30}px;
  height: ${screenWidth * 0.15}px;
  border-radius: 4px;
  resize-mode: stretch;
`;

export const InfoContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: flex-end;
`;

export const MetacriticBadge = styled.View`
  width: 28px;
  height: 28px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  background-color: ${({ score }) => {
    if (score >= 80) return 'green';
    if (score >= 50) return 'gold';
    return 'red';
  }};
`;

export const MetacriticText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: white;
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const OriginalPriceText = styled.Text`
  font-size: 14px;
  color: black;
  text-decoration-line: ${({ isOnSale }) => (isOnSale ? 'line-through' : 'none')};
  font-weight: ${({ isOnSale }) => (isOnSale ? 'normal' : 'bold')};
  margin-right: 4px;
  text-align: right;
`;

export const SalePriceText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: green;
  text-align: right;
`;
