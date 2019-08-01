import {createStore} from 'redux'


//ACTION  

const actions = (state = 0, action) => {
    switch (action.type) {
      case "INCREMENT":
        state = state + 1;
        break;
   
      case "DECREMENT":
        state = state - 1;
        break;
      default:
        break;
    }
    
    return state;
   }

   export default createStore(actions)