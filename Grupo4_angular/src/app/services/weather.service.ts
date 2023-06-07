import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProvincia } from '../models/provincia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  apiKey: string = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjYXJvbGRtZzk4QGdtYWlsLmNvbSIsImp0aSI6Ijk0MjU3ODY3LWM3OGYtNGE1Zi04MTBkLTE3ZDExYjhiZDk4MSIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNjg2MDg1NjkxLCJ1c2VySWQiOiI5NDI1Nzg2Ny1jNzhmLTRhNWYtODEwZC0xN2QxMWI4YmQ5ODEiLCJyb2xlIjoiIn0.IkoFmqUF2Q3vp35I1y_9Zw913qy_hrA-DybRAbfD14A" //esta es la apiKey de aemet-openData

  jsonUrl: string = "http://localhost:3000/provincias"

  constructor(private httpClient: HttpClient) { }

  findAllProvincias(): Observable <IProvincia[]>{
    return this.httpClient.get<IProvincia[]>(this.jsonUrl);
  }

// // TAREAS:
// - Cambiar atributos a modelos y elementos de db sacados de la api (provincia y municipios)
// - sacar el id del municipio (subsstring(0,5)) del CODIGOINE
// - conseguir mostrar todos los municipios
// - después, intentar las llamadas del weather por municipio
// - probar la información que se recibe de la llamada
// - añadir atributos a IWeather
}
