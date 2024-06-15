import { Component } from '@angular/core';
import { ImageService } from '../../servicio/image.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.css'
})
export class HistorialComponent {

  get resul(){
    return this.imgServ.resul;
  }
  constructor(private imgServ: ImageService) {}
}
