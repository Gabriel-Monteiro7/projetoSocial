import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { log } from 'util';

@Component({
  selector: 'app-reportar',
  templateUrl: './reportar.component.html',
  styleUrls: ['./reportar.component.css']
})
export class ReportarComponent implements OnInit {
  imagem;
  url = {};
  problema = {
    img: undefined,
    report: undefined,
    dataSalva: undefined,
    rua: undefined,
    cep: undefined,
    bairro: undefined,
    localidade: undefined,
    uf: undefined,
    descricao: undefined,
    estado: undefined,
    rg: undefined,
    tipoProblema: undefined
  };
  constructor(private Service: AppService) {
  }
  ngOnInit() {
    if (this.Service.indice !== undefined)
      this.problema = this.Service.problema[this.Service.indice];
  }
  onChange() {
    this.Service.getEndereco(this.problema.cep).subscribe((user) => {
      this.problema.rua = user["logradouro"],
        this.problema.bairro = user["bairro"],
        this.problema.localidade = user["localidade"],
        this.problema.uf = user["uf"];
    });
    let data = new Date()
    this.problema.dataSalva = data.getDate() + "." + (data.getMonth() + 1) + "." + data.getFullYear();

  }
  onChangeImagem(event) {
    let img = <File>event.target.files[0];
    this.imagem = new FormData();
    this.imagem.append('arquivo',img ,img.name);
    this.Service.nomeImg = img.name;
  }
  onSubmit() {
    this.Service.salvarImagem(this.problema,this.imagem);

    this.problema = {
      img: undefined,
      report: undefined,
      dataSalva: undefined,
      rua: undefined,
      cep: undefined,
      bairro: undefined,
      localidade: undefined,
      uf: undefined,
      descricao: undefined,
      estado: undefined,
      rg: undefined,
      tipoProblema: undefined
    };

  }
}
