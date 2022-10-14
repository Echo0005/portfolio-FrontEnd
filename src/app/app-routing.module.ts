import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './guia/editar/editar.component';
import { PorfolioComponent } from './guia/porfolio/porfolio.component';

const routes: Routes = [
  {path: "porfolio", component: PorfolioComponent},
  {path: "editar", component: EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
