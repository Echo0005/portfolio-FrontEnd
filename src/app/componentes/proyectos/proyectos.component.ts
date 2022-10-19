import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/Proyecto';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectosList: Proyecto[] = [];

  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.getProyectos().subscribe( respuesta => { this.proyectosList = respuesta; } );
  }

}
