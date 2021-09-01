import { Injectable } from '@angular/core';
import {ConnectionService} from'ng-connection-service'

@Injectable({
  providedIn: 'root'
})
export class VerificarConexaoService {
  
  estado=""
  isConnected=false;
  constructor(private cc:ConnectionService) { 
      
      
    this.cc.monitor().subscribe(isConnected=>{
      this.isConnected=isConnected;

      if(this.isConnected){
        this.estado="Online"
      }else{

        this.estado="Offline"
      }
      console.log(this.estado)
    })
  }
}
