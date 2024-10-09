import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DraggableTask from "./DraggableTask";

const TaskList = ({ tasks }) => {
    const [taskList, setTaskList] = useState(tasks);
    const [draggingIndex, setDraggingIndex] = useState(null);

    const moveTask = (fromIndex, toIndex) => {
        const updatedTasks = [...taskList];
        const [movedTask] = updatedTasks.splice(fromIndex, 1);
        updatedTasks.splice(toIndex, 0, movedTask);
        setTaskList(updatedTasks);
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="flex flex-col gap-4">
                {taskList.map((task, index) => (
                    <div key={task.id} className="relative">
                        <DraggableTask
                            task={task}
                            index={index}
                            moveTask={moveTask}
                            setDraggingIndex={setDraggingIndex}
                        />
                        {draggingIndex === index && (
                            <div className="absolute inset-0 border-2 border-dashed border-gray-300 opacity-50 pointer-events-none"></div>
                        )}
                    </div>
                ))}
            </div>
        </DndProvider>
    );
};

export default TaskList;
