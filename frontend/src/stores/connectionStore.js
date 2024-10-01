import { create } from "zustand";

const useConnectionStore = create((set) => ({
    connection: null,
    setConnection: (connection) => set({ connection }),
}));

export default useConnectionStore;