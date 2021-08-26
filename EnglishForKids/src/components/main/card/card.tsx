import React, { Dispatch } from "react";
import { connect, MapDispatchToProps } from "react-redux";
import {
  addDisabledCards,
  addGameClick,
  cardsPlaySound,
  TActions,
} from "../../../actions/actions";
import {
  IClickInfo,
  InitialState,
  WordCard,
} from "../../../interfaces/interfaces";
import { Game } from "../../gameMode/game";
import "./card.css";

interface Iprops {
  audioArr: InitialState["audioGameArr"];
  gameMode: InitialState["gameMode"];
  card: WordCard;
  addClickToState: (clickInfo: IClickInfo) => Dispatch<TActions>;
  addDisabledCards: (elements: HTMLElement[]) => Dispatch<TActions>;
  onPlay: (isPlay: boolean, audioSrc: string) => Dispatch<TActions>;
}

interface IState {
  cardId: string;
  flip: boolean;
  clicks: number;
  trueClick: number;
  falseClick: number;
}

class Card extends React.Component<Iprops, IState> {
  constructor(props: Iprops) {
    super(props);

    this.state = {
      cardId: "",
      flip: false,
      clicks: 0,
      trueClick: 0,
      falseClick: 0,
    };
  }

  componentDidUpdate(prevProps: Iprops, prevState: IState) {
    if (this.state.clicks != prevState.clicks) {
      localStorage.setItem(this.state.cardId, JSON.stringify(this.state));
    }
  }

  flipCard() {
    this.setState((state: { flip: boolean }) => {
      return {
        flip: !state.flip,
      };
    });
  }

  handelClick(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    isPlay: boolean,
    card: WordCard,
    gameMode: boolean
  ) {
    if (isPlay && !gameMode) {
      const { onPlay } = this.props;
      const sound = new Audio(card.audio);
      sound.play();
      onPlay(isPlay, card.audio);
      sound.onended = () => {
        onPlay(!isPlay, card.audio);
      };
    } else if (gameMode) {
      Game.getInstance().getNextWord(card, event);
      const clickInfo = Game.getInstance().getScore();
      const currElement = event.target as HTMLElement;
      this.props.addClickToState(clickInfo);
      this.setState((state: IState) => ({
        ...state,
        clicks: state.clicks + 1,
        trueClick: state.trueClick + Number(clickInfo.res),
        falseClick: state.falseClick + Number(!clickInfo.res),
        cardId: clickInfo.cardId,
      }));
      this.props.addDisabledCards(currElement);
    }
  }

  render() {
    const { gameMode } = this.props;
    const { word, translation, image, audio } = this.props.card;

    return (
      <div
        className={`card__container  ${
          this.state.flip ? "card__flipped" : null
        }`}
      >
        <div
          className="card"
          onClick={(e) => this.handelClick(e, true, this.props.card, gameMode)}
        >
          <div className="card__front">
            <div className="card__img">
              <img src={image} alt="" className="word-img" />
            </div>
            <div
              className={`card__content ${gameMode ? "hidden" : null}`}
              onClick={(e) => e.stopPropagation()}
            >
              <span className="card-name">{word.toLocaleUpperCase()}</span>
              <audio src={audio}></audio>
              <button
                type="button"
                className="flip-btn"
                onClick={() => this.flipCard()}
              >
                <p>Answer</p>
              </button>
            </div>
          </div>
          <div className="card__back">
            <div className="card__answer">
              <span className="card__translation">
                <p>{translation}</p>
              </span>
              <button
                type="button"
                className="flip-btn back"
                onClick={() => this.flipCard()}
              >
                <p>Back</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: InitialState) => {
  return {
    audioArr: state.audioGameArr,
    gameMode: state.gameMode,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<TActions>) => {
  return {
    addClickToState: (info: IClickInfo) => {
      dispatch(addGameClick(info));
    },
    addDisabledCards: (card: HTMLElement[]) => {
      dispatch(addDisabledCards(card));
    },
    onPlay: (isPlay: boolean, audioSrc: string) => {
      dispatch(cardsPlaySound(isPlay, audioSrc));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
