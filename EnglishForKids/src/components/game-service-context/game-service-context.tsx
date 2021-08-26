import React from "react";

type ContextProps = {
  gameType: string;
};

const { Provider: GameServiceProvider, Consumer: GameServiceConsumer } =
  React.createContext<Partial<ContextProps>>({});

export { GameServiceProvider, GameServiceConsumer };
