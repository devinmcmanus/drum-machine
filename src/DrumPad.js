import React from 'react';
import PropTypes from 'prop-types';

class DrumPad extends React.Component {
    constructor(props) {
        super(props);

        this.audioSrc = `https://cdn.freecodecamp.org/testable-projects-fcc/audio/${this.props.drumMap.sample}.mp3`;
    }

    render() {
        return (
            <div>
                <button 
                    id={this.props.drumMap.sample} 
                    type='button' 
                    className='btn btn-secondary drum-pad'                    
                    onClick={this.props.onClick}
                >
                    {this.props.drumMap.keyBind}
                    <audio 
                        id={this.props.drumMap.keyBind} 
                        className='clip' 
                        src={this.audioSrc} 
                    />
                </button>                
            </div>
        );
    }
}
DrumPad.propTypes = {
    drumMap: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};

export default DrumPad;