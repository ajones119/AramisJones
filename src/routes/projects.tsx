import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Link className="p-3" to="/">{`< Back`}</Link>
      <Outlet />
    </div>
  );
}
