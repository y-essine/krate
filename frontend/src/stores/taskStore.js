import { create } from "zustand";

const useTaskStore = create((set) => ({
    tasks: [{
        id: 1,
        title: "Task 1",
        description: "This is task 1",
    },
    {
        id: 2,
        title: "Task 2",
        description: "This is task 2",
    }],
    addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
    removeTask: (id) => {
        set((state) => ({
            tasks: state.tasks.filter((t) => t.id != id),
        })); console.log("deleted task", { id });
    }
}));

export default useTaskStore;