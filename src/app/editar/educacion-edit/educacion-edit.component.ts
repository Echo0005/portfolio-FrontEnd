import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Curso } from 'src/app/model/Curso';
import { Educacion } from 'src/app/model/Educacion';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-educacion-edit',
  templateUrl: './educacion-edit.component.html',
  styleUrls: ['./educacion-edit.component.css']
})
export class EducacionEditComponent implements OnInit, OnDestroy {

  educacionList: Educacion [] = [];
  cursosList: Curso [] = [];

  suscription: Subscription = new Subscription;

  idEdu: number = 0;
  institucionEdu: string = "";
  tituloEdu: string = "";
  fechaEdu: string = "";
  descripEdu: string = "";
  imagenEdu: string = "";

  idCur: number = 0;
  imgCur: string = "";
  dondeCur: string = "";
  queCur: string = "";
  fechaIniCur: string = "";
  fechaFinCur: string = "";


  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void 
  {
    this.getEducacion();
    this.getCurso();

    this.suscription = this.datosPorfolio.subjectEdu$.subscribe( () => { this.getEducacion(); })
    this.suscription = this.datosPorfolio.subjectCur$.subscribe( () => { this.getCurso(); })
  }

  ngOnDestroy(): void 
  {
    this.suscription.unsubscribe();
  }



  public getEducacion(): void
  {
    this.datosPorfolio.getEducacion().subscribe( respuesta => { this.educacionList = respuesta } );
  }
  public getCurso(): void
  {
    this.datosPorfolio.getCursos().subscribe( respuesta => { this.cursosList = respuesta } );
  }


  onCrearEdu(): void
  {
    const {idEdu, institucionEdu, tituloEdu, fechaEdu, descripEdu, imagenEdu} = this
    const eduNew = {idEdu, institucionEdu, tituloEdu, fechaEdu, descripEdu, imagenEdu}

    this.datosPorfolio.addEdu(eduNew).subscribe();

    this.institucionEdu = "";
    this.tituloEdu = "";
    this.fechaEdu = "";
    this.descripEdu = "";
    this.imagenEdu = "";
  }
  onCrearCur(): void
  {
    const {idCur, imgCur, dondeCur, queCur, fechaIniCur, fechaFinCur} = this
    const curNew = {idCur, imgCur, dondeCur, queCur, fechaIniCur, fechaFinCur}

    this.datosPorfolio.addCur(curNew).subscribe();

    this.imgCur = "";
    this.dondeCur = "";
    this.queCur = "";
    this.fechaIniCur = "";
    this.fechaFinCur = "";
  }


  onUpdateEdu(): void
  {
    const {idEdu, institucionEdu, tituloEdu, fechaEdu, descripEdu, imagenEdu} = this
    const eduNew = {idEdu, institucionEdu, tituloEdu, fechaEdu, descripEdu, imagenEdu}

    this.datosPorfolio.putEducacion(eduNew).subscribe();

    this.idEdu = 0;
    this.institucionEdu = "";
    this.tituloEdu = "";
    this.fechaEdu = "";
    this.descripEdu = "";
    this.imagenEdu = "";
  }
  onUpdateCur(): void
  {
    const {idCur, imgCur, dondeCur, queCur, fechaIniCur, fechaFinCur} = this
    const curNew = {idCur, imgCur, dondeCur, queCur, fechaIniCur, fechaFinCur}

    this.datosPorfolio.putCurso(curNew).subscribe();

    this.idCur = 0;
    this.imgCur = "";
    this.dondeCur = "";
    this.queCur = "";
    this.fechaIniCur = "";
    this.fechaFinCur = "";
  }


  updateIdEdu(id: number): void
  {
    this.idEdu = id;
  }
  updateIdCur(id: number): void
  {
    this.idCur = id;
  }

  deleteEdu(id: number)
  {
    this.datosPorfolio.deleteEdu(id).subscribe();
  }
  deleteCur(id: number)
  {
    this.datosPorfolio.deleteCurso(id).subscribe();
  }

}
