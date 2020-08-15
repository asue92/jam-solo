import * as React from "react";

export class InstrumentHack extends React.Component<any> {
  constructor(props) {
    super(props);
  }
  render() {
    const childrenWithProps = React.Children.map(
      this.props.children,
      (child) => {
        if (React.isValidElement(child) && typeof child === "object") {
          return React.cloneElement(child, {
            steps: this.props.steps,
            selected: true,
          });
        }
        return child;
      }
    );
    return <div className="instrument-hack">{childrenWithProps}</div>;
  }
}
