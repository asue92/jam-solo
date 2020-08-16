import * as React from "react";

export interface BPMProps {
  handleChange: (value: number) => void;
  value: number;
}

export class BPM extends React.Component<BPMProps> {
  handleChange = (e) => {
    const value = e.target.value;
    this.props.handleChange(value);
    if (value > 30 && value < 300) {
    }
  };
  render() {
    return (
      <input
        value={this.props.value}
        onInput={this.handleChange}
        className="bpm"
      />
    );
  }
}
