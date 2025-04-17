import { useWeatherTheme } from "../../contexts/WeatherThemeContext";

const StickyMenu = () => {
  const { rain, setRain, snow, setSnow, setHour } = useWeatherTheme();
  const handleRain = () => {
    setRain(rain ? 0 : 1);
  };
  return (
    <div className="fixed bottom-1 right-1 flex gap-2">
      <button
        className="cursor-pointer"
        onClick={() => {
          setHour(undefined);
          setRain(0);
          setSnow(0);
        }}
      >
        reset
      </button>
      <button className="cursor-pointer" onClick={() => setSnow?.(snow ? 0 : 1)}>snow</button>
      <button className="cursor-pointer" onClick={handleRain}>rain</button>
      <button className="cursor-pointer" onClick={() => setHour(12)}>day</button>
      <button className="cursor-pointer" onClick={() => setHour(23)}>night</button>
      <button className="cursor-pointer" onClick={() => setHour(7)}>golden</button>
    </div>
  );
};

export default StickyMenu;
