export interface StateData {
  abbv: string;
  state: string;
  population: number;
  vmt: number;
  fatal: number;
  deaths: number;
  deathsper: number;
  deathsperV: number;
}

export interface CountryData {
  countryData: StateData[];
}
