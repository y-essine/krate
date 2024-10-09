import DropdownAvatar from "@/components/Avatar/DropdownAvatar";
import SearchBar from "./SearchBar";

const Navbar = () => {
    return (
        <div className="z-1 px-4 h-20 flex items-center justify-between sticky top-0 duration-20 gap-10 bg-primary">
            <div className="max-w-[416px] w-full">
                <SearchBar />
            </div>
            <DropdownAvatar />
        </div>
    );
};

export default Navbar;
