import React from "react";
import {
  IClickInfo,
  InitialState,
  WordCard,
} from "../../interfaces/interfaces";

export class Game {
  static instance: Game;
  currAudio: string | undefined;
  randomItem: string | undefined;
  newArr: string[] | undefined;
  currRandomAudio: HTMLAudioElement | undefined;
  score: { cardId: string; word: string; res: boolean; gameOver: boolean };

  static getInstance(): Game {
    return this.instance;
  }

  constructor() {
    this.score = {
      cardId: "",
      word: "",
      res: false,
      gameOver: true,
    };

    if (!Game.instance) {
      Game.instance = this;
    }
    return Game.instance;
  }

  getScore(): IClickInfo {
    return this.score;
  }

  gameProcess(
    audioArr: InitialState["audioGameArr"],
    gameMode: boolean
  ): void | boolean {
    if (!audioArr.length && gameMode) {
      return (this.score.gameOver = true);
    }
    if (gameMode && audioArr.length) {
      this.score.gameOver = false;
      this.newArr = audioArr;
      this.randomItem =
        this.newArr[Math.floor(Math.random() * this.newArr.length)];
      this.newArr = this.newArr.filter((el) => el !== this.randomItem);
      this.currRandomAudio = new Audio(this.randomItem);
      this.currRandomAudio.play();
    }
  }

  getNextWord(
    card: WordCard,
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void | boolean {
    this.currAudio = card.audio;
    const copyArr = this.newArr;
    const currElement = event.target as HTMLElement;
    if (copyArr !== undefined && copyArr.length === 0 && !this.score.gameOver) {
      return (this.score.gameOver = true);
    }
    if (this.currAudio === this.randomItem && copyArr !== undefined) {
      this.score.res = true;
      this.score.word = `${card.word}`
      this.score.cardId = `${card._id}`;
      currElement.classList.add("disabled");
      this.gameProcess(copyArr, true);
    } else {
      this.score.res = false;
      this.score.word = `${card.word}`;
      console.log("error and state is", this.score);
    }
  }

  repeatWord(): void {
    this.currRandomAudio?.play();
  }
}
