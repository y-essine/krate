import { API } from '@/services'

const authService = {
  login: async (data) => {
    return await API.post('/auth/login', { ...data });
  }
}

export default authService;