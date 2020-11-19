import { provide } from 'midway';
import { DeleteResult, InsertResult } from 'typeorm';
import { Player } from '../entity';
import { IGame, IPlayer, IPlayerService } from '../interfaces';
import { logger, mockPlayerData } from '../utils';
import BaseService from './base';

@provide('playerService')
export class PlayerService extends BaseService implements IPlayerService {
  constructor() {
    super();
  }

  async getPlayers(): Promise<IPlayer[] | null> {
    logger('===== [PlayerService] getPlayers Service Invoked =====');
    return await this.connection.manager.find(Player);
  }

  async createPlayer(player: IPlayer): Promise<InsertResult> {
    logger('===== [PlayerService] createPlayer Service Invoked =====');
    return await this.connection.manager.insert(Player, { ...player });
  }

  async findPlayerById(uid: string): Promise<IPlayer> {
    logger('===== [PlayerService] findPlayerById Service Invoked =====');
    return await this.connection.manager.findOne(Player, uid);
  }

  async deletePlayer(uid: string): Promise<DeleteResult> {
    logger('===== [PlayerService] deletePlayer Service Invoked =====');
    return await this.connection.manager.delete(Player, uid);
  }

  async getPlayerLikedGames(uid: string): Promise<IGame[]> {
    logger('===== [PlayerService] getPlayerLikedGames Service Invoked =====');
    // TODO: 补充数据库操作逻辑 
    return [{ gid: '1', name: '11', saleYear: '11' }];
  }

  async fillMockPlayer(): Promise<InsertResult> {
    logger('===== [PlayerService] fillMockPlayer Service Invoked =====');
    return await this.connection.manager.insert(Player, mockPlayerData(5));
  }
}
