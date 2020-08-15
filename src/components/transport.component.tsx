import * as React from "react";
import { Transport } from "tone";
import { Instrument } from "./instrument";
import { Steps } from "./steps";
import { InstrumentHack } from "./instrument-hack";
import { PlayPause } from "./play";

export class TransportComponent extends React.Component<any, any> {
  constructor(props) {
    super(props);
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
    Transport.loop = true;
    Transport.loopEnd = "1m";
  }
  pause = () => {
    Transport.stop();
  };
  play = () => {
    Transport.start();
  };

  private handleStepChange = (id: number) => {
    const s = this.state.steps;
    s[id] = !s[id];
    this.setState({
      steps: s,
    });
  };
  render() {
    return (
      <div>
        <h1>Jam Solo</h1>
        <PlayPause play={this.play} pause={this.pause} />
        <InstrumentHack steps={this.state.steps}>
          <Instrument />
        </InstrumentHack>
        <Steps
          handleStepChange={this.handleStepChange}
          steps={this.state.steps}
        />
      </div>
    );
  }
}
