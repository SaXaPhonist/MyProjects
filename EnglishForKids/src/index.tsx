import "./style.css";

import ReactDOM from "react-dom";
import App from "./components/app/app.tsx";
import React from "react";
import store from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { GameServiceProvider } from "./components/game-service-context/game-service-context";
import CardsService from "./services/game-service";
import { Game } from "./components/gameMode/game";

const cardsService = new CardsService();
const game = new Game();

ReactDOM.render(
  <Provider store={store}>
    <GameServiceProvider
      value={{
        cardService: cardsService,
        game: game,
      }}
    >
      <Router>
        <App />
      </Router>
    </GameServiceProvider>
  </Provider>,

  document.getElementById("app")
);
