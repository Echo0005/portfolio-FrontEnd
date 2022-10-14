import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, takeLast } from 'rxjs';
import { ExperienciaLab } from 'src/app/model/ExperienciaLab';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-exp-lab-edit',
  templateUrl: './exp-lab-edit.component.html',
  styleUrls: ['./exp-lab-edit.component.css']
})
export class ExpLabEditComponent implements OnInit, OnDestroy {


    idExp: number = 0;
    logoLinkExp: string = "";
    empresaExp: string = "";
    tipoEmpleoExp: string = "";
    puestoExp: string = "";
    esTrabajoActualExp: boolean = false;
    fechaInicioExp: string = "";
    fechaFinExp: string = "";


  public expList: ExperienciaLab[] = [];
  suscription: Subscription = new Subscription;

  constructor(private datosPorfolio:PorfolioService) {}

  ngOnInit(): void 
  {
    this.getExperiencia();
    this.suscription = this.datosPorfolio.subjectExp$.subscribe( () => { this.getExperiencia(); })
  }

  ngOnDestroy(): void {
      this.suscription.unsubscribe();
  }



  public getExperiencia():void
  {
    this.datosPorfolio.getExperiencia().subscribe( respuesta => {this.expList = respuesta} );
  }

  onCrear(): void
  {
    const {idExp,logoLinkExp,empresaExp,tipoEmpleoExp,puestoExp,esTrabajoActualExp,fechaInicioExp,fechaFinExp} = this
    const expNew = {idExp,logoLinkExp, empresaExp, tipoEmpleoExp, puestoExp, esTrabajoActualExp, fechaInicioExp, fechaFinExp}

    this.datosPorfolio.addExp(expNew).subscribe();
  }

  public onUpdate(): void
  {
    const {idExp,logoLinkExp,empresaExp,tipoEmpleoExp,puestoExp,esTrabajoActualExp,fechaInicioExp,fechaFinExp} = this
    const expUpdate = {idExp, logoLinkExp, empresaExp, tipoEmpleoExp, puestoExp, esTrabajoActualExp, fechaInicioExp, fechaFinExp}

    this.datosPorfolio.putExperiencia(expUpdate).subscribe();
    this.idExp = 0;
  }

  public updateById(id: any): void
  {
    this.idExp = id;
  }

  deleteExp(id: number)
  {
    this.datosPorfolio.deleteExp(id).subscribe();
  }

}
