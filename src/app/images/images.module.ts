import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ImagesPageComponent } from './images-page/images-page.component';
import { HistorialComponent } from './historial/historial.component';



@NgModule({
  declarations: [
    BusquedaComponent,
    ImagesPageComponent,
    HistorialComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ImagesPageComponent
  ]
})
export class ImagesModule { }
