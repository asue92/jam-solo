import * as React from "react";
import Tone from "tone";

export class PlayChords extends React.Component {
  // synth: any;
  // now: any;
  constructor(props) {
    super(props);
    this.synth = new Tone.PolySynth(4, Tone.AMSynth).toMaster();
    this.now = Tone.now();
  }
  handleChordClick = (chord) => {
    switch (chord) {
      case "Am7":
        this.synth.triggerAttackRelease(["A3", "E4", "C5", "G5"], "4n");
        break;
      case "Cmaj7":
        this.synth.triggerAttackRelease(["C3", "E4", "G5", "B5"], "4n");
        break;
      case "Fmaj7":
        this.synth.triggerAttackRelease(["F3", "E4", "A4", "C4"], "4n");
        break;
      case "Gmaj7":
        this.synth.triggerAttackRelease(["G3", "B4", "D4", "G4"], "4n");
        break;
      default:
        return;
    }
  };
  render() {
    return (
      <div className="button-container">
        <p>
          {" "}
          <button
            class="button"
            type="button"
            onClick={() => this.handleChordClick("Am7")}
          >
            Am7
          </button>
        </p>

        <button
          class="button"
          type="button"
          onClick={() => this.handleChordClick("Cmaj7")}
        >
          Cmaj7
        </button>
        <button
          type="button"
          class="button"
          onClick={() => this.handleChordClick("Fmaj7")}
        >
          Fmaj7
        </button>
        <button
          class="button"
          type="button"
          onClick={() => this.handleChordClick("Gmaj7")}
        >
          Gmaj7
        </button>
      </div>
    );
  }
}
