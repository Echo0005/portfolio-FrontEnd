import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-experiencia-lab',
  templateUrl: './experiencia-lab.component.html',
  styleUrls: ['./experiencia-lab.component.css']
})
export class ExperienciaLabComponent implements OnInit {

  expList: any

  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(datos =>{
      this.expList = datos.experience;
    });
  }

}
