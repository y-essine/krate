import { API } from '@/services'

const workspaceService = {
  fetch: async (id) => {
    return await API.get(`/ws/id/${id}`);
  },
}

export default workspaceService;