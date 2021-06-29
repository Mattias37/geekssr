import { AxiosInstance } from 'axios';

export class TournamentESportService {
  constructor(private client: AxiosInstance) {}

  tournamentTypes() {
    return this.client.get('/tournament-types');
  }
  tournamentTypesGetAll(id: string) {
    return this.client.get(`/tournaments/type/${id}`);
  }
  getTournamentsByGameId(id:string) {
    return this.client.get(`tournaments/game/${id}`)
  }
  tournamentById(id: string, userId: string) {
    return this.client.get(`/tournaments/${id}?u=${userId}`);
  }
  tournamentCreate( body: any) {
    // console.log('create tournament', body)
    const form = new FormData();
    form.append('name', body.name);
    form.append('description', body.description);
    form.append('game', body.game);
    form.append('participantsModel', body.participantsModel);
    form.append('modality', body.modality);
    form.append('stage', body.stage);
    form.append('quotas', body.quotas);
    form.append('registrationStartDate', body.registrationStartDate);
    form.append('registrationEndDate', body.registrationEndDate);
    form.append('startDate', body.startDate);
    form.append('endDate', body.endDate);
    form.append('icon', body.icon);
    console.log('Tournament',body, form);
    return this.client.post(`/tournaments`,
      form
    ,{headers: { "Content-Type": "multipart/form-data" }});
  }
  tournamentSelectedParticipants(id: string) {
    return this.client.get(`/tournaments/${id}/participants`);
  }
  tournamentSelectedCalendar(id: string) {
    return this.client.get(`/tournaments/${id}/calendar`);
  }
  tournamentSelectedPositions(id: string) {
    return this.client.get(`/tournaments/${id}/positions`);
  }
  tournamentSelectedSponsors(id: string) {
    return this.client.get(`/tournaments/${id}/sponsors`);
  }
  tournamentSelectedFinals(id: string) {
    return this.client.get(`/tournaments/${id}/finals`);
  }
  getRegistertournament(id: string) {
    console.log(`/tournaments/${id}/register`)
    return this.client.get(`/tournaments/${id}/register`);
  }
  getRegistertournamentByTeamId(id: string, team: string) {
    console.log(`/tournaments/${id}/register?team=${team}`)
    return this.client.get(`/tournaments/${id}/register?team=${team}`);
  }
  getRegistertournamentByUserId(id: string, user:string) {
    return this.client.get(`/tournaments/${id}/register${user}`);
  }
  getUnRegistertournament(id: string) {
    return this.client.get(`/tournaments/${id}/unregister`);
  }
  tournamentGetAllGames() {
    return this.client.get(`/games?type=tournaments`);
  }
}
