import { IPlayer, IGame } from '../interfaces'

export const logger = (message: string, color: string = 'green') => {
  console.log(message);
}

export const transferResponse = ( data: any, message: string, success: boolean = true ) => {
  return { data, message, success };
}

export const mockPlayerData = (length: number): IPlayer[] => {
  const list = [];
  for (let i = 0; i < length; i++) {
    list.push({
      name: `Ultreman Tiga ${Math.floor(Math.random() * 100)}`,
      age: Math.floor(Math.random() * 24)
    });
  }
  return list;
}

export const mockGameData = (length: number): IGame[] => {
  const list = [];
  for (let i = 0; i < length; i++) {
    list.push({
      name: 'aBall',
      saleYear: "2020",
      price: "9.9",
      favorCount: 0
    });
  }
  return list;
}
