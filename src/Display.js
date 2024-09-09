import React from 'react';

class Display extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sample: ''
        };
    }

    render() {
        return (
            <div id='display'>
                <input type='text' className='form-control' disabled='disabled' value={this.state.sample} />
            </div>
        );
    }
}

export default Display;