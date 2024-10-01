import { create } from "zustand";

const useAuthStore = create((set) => ({
    isLoggedIn: false,
    user: null,
}));

export default useAuthStore;