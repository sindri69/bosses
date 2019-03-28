import { CREATE_BOSS } from '../constants';

export const createBoss = newBoss => {
  console.log(newBoss);
  return {
    type: CREATE_BOSS,
    payload: newBoss
  };
};

export const UPDATE_BOSS = boss => {
  console.log(boss);
  return {
    type: UPDATE_BOSS,
    payload: boss
  };
};

export const 