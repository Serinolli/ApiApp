import { Component } from '@angular/core';
import { UserService } from '../servicos/user.service';
import { asapScheduler } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  //Para paginação
  public page = 1;
  public totalPaginas = 0;
  public totalUsuarios = 0;
  public usuariosPagina = 0;

  //Para guardar a lísta de usuários
  public listaUsuarios = [];

  constructor(private userService: UserService) {
    this.buscarUsuarios(this.page);

  }
  public buscarUsuarios(pagina: Number) {
    this.userService.listaUsuarios(pagina).subscribe(dados => {
      this.page = dados['page'];
      this.totalPaginas = dados['total_pages'];

      this.usuariosPagina = dados['per_page'];
      this.totalUsuarios = dados['total'];

      this.listaUsuarios = dados['data'];

      
     
    })
  }
}
