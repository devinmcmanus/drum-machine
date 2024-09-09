import React from 'react';
import DrumPad from './DrumPad';
import './App.css';

function App() {
  return (
    <div id='drum-machine' className='container'>
      <div className='row'>
        <div className='col'>
          <div id='display' />
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

export default App;
