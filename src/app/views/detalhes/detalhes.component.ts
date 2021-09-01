import {Inject, Component, OnInit } from '@angular/core';
import {MatDialogModule,MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  nome:any;
  ret:any;
  constructor(private http:HttpClient,public dialog: MatDialog,@Inject(MAT_DIALOG_DATA) public data:any) {
    this.nome=data;
    
   }

  ngOnInit(): void {
    
    this.http.get(`http://localhost:8080/pesquisarjogador?nome=${this.nome}`).subscribe(data=>{
       
      this.ret=data;
      console.log(this.ret)
     
    })
  }

}
