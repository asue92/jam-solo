import * as React from "react";

export interface StepProps {
  id: number;
  onClick: (id: number) => void;
  on: boolean;
}

export class Step extends React.Component<StepProps> {
  render() {
    const stepsStyle = {
      width: "3em",
      height: "5em",
      backgroundColor: this.props.on ? "#62BCF7" : "#CBCBCB",
      borderRadius: "10px",
      margin: 5,
      display: "inline-block",
    };
    return (
      <div
        className="steps"
        style={stepsStyle}
        onClick={this.handleClick}
      ></div>
    );
  }
  private handleClick = () => {
    this.props.onClick(this.props.id);
  };
}
