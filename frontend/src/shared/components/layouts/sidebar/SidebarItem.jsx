import clsx from "clsx";
import { useState } from "react";
import Link from "next/link";

const SidebarItem = ({ title, path, icon }) => {
    const [isActive, setActive] = useState(false);

    return (
        <Link
            href={path}
            className={clsx(
                "flex justify-center lg:justify-start lg:pl-8 py-3 xs:py-4 hover:bg-secondary/50 cursor-pointer rounded-md select-none duration-200 text-primary-t/80",
                isActive && "!bg-secondary !text-primary-t"
            )}
        >
            <div className="px-4 xs:px-0">{icon}</div>
            <div className="ml-3 text-xl font-bold hidden lg:block">
                {title}
            </div>
        </Link>
    );
};

export default SidebarItem;
