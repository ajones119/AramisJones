import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { WeatherThemeProvider } from "../contexts/WeatherThemeContext";
import StickyMenu from "../components/StickyMenu";

export const Route = createRootRoute({
  component: () => {
    return (
      <WeatherThemeProvider>
        <Outlet />
        <StickyMenu />
        <TanStackRouterDevtools />
      </WeatherThemeProvider>
    );
  },
});

/*
<div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
      </div>
      <hr />
*/
