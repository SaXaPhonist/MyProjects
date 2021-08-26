import { ICard } from "../interfaces/interfaces";

class DataService {
  private _storage: ICard[];

  constructor() {
    this._storage = [
      {
        _id: "4123",
        title:
          "Высоконагруженные приложения. Программирование, масштабирование, поддержка",
        author: "Клеппман Мартин",
        image: "img/Martinlepman.jpg",
        price: 79.99,
        year: "2021",
      },
      {
        _id: "7851",
        title: "Выразительный JavaScript. Современное веб-программирование",
        author: "Марейн Хавербеке, ",
        image: "img/js.jpg",
        price: 65.99,
        year: "2021",
      },
      {
        _id: "23923",
        title: "Веб-программирование для чайников",
        author: "Никхил Абрахам",
        image: "img/cattle.jpg",
        price: 49.99,
        year: "2019",
      },
      {
        _id: "47345",
        title: "Программирование на F#",
        author: "К.Смит",
        image: "img/f.jpg",
        price: 40.35,
        year: "2011",
      },
      {
        _id: "34146",
        title: "JavaScript. Подробное руководство",
        author: "Флэнаган Дэвид",
        image: "img/jsRino.jpg",
        price: 80,
        year: "2020",
      },
      {
        _id: "12349",
        title: "Программирование для детей",
        author: "Дэвид Уитни",
        image: "img/children.jpg",
        price: 30,
        year: "2020",
      },
    ];
  }

  getData(): ICard[] {
    return this._storage;
  }
}

export default DataService;
