import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/demo")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Hello "/demo"!
      <Outlet />
    </div>
  );
}
