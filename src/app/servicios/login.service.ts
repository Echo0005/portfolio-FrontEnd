import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../model/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrlBase = environment.apiBaseURL;

  constructor(private http:HttpClient) { }

  public getLogin(): Observable<Login>
  {
    return this.http.get<Login>(this.apiUrlBase + "/login/id/83")
  }


}
