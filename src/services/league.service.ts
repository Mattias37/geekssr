import { AxiosInstance } from 'axios';

export class LeagueService {
  constructor(private client: AxiosInstance) { }

  gridLeagues(userId: string) {
    if( userId === null){
      return this.client.get(`/leagues`);
    } else {
      return this.client.get(`/leagues?u=${userId}`);
    }
  }
  getPhases(id: string) {
    return this.client.get(`/leagues/${id}/rounds`);
  }
  getParticipants(id: string) {
    return this.client.get(`/leagues/${id}/participants`);
  }
  getRegisterLegue(id: string) {
    return this.client.get(`/leagues/${id}/register`);
  }
  getRegisterLegueByTeamId(id: string, team: string) {
    console.log(`/leagues/${id}/register?team=${team}`)
    return this.client.get(`/leagues/${id}/register?team=${team}`);
  }
  getRegisterLegueByUserId(id: string, user:string) {
    return this.client.get(`/leagues/${id}/register${user}`);
  }
  getUnRegisterLegue(id: string) {
    return this.client.get(`/leagues/${id}/unregister`);
  }
  getLeagueById(id: string, userId: string) {
    console.log('getLeagueById', id, userId)
    if( userId === null){
      return this.client.get(`/leagues/${id}`);
    } else {
      return this.client.get(`/leagues/${id}?u=${userId}`);
    }
  }
  getLeagueTransmitions(id: string) {
    return this.client.get(`/leagues/${id}/transmissions`);
  }
  getLeaguePositions(id: string) {
    return this.client.get(`/leagues/${id}/positions`);
  }
  getLeagueCalendar(id: string) {
    return this.client.get(`/leagues/${id}/calendar`);
  }
  getLeagueFinals(id: string) {
    return this.client.get(`/leagues/${id}/finals`);
  }
  getLeagueTeamSelected(idLeague: string, idTeam: string) {
    return this.client.get(`/leagues/${idTeam}/team/${idLeague}/`);
  }
  addTeamToLeague(idLeague: string, body: any) {
    return this.client.put(`/leagues/${idLeague}/addTeam`, body);
  }
}
