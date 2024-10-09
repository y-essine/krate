import { ChevronDown } from "lucide-react";
import CustomMenu from "../../CustomMenu";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();

    const items = [
        {
            text: "YESSINE's Workspace",
            action: () => navigate("/workspace/y-essine"),
            shortcut: "⌘1",
        },
        {
            text: "My Workspace 2",
            action: () => console.log("My Workspace 2 action"),
            shortcut: "⌘2",
        },
    ];

    return (
        <div className="h-screen hidden xs:flex flex-shrink-0 w-56 px-6 flex-col items-center sticky top-0 duration-200">
            <div className="h-20 flex items-center justify-center">
                <CustomMenu
                    triggerContent={
                        <div className="flex items-center">
                            <div className="text-stone-400 text-xs">
                                YESSINE's Workspace
                            </div>
                            <ChevronDown className="size-4 text-stone-400 ml-2" />
                        </div>
                    }
                    items={items}
                    anchor="bottom start"
                    ghost
                />
            </div>
            <div>Lists</div>
        </div>
    );
};

export default Sidebar;
