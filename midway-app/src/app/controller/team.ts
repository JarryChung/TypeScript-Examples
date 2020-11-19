import { Context, controller, get, inject, provide } from 'midway';
import { ITeamService, ITeamResult } from '../../interfaces/team';

@provide()
@controller('/team')
export class TeamController {

  @inject()
  ctx: Context;

  @inject('teamService')
  service: ITeamService;

  @get('/:id')
  async getUser(): Promise<void> {
    const id: number = this.ctx.params.id;
    const team: ITeamResult = await this.service.getTeam({ id });
    this.ctx.body = { success: true, message: 'OK', data: team };
  }
}
