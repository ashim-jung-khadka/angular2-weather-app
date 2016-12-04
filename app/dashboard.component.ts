/**
 * Created by ashimkhadka on 9/27/16.
 */

import {Component} from '@angular/core';
import {WeatherService} from "./weather.service";
import {Weather} from "./weather";

@Component({
    selector: 'my-dashboard',
    template: `
        <h3>Dashboard</h3>
        <button (click)="callService()">Call Service</button>
        
        <div class="content" >
            <ul *ngFor="let weather of weatherOfCities" class="weather-card">
                <li>
                    <h2>{{ weather.city }}</h2>
            
                    <ul>
                        <li>Weather Type :  {{ weather.main }}</li>
                        <li>Weather Description : {{ weather.description }}</li>
                    </ul>
                </li>
            </ul>
            <div>
                <button (click)="goBack()" >Back</button>
            </div>
        </div>
    `
})

export class DashboardComponent {

    weatherOfCities: Array<Weather>;

    constructor(private weatherService: WeatherService){
        this.weatherService.getWeatherList()
            .then(weathers => this.weatherOfCities = weathers);
    }

    callService() : void {
        this.weatherService.getWeatherList();
    }
}