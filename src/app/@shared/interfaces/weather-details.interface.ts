import { Clouds } from './clouds.interface';
import { Coord } from './coord.interface';
import { Main } from './main.interface';
import { Rain } from './rain.interface';
import { Sys } from './sys.interface';
import { Weather } from './weather.interface';
import { Wind } from './wind.interface';

export interface WeatherDetails {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  rain: Rain;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
