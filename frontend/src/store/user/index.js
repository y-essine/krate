import create from 'zustand';
import { devtools, combine } from 'zustand/middleware';

const initialState = {
  user: null,
  isLoading: false,
  isLoaded: false,
  error: null
};

const userStore = create(
  devtools(
    combine(
      {
        user: null,
        isLoading: false,
        isLoaded: false,
        error: null
      },
      (set) => ({
        setError: (error) => set({ error }),
        setUser: (user) => { set({ ...initialState }); set({ user }) },
      })
    )
  )
);

export default userStore;
