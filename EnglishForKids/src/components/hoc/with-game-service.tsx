import React from "react";
import { GameServiceConsumer } from "../game-service-context/game-service-context";

const withGameService = () => (Wrapped) => {
  return (props) => {
    return (
      <GameServiceConsumer>
        {(service) => {
          return (
            <Wrapped
              {...props}
              cardsService={service.cardService}
              gameService={service.game}
            />
          );
        }}
      </GameServiceConsumer>
    );
  };
};

export default withGameService;
