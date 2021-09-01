import { Component, OnInit } from '@angular/core';
import {clube} from 'src/app/views/adicionar-clube/clube.model'
import { Observable } from 'rxjs/internal/Observable';
import {HttpClient, HttpClientModule,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-adicionar-clube',
  templateUrl: './adicionar-clube.component.html',
  styleUrls: ['./adicionar-clube.component.css']
})
export class AdicionarClubeComponent implements OnInit {
  c:clube={ 
    nome:"",
    fundacao:"",
    localizacao:"",
    treinador: "",
    dono: ""
};
msg!:any;
selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  fileInfos?: Observable<any>;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  onFileSelected():void{
    const inputNode:any=document.querySelector('#file');
    if(typeof(FileReader)!=='undefined'){

      const reader=new FileReader();

      reader.onload=(e:any)=>{
        
      }
      reader.readAsArrayBuffer(inputNode.files[0])
    }

  }
  criar():void{
    let headers = new HttpHeaders({Authorization:'Basic ' + sessionStorage.getItem('token')}) ;
    headers=headers.append('content-type','multipart/form-data; boundary {}');
    headers=headers.append('Acces-Control-Allow','*')
    headers=headers.append('enctype', 'multipart/form-data')
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
  
      if (file) {
        this.currentFile = file;
        const formData: FormData = new FormData();

formData.append('file', file);
console.log(file.arrayBuffer())
console.log(this.c);

        this.http.post(`http://localhost:8080/criarJogador?file=${formData}`,this.c,{headers,responseType:'text' as 'json'}).subscribe(data=>
        
        { 
          this.msg=data;
        console.log(this.msg)
        this.selectedFiles = undefined;
       
        } 

        )

  }

 
}}


}
