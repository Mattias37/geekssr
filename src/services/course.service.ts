import { AxiosInstance } from 'axios';

export class CourseService {
  constructor(private client: AxiosInstance) {}

  getCourses() {
    return this.client.get('/courses');
  }
  
  subscribeToNewsLetter(email:any){
    return this.client.post('/newsletter', email)
  }

  getCourseById(id: string) {
    return this.client.get(`/courses/${id}`);
  }
  getCourseByIdAuth(id: string, auth: string) {
    return this.client.get(`/courses/${id}?user=${auth}`);
  }
  getCourseSectionsById(id: string, auth: string){
    return this.client.get(`/courses/${id}/sections?user=${auth}`)
  }
  getCourseSectionsLessonById(courseId: string, lessonId: string, auth: string){
    return this.client.get(`/lessons/${courseId}/${lessonId}?user=${auth}`)
  }
  getCourseRegisterById(id: string){
    return this.client.get(`/courses/${id}/register`)
  }
  getCourseUnRegisterById(id: string){
    return this.client.get(`/courses/${id}/unregister`)
  }
  getMyCourses(){
    return this.client.get(`/users/my-courses`)
  }
}
