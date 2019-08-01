import {createStore} from 'redux'

const action =(state = {}, action) =>{
  switch (action.type){
      case 'EDIT':

      const payload = action.payload
      // json object like
      // {
      // 'to':'my house'    
      //}

      state = {
          ...state,
          ...payload
      }

      break;

      default:
          break;
  }
  console.log(state); 

  return state
}

const store = createStore(action)


  export default store
