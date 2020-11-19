import { InsertResult } from "typeorm";

export interface IGame {
  gid: string;
  name: string;
  saleYear: string;
  favorCount?: number;
  rate?: number;
}

export interface IGameService {
  // 获取全部游戏
  getGames(): Promise<IGame[] | null>;
  // 根据 gid 查找游戏
  getGameById(gid: string): Promise<IGame>;
  // 点赞游戏
  likeGame(gid: string, uid: string): Promise<InsertResult>;
  // 取消点赞游戏
  unlikeGame(gis: string, uid: string): Promise<InsertResult>;
}
