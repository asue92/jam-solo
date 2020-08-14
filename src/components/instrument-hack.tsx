import * as React from "react";

export default class InstrumentHack extends React.Component<any> {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>{this.props.children}</div>;
  }
}
