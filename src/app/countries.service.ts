import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ICountry} from "./country";

const COUNTRIES_URL = "https://restcountries.com/v3.1/all";
const COUNTRY_BY_NAME_URL = "https://restcountries.com/v3.1/name/";
@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private http: HttpClient;

  constructor() {
    this.http = inject(HttpClient);
  }
  getCountries() {
    return this.http.get<any>(COUNTRIES_URL);
  }
  getCountry(countrySearchQuery: string) {
    return this.http.get<ICountry[]>(COUNTRY_BY_NAME_URL+countrySearchQuery);
  }
}
