import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {LoginComponent} from 'src/app/views/login/login.component'
import {CadastroComponent} from 'src/app/views/cadastro/cadastro.component'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  login(){

    this.dialog.open(LoginComponent)
  }
  cadastrar(){
    this.dialog.open(CadastroComponent)
  }
  Terminar(){}
}
