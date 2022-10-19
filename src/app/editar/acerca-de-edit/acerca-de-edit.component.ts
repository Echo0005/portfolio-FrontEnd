import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/model/Usuario';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-acerca-de-edit',
  templateUrl: './acerca-de-edit.component.html',
  styleUrls: ['./acerca-de-edit.component.css']
})
export class AcercaDeEditComponent implements OnInit, OnDestroy {

  public usuario: Usuario;

  suscription: Subscription = new Subscription;

  id: number = 1;
  banner:string = "https://i.imgur.com/8y2Hwm9.jpg";
  fotoPerfil:string = "https://i.imgur.com/TRbXNzO.jpg";
  nombre:string = "";
  titulo:string = "";
  descripcion:string = "";

  constructor( private datosPorfolio:PorfolioService ) { }

  ngOnInit(): void 
  {
    this.getUsuario();
    this.onLoadUser();
    this.suscription = this.datosPorfolio.subjectAbout$.subscribe( () => { this.getUsuario(); } )
  }

  ngOnDestroy(): void 
  {
    this.suscription.unsubscribe();
  }


  

  public getUsuario():void
  {
    this.datosPorfolio.getUsuario().subscribe( respuesta => { this.usuario = respuesta; } )
  }

  public onLoadUser():void
  {
    this.fotoPerfil = this.usuario.fotoPerfil;
    console.log(this.usuario.fotoPerfil);
    this.nombre = this.usuario.nombre;
    console.log(this.usuario.nombre);
    this.titulo = this.usuario.titulo;
    console.log(this.usuario.titulo);
    this.descripcion = this.usuario.descripcion;
    console.log(this.usuario.descripcion);
  }

  onModificarAbout(): void
  {
    const {id,banner,fotoPerfil,nombre,titulo,descripcion} = this
    const usuarioEdit = {id, banner, fotoPerfil, nombre, titulo, descripcion}

    this.datosPorfolio.putUsuario(usuarioEdit).subscribe();

    this.nombre = "";
    this.titulo = "";
    this.descripcion = "";
  }

}
