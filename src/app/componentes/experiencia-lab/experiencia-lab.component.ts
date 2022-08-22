import { Component, OnInit } from '@angular/core';
import { ExperienciaLab } from 'src/app/model/ExperienciaLab';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-experiencia-lab',
  templateUrl: './experiencia-lab.component.html',
  styleUrls: ['./experiencia-lab.component.css']
})
export class ExperienciaLabComponent implements OnInit {

  expList: ExperienciaLab[] = [];

  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.getExperiencia().subscribe(respuesta =>{
      this.expList = respuesta;
    })
  }

}
