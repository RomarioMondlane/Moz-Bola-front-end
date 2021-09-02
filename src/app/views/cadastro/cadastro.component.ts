import { Component, OnInit } from '@angular/core';
import {user}from 'src/app/views/cadastro/user.model'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  user:user={
    username:"",
        password:""
  }
  confirmar=""
  constructor() { }

  ngOnInit(): void {
  }

  Cadastrar(){
    console.log(this.user)

  }
}
