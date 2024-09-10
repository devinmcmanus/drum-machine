import React from 'react';
import PropTypes from 'prop-types';
import './Display.css'

class Display extends React.Component {
    render() {
        return (
            <div id='display' className='container px-4 text-center'>
                <div className='row gx-5'>
                    <div className='col p-1 display'>
                        {this.props.nowPlaying}
                    </div>
                </div>
            </div>
        );
    }
}
Display.propTypes = {
    nowPlaying: PropTypes.string.isRequired
}

export default Display;