const redux = require('redux');
const createStore = redux.createStore;
const initialState = {
    conter : 0 
}
//reducer
const rootReducer = (state = initialState, action)=>{
    if(action.type === 'INC_COUNTER'){
            
    }  
    return state;
}; 
//store
const store = createStore(rootReducer);
console.log(store.getState());
//Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());
    
//Subscription
