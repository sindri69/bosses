import { CREATE_BOSS } from '../constants';

const initialState = {
        id: ' ',
        name: '',
        description: '',
        img: ''
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case CREATE_BOSS:
        console.log(action);
        return action.payload;
      default: return state;
    }
  };