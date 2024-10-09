import { Copy, Trash } from "lucide-react";
import CustomMenu from "./CustomMenu";

const TestComp = () => {
    const menuItems = [
        {
            text: "Copy",
            icon: Copy,
            action: () => console.log("Copy action"),
            shortcut: "⌘C",
        },
        {
            text: "Delete",
            icon: Trash,
            action: () => console.log("Duplicate action"),
            shortcut: "⌘D",
        },
    ];

    return <CustomMenu items={menuItems} />;
};

export default TestComp;
