import { Component,Input, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {LoginComponent} from 'src/app/views/login/login.component'
import {CadastroComponent} from 'src/app/views/cadastro/cadastro.component'
import { Router} from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() logado:any;
  sessao=false;
  nome:any
  constructor(public dialog: MatDialog,private rota:Router,private location: Location) { }

  ngOnInit(): void {
    
if(localStorage.getItem("nome")?.length!=0){
this.sessao=true;
this.nome=localStorage.getItem("nome")
  
}  
  
}

  login(){

    this.dialog.open(LoginComponent)
  }
  cadastrar(){
    this.dialog.open(CadastroComponent)
  }
  Terminar(){
    localStorage.setItem('token',"")
    localStorage.setItem('nome','')
    location.reload()
    
  }
}
