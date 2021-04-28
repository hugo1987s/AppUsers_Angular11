import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'https://gorest.co.in/public-api/users';
  token = 'bd9dce78ba784b0d145298835e49e24d5f3e5f5a96a2f63acdaa37a157229977';

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
