import { ComponentType } from "react";

interface RouteType {
  component: ComponentType;
  path: string;
  exact?: boolean;
}

const routeMap: Array<RouteType> = [
  {
    component: ComponentView,
    path: "/home",
    exact: true,
  },
];

export default routeMap;
