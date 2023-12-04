import create from 'zustand';
import { devtools, combine } from 'zustand/middleware';

const initialState = {
  workspace: null,
  error: null
};

const workspaceStore = create(
  devtools(
    combine(
      {
        workspace: null,
        error: null
      },
      (set) => ({
        setError: (error) => set({ error }),
        setWs: (workspace) => { set({ ...initialState }); set({ workspace }) },
      })
    )
  )
);

export default workspaceStore;
