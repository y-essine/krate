import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Archive, ChevronDown, Copy, Trash, Pencil } from "lucide-react";

const TestComp = () => {
    return (
        <div className="w-full text-right">
            <Menu>
                <MenuButton className="inline-flex items-center gap-2 rounded-md bg-zinc-800 py-1.5 px-3 text-sm/6 font-semibold text-white  focus:outline-none hover:bg-zinc-700 data-[open]:bg-zinc-700 data-[focus]:outline-1 data-[focus]:outline-white">
                    Options
                    <ChevronDown className="size-4 fill-white/60" />
                </MenuButton>

                <MenuItems
                    transition
                    anchor="bottom end"
                    className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 "
                >
                    <MenuItem>
                        <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                            <Pencil className="size-4 fill-white/30" />
                            Edit
                            <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                                ⌘E
                            </kbd>
                        </button>
                    </MenuItem>
                    <MenuItem>
                        <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                            <Copy className="size-4 fill-white/30" />
                            Duplicate
                            <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                                ⌘D
                            </kbd>
                        </button>
                    </MenuItem>
                    <div className="my-1 h-px bg-white/5" />
                    <MenuItem>
                        <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                            <Archive className="size-4 fill-white/30" />
                            Archive
                            <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                                ⌘A
                            </kbd>
                        </button>
                    </MenuItem>
                    <MenuItem>
                        <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                            <Trash className="size-4 fill-white/30" />
                            Delete
                            <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                                ⌘D
                            </kbd>
                        </button>
                    </MenuItem>
                </MenuItems>
            </Menu>
        </div>
    );
};

export default TestComp;
