import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MatSnackBarModule,MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { DetalhesComponent } from 'src/app/views/detalhes/detalhes.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-listar-jogadores',
  templateUrl: './listar-jogadores.component.html',
  styleUrls: ['./listar-jogadores.component.css']
})
export class ListarJogadoresComponent implements OnInit {
  dadosJogador:any;
  isadim=false;
  ret:any;
  progress:any;
  dados:any;
  url="http://localhost:8080/listarJogadores";  
  constructor(private http:HttpClient,private snack:MatSnackBar,public dialog: MatDialog) { }

  ngOnInit(): void {
    let headers = new HttpHeaders() ;
    headers=headers.set('content-type','multipart/form-data');
    headers=headers.set('Acces-Control-Allow','*')
      this.http.get(this.url)
      .subscribe(
        res => {
          this.dadosJogador=res;
         console.log(this.dadosJogador)
        
        
        })
  }

  Contactar(x:any){

    let headers = new HttpHeaders() ;
    headers=headers.set('content-type','application/json');
    headers=headers.set('Acces-Control-Allow','*')
    this.http.get(`https://romariosms.herokuapp.com/enviar?msg=${x+"Preciso do jogador "}`).subscribe(data=>{
       
    this.ret=data;
    this.progress=undefined ;
    this.showMessage(this.ret);
  

  })


  

}


showMessage(msg: string): void{
  console.log(msg);
  this.snack.open(msg,' ',{
    duration:2000,
    horizontalPosition:"center",
    verticalPosition:"top"

  })
}

Apagar(x:any){}

detalhes(x:any):void{

  this.dialog.open(DetalhesComponent,{data:x})
}

}

