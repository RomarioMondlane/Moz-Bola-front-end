import {Inject, Component, OnInit } from '@angular/core';
import {MatDialogModule,MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-detalhes-clubes',
  templateUrl: './detalhes-clubes.component.html',
  styleUrls: ['./detalhes-clubes.component.css']
})
export class DetalhesClubesComponent implements OnInit {

  codigo:any;
  ret:any;
  constructor(private http:HttpClient,public dialog: MatDialog,@Inject(MAT_DIALOG_DATA) public data:any) { 

    this.codigo=data;

  }

  ngOnInit(): void {
    this.http.get(`http://localhost:8080/pesquisaclubeid?codigo=${this.codigo}`).subscribe(data=>{
       
      this.ret=data;
      console.log(this.ret)

  })


}
}