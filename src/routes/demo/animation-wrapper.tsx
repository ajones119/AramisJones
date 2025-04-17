import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/demo/animation-wrapper")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/demo/animation-wrapper"!</div>;
}
