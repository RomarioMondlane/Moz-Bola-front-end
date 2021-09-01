import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MatSnackBarModule,MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import {DetalhesClubesComponent} from 'src/app/views/detalhes-clubes/detalhes-clubes.component'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-listar-clubes',
  templateUrl: './listar-clubes.component.html',
  styleUrls: ['./listar-clubes.component.css']
})
export class ListarClubesComponent implements OnInit {

  url="http://localhost:8080/listarClubes"; 
  dadosClube:any;
  isadim!:false;
  constructor(private http:HttpClient,private snack:MatSnackBar,public dialog: MatDialog) { }

  ngOnInit(): void {

    this.http.get(this.url)
    .subscribe(
      res => {
        this.dadosClube=res;
       console.log(this.dadosClube)
      
      
      })
  }

  detalhes(x:any){
    
  this.dialog.open(DetalhesClubesComponent,{data:x})

  }

  Apagar(x:any){}

}
