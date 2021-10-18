import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/catch';
// import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlUsers = 'https://jsonplaceholder.typicode.com/users';
  private urlPosts = 'https://jsonplaceholder.typicode.com/users/1/posts';
  constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get(this.urlUsers)
  }
  
  getPosts(post?: any){
    return this.http.get(this.urlPosts + '/', post)
  }
}
