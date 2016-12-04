/**
 * Created by ashimkhadka on 10/1/16.
 */

import {Component} from "@angular/core";
import {Weather} from "./weather";
import {WeatherService} from "./weather.service";

@Component({
    selector: 'weather-detail',
    template: `
        <h2>{{ weather.city }}</h2>
        
        <ul>
            <li>Weather Type :  {{ weather.main }}</li>
            <li>Weather Description : {{ weather.description }}</li>
        </ul>
    `,
})
export class WeatherDetailComponent {

    weather: Weather;

    constructor(private weatherService: WeatherService) {
        this.weather = this.weatherService.getWeather("kathmandu");
    }
}