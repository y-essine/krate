import create from 'zustand';
import { devtools, combine } from 'zustand/middleware';

const initialState = {
  accessToken: null,
  expiresIn: null,
  refreshToken: null,
  isLoading: false,
  isLoaded: false,
  error: null
};

const authStore = create(
  devtools(
    combine(
      {
        accessToken: null,
        expiresIn: null,
        refreshToken: null,
        isLoading: false,
        isLoaded: false,
        error: null
      },
      (set) => ({
        setError: (error) => set({ error }),
        setTokens: (tokenData) => { set({ ...initialState }); set({ accessToken: tokenData.access_token, refreshToken: tokenData.refresh_token, expriseIn: tokenData.expires_in }) },
      })
    )
  )
);

export default authStore;
