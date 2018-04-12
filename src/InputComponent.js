import React from 'react';
import { connect } from 'react-redux';

class InputComponent extends React.Component {
    render() {
        return (
            <div>
                <div>
                    Type here:
                <input
                        type='text'
                        value={this.props.inputText}
                        onChange={e => this.props.updateText(e.target.value)}
                    />
                </div>
                <div>
                    Now here:
                <input
                        type='text'
                        value={this.props.inputText2}
                        onChange={e => this.props.updateText2(e.target.value)}
                    />
                </div>
                <div>
                    <button 
                        value={this.props.clearForms}
                        onClick={this.props.clearForms}
                </div>        
            </div>
        );
    }
}

// here's where we tell Redux what we want to receive from the store:
function mapStateToProps(state) {
    return {
        inputText: state.inputText

    };
}

// here are the actions we want to send back into the store
function mapDispatchToProps(dispatch) {
    return {
        // update text from line 11
        updateText: (text) => dispatch({ type: 'update inputText', value: text }),
        updateText2: (text) => dispatch({ type: 'update inputText2', value: text})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(InputComponent);