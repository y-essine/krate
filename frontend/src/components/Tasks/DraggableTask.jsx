import { useTaskStore } from "@/stores";
import { GripVertical, Trash } from "lucide-react";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

const DraggableTask = ({ task, index, moveTask }) => {
    const removeTask = useTaskStore((state) => state.removeTask);
    const ref = useRef(null);

    const [{ isDragging }, drag] = useDrag({
        type: "TASK",
        item: { index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const [, drop] = useDrop({
        accept: "TASK",
        hover: (draggedItem) => {
            if (draggedItem.index !== index) {
                moveTask(draggedItem.index, index);
                draggedItem.index = index;
            }
        },
    });

    drag(drop(ref));

    return (
        <div
            ref={ref}
            className={`relative group h-10 transition-opacity duration-300 ${
                isDragging ? "opacity-40" : "opacity-100"
            }`}
        >
            {/* <div className="absolute -left-5 hidden group-hover:flex h-full items-center">
                <GripVertical className="size-5 text-white/50 hover:cursor-grab" />
            </div> */}
            <div className="flex items-center justify-between gap-2 bg-white/5 rounded-lg px-3 py-2 h-full cursor-grab">
                <div className="font-medium">{task.title}</div>
                <button
                    className="text-white/50 hidden group-hover:block"
                    onClick={() => removeTask(task.id)}
                >
                    <Trash className="size-4" />
                </button>
            </div>
        </div>
    );
};

export default DraggableTask;
