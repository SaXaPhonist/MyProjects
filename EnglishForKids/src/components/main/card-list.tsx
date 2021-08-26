import React, { ReactNode } from "react";
import Card from "./card/card.tsx";
import "./card-list.css";

import { connect } from "react-redux";
import withGameService from "../hoc/with-game-service";
import {
  addToAudioArr,
  IActionAddAudio,
  IActionsLoadCards,
} from "../../actions/actions";

import RepeatButton from "../gameMode/repeatButton";
import StarList from "../gameMode/star-list";
import { InitialState } from "../../interfaces/interfaces";
import { getCategoryThunk } from "../../services/api-service";
import { ThunkDispatch } from "redux-thunk";
import LoaderSpinner from "../loader-spinner/loader-spinner";

interface Iprops {
  cards: InitialState["cards"];
  gameMode: InitialState["gameMode"];
  disabledCards: InitialState["disabledCards"];
  catName: string;
  addToAudio: (audioArr: string[] | []) => void;
  getCards: (catName: string) => Promise<void>;
}

class CardList extends React.Component<Iprops> {
  catName: string;
  constructor(props: Iprops) {
    super(props);
    this.catName = this.props.catName;
    this.state = {
      isLoading: false,
    };
  }

  componentDidMount() {
    this.props.getCards(this.catName);
  }

  componentDidUpdate(prevProps: Iprops) {
    const audioArr: string[] = [];
    if (this.props.cards !== prevProps.cards) {
      this.props.cards.map((card) => {
        audioArr.push(card.audio);
      });
      this.props.addToAudio(audioArr);
    }
  }

  render(): ReactNode {
    const { cards, gameMode } = this.props;

    return (
      <React.Fragment>
        {gameMode ? <StarList /> : null}
        <div className="main__wrapper">
          <ul className="card-list">
            {cards.length ? (
              cards.map((card) => {
                return (
                  <li className="card-list-item" key={card._id}>
                    <Card card={card} key={card._id} />
                  </li>
                );
              })
            ) : (
              <LoaderSpinner />
            )}
          </ul>
          {gameMode ? <RepeatButton /> : null}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: InitialState) => {
  return {
    cards: state.cards,
    gameMode: state.gameMode,
    disabledCards: state.disabledCards,
  };
};

const mapDispathToProps = (
  dispatch: ThunkDispatch<
    InitialState,
    unknown,
    IActionsLoadCards | IActionAddAudio
  >
) => {
  return {
    getCards: async (catName: string) => {
      await dispatch(getCategoryThunk(catName));
    },
    addToAudio: (audioSrc: string[] | [] = []) => {
      dispatch(addToAudioArr(audioSrc));
    },
  };
};

export default withGameService()(
  connect(mapStateToProps, mapDispathToProps)(CardList)
);
