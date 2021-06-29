import { AxiosInstance } from 'axios';

export class ProfileService {
  constructor(private client: AxiosInstance) {}

  teams() {
    return this.client.get('/users/my-teams');
  }
  team(id: string){
    return this.client.get(`/teams/${id}`)
  }
  createTeam(body: any) {
    const form = new FormData();
    form.append('name', body.name);
    form.append('game', body.game);
    form.append('maxPlayers', body.maxPlayers);
    form.append('icon', body.icon);
    return this.client.post(`/teams`, 
      form
    ,{headers: { "Content-Type": "multipart/form-data" }});
  }
  updateTeam(idTeam: string, updates: any) {
    return this.client.put(`/teams/`, updates);
  }
  putUpdateTeamPhoto(idTeam: string, body: any) {
    const form = new FormData();
    form.append('icon', body);
    console.log('picture update',body, form);
    return this.client.put(`/teams/${idTeam}`, 
      form
    ,{headers: { "Content-Type": "multipart/form-data" }});
  }
  acceptInvitation(token: string){
    return this.client.get(`/teams/${token}/acceptInvitation`)
  }
  memberTeams(id: string) {
    return this.client.get(`/teams/${id}/members`);
  }
  userTeams() {
    return this.client.get('/users/teams');
  }
  myLeagues() {
    return this.client.get('/users/my-leagues');
  }
  getSponsors() {
    return this.client.get('/sponsors');
  }
  profile() {
    return this.client.get(`/users/profile`);
  }
  gameList() {
    return this.client.get(`/users/gameList`);
  }
  gameListCreateProfile(values: Record<string, string>) {
    return this.client.post(`/users/gameList`, { ...values });
  }
  gameListUpdateProfile(id: string, values: Record<string, string>) {
    return this.client.put(`/users/gameList/${id}`, { ...values });
  }
  gameListDeleteProfile(gameAccountId: string) {
    console.log('values service', gameAccountId);
    return this.client.delete(`/users/gameList/${gameAccountId}`);
  }
  userFilterByType(param: string) {
    return this.client.post(`/users/filter`, {
      param,
      value: 'all',
    });
  }
  userMyLeagues() {
    return this.client.get(`/users/my-leagues`);
  }

  games() {
    return this.client.get(`/games`);
  }

  invitationTeamLink(idTeam: string){
    return this.client.get(`/teams/${idTeam}/invitationLink`);
  }

  suggestPlayersByTeamId(idTeam: string, identifier: string) {
    return this.client.get(`/teams/${idTeam}/${identifier}`);
  }

  addMemberTeam(idTeam: string, players: Array<string>) {
    return this.client.put(`/teams/${idTeam}/addMember`, {
      players,
    });
  }
  putSelectedTeam(teamId: string) {
    return this.client.put(`/users/selectTeam`, {
      teamId,
    });
  }
}
