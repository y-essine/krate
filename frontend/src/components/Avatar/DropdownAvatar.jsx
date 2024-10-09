import { ChevronDown, LogOut, Settings, UserIcon } from "lucide-react";
import CustomMenu from "../CustomMenu";
import { useNavigate } from "react-router-dom";

const DropdownAvatar = ({}) => {
    const navigate = useNavigate();
    const user = {
        email: "prodtf@gmail.com",
        username: "fluffy-duck-78",
        firstname: "Yassine",
        lastname: "Karoui",
    };

    // squircle avatar showing user initials in a squircle shape, with a dropdown menu
    return (
        <CustomMenu
            info={"@" + user.username}
            triggerContent={
                <div className="flex items-center">
                    <div className="text-stone-400 text-xs">
                        {user.firstname[0]} {user.lastname[0]}
                    </div>
                    <ChevronDown className="size-4 text-stone-400 ml-2" />
                </div>
            }
            items={[
                {
                    text: "Profile",
                    action: () => navigate("/profile"),
                    icon: UserIcon,
                    shortcut: "⌘1",
                },
                {
                    text: "Settings",
                    action: () => navigate("/settings"),
                    icon: Settings,
                    shortcut: "⌘2",
                    seperator: true,
                },
                {
                    text: "Logout",
                    action: () => navigate("/"),
                    icon: LogOut,
                    shortcut: "⌘3",
                },
            ]}
            anchor="bottom start"
            ghost
        />
    );
};

export default DropdownAvatar;
