import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member, Post } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  readonly base_url: string;

  private readonly httpHeader = {
    headers: new HttpHeaders({
      'Content-type': 'application/json; charset=UTF-8'
    })
  };

  constructor(private http: HttpClient) {
    this.base_url = 'https://jsonplaceholder.typicode.com';
  }

  getPeople(): Observable<Member[]> {
    return this.http.get<Member[]>(this.base_url + '/users');
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.base_url + '/posts');
  }

  postComment(body: Object): Observable<Post> {
    return this.http.post<Post>(this.base_url + '/posts', body, this.httpHeader);
  }
}
