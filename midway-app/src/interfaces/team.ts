export interface ITeamOptions {
  id: number;
}

export interface ITeamResult {
  id: number;
  name: string;
  address: string
}

export interface ITeamService {
  getTeam(options: ITeamOptions): Promise<ITeamResult>;
}