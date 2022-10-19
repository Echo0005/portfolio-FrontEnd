import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/Skills';
import { SkillSoft } from 'src/app/model/SkillSoft';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillSoftList: SkillSoft[] = [];
  skillHardList: Skills[] = [];

  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void 
  {
    this.getSkillSoft();
    this.getSkillHard();    
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

}
