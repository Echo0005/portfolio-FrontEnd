import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
  emailDB: string = "";
  passwordDb: string = "";

  email: string = "";
  password: string = "";

  constructor( private loginService:LoginService, private router: Router ) { }

  ngOnInit(): void
  {
    this.getLogin();
  }

  public getLogin()
  {
    this.loginService.getLogin().subscribe( respuesta => { this.emailDB = respuesta.emailLog; this.passwordDb = respuesta.passwordLog; } )
  }

  public onLogin()
  {
    if ( this.email === this.emailDB && this.password === this.passwordDb )
    {
      this.router.navigate(["/editar"]);
      return 0;
    }
    if ( this.email === this.emailDB && this.password != this.passwordDb )
    {
      alert("Password incorrecto");
      return 0;
    }
    else 
    { 
      alert("Usuario inexistente");
      return 0;
    }
  }


}
