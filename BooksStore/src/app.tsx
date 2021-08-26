import React from "react";
import { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { DetailsCard } from "./components/details-card/details-card";
import { Header } from "./components/header/header";
import { AboutPage } from "./components/pages/about-page/about-page";
import { WarningPage } from "./components/pages/error-page/error-page";
import { HomePage } from "./components/pages/home-page/home-page";
import MyPage from "./components/pages/my-page/my-page";

import "./style.css";

const App = (): JSX.Element => {
  const [onAdded, openForm] = useState(false);

  const toggleAddBtn = () => {
    openForm((prev) => !prev);
  };

  return (
    <div
      className="app-wrapper"
      onClick={() => (onAdded ? openForm(false) : null)}
    >
      <Header />
      <Route>
        {({ location, match }) => (
          <TransitionGroup>
            <CSSTransition
              timeout={250}
              in={match !== null}
              key={location.key}
              classNames="fade"
              unmountOnExit
            >
              <div className="app-wrapper">
                <Switch location={location}>
                  <Route exact path="/">
                    <HomePage toggleAddBtn={toggleAddBtn} onAdded={onAdded} />
                  </Route>
                  <Route exact path="/details/:id">
                    <DetailsCard />
                  </Route>
                  <Route exact path="/about-page">
                    <AboutPage />
                  </Route>
                  <Route exact path="/my-page">
                    <MyPage />
                  </Route>
                  <Route exact path="/error-page">
                    <WarningPage />
                  </Route>
                  <Route exact path="*">
                    <Redirect to="/error-page" />
                  </Route>
                </Switch>
              </div>
            </CSSTransition>
          </TransitionGroup>
        )}
      </Route>
    </div>
  );
};

export default App;
