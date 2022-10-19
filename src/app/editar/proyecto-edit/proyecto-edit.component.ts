import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Proyecto } from 'src/app/model/Proyecto';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-proyecto-edit',
  templateUrl: './proyecto-edit.component.html',
  styleUrls: ['./proyecto-edit.component.css']
})
export class ProyectoEditComponent implements OnInit, OnDestroy {


  subscription: Subscription = new Subscription


  // List.

  proyectosList: Proyecto[] = [];

  ///

  // Form.

  idPro: number = 0;
  nombrePro: string = "";
  linkPro: string = "";

  ///

  constructor( private datosPorfolio:PorfolioService ) { }

  ngOnInit(): void 
  {
    this.getProyectos();

    this.subscription = this.datosPorfolio.subjectProyecto$.subscribe( () => { this.getProyectos(); } )
  }

  ngOnDestroy(): void 
  {
      this.subscription.unsubscribe();
  }


  // Get.

  public getProyectos(): void
  {
    this.datosPorfolio.getProyectos().subscribe( respuesta => { this.proyectosList = respuesta; } );
  }

  ///


  // Post.

  public onCrearProyecto(): void
  {
    this.idPro = 0;

    const { idPro, nombrePro, linkPro } = this;
    const newProyecto = { idPro, nombrePro, linkPro };

    this.datosPorfolio.addProyecto(newProyecto).subscribe();

  }

  ///


  // Update.

  public onUpdateProyecto(): void
  {
    const { idPro, nombrePro, linkPro } = this;
    const updateProyecto = { idPro, nombrePro, linkPro };

    this.datosPorfolio.putProyecto(updateProyecto).subscribe();

    this.nombrePro = "";
    this.linkPro = "";
  }

  ///
  // Funcionalidad para el Update.

  public updateId( id: number ): void
  {
    this.idPro = id;
  }

  ///


  // Delete.

  public deleteProyecto( id: number ): void
  {
    this.datosPorfolio.deleteProyecto(id).subscribe();
  }

  ///

}
