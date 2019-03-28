import { CREATE_BOSS } from '../constants';
import { GET_BOSSES } from '../constants';
/*
const initialState = {
        id: ' ',
        name: '',
        description: '',
        img: ''
  };
  
  
  export default function bossreducer(state = initialState, action) {
    switch (action.type) {
      case CREATE_BOSS:
        console.log(action);
        return action.payload;
      default: return state;
    }
  };*/


  export default function(state = 0, action)
  {
    switch (action.type){

      case GET_BOSSES: return action.payload;
      default: return state;

    }
  } 