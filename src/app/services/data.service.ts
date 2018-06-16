import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from '../models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private base_url = 'https://api.sandbox.keyclic.com';
  private readonly httpOtions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-keyclic-App': 'com.keyclic.app',
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJyb2xlcyI6WyJST0xFX1VTRVIiXSwidXNlcm5hbWUiOiJrbG90IiwiaXAiOiI3Ny4xMzYuODUuMTMw' +
      'IiwiaWF0IjoxNTI4ODA3MDQ4LCJleHAiOjE1Mjk0MTE4NDh9.BYrKyYa8WaWBsiDXWda8q6KAX42LfLh3D5900Wcw3ss8YfMXhPl6VTGdTC0kv7hjNPrO0YgkB' +
      'FoxesHTjq-g4FDacF5O7jJmz-1a8DoBRzLR28tAFxvL4WjSU1fDffFRlAV8J7Ch2sOf4GQIGD1Z01deLQNg652dlU15lNOjH5Tm7MUnD7ssNIkbP9q30ewa' +
      'Zm6VDB5gu7hIQlR6CMwcuGsvWD0YviOivs9DHCcRgr3RroFXSH26QFjlCZwOIwVe6gfZ9YlbuD6kJ2YAEnUr2TZkuZZKADsM3BnwuweL1gERC6GZYuX2' +
      'DfdukBVOzgNCcxTRSaTURmx2I9Dwd15qahshCh1_uwsKU9WX5SFy8ZR3lEYJbxSHbQyFXpwF4vgQ_lm6AjwaqHzfhourwRH6gQkJ5o0tTHQ5-dK2we2ODE8' +
      '60obfqWJdl2HdVG9a94d8fkGeHNs3Hny0ykTHNd_LYE5eXZWh50ds2p8GK4FFi_Q_OZYVojeqJJy28gzMIkO663Fk66OsBUNl0sbgVUlZ9r4q5rTIfpsz4xOd2' +
      'gbP3Cxy5uCqAc_VzQvnDoHpb54JeY5X9BJf23xwxkaMgMRsoZwsNOp6F3921j-6a3jHfCHadJEJzhnGiwkCVqIUk7K5s7JKd7jXeeMci6kr373vfYu985DH11Hinl' +
      '6JDbopk98'
    })
  };

  constructor(private http: HttpClient) { }

  getPeople(): Observable<Member[]> {
    return this.http.get<Member[]>('https://jsonplaceholder.typicode.com/users');
  }

  getMembers() {
    return this.http.get( this.base_url + '/organizations/67c896c5-e6c2-4e3f-802d-e3ce417ab22e/members', this.httpOtions);
  }

  getPersonInfo(url: string) {
    return this.http.get(this.base_url + url, this.httpOtions)
  }
}
