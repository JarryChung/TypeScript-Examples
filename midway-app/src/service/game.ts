import { provide } from 'midway';
import { InsertResult } from 'typeorm';
import { Game } from '../entity';
import { IGame, IGameService } from '../interfaces';
import BaseService from './base';

@provide('gameService')
export class GameService extends BaseService implements IGameService {
  constructor() {
    super();
  }

  async getGames(): Promise<IGame[] | null> {
    return await this.connection.manager.find(Game);
  }

  async getGameById(gid: string): Promise<IGame> {
    return await this.connection.manager.findOne(Game, gid);
  }

  async likeGame(gid: string, uid: string): Promise<InsertResult> {
    // TODO: pass
    return { generatedMaps: [], identifiers: [], raw: [] };
  }

  async unlikeGame(gid: string, uid: string): Promise<InsertResult> {
    // TODO: pass
    return { generatedMaps: [], identifiers: [], raw: [] };
  }
}
