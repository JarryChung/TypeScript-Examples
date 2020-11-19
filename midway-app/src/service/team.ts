import { provide } from 'midway';
import { ITeamService, ITeamOptions, ITeamResult } from '../interfaces/team';

@provide('teamService')
export class teamService implements ITeamService {

  async getTeam(options: ITeamOptions): Promise<ITeamResult> {
    return {
      id: options.id,
      name: 'Tigaaa',
      address: 'KX-D1-26'
    };
  }
}
