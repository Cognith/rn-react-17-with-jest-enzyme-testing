import { ComponentType } from "react";
import ComponentView from "../../../blocks/details/src/ComponentView";


interface RouteType {
  component: ComponentType<any>;
  path: string;
}

const routeMap: Array<RouteType> = [
  {
    component: ComponentView,
    path: "Home",
  },
];

export default routeMap;
