import { IRegistrationInfo, ILoginInfo } from '../types/data';
import { instance } from './helpers/instance';

export const registerUser = async (userInfo: IRegistrationInfo) => {
  const { data } = await instance.post('users/signup', userInfo);
  return data;
};

export const loginUser = async (userInfo: ILoginInfo) => {
  const { data } = await instance.post('users/signin', userInfo);
  setAuthHeader(data.token);
  return data;
};

export const logoutUser = async () => {
  await instance.post('users/signout');
  clearAuthHeader();
};

export const refreshToken = async () => {
  const { data } = await instance.get('users/current/refresh');
  const newToken = data.token;
  setAuthHeader(newToken);
  return data;
};

export const setAuthHeader = (token: string) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = '';
};
