import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/model/Curso';
import { Educacion } from 'src/app/model/Educacion';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacionList: Educacion [] = [];
  cursosList: Curso [] = [];

  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    
    this.datosPorfolio.getEducacion()
                        .subscribe( respuesta => { this.educacionList = respuesta } );

    this.datosPorfolio.getCursos()
                        .subscribe( respuesta => { this.cursosList = respuesta } );
                        
  }

}
