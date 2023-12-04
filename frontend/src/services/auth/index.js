import { API } from '@/services'
import Cookies from 'js-cookie';

const authService = {
  login: async (data) => {
    return await API.post('/auth/login', { ...data });
  },
  register: async (data) => {
    return await API.post('/auth/register', { ...data });
  },
  logout: async () => {
    return await API.post('/auth/logout');
  },
  me: async () => {
    const token = Cookies.get('accessToken');
    return await API.post(`/auth/token/${token}`);
  }
}

export default authService;