/**
 * Created by ashimkhadka on 9/30/16.
 */

import {Injectable} from "@angular/core";
import {Weather} from "./weather";
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class WeatherService {

    private httpURL: string = "http://localhost:8080/share/list";

    constructor(private http: Http){}

     getWeather(city:string) {
        var weather : Weather;

        if (city.toLocaleLowerCase() == "kathmandu") {
            weather = {
                "id" : 1,
                "main" : "Cloudy",
                "city" : "Kathmandu",
                "description" : "overcast clouds"
            };
        } else if (city.toLocaleLowerCase() == "bhaktapur") {
            weather = {
                "id" : 1,
                "main" : "Rain",
                "city" : "Bhaktapur",
                "description" : "very heavy rain"
            };
        }

        return weather;
    }

    getWeatherList(): Promise<Weather[]> {
        return this.http.get(this.httpURL)
            .toPromise()
            .then(response => response.json() as Weather[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}