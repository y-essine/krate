import { create } from "zustand";

const useAuthStore = create((set) => ({
    isLoggedIn: false,
    user: null,
    setUser: (user) => set({ user }),
}));

export default useAuthStore;