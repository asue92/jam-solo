import * as React from "react";
import { KickDrum } from "./engines/kickdrum";
import { Transport, Time } from "tone";

export const areEqual = (ar1, ar2) => {
  if (ar1.length !== ar2.length) return false;
  let equal = true;
  ar1.forEach((el, idx) => {
    if (el !== ar2[idx]) equal = false;
  });
  return equal;
};

export interface InstrumentProps {
  steps?: boolean[];
}

export class Instrument extends React.Component<InstrumentProps, any> {
  private ctx: AudioContext;
  private sound: KickDrum;
  private loopId!: number;

  constructor(props) {
    super(props);
    this.ctx = new AudioContext();
    this.sound = new KickDrum(this.ctx);
    this.state = {
      steps: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
    };
  }
  componentDidUpdate() {
    if (this.props.steps && !areEqual(this.props.steps, this.state.steps)) {
      this.setState({
        steps: this.props.steps.slice(0),
      });
      this.createLoop();
    }
  }

  createLoop = () => {
    if (this.props.steps) {
      return;
    }
    Transport.clear(this.loopId);
    const loop = (time: number) => {
      this.state.steps.forEach((s, i) => {
        if (s) {
          this.sound.trigger(time + i * Time("16n").toSeconds());
        }
      });
    };
    this.loopId = Transport.schedule(loop, "0");
  };

  public handleClick = () => {
    // Transport.start();
    console.log(this.props);
  };
  render() {
    console.log(Transport);
    return (
      <div>
        <button onClick={this.handleClick}>Instrument</button>
      </div>
    );
  }
}
