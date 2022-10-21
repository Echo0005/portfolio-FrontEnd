import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/model/Contacto';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-encabezado-edit',
  templateUrl: './encabezado-edit.component.html',
  styleUrls: ['./encabezado-edit.component.css']
})
export class EncabezadoEditComponent implements OnInit {

  public contacto: Contacto[] = [];

  constructor( private datosPorfolio:PorfolioService ) { }

  ngOnInit(): void 
  {
    this.getContacto();
  }

  public getContacto():void
  {
    this.datosPorfolio.getContacto().subscribe( respuesta => { this.contacto = respuesta; })
  }

}
