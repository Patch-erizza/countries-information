import { Component } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BehaviorSubject, debounceTime, distinctUntilChanged, filter, Observable, of, switchMap, tap} from "rxjs";
import {CountriesService} from "../countries.service";
import {ICountry} from "../country";
import {AsyncPipe, JsonPipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-country-searcher',
  standalone: true,
  imports: [
    FormsModule,
    AsyncPipe,
    JsonPipe,
    ReactiveFormsModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './country.searcher.component.html',
  styleUrl: './country.searcher.component.css'
})
export class CountrySearcherComponent {

  countryFormControl: FormControl = new FormControl<string>("");
  // @ts-ignore
  countrySearchResult$: Observable<ICountry[]>;

  selectedCountry$ = new BehaviorSubject<ICountry | null>(null);
  constructor(private countriesService: CountriesService) {
  }
  ngOnInit() {
    this.countrySearchResult$ = this.countryFormControl.valueChanges.pipe(
      // filter(value => !!value),
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => {
        this.selectedCountry$.next(null);
      }),
      switchMap(countrySearchQuery => {
        if (!countrySearchQuery) {
          return of([])
        } else {
          return this.countriesService.getCountry(countrySearchQuery)
        }
      }
    ))
  }
  onCountrySelected(country: ICountry){
    this.selectedCountry$.next(country);
    this.countryFormControl.setValue("", {emitEvent: false});
  }
}
