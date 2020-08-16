import * as React from "react";
import { Instrument } from "./instrument";
import { Steps } from "./steps";
import { InstrumentHack } from "./instrument-hack";
import { Transport } from "tone";
import { PlayPause } from "./play";
import { BPM } from "./bpm-component";
import Tone from "tone";

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
      selected: null,
      bpm: 120,
    };
    Transport.loop = true;
    Transport.loopEnd = "1m";
  }

  pause = () => {
    Transport.stop();
  };

  play = () => {
    Tone.context.resume();
    Transport.start();
  };

  private handleStepChange = (id: number) => {
    const s = this.state.steps;
    s[id] = !s[id];
    this.setState({
      steps: s,
    });
  };
  private handleClickClear = () => {
    this.setState({
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
    });
  };

  private selectInstrument = (selected: string, steps: boolean[]) => {
    if (this.state.selected === selected) {
      this.setState({
        selected: null,
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
      });
    } else {
      this.setState({ selected, steps });
    }
  };
  handleBPMChange = (bpm: number) => {
    Transport.bpm.value = bpm;
    this.setState({ bpm });
  };

  render() {
    return (
      <div>
        <h1>Jam-Solo</h1>
        <div style={{ display: "block" }}>
          <BPM handleChange={this.handleBPMChange} value={this.state.bpm} />
          <PlayPause play={this.play} pause={this.pause} />
        </div>
        <InstrumentHack
          steps={this.state.steps}
          selectedInstrument={this.state.selected}
        >
          <Instrument
            key="Kick"
            engine="Kick"
            handleClick={this.selectInstrument}
          />
          <Instrument
            key="Snare"
            engine="Snare"
            handleClick={this.selectInstrument}
          />
          <Instrument
            key="Clap"
            engine="Clap"
            handleClick={this.selectInstrument}
          />
          <Instrument
            key="HiHat"
            engine="HiHat"
            handleClick={this.selectInstrument}
          />
        </InstrumentHack>
        <Steps
          handleStepChange={this.handleStepChange}
          steps={this.state.steps}
        />
        <button onClick={this.handleClickClear}>Clear</button>
      </div>
    );
  }
}
