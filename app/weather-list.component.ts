/**
 * Created by ashimkhadka on 9/27/16.
 */

import {Component} from '@angular/core';
import {Weather} from "./weather";
import {WeatherService} from "./weather.service";
import {Location} from "@angular/common";

@Component({
    selector: 'weather-list',
    template: `
        <div class="content" >
            <input [(ngModel)]="city" placeholder="Search weather in city" (keyup)="addCity(city, $event)" />
            
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

export class WeatherListComponent {

    public city:string;
    public cities:Array<string>;
    public weatherOfCities:Array<Weather>;

    constructor(
        private weatherService: WeatherService,
        private location : Location) {

        this.city = "";
        this.weatherOfCities = [];
    }

    public addCity(city:string, event) {
        if (event.keyCode == 13) {
            var weather = this.weatherService.getWeather(city);

            if (weather) {
                this.weatherOfCities.push(weather);
            }

            this.city = "";
        }
    }

    goBack(): void {
        this.location.back();
    }
}