import { Context, controller, inject, provide, post, get } from 'midway';
import { IGameService } from '../../interfaces';
import { transferResponse } from '../../utils';

@provide()
@controller('/game')
export class GameController {
  @inject()
  ctx: Context;

  @inject('gameService')
  service: IGameService;

  @get('/all')
  async getGames(): Promise<void> {
    const res = await this.service.getGames();
    this.ctx.body = transferResponse(res, 'Fetch Game Info Successfully');
  }

  @get('/gid/:gid')
  async getGameById(): Promise<void> {
    const { gid } = this.ctx.params;
    const res = await this.service.getGameById(gid);
    this.ctx.body = transferResponse(res, `Find Game By GID [${gid}] Successfully`);
  }

  @post('/like')
  async likeGame(): Promise<void> {
    // TODO: ...
  }

  @post('/unlike')
  async unlikeGame(): Promise<void> {
    // TODO: ...
  }
}
