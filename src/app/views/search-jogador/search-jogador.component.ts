import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-search-jogador',
  templateUrl: './search-jogador.component.html',
  styleUrls: ['./search-jogador.component.css']
})
export class SearchJogadorComponent implements OnInit {

  nome=""
  ret:any;
  noresult=true;
  espera=false;
  msg:any;
  criterio:any;
  criterioP:any;
  controlmsg=true;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.criterio=[{criterio:"Altura"},{criterio:"Idade"},{criterio:"Nome"},{criterio:"Posicao"}]

  }
  search(){
    console.log(this.criterioP)
    if(this.nome){
      this.controlmsg=false;
    this.espera=true;
    this.http.get(`http://localhost:8080/pesquisarCriterio?criterio=${this.criterioP}&dado=${this.nome}`).subscribe(data=>{
      this.espera=false;
      this.ret=data;
      this.noresult=true
      
      if(this.ret==null){
        this.noresult=false;

      }

      console.log(this.ret)
     
    })
  }else{
    this.msg="impossivel pesquisar, por favor digite o nome"
    console.log(this.msg)
  }
  }
}
