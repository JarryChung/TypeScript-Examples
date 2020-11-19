import { Application } from 'midway';
import { createConnection, Connection } from 'typeorm';

import { logger } from './utils';

class AppBootHook {
  app: Application;
  connection: Connection;

  constructor(app: Application) {
    this.app = app;
  }

  async willReady() {
    logger('===== TypeORM Starting =====');

    createConnection().then(async (connection: Connection) => {
      logger('===== Database Connection Established =====')
      this.connection = connection
    }).catch(err => {
      logger('===== TypeORM Error =====')
    })
  }
}

export default AppBootHook;

// 参考自：https://linbudu.top/posts/2020/07/31/midway-medium.html
