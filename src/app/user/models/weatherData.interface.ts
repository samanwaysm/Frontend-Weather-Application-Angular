interface Location {
  city: string;
  woeid: number;
  country: string;
  lat: number;
  long: number;
  timezone_id: string;
}

interface Wind {
  chill: number;
  direction: string;
  speed: number;
}

interface Atmosphere {
  humidity: number;
  visibility: number;
  pressure: number;
}

interface Astronomy {
  sunrise: string;
  sunset: string;
}

interface Condition {
  temperature: number;
  text: string;
  code: number;
}

interface CurrentObservation {
  pubDate: number;
  wind: Wind;
  atmosphere: Atmosphere;
  astronomy: Astronomy;
  condition: Condition;
}

interface Forecast {
  day: string;
  date: number;
  high: number;
  low: number;
  text: string;
  code: number;
}

export interface WeatherData {
  location: Location;
  current_observation: CurrentObservation;
  forecasts: Forecast[];
}
  