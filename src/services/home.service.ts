import { AxiosInstance } from 'axios';

export class HomeService {
  constructor(private client: AxiosInstance) {}

  home() {
    return this.client.get('/home');
  }
  homePrincipal() {
    return this.client.get('/home/principal');
  }
  transmitionsRest() {
    return this.client.get('/transmissions');
  }

  publicationsRest() {
    return this.client.get('/publications');
  }
  publicationsRestById(id: string) {
    return this.client.get(`/publications/${id}`);
  }
}
