import React from 'react';
import { Card, Title, ContentContainer, ImageContainer, GameImage, InfoContainer, MetacriticBadge, MetacriticText, OriginalPriceText, SalePriceText, PriceContainer } from '../styles/gameCardStyles';

export function GameCard({ game }) {
    const isOnSale = game?.salePrice && game?.normalPrice && game.salePrice < game.normalPrice;

    return (
        <Card>
            <Title>{game.title}</Title>
            <ContentContainer>
                <ImageContainer>
                    <GameImage source={{ uri: game.thumb }} resizeMode="stretch" />
                    {game.metacriticScore !== null && game.metacriticScore !== undefined && (
                        <MetacriticBadge score={game.metacriticScore}>
                            <MetacriticText>{game.metacriticScore}</MetacriticText>
                        </MetacriticBadge>
                    )}
                </ImageContainer>
                <InfoContainer>
                    <PriceContainer>
                        {isOnSale ? (
                            <>
                                <OriginalPriceText isOnSale={isOnSale}>${game.normalPrice}</OriginalPriceText>
                                <SalePriceText>${game.salePrice}</SalePriceText>
                            </>
                        ) : (
                            <OriginalPriceText isOnSale={isOnSale}>${game.normalPrice}</OriginalPriceText>
                        )}
                    </PriceContainer>
                </InfoContainer>
            </ContentContainer>
        </Card>
    );
}