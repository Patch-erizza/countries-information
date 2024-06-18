export interface ICountry {
  alpha2Code: number;
  name: ICountryName;
  altSpellings: string;
  flag: string;
  area: string;
  borders: string;
  capital: string;
  currencies: string;
  languages: string;
  maps: string;
  population: string;
  region: string;
}
export interface ICountryName {
  common: string;
}
