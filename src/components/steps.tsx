import * as React from "react";
import { Step } from "./step";

export class Steps extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="steps">
        {this.props.steps.map((step, idx) => {
          return (
            <Step
              on={step}
              onClick={this.props.handleStepChange}
              key={idx}
              id={idx}
            />
          );
        })}
      </div>
    );
  }
}
