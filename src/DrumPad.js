import React from 'react';
import PropTypes from 'prop-types';

class DrumPad extends React.Component {
    constructor(props) {
        super(props);

        this.audioSrc = `https://cdn.freecodecamp.org/testable-projects-fcc/audio/${this.props.sample}.mp3`;
    }

    render() {
        return (
            <div>
                <button 
                    id={this.props.sample} 
                    type='button' 
                    className='btn btn-secondary drum-pad'                    
                    onClick={this.props.onClick}
                >
                    {this.props.keyBind}
                    <audio 
                        id={this.props.keyBind} 
                        className='clip' 
                        src={this.audioSrc} 
                    />
                </button>                
            </div>
        );
    }
}
DrumPad.propTypes = {
    sample: PropTypes.string.isRequired,
    keyBind: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default DrumPad;