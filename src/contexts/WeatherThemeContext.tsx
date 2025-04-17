import { createContext, useContext, useState } from "react";
import { useWeather } from "../api/weather";

type WeatherThemeContextType = {
  temperature?: number;
  weatherCode?: number;
  precipitation?: number;
  rain?: number;
  snow?: number;
  windSpeed?: number;
  dayCycle: DayCycle;
  hour?: number;
  setHour: (hour: number | undefined) => void;
  setSnow: (snow: number) => void;
  setRain: (rain: number) => void;
};
export type DayCycle = "day" | "night" | "golden";
const DayCycleMap: Record<number, DayCycle> = {
  0: "night",
  1: "day",
  2: "day",
  3: "day",
  4: "day",
  5: "day",
  6: "day",
  7: "golden",
  8: "day",
  9: "day",
  10: "day",
  11: "day",
  12: "day",
  13: "day",
  14: "day",
  15: "day",
  16: "day",
  17: "golden",
  18: "golden",
  19: "night",
  20: "night",
  21: "night",
  22: "night",
  23: "night",
};

const WeatherThemeContext = createContext<WeatherThemeContextType>({
  dayCycle: "day",
  setRain: () => {},
  setSnow: () => {},
  setHour: () => {},
});

export const WeatherThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data } = useWeather(); // Assuming useWeather is a custom hook that fetches weather data
  const [hour, setHour] = useState<number | undefined>(undefined);
  const [snow, setSnow] = useState<number | undefined>(undefined);
  const [rain, setRain] = useState<number | undefined>(undefined);

  const dayCycle = DayCycleMap[hour || new Date().getHours()] || "day"; // Default to "day" if hour is not found

  const weatherData = {
    temperature: data?.current?.temperature_2m,
    weatherCode: data?.current?.weathercode,
    precipitation: data?.current?.precipitation,
    windSpeed: data?.current?.wind_speed_10m,
    rain: typeof rain === undefined ? data?.current?.rain : rain,
    snow: typeof snow === undefined ? data?.current?.snow : snow,
    dayCycle: dayCycle,
    hour: hour,
    setHour: (hour: number | undefined) => setHour(hour),
    setSnow: (snow: number) => setSnow(snow),
    setRain: (rain: number) => setRain(rain),
  };

  return (
    <WeatherThemeContext.Provider value={weatherData}>
      {children}
    </WeatherThemeContext.Provider>
  );
};

export const useWeatherTheme = () => {
  const context = useContext(WeatherThemeContext);
  if (!context) {
    throw new Error(
      "useWeatherTheme must be used within a WeatherThemeProvider",
    );
  }
  return context;
};
