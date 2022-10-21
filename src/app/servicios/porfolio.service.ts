import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { Login } from '../model/Login';
import { environment } from 'src/environments/environment';
import { Skills } from '../model/Skills';
import { Contacto } from '../model/Contacto';
import { ExperienciaLab } from '../model/ExperienciaLab';
import { Educacion } from '../model/Educacion';
import { Curso } from '../model/Curso';
import { SkillSoft } from '../model/SkillSoft';
import { Proyecto } from '../model/Proyecto';

const httpOptions = {
  headers: new HttpHeaders({
    'Conten-Type':'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  private apiUrlBase = environment.apiBaseURL;

  private _subjectAbout$ = new Subject<void>();
  private _subjectExp$ = new Subject<void>();
  private _subjectEdu$ = new Subject<void>();
  private _subjectCur$ = new Subject<void>();
  private _subjectSoftSkill$ = new Subject<void>();
  private _subjectHardSkill$ = new Subject<void>();
  private _subjectProyecto$ = new Subject<void>();


  private ifLogin: boolean = false;

  //private apiUrl = 'https://marcelo-nicolas-porfolio.herokuapp.com';

  constructor(private http:HttpClient) { }

  get subjectAbout$()
  {
    return this._subjectAbout$;
  }
  get subjectExp$()
  {
    return this._subjectExp$;
  }
  get subjectEdu$()
  {
    return this._subjectEdu$;
  }
  get subjectCur$()
  {
    return this._subjectCur$;
  }
  get subjectSoftSkill$()
  {
    return this._subjectSoftSkill$;
  }
  get subjectHardSkill$()
  {
    return this._subjectHardSkill$;
  }
  get subjectProyecto$()
  {
    return this._subjectProyecto$;
  }



  //Ver. GET.

  getUsuario(): Observable<Usuario>{
    return this.http.get<Usuario>(this.apiUrlBase + "/usuario/id/1")
  }

  getUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.apiUrlBase + "/usuario/all");
  }

  getExperiencia(): Observable<ExperienciaLab[]>{
    return this.http.get<ExperienciaLab[]>(this.apiUrlBase + "/experiencia/all");
  }

  getEducacion(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.apiUrlBase + "/educacion/all");
  }

  getCursos(): Observable<any>{
    return this.http.get(this.apiUrlBase + "/curso/all");
  }

  getSkillSoft(): Observable<SkillSoft[]>
  {
    return this.http.get<SkillSoft[]>(this.apiUrlBase + "/skills/soft/all");
  }

  getSkills(): Observable<Skills[]>
  {
    return this.http.get<Skills[]>(this.apiUrlBase + "/skills/all");
  }

  getContacto(): Observable<Contacto[]>{
    return this.http.get<Contacto[]>(this.apiUrlBase + "/contacto/all");
  }

  getProyectos(): Observable<any> {
    return this.http.get( this.apiUrlBase + "/proyecto/all" );
  }

  ///


  //Agregar. POST.

  addEdu(edu: Educacion): Observable<Educacion>
  {
    const url = this.apiUrlBase + "/educacion/add";
    return this.http.post<Educacion>(url, edu)
      .pipe(
        tap( () => { this._subjectEdu$.next(); } )
      );
  }

  addCur(cur: Curso): Observable<Curso>
  {
    const url = this.apiUrlBase + "/curso/add";
    return this.http.post<Curso>(url, cur)
      .pipe(
        tap( () => { this._subjectCur$.next(); } )
      );
  }

  addExp(exp: ExperienciaLab): Observable<any>
  {
    return this.http.post<any>(this.apiUrlBase + "/experiencia/add", exp)
      .pipe(
        tap( () => { this._subjectExp$.next(); } )
      );
  }

  public addSoftSkill( softSkill: SkillSoft ): Observable<SkillSoft>
  {
    return this.http.post<SkillSoft>(this.apiUrlBase + "/skills/soft/add", softSkill)
      .pipe(
        tap( () => { this._subjectSoftSkill$.next(); } )
      );
  }

  public addHardSkill( hardSkill: Skills): Observable<Skills>
  {
    return this.http.post<Skills>(this.apiUrlBase + "/skills/add", hardSkill )
      .pipe(
        tap( () => { this._subjectHardSkill$.next(); } )
      );
  }

  public addProyecto( proyecto: Proyecto ): Observable<Proyecto>
  {
    return this.http.post<Proyecto>(this.apiUrlBase + "/proyecto/add", proyecto)
      .pipe(
        tap( () => { this._subjectProyecto$.next() } )
      );
  }

  ///


  //Modificar. PUT.

  putUsuario(usuario: Usuario): Observable<Usuario>{
    const url = this.apiUrlBase + "/usuario/update";
    return this.http.put<Usuario>(url, usuario)
      .pipe(
        tap( () => { this._subjectAbout$.next(); } )
      );
  }

  putExperiencia(experiencia: ExperienciaLab): Observable<ExperienciaLab>
  {
    const url = this.apiUrlBase + "/experiencia/update";
    return this.http.put<ExperienciaLab>(url, experiencia)
      .pipe(
        tap( () => { this._subjectExp$.next(); } )
      );
  }

  putEducacion( educacion: Educacion ): Observable< Educacion >
  {
    const url = this.apiUrlBase + "/educacion/update";
    return this.http.put<Educacion>(url, educacion)
      .pipe(
        tap( () => { this._subjectEdu$.next(); } )
      );
  }

  putCurso( curso: Curso): Observable< Curso >
  {
    const url = this.apiUrlBase + "/curso/update";
    return this.http.put<Curso>(url, curso)
      .pipe(
        tap( () => { this._subjectCur$.next(); } )
      );
  }

  putSoftSkill( softSkill: SkillSoft ): Observable<SkillSoft>
  {
    const url = this.apiUrlBase + "/skills/soft/update";
    return this.http.put<SkillSoft>(url, softSkill)
      .pipe(
        tap( () => { this._subjectSoftSkill$.next(); } )
      );
  }

  putHardSkill( hardSkill: Skills ): Observable<Skills>
  {
    const url = this.apiUrlBase + "/skills/update";
    return this.http.put<Skills>(url, hardSkill)
      .pipe(
        tap( () => { this._subjectHardSkill$.next(); } )
      );
  }

  putProyecto( proyecto: Proyecto ): Observable<Proyecto>
  {
    const url = this.apiUrlBase + "/proyecto/update";
    return this.http.put<Proyecto>(url, proyecto)
      .pipe(
          tap( () => { this._subjectProyecto$.next() } )
        );
  }

  ///


  //Eliminar. DELETE.

  deleteExp( id: number ): Observable<void>{
    const url = `${this.apiUrlBase}/experiencia/delete/${id}`;
    return this.http.delete<void>(url)
      .pipe(
        tap( () => { this._subjectExp$.next(); } )
      );
  }

  deleteEdu( id: number ): Observable<void>{
    const url = `${this.apiUrlBase}/educacion/delete/${id}`;
    return this.http.delete<void>(url)
      .pipe(
        tap( () => { this._subjectEdu$.next(); } )
      );
  }

  deleteCurso( id: number ): Observable<void>{
    const url = `${this.apiUrlBase}/curso/delete/${id}`;
    return this.http.delete<void>(url)
      .pipe(
        tap( () => { this._subjectCur$.next(); } )
      );
  }

  deleteSoftSkill( id: number ): Observable<void>
  {
    const url = `${this.apiUrlBase}/skills/soft/delete/${id}`;
    return this.http.delete<void>(url)
      .pipe(
        tap( () => { this._subjectSoftSkill$.next(); } )
      );
  }

  deleteHardSkill( id: number ): Observable<void>
  {
    const url = `${this.apiUrlBase}/skills/delete/${id}`;
    return this.http.delete<void>(url)
      .pipe(
        tap( () => { this._subjectHardSkill$.next(); } )
      );
  }

  deleteProyecto( id: number ): Observable<void>
  {
    const url = `${this.apiUrlBase}/proyecto/delete/${id}`;
    return this.http.delete<void>(url)
      .pipe(
        tap( () => { this._subjectProyecto$.next(); } )
      );

  }

  ///


}
