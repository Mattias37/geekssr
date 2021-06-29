import { HomeService } from './home.service';
import axios from 'axios';
import { ShopService } from './shop.service';
import { LeagueService } from './league.service';
import { AuthService } from './auth.service';
import { ProfileService } from './profile.service';
import { TournamentESportService } from './tournament-esport.service';
import { NoticeService } from './notice.service';
import { CourseService } from './course.service';


class ApiClient {
  AuthService = new AuthService(axios);
  ProfileService = new ProfileService(axios);
  ShopService = new ShopService(axios);
  LeagueService = new LeagueService(axios);
  TournamentESportService = new TournamentESportService(axios);
  NoticeService = new NoticeService(axios);
  HomeService = new HomeService(axios);
  CourseService = new CourseService(axios);

  buildServices = ({ apiUrl }: Record<string, string>) => { 
    axios.defaults.baseURL = apiUrl || 'https://api.nacionesports.com';
    this.AuthService = new AuthService(axios);
    this.ProfileService = new ProfileService(axios);
    this.ShopService = new ShopService(axios);
    this.LeagueService = new LeagueService(axios);
    this.TournamentESportService = new TournamentESportService(axios);
    this.NoticeService = new NoticeService(axios);
    this.HomeService = new HomeService(axios);
    this.CourseService = new CourseService(axios);
  };
}

export const apiClient = new ApiClient();
