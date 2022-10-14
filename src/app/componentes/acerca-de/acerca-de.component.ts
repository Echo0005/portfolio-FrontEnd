import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  public usuario : Usuario | undefined;

  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.getUser();
  }

  public getUser():void
  {
    this.datosPorfolio.getUsuario().subscribe
    ({
      next: (respuesta : Usuario) =>
      {
        this.usuario = respuesta;
      },
      error: (error : HttpErrorResponse) =>
      {
        console.log(error.message);
      }
    })
  }

}
