import * as React from "react";
import { KickDrum } from "./engines/kickdrum";
import { Transport } from "tone";
import InstrumentHack from "./instrument-hack";

export class Instrument extends React.Component {
  private ctx: AudioContext;
  private kick: KickDrum;
  private loopId!: number;

  constructor(props: any) {
    super(props);
    this.ctx = new AudioContext();
    this.kick = new KickDrum(this.ctx);

    Transport.bpm.value = 120;

    Transport.loop = true;
    Transport.loopEnd = "10s";
  }

  createLoop = () => {
    Transport.clear(this.loopId);
    const loop = (time: number) => {
      console.log("start loop", time);
      this.kick.trigger(time);
      this.kick.trigger(time + 0.5);
      this.kick.trigger(time + 1);
      this.kick.trigger(time + 1.5);
    };
    this.loopId = Transport.schedule(loop, "0");
  };
  public handleClick = () => {
    this.createLoop();
    this.ctx.resume();
    Transport.start();
  };
  // public resumeAudioContext = () => {
  //   this.ctx.();
  // };
  render() {
    console.log(Transport);
    return (
      <div>
        <button onClick={this.handleClick}>Instrument</button>
        {/* <button onClick={this.resumeAudioContext}>Resume</button> */}
      </div>
    );
  }
}
