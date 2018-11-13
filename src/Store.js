import { createStore } from "redux";

function reducer(store, action) {

    if(store) {
        return {
            store
        }
    }
    //if store is undefined, we need to return the initial state
    if (!store) {
        return {
            inputText: '',
            inputText2: ''
        }
    }
    //this action looks like:
    // { type: 'update inputText', 'abc' }
    if (action.type === 'update inputText') {
        return {
            ...store,
            inputText: action.value
        };
    
    }
    else if (action.type === 'update inputText2') {
        return {
            ...store,
            inputText2: action.value
        }
    }
    else if (action.type === 'clear form') {
        return {
            ...store,
            inputText: '',
            inputText2: ''
        }
    }
    else if (action.type === 'submit dom') {
        return {
            ...store,
            domText: action.value,
            domText2: action.value
            
        }
    }
}

// for example purposes only:
// window.reducer = reducer;

export default createStore(reducer);