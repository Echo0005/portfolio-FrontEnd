import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/model/Contacto';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  contactoDatos: Contacto [] = [];

  constructor( private service:PorfolioService ) { }

  ngOnInit(): void {

    this.service.getContacto().subscribe( respuesta => { this.contactoDatos = respuesta; } );

  }
}
