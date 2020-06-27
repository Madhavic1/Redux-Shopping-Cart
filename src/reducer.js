import {DECREASE,INCREASE} from './actions'

function reducer(state, action) {
    console.log("Welcome dude!!! ", state, action);
  
    switch (action.type) {
      case DECREASE:
        console.log("DECREASE action received");
        return {
          ...state,
          count: state.count - 1,
        };
      case INCREASE:
        console.log("INCREASE action received");
        return {
          ...state,
          count: state.count + 1,
        };
  
      default:
        return state;
    }
  }

  export default reducer;