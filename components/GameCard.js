import React from 'react';
import { Text } from 'react-native';
import { Card, GameImage, InfoContainer, Title, PriceText } from '../styles/gameCardStyles';

export function GameCard({ game }) {
    const isOnSale = game?.salePrice && game?.normalPrice && game.salePrice < game.normalPrice;

    return (
        <Card isOnSale={isOnSale}>
            <GameImage source={{ uri: game.thumb }} />
            <InfoContainer>
                <Title>{game.title}</Title>
                <Text>Metacritic: {game.metacriticScore ?? 'N/A'}</Text>
                <PriceText isOnSale={isOnSale}>Preço Normal: ${game.normalPrice}</PriceText>
                {isOnSale && <PriceText isOnSale={isOnSale}>Promoção: ${game.salePrice}</PriceText>}
            </InfoContainer>
        </Card>
    );
}
