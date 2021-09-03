import { Component, Output, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MatSnackBarModule,MatSnackBar} from '@angular/material/snack-bar';
import { Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nome="";
  password=""
  url="http://localhost:8080/"; 
  sessao:any;
  @Output() logado=false
  
  constructor(private http:HttpClient,private snack:MatSnackBar,private rota:Router,private location: Location) { }

  ngOnInit(): void {
  }

  iniciar(){
    if(!localStorage.getItem('token')){
      
      const headers = new HttpHeaders({Authorization:'Basic ' + btoa(this.nome+":"+this.password)}) ;
     this.http.get(this.url,{headers, responseType: 'text' as 'json'}).subscribe(isValid=>{
       if(isValid){   
         localStorage.setItem('token', btoa(this.nome +':'+this.password));
         localStorage.setItem('nome',this.nome);
        this.sessao=window.localStorage.getItem('nome');
        location.reload()
        this.showMessage("Sessao iniciada comsucesso!")      
        this.logado=true    
        
        }})
}}

  showMessage(msg: string): void{
    console.log(msg);
    this.snack.open(msg,' ',{
      duration:2000,
      horizontalPosition:"center",
      verticalPosition:"top"

    })
  }
}
