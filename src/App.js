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

  handleKeyPress(event) {    
    const key = event.key;
    const keyUpper = key.toUpperCase();
    const keysToHandle = 'QWEASDZXC';
    
    if (keysToHandle.includes(keyUpper)) {
      const target = drumMap.find(({ keyBind }) => keyBind === keyUpper);
      document.getElementById(target.keyBind).play();
      this.setState({
        nowPlaying: target.sample
      });
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
            <DrumPad sample='Heater-1' keyBind='Q' />
          </div>
          <div className='col'>
            <DrumPad sample='Heater-2' keyBind='W' />
          </div>
          <div className='col'>
            <DrumPad sample='Heater-3' keyBind='E' />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <DrumPad sample='Heater-4_1' keyBind='A' />
          </div>
          <div className='col'>
            <DrumPad sample='Heater-6' keyBind='S' />
          </div>
          <div className='col'>
            <DrumPad sample='Dsc_Oh' keyBind='D' />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <DrumPad sample='Kick_n_Hat' keyBind='Z' />
          </div>
          <div className='col'>
            <DrumPad sample='RP4_KICK_1' keyBind='X' />
          </div>
          <div className='col'>
            <DrumPad sample='Cev_H2' keyBind='C' />
          </div>
        </div>
      </div>          
    );
  }
}

export default App;
