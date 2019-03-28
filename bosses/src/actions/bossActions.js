import { CREATE_BOSS, GET_BOSSES, GET_BOSS, UPDATE_BOSS, DELETE_BOSS } from '../constants';

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

export const DELETE_BOSS = boss => {
  console.log(boss);
  return {
    type: DELETE_BOSS,
    payload: bossID
  };
};

export const GET_BOSS = boss => {
  console.log(boss);
  return {
    type: GET_BOSS,
    payload: boss
  };
};

export const GET_BOSSES = bosses => {
  console.log(bosses);
  return {
    type: GET_BOSSES,
    payload: bosses
  };
};

