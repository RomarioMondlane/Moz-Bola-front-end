import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSnackBarModule,MatSnackBar} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './componentes/header/header.component';
import { ContentComponent } from './componentes/content/content.component';

import { MatSidenavModule} from'@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from'@angular/material/menu';
import { ListarJogadoresComponent } from './views/listar-jogadores/listar-jogadores.component';
import {HttpClientModule} from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatCardModule} from'@angular/material/card';
import { MatProgressButtonsModule } from 'mat-progress-buttons';
import { DetalhesComponent } from './views/detalhes/detalhes.component';
import {MatTooltipModule} from '@angular/material/tooltip';

import { AdicionarJogadorComponent } from './views/adicionar-jogador/adicionar-jogador.component';
import { AdicionarClubeComponent } from './views/adicionar-clube/adicionar-clube.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from'@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatProgressBarModule}from '@angular/material/progress-bar';
import { ListarClubesComponent } from './views/listar-clubes/listar-clubes.component';
import { DetalhesClubesComponent } from './views/detalhes-clubes/detalhes-clubes.component';
import {ConnectionServiceModule} from'ng-connection-service'
import {VerificarConexaoService} from 'src/app/servicos/verificar-conexao.service';
import { SearchJogadorComponent } from './views/search-jogador/search-jogador.component';
import { NoticiasComponent } from './views/noticias/noticias.component';
import { CadastroComponent } from './views/cadastro/cadastro.component'
import {LoginComponent} from 'src/app/views/login/login.component'





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    LoginComponent,
    ListarJogadoresComponent,
    DetalhesComponent,
    AdicionarJogadorComponent,
    AdicionarClubeComponent,
    ListarClubesComponent,
    DetalhesClubesComponent,
    SearchJogadorComponent,
    NoticiasComponent,
    CadastroComponent
  ],entryComponents:[DetalhesComponent,DetalhesClubesComponent,LoginComponent,CadastroComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,MatFormFieldModule,
    MatMenuModule,MatInputModule,
    MatTooltipModule,FormsModule,
    HttpClientModule,MatProgressBarModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressButtonsModule ,
    MatSnackBarModule,MatDatepickerModule,
    MatSelectModule,MatDialogModule,
    ConnectionServiceModule,
    MatListModule,
    MatNativeDateModule
  ],
  providers: [VerificarConexaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
