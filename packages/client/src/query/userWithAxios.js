import { request } from '../lib/request';

const USER_API_PATH = '/user';

export const getAllUsersWithAxios = () => request.get(USER_API_PATH).then((resp) => resp.data);

export const createUserWithAxios = (user) => request.post(USER_API_PATH, user)
	.then((resp) => resp.data);
