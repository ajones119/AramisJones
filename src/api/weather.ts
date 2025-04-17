import { useQuery } from "@tanstack/react-query";

const BASE_URL = "https://api.open-meteo.com/v1/forecast?";

export const useWeather = () => {
  return useQuery({
    queryKey: ["weather"],
    queryFn: async () => {
      const latitude = 35.5008; // Example latitude for Tokyo
      const longitude = -97.7174; // Example longitude for Tokyo
      // Fetch current weather data from Open-Meteo API
      const response = await fetch(
        `${BASE_URL}latitude=${latitude}&longitude=${longitude}&current=temperature_2m,is_day,rain,snowfall,precipitation,showers,wind_speed_10m&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch`,
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    //should I enable this? wil lthis mess with renders?
    //refetchInterval: 60000, // Refetch every 60 seconds
  });
};
