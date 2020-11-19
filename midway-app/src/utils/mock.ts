import { createConnection, Connection } from 'typeorm';
import { Player, Game, Flow } from '../entity';

import { logger, mockGameData, mockPlayerData } from './index';

export const mock = () => {
  logger('===== TypeORM Starting =====');
  createConnection().then(async (connection: Connection) => {
    logger('===== Database Connection Established =====')
    await connection.manager.insert(Player, mockPlayerData(5));
    await connection.manager.insert(Game, mockGameData(5));
    await connection.manager.insert(Flow, {
      uid: '1',
      gid: '1',
      isLike: true
    });
    logger("===== Initial [Player & Game] Info Injected Successfully =====")
  }).catch(err => {
    logger('===== TypeORM Error =====')
  })
}
