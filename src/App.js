import React from 'react';
import DrumPad from './DrumPad';
import Display from './Display';
import './App.css';

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
      nowPlaying: '-'
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
            &nbsp;
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <Display nowPlaying={this.state.nowPlaying} />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            &nbsp;
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <DrumPad 
              drumMap={drumMap[0]}
              onClick={() => this.playSample(drumMap[0])} 
            />
          </div>
          <div className='col'>
            <DrumPad 
              drumMap={drumMap[1]}
              onClick={() => this.playSample(drumMap[1])}
            />
          </div>
          <div className='col'>
            <DrumPad 
              drumMap={drumMap[2]}
              onClick={() => this.playSample(drumMap[2])}  
            />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <DrumPad 
              drumMap={drumMap[3]}
              onClick={() => this.playSample(drumMap[3])}
            />
          </div>
          <div className='col'>
            <DrumPad 
              drumMap={drumMap[4]}
              onClick={() => this.playSample(drumMap[4])}
            />
          </div>
          <div className='col'>
            <DrumPad 
              drumMap={drumMap[5]}
              onClick={() => this.playSample(drumMap[5])}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <DrumPad 
              drumMap={drumMap[6]}
              onClick={() => this.playSample(drumMap[6])}
            />
          </div>
          <div className='col'>
            <DrumPad 
              drumMap={drumMap[7]}
              onClick={() => this.playSample(drumMap[7])}
            />
          </div>
          <div className='col'>
            <DrumPad 
              drumMap={drumMap[8]}
              onClick={() => this.playSample(drumMap[8])}
            />
          </div>
        </div>
      </div>          
    );
  }
}

export default App;
