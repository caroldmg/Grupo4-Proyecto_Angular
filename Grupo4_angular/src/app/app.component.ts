import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { ITown } from './models/location.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  towns: ITown[]=[]

  constructor(private weatherService: WeatherService){}

  findTowns(){
    this.weatherService.findAllTowns().subscribe( data => {
      this.towns = data;
      for (const town of this.towns) {
        const idString = town.CODIGOINE.substring(0,5);
        const id = parseInt(idString, 10);
        town.townId = id;
      }
    })
    console.log(this.towns);
    
  }

}
