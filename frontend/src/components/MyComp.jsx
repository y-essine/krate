import poker from "@/assets/lottie/poker.json";
import { useTaskStore } from "@/stores";
import { Description, Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";
import { useLottie } from "lottie-react";
import TaskList from "./Tasks/TaskList";
import TestComp from "./TestComp";

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

            <TaskList tasks={tasks} />
        </div>
    );
};

export default MyComponent;
