import React, { ReactNode } from "react";
import { connect } from "react-redux";
import { Redirect, Route, RouteComponentProps, Switch } from "react-router-dom";
import { InitialState } from "../../interfaces/interfaces";
import AdminCards from "../admin-cards-panel/admin-cards-panel";
import EdditingWords from "../edditing-words-list/edditing-words-list";
import Header from "../header";
import AdminPage from "../pages/admin-page/admin-page";

import MainPage from "../pages/main-page";
import Page from "../pages/page";
import Statistic from "../statistic/statistic";

class App extends React.Component<{ isLoggedIn: boolean }> {
  constructor(props: { isLoggedIn: boolean }) {
    super(props);
  }

  render(): ReactNode {
    console.log("pprops in app class", this.props);

    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage}>
            <Redirect to="/category/" />
          </Route>

          <Route exact path="/category" component={MainPage} />

          {this.props.isLoggedIn ? (
            <Route exact path="/admin-page">
              <AdminPage />
            </Route>
          ) : null}

          {this.props.isLoggedIn ? (
            <Route
              exact
              path="/admin-page/:catName"
              component={(props: RouteComponentProps) => (
                <AdminCards {...props} key={window.location.pathname} />
              )}
            ></Route>
          ) : null}
          <Route
            exact
            path="/category/:catName"
            component={(props: unknown) => (
              <Page {...props} key={window.location.pathname} />
            )}
          />
          <Route exact path="/statistic-page">
            <Statistic />
          </Route>
        </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: InitialState) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

export default connect(mapStateToProps)(App);
