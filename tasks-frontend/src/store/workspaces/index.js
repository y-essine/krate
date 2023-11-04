import create from 'zustand';
import { devtools, combine } from 'zustand/middleware';
import { API } from '@/services';

const workspaceStore = create(
  devtools(
    combine(
      {
        workspace: null,
        isLoading: false,
        isLoaded: false,
        error: null
      },
      (set) => ({
        setError: (error) => set({ error }),
        fetchWorkspace: async (id) => {
          set({ isLoading: true });
          try {
            console.log("hay jeya");
            const response = await API.get(`/ws/id/${id}`);
            const workspace = await response.data;
            set({ workspace, isLoading: false, isLoaded: true });
          } catch (error) {
            set({ error, isLoading: false, isLoaded: false });
          }
        }
      })
    )
  )
);

export default workspaceStore;
