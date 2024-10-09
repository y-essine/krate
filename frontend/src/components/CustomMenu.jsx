import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import React from "react";

const CustomMenu = ({ triggerContent, items, anchor, ghost, info }) => {
    return (
        <Menu>
            <MenuButton
                className={clsx(
                    "inline-flex items-center gap-2 bg-zinc-800 py-1.5 px-3 text-sm/6 font-semibold text-white  focus:outline-none hover:bg-zinc-700 data-[open]:bg-zinc-700 data-[focus]:outline-1 data-[focus]:outline-white h-10 rounded-lg",
                    ghost && "!bg-transparent hover:!bg-zinc-800"
                )}
            >
                {triggerContent || (
                    <>
                        Options
                        <ChevronDown className="size-4 fill-white/60" />
                    </>
                )}
            </MenuButton>

            <MenuItems
                transition
                anchor={anchor || "bottom end"}
                className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 !bg-secondary"
            >
                {info && (
                    <>
                        <div className="p-2 text-xs text-white/50">{info}</div>
                        <div className="my-1 h-px bg-white/5" />
                    </>
                )}
                {items.map((item, index) => (
                    <div key={index}>
                        <MenuItem>
                            <button
                                onClick={item.action}
                                className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
                            >
                                {item.icon && (
                                    <item.icon className="size-4 text-white/40" />
                                )}
                                <span>{item.text}</span>
                                <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                                    {item.shortcut}
                                </kbd>
                            </button>
                        </MenuItem>
                        {item.seperator && (
                            <div className="my-1 h-px bg-white/5" />
                        )}
                    </div>
                ))}
            </MenuItems>
        </Menu>
    );
};

export default CustomMenu;
