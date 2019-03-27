import { CREATE_BOSS } from '../constants';

export const createBoss = newBoss => {
  console.log(newBoss);
  return {
    type: CREATE_BOSS,
    payload: newBoss
  };
};