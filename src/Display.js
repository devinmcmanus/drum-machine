import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
    render() {
        return (
            <div id='display'>
                {this.props.nowPlaying}
            </div>
        );
    }
}
Display.propTypes = {
    nowPlaying: PropTypes.string.isRequired
}

export default Display;