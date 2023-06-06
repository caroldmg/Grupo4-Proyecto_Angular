import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  apiKey: string = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjYXJvbGRtZzk4QGdtYWlsLmNvbSIsImp0aSI6Ijk0MjU3ODY3LWM3OGYtNGE1Zi04MTBkLTE3ZDExYjhiZDk4MSIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNjg2MDg1NjkxLCJ1c2VySWQiOiI5NDI1Nzg2Ny1jNzhmLTRhNWYtODEwZC0xN2QxMWI4YmQ5ODEiLCJyb2xlIjoiIn0.IkoFmqUF2Q3vp35I1y_9Zw913qy_hrA-DybRAbfD14A"

  constructor() { }
}
