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
                        onClick={this.props.clearForm}>Clear Forms</button>
                </div>
                <div>
                    <button
                        onClick={this.props.submitDom}>Put on dom</button>
                </div>


                <div>
                <li>{this.props.inputText}</li>
                    <li>{this.props.inputText2}</li>
                </div>
            </div>
        );
    }
}

// here's where we tell Redux what we want to receive from the store:
function mapStateToProps(state) {
    return {
        inputText: state.inputText,
        inputText2: state.inputText2

    };
}

// here are the actions we want to send back into the store
function mapDispatchToProps(dispatch) {
    return {
        // update text from line 11
        updateText: (text) => dispatch({ type: 'update inputText', value: text }),
        updateText2: (text) => dispatch({ type: 'update inputText2', value: text }),
        clearForm: () => dispatch({ type: 'clear form' }),
        submitDom: (text) => dispatch({ type: 'submit dom', value:text })
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(InputComponent);