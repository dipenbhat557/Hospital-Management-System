import { atom } from 'recoil';

export const userState = atom({
  key: 'userState',
  default: null,
});

export const tokenState = atom({
  key: 'tokenState',
  default: null,
});
