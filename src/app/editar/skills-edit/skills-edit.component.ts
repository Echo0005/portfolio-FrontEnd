import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Skills } from 'src/app/model/Skills';
import { SkillSoft } from 'src/app/model/SkillSoft';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-skills-edit',
  templateUrl: './skills-edit.component.html',
  styleUrls: ['./skills-edit.component.css']
})
export class SkillsEditComponent implements OnInit, OnDestroy {


  subscription: Subscription = new Subscription;


  // List's

  skillSoftList: SkillSoft[] = [];
  skillHardList: Skills[] = [];

  ///


  // Form

    // SoftSkill

    idSoft: number = 0;
    nombre: string = "";

    ///

    // HardSkill

    porcentajeDado: string = "";

    idSkill: number = 0;
    nombreSkill: string = "";
    fotoSkill: string = "";
    porcentaje: string = "";

    ///

  ///


  constructor( private datosPorfolio: PorfolioService ) { }

  ngOnInit(): void 
  {
    this.getSkillSoft();
    this.getSkillHard();

    this.subscription = this.datosPorfolio.subjectSoftSkill$.subscribe( () => { this.getSkillSoft(); } )
    this.subscription = this.datosPorfolio.subjectHardSkill$.subscribe( () => { this.getSkillHard(); } )
  }

  ngOnDestroy(): void 
  {
    this.subscription.unsubscribe();
  }


  // Get's.

  public getSkillHard(): void
  {
    this.datosPorfolio.getSkills().subscribe( respuesta => { this.skillHardList = respuesta; } )
  }

  public getSkillSoft(): void
  {
    this.datosPorfolio.getSkillSoft().subscribe( respuesta => { this.skillSoftList = respuesta; } )
  }

  ///

  // Post's.

  public onCrearSoftSkill(): void
  {
    this.idSoft = 0;

    const { idSoft, nombre } = this;
    const newSoftSkill = { idSoft, nombre };

    this.datosPorfolio.addSoftSkill(newSoftSkill).subscribe();
  }

  public onCrearHardSkill(): void
  {
    this.idSkill = 0;
    let value: string = "width:" + this.porcentajeDado + "%";
    this.porcentaje = value;

    const { idSkill, nombreSkill, fotoSkill, porcentaje } = this;
    const newHardSkill = { idSkill, nombreSkill, fotoSkill, porcentaje };

    this.datosPorfolio.addHardSkill(newHardSkill).subscribe();
  }

  ///

  // Put's.

  public onModificarSoftSkill(): void
  {
    const { idSoft, nombre } = this;
    const updateSoftSkill = { idSoft, nombre };

    this.datosPorfolio.putSoftSkill(updateSoftSkill).subscribe();
    this.nombre = "";
  }

  public onModificarHardSkill(): void
  {
    let value: string = "width:" + this.porcentajeDado + "%";
    this.porcentaje = value;
    const { idSkill, nombreSkill, fotoSkill, porcentaje } = this;
    const updateHardSkill = { idSkill, nombreSkill, fotoSkill, porcentaje };

    this.datosPorfolio.putHardSkill(updateHardSkill).subscribe();

    this.porcentajeDado = "";
    this.nombreSkill = "";
  }

  ///
  // Funcionalidad para el Modificado.

  public idUpdateSoft(id: number): void
  {
    this.idSoft = id;
  }

  public idUpdateHard(id: number): void
  {
    this.idSkill = id;
  }

  //

  // Delete's.

  public borrarSoftSkill( id: number ): void
  {
    this.datosPorfolio.deleteSoftSkill(id).subscribe();
  }

  public borrarHardSkill( id: number ): void
  {
    this.datosPorfolio.deleteHardSkill(id).subscribe();
  }

  ///

}
