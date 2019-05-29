import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  logado = false;
  registrar = false;
  opcao = {titulo:"",botao:""};
  user;
  userAux = {};
  constructor(private servico: AppService) {
    this.user=servico.user;
  }
  ngOnInit() {
  }
  modal(titulo,botao){
    this.opcao.titulo=titulo;
    this.opcao.botao = botao;
  }

  logar(){
    if(!(this.logado = this.servico.testeLoguin(this.userAux))){
      alert("Login incorreto");
      this.userAux ={}
    }
      this.userAux = this.servico.userAux;
  }
  sair(){
    this.logado = this.servico.sairLoguin();
  }
  salvarUser(){
    this.servico.salvarUser(this.userAux);
    this.userAux = {nomeCompleto:undefined,senha:undefined,rg:undefined,cpf:undefined,cep:undefined,contato:undefined}

  }

}
