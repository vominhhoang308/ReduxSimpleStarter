import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
          switch(action.type){
                    case FETCH_WEATHER:
                              // state in reducer works the same way as state in react components, we are never ever mutate the state.
                              // we never do this....return state.push(action.payload.data);
                              // instead, if we want to put action.payload.data as a new item in an array, we make a new instant of state
                              return [action.payload.data, ...state]; // this is identical to return state.concat([action.payload.data]);
          }
          return state;
}
