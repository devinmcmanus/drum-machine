import React from 'react';
import PropTypes from 'prop-types';

class DrumPad extends React.Component {
    constructor(props) {
        super(props);

        this.audioSrc = `https://cdn.freecodecamp.org/testable-projects-fcc/audio/${this.props.sample}.mp3`;

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const audioClip = document.getElementById(this.props.keyBind);
        audioClip.play();
    }

    render() {
        return (
            <div>
                <button 
                    id={this.props.sample} 
                    type='button' 
                    className='btn btn-secondary drum-pad'
                    onClick={this.handleClick}
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
};

export default DrumPad;