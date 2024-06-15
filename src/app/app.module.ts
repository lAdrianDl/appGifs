import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CompartirModule } from './compartir/compartir.module';
import { ImagesModule } from './images/images.module';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompartirModule,
    ImagesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
