import React from 'react';
import DrumPad from './DrumPad';
import Display from './Display';
import './App.css';
import { keyboard } from '@testing-library/user-event/dist/keyboard';

const drumMap = [
  { 
    sample: 'Heater-1',
    keyBind: 'Q'
  },
  {
    sample: 'Heater-2',
    keyBind: 'W'
  },
  {
    sample: 'Heater-3',
    keyBind: 'E'
  },
  {
    sample: 'Heater-4_1',
    keyBind: 'A'
  },
  {
    sample: 'Heater-6',
    keyBind: 'S'
  },
  {
    sample: 'Dsc_Oh',
    keyBind: 'D'
  },
  {
    sample: 'Kick_n_Hat',
    keyBind: 'Z'
  },
  {
    sample: 'RP4_KICK_1',
    keyBind: 'X'
  },
  {
    sample: 'Cev_H2',
    keyBind: 'C'
  }
];


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nowPlaying: ''
    }

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  playSample(drumSample) {
    document.getElementById(drumSample.keyBind).play();
    this.setState({
      nowPlaying: drumSample.sample
    });
  }

  handleKeyPress(event) {    
    const key = event.key;
    const keyUpper = key.toUpperCase();
    const keysToHandle = 'QWEASDZXC';
    
    if (keysToHandle.includes(keyUpper)) {
      const target = drumMap.find(({ keyBind }) => keyBind === keyUpper);
      this.playSample(target);
    }
  }

  render() {
    return (
      <div id='drum-machine' className='container'>
        <div className='row'>
          <div className='col'>
            <Display nowPlaying={this.state.nowPlaying} />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <DrumPad sample={drumMap[0].sample} keyBind={drumMap[0].keyBind} />
          </div>
          <div className='col'>
            <DrumPad sample={drumMap[1].sample} keyBind={drumMap[1].keyBind} />
          </div>
          <div className='col'>
            <DrumPad sample={drumMap[2].sample} keyBind={drumMap[2].keyBind} />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <DrumPad sample={drumMap[3].sample} keyBind={drumMap[3].keyBind} />
          </div>
          <div className='col'>
            <DrumPad sample={drumMap[4].sample} keyBind={drumMap[4].keyBind} />
          </div>
          <div className='col'>
            <DrumPad sample={drumMap[5].sample} keyBind={drumMap[5].keyBind} />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <DrumPad sample={drumMap[6].sample} keyBind={drumMap[6].keyBind} />
          </div>
          <div className='col'>
            <DrumPad sample={drumMap[7].sample} keyBind={drumMap[7].keyBind} />
          </div>
          <div className='col'>
            <DrumPad sample={drumMap[8].sample} keyBind={drumMap[8].keyBind} />
          </div>
        </div>
      </div>          
    );
  }
}

export default App;
