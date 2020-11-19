import { Context, controller, inject, provide, get, post, del } from 'midway';
import { IPlayerService } from '../../interfaces';
import { transferResponse } from '../../utils';

@provide()
@controller('/player')
export class PlayerController {
  @inject()
  ctx: Context;

  @inject('playerService')
  service: IPlayerService;

  @get('/all')
  async getPlayers(): Promise<void> {
    const res = await this.service.getPlayers();
    this.ctx.body = transferResponse(res, 'Fetch Player List Successfully');
  }

  @post('/create')
  async createPlayer(): Promise<void> {
    const { body } = this.ctx.request;
    const res = await this.service.createPlayer({ ...body });
    this.ctx.body = transferResponse(res, 'Create Player Successfully')
  }

  @get('/uid/:uid')
  async findPlayerById(): Promise<void> {
    const { uid } = this.ctx.params;
    const res = await this.service.findPlayerById(uid);
    this.ctx.body = transferResponse(res, `Find Player By UID [${uid}] Successfully`)
  }

  @del('/uid/:uid')
  async deletePlayer(): Promise<void> {
    const { uid } = this.ctx.params;
    const res = await this.service.deletePlayer(uid);
    this.ctx.body = transferResponse(res, 'Delete Player Successfully')
  }

  @get('/fill')
  async fillMockPlayer(): Promise<void> {
    const res = await this.service.fillMockPlayer();
    this.ctx.body = transferResponse(res, 'Fill Mock Player Successfully')
  }

  @get('/like/:uid')
  async getPlayerLikedGames(): Promise<void> {
    const { uid } = this.ctx.params;
    const res = await this.service.getPlayerLikedGames(uid);
    this.ctx.body = transferResponse(res, 'Fetch Player Liked Games Successfully');
  }
}
