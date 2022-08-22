import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  //private apiUrl = 'http://localhost:8080';

  private apiUrl = 'https://marcelo-nicolas-porfolio.herokuapp.com';

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.http.get('./assets/data/data.json');
  }


  getUsuario(): Observable<any>{
    return this.http.get(this.apiUrl + "/usuarios/ver");
  }

  getExperiencia(): Observable<any>{
    return this.http.get(this.apiUrl + "/experiencia-laboral/ver");
  }

  getEducacion(): Observable<any>{
    return this.http.get(this.apiUrl + "/educacion/ver");
  }

  getCursos(): Observable<any>{
    return this.http.get(this.apiUrl + "/cursos/ver");
  }

  getContacto(): Observable<any>{
    return this.http.get(this.apiUrl + "/contacto/ver");
  }

  getProyectos(): Observable<any> {
    return this.http.get( this.apiUrl + "/proyectos/ver" );
  }


}
