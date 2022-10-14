import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/model/Contacto';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  public contacto: Contacto | undefined;

  constructor( private datosPorfolio:PorfolioService ) { }

  ngOnInit(): void 
  {
    this.getContacto();
  }

  public getContacto():void
  {
    this.datosPorfolio.getContacto().subscribe
    ({
      next: (respuesta : Contacto) =>
      {
        this.contacto = respuesta;
      },
      error: (error : HttpErrorResponse) =>
      {
        console.log(error.message);
      }
    })
  }
}
