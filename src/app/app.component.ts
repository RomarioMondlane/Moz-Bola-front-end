import { Component } from '@angular/core';
import {VerificarConexaoService} from 'src/app/servicos/verificar-conexao.service'
import {ConnectionService} from'ng-connection-service'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bola';
  
  isConnected?:boolean;
  msg=""
  constructor(private cc:ConnectionService,private http:HttpClient){
    console.log(cc.monitor()._isScalar)
    this.isConnected=cc.monitor()._isScalar
  
    if(!cc.monitor()._isScalar){
    this.msg="upsii!! Sem internet "

  }   
  console.log(this.msg)
  
  }

  
}
