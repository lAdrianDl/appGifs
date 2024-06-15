import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { BuscarImgResponse, Gif } from '../interfaz/image.interface';

const URL = environment.url_server;
const APIKEY = environment.api_key;

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private _historial: string[]=[];

  resul:Gif[]=[];

  get historial(){
    return [...this._historial];
  }

  constructor(private http:HttpClient) { }

  buscarImage(query:string=''){

    query = query.trim();
    
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
    }

    const params = new HttpParams()
          .set('api_key', APIKEY)
          .set('limit', 20)
          .set('q',query);

    this.http.get<BuscarImgResponse>((URL),{params}).subscribe
    (res=>{
      this.resul = res.data;
      console.log(this.resul);
    })
  }
}
