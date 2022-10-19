import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaLabComponent } from './componentes/experiencia-lab/experiencia-lab.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './componentes/login/login.component';
import { EditarComponent } from './guia/editar/editar.component';
import { PorfolioComponent } from './guia/porfolio/porfolio.component';
import { AcercaDeEditComponent } from './editar/acerca-de-edit/acerca-de-edit.component';
import { FormEditComponent } from './editar/acerca-de-edit/form-edit/form-edit.component';
import { FormsModule } from '@angular/forms';
import { EducacionEditComponent } from './editar/educacion-edit/educacion-edit.component';
import { ExpLabEditComponent } from './editar/exp-lab-edit/exp-lab-edit.component';
import { ExpFormComponent } from './editar/exp-lab-edit/exp-form/exp-form.component';
import { EduFormComponent } from './editar/educacion-edit/edu-form/edu-form.component';
import { SkillsEditComponent } from './editar/skills-edit/skills-edit.component';
import { ProyectoEditComponent } from './editar/proyecto-edit/proyecto-edit.component';
import { EncabezadoEditComponent } from './editar/encabezado-edit/encabezado-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    ExperienciaLabComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    LoginComponent,
    EditarComponent,
    PorfolioComponent,
    AcercaDeEditComponent,
    FormEditComponent,
    EducacionEditComponent,
    ExpLabEditComponent,
    ExpFormComponent,
    EduFormComponent,
    SkillsEditComponent,
    ProyectoEditComponent,
    EncabezadoEditComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
