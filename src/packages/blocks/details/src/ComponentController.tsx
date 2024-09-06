import { Component } from "react";

interface Props {}

interface S {}

export default class ComponentController extends Component<Props, S> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }
}
