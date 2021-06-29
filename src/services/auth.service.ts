import { AxiosInstance } from 'axios';
import FormData from 'form-data';
export class AuthService {
  constructor(private client: AxiosInstance) {}

  me() {
    return this.client.get('/users/me');
  }
  putUpdateMe(body: any) {
    console.log('SEND TO BAECKEND', body ,{"username": "matty37"})
    return this.client.put(`/users/update-me`, {
      username: body.username,
      city: body.city,
      email: body.email
    })
  } 
  putUpdateMePhoto(body: any) {

    const form = new FormData();
    form.append('photo', body);
    console.log('picture update',body, form);
    return this.client.put(`/users/update-photo`, 
      form
    ,{headers: { "Content-Type": "multipart/form-data" }});
  }
  login(email: string, password: string) {
    return this.client.post('/auth/', { email, password });
  }
  passwordRecoveryEmail(email: string) {
    return this.client.post('/auth/forgot-password', { email });
  }
  changePassword(recoveryCode: string, newPassword: string) {
    return this.client.post('/auth/reset-password', { recoveryCode, newPassword });
  }
  register(
    username: string,
    email: string,
    phone: string,
    password: string,
    birthdate: string,
    //habeasData
    receiveEmails: boolean
  ) {
    return this.client.post('/auth/signup', {
      username,
      password,
      phone,
      email,
      birthdate,
      receiveEmails
    });
  }
}
