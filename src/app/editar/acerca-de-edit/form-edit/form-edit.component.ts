import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {

  //@Output() acercaDeMod: EventEmitter<Usuario> = new EventEmitter();

  public usuario: Usuario | undefined;


  id: number = 1;
  banner:string = "https://i.imgur.com/8y2Hwm9.jpg";
  fotoPerfil:string = "https://i.imgur.com/TRbXNzO.jpg";
  nombre:string = "";
  titulo:string = "";
  descripcion:string = "";

  constructor(private service:PorfolioService) { }

  ngOnInit(): void {  
    this.service.getUsuario().subscribe(respuesta => {this.usuario = respuesta})
  }

  onSubmit(){
    if(this.nombre.length === 0 || this.titulo.length === 0 || this.descripcion.length === 0){
      alert("Complete todos los campos");
      return;
    }

    const {id,banner,fotoPerfil,nombre,titulo,descripcion} = this
    const usuarioEdit = {id, banner, fotoPerfil, nombre, titulo, descripcion}

    //this.acercaDeMod.emit(usuarioEdit);

    this.service.putUsuario(usuarioEdit).subscribe();

    //console.log(usuarioEdit);

  }

}