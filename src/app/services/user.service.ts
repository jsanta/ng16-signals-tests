import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../types/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  retrieveUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>('https://jsonplaceholder.typicode.com/users');
  }
}
