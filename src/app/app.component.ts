// 1. Создаем поле ввода города
// 2. Стучимся в апи с городами и информацией о них
// 3. Нужно, чтоб при наборе текста всплывали подсказки
// 4. Осуществляем это с помощью debaunsing
// 5. Отрисовываем полученную информацию о городе
//
//
//
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CountriesService} from "./countries.service";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {CountrySearcherComponent} from "./country.searcher/country.searcher.component";
import {ICountry} from "./country";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CountrySearcherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private serv: CountriesService) {
  }

}
