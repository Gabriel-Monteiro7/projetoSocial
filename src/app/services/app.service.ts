import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { take, map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AppService implements OnInit {
  nomeImg = undefined;
  logado = false;
  problema: any = [];
  user: any = [];
  userAux = {
    nomeCompleto: undefined,
    senha: undefined,
    rg: undefined,
    cpf: undefined,
    cep: undefined,
    contato: undefined
  };
  indice = undefined;
  constructor(private http: HttpClient) {
    this.pegarDoBanco("problema");
    this.pegarDoBanco("user");
  }
  ngOnInit() {}
  pegarDoBanco(op) {
    if (op === "problema")
      this.http
        .post("http://projetosocial.ga/projetoSocial/api/select.php", {
          op: op
        })
        .pipe(take(1))
        .subscribe(problema => {
          this.problema = problema;
          this.problema.sort((a, b) => a.id - b.id);
        });
    else
      this.http
        .post("http://projetosocial.ga/projetoSocial/api/select.php", {
          op: op
        })
        .pipe(take(1))
        .subscribe(user => {
          this.user = user;
          this.user.sort((a, b) => a.id - b.id);
        });
  }
  salvarImagem(problema, imagem) {
    this.http
      .post("http://projetosocial.ga/projetoSocial/api/salvarImg.php", imagem)
      .pipe()
      .subscribe(dados => {
        this.nomeImg = dados;
        this.salvarProblema(problema, imagem);
      });
  }
  listarProblemas() {
    return this.problema;
  }
  salvarProblema(problema, imagem) {
    problema.rg = this.userAux["rg"];
    problema.estado = "Em análise";
    for (let index = 0; index < this.problema.length; index++) {
      if (
        problema.tipoProblema === this.problema[index].tipoProblema &&
        problema.rua === this.problema[index].rua
      ) {
        problema.report = parseInt(this.problema[index].report) + 1;
        this.indice = index + 1;
        break;
      }
    }
    if (problema.report == undefined) {
      problema.report = 1;
      problema.img = this.nomeImg;
      this.problema.push(problema);
      this.http
        .post("http://projetosocial.ga/projetoSocial/api/salvarProblema.php", {
          problema: problema,
          tamanho: this.problema.length,
          nome: this.nomeImg
        })
        .pipe()
        .subscribe(dados => {
          this.nomeImg = undefined;
          this.pegarDoBanco("problema");
        });
    } else
      this.http
        .post("http://projetosocial.ga/projetoSocial/api/update.php", {
          report: problema.report,
          id: this.indice
        })
        .pipe()
        .subscribe(dados => {
          this.nomeImg = undefined;
          this.pegarDoBanco("problema");
        });
  }
  // delete(indice) {
  //   if (this.problema[indice].report > 1) {
  //     this.problema[indice].report = this.problema[indice].report - 1;
  //     return this.problema
  //   }
  //   return this.problema = this.problema.filter((user, index) => index !== indice)
  // }
  testeLoguin(user) {
    for (let index = 0; index < this.user.length; index++) {
      if (
        user.cpf === this.user[index].cpf &&
        user.senha === this.user[index].senha
      ) {
        this.logado = true;
        this.userAux = this.user[index];
        alert("Login realizado com Sucesso");
        break;
      }
    }
    return this.logado;
  }
  listarUser() {
    return this.user;
  }
  sairLoguin() {
    this.logado = false;
    this.userAux = {
      nomeCompleto: undefined,
      senha: undefined,
      rg: undefined,
      cpf: undefined,
      cep: undefined,
      contato: undefined
    };
    return this.logado;
  }
  setIndice(indice) {
    this.indice = indice;
  }
  getEndereco(cep) {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json`).pipe(take(1));
  }
  salvarUser(user) {
    for (let index = 0; index < this.user.length; index++) {
      if (user.rg == this.user[index].rg && user.cpf == this.user[index].cpf) {
        user = false;
        alert("Esse usuario ja está registrado");
      }
    }
    if (user != false) {
      this.http
        .post("http://projetosocial.ga/projetoSocial/api/salvarUser.php", {
          user: user,
          tamanho: this.user.length + 1
        })
        .pipe()
        .subscribe(dados => {
          console.log(dados);
        });
      this.user.push(user);
      alert("Usuario registrado com sucesso!");
    }
  }
}
