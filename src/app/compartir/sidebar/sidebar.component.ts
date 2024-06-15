import { Component } from '@angular/core';
import { ImageService } from '../../servicio/image.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  get historial(){
    return this.imgServ.historial;
  }

  constructor(private imgServ: ImageService){}

  buscar(termino:string){
    this.imgServ.buscarImage(termino);
  }
}
