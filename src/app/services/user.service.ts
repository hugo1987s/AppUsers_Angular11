import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'https://gorest.co.in/public-api/users';
  token = 'yourtoken';

  constructor(private http:HttpClient) { }

  getUsers() : Observable<any>
  {
      return this.http.get<any>(`${this.url}?access-token=${this.token}`);
  }

  getUser(userId:number) : Observable<any>
  {
    return this.http.get<any>(`${this.url}/${userId}?access-token=${this.token}`);
  }
}
