import { DeleteResult, InsertResult } from "typeorm";
import { IGame } from "./game";

export interface IPlayer {
  uid?: number;
  name: string;
  age: number;
  description?: string;
  job?: string;
}

export type searchConditions = Partial<IPlayer>;

export interface IPlayerService {
  // 获取全部玩家
  getPlayers(): Promise<IPlayer[] | null>;
  // 创建玩家
  createPlayer(player: IPlayer): Promise<InsertResult>;
  // 根据 uid 查找玩家
  findPlayerById(uid: string): Promise<IPlayer>;
  // 删除玩家
  deletePlayer(uid: string): Promise<DeleteResult>;
  // 玩家喜欢的游戏
  getPlayerLikedGames(uid: string): Promise<IGame[]>;
  // 填充 mock 数据
  fillMockPlayer(): Promise<InsertResult>;
}
