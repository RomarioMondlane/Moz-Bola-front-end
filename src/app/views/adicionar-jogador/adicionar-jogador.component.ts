import { Component, OnInit } from '@angular/core';
import {jogador} from 'src/app/views/adicionar-jogador/jogador.model'
import { Observable } from 'rxjs/internal/Observable';
import {HttpClient, HttpClientModule,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-adicionar-jogador',
  templateUrl: './adicionar-jogador.component.html',
  styleUrls: ['./adicionar-jogador.component.css']
})
export class AdicionarJogadorComponent implements OnInit {

  j:jogador={ nome:"",
    posicao: "",
    altura:0,
    datanatalicia: "",
    alcunha:""
};
selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  fileInfos?: Observable<any>;

msg!:any;
pos!:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.pos=[{posicao:"Avancado"},{posicao:"Medio"},{posicao:"Defesa"},{posicao:"Guarda-redes"}]
    console.log(this.pos)

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
console.log(this.j.datanatalicia);

        this.http.post(`http://localhost:8080/criarJogador?file=${formData}`,this.j,{headers,responseType:'text' as 'json'}).subscribe(data=>
        
        { 
          this.msg=data;
        console.log(this.msg)
        this.selectedFiles = undefined;
       
        } 

        )

  }

 
}}

}
