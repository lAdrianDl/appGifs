import { Component, ElementRef, ViewChild } from '@angular/core';
import { ImageService } from '../../servicio/image.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(private imgServ: ImageService) {}

  buscar(termino:string){

    const valor = this.txtBuscar.nativeElement.value;

    if(valor.trim().length === 0)
    {
      return;
    }

    this.imgServ.buscarImage(valor);
  }

  limpiar(){
    localStorage.removeItem('historial');
    localStorage.removeItem('resul');
    location.reload();
  }
}
