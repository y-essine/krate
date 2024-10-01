import { Description, Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";
import TestComp from "./TestComp";
import { useLottie } from "lottie-react";
import poker from "@/assets/lottie/poker.json";
import { useTaskStore } from "@/stores";
import { Trash } from "lucide-react";
import { GripVertical } from "lucide-react";

const MyComponent = () => {
    const options = {
        animationData: poker,
        loop: true,
        style: {
            width: "100%",
            height: "100%",
        },
    };

    const { View } = useLottie(options);
    const tasks = useTaskStore((state) => state.tasks);

    return (
        <div className="w-full max-w-md px-4 space-y-4">
            <Field>
                <Label className="text-sm/6 font-medium text-white">Name</Label>
                <Description className="text-sm/6 text-white/50">
                    Use your real name so people will recognize you.
                </Description>
                <Input
                    className={clsx(
                        "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                        "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                    )}
                />
            </Field>

            <TestComp />

            <div className="w-full h-40">{View}</div>

            {tasks.map((task) => (
                <div className="relative group h-10">
                    <div className="absolute -left-5  hidden group-hover:flex h-full  items-center ">
                        <GripVertical className="size-5 text-white/50 hover:cursor-grab" />
                    </div>
                    <div
                        key={task.id}
                        className="flex items-center justify-between gap-2 bg-white/5 rounded-lg px-3 py-2 h-full"
                    >
                        <div className="font-medium">{task.title}</div>
                        <button
                            className="text-white/50 hidden group-hover:block"
                            onClick={() => useTaskStore.removeTask(task)}
                        >
                            <Trash className="size-4" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MyComponent;
