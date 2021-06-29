import { AxiosInstance } from 'axios';

export class NoticeService {
  constructor(private client: AxiosInstance) {}

  getNotices() {
    return this.client.get('/publications');
  }
  
  subscribeToNewsLetter(email:any){
    return this.client.post('/newsletter', email)
  }

  getNoticeById(id: string) {
    return this.client.get(`/publications/${id}`);
  }
}
