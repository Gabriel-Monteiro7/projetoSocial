import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  problema;
  logado = false;
  ruaCompleta;
  constructor(public servico: AppService) {
    this.problema = servico.listarProblemas();
  }

  ngOnInit() {

  }
  // excluir(indice) {
  //   this.problema = this.servico.delete(indice)
  // }
  // editar(indice) {
  //   this.servico.setIndice(indice);
  // }
}
