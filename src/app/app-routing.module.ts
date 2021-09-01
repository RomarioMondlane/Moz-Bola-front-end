import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListarJogadoresComponent} from 'src/app/views/listar-jogadores/listar-jogadores.component'
import {AdicionarJogadorComponent} from'src/app/views/adicionar-jogador/adicionar-jogador.component'
import {AdicionarClubeComponent} from 'src/app/views/adicionar-clube/adicionar-clube.component'
import {ListarClubesComponent} from 'src/app/views/listar-clubes/listar-clubes.component'
import {SearchJogadorComponent} from 'src/app/views/search-jogador/search-jogador.component'
import {NoticiasComponent} from 'src/app/views/noticias/noticias.component'

const routes: Routes = [{
  path:"jogador",
  component: ListarJogadoresComponent
},{path:"criarjogador",
  component:AdicionarJogadorComponent
},{
  path:"ciarclube",
  component:AdicionarClubeComponent
},{
   path:"clube",
   component:ListarClubesComponent
},{
  path:"searchj",
  component:SearchJogadorComponent
},{
  path:"noticias",
  component:NoticiasComponent

},{
  path:"",
  component:NoticiasComponent

}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
