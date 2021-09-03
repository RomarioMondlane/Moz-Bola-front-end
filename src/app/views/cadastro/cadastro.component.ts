import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import {user}from 'src/app/views/cadastro/user.model'
import {HttpClient, HttpClientModule,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  user:user={
    username:"",
        password:"",
        isadmin:false
        
  }
  confirmar=""
  adimin!:any;
  constructor(private snack:MatSnackBar,private http:HttpClient,private location: Location) { }

  ngOnInit(): void {
    this.adimin=[{isadmin:false,nome:"Usuario"},{isadmin:true,nome:"Administrador"}]
  }

  Cadastrar(){
    let headers = new HttpHeaders({Authorization:'Basic ' + localStorage.getItem('token')}) ;
    headers=headers.set('content-type','form-data');
    headers=headers.set('Acces-Control-Allow','*')
     this.http.post(`http://localhost:8080/criarUser`,this.user,{headers,responseType:'text' as 'json'}).subscribe
     (data=>{
       console.log(data)
     })
    console.log(this.user)

  }
  
  showMessage(msg: string): void{
    console.log(msg);
    this.snack.open(msg,' ',{
      duration:2000,
      horizontalPosition:"center",
      verticalPosition:"top"

    })
  }
}
