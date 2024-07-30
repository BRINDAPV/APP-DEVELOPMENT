import { SET_TOYS } from './types';

export const setToys = (toys) => {
  return {
    type: SET_TOYS,
    payload: toys,
  };
};
