import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='display'>
                <input type='text' className='form-control' disabled='disabled' value={this.props.nowPlaying} />
            </div>
        );
    }
}
Display.propTypes = {
    nowPlaying: PropTypes.string.isRequired
}

export default Display;