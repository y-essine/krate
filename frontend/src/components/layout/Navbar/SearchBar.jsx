import clsx from "clsx";
import { useRef, useState } from "react";
import { Search } from "lucide-react";

const SearchBar = ({ isScrolled }) => {
    const [isActive, setActive] = useState(false);
    const inputRef = useRef();

    const handleBlur = () => {
        setActive(false);
    };

    const handleFocus = () => {
        inputRef.current.focus();
        setActive(true);
    };

    return (
        <div
            className="p-3 bg-secondary rounded-lg flex cursor-text items-center h-10 "
            onClick={() => handleFocus()}
        >
            <div>
                <Search
                    className={clsx(
                        "size-4 text-zinc-500 duration-100",
                        isActive && "!text-primary-t"
                    )}
                />
            </div>
            <input
                type="text"
                placeholder="Search..."
                className={clsx(
                    " text-sm bg-transparent outline-none pl-3 pr-1 "
                )}
                ref={inputRef}
                onFocus={() => setActive(true)}
                onBlur={() => handleBlur()}
                onInput={(e) => console.log(e.target.value)}
            />
        </div>
    );
};
// const SearchBar = ({ isScrolled }) => {
//     const [isActive, setActive] = useState(false);
//     const inputRef = useRef();

//     const handleBlur = () => {
//         setActive(false);
//     };

//     const handleFocus = () => {
//         inputRef.current.focus();
//         setActive(true);
//     };

//     return (
//         <div
//             className={clsx(
//                 "relative bg-secondary rounded-md pr-3",
//                 !isActive && "cursor-pointer",
//                 isScrolled && "bg-black/30"
//             )}
//             onClick={() => handleFocus()}
//         >
//             <div
//                 className={clsx(
//                     "absolute py-3 px-4 text-darker-t duration-200 bg-secondary z-10 rounded-md",
//                     isActive && "!text-primary-t",
//                     isScrolled && "bg-transparent"
//                 )}
//             >
//                 <Search />
//             </div>
//             <input
//                 type="text"
//                 placeholder="Search..."
//                 className={clsx(
//                     "py-3 pr-11 bg-transparent rounded-md w-0 opacity-0 cursor-pointer duration-200 outline-none",
//                     isActive &&
//                         "cursor-text !w-64 xs:!w-96 opacity-100 pr-0 pl-14"
//                 )}
//                 ref={inputRef}
//                 onBlur={() => handleBlur()}
//                 onInput={(e) => console.log(e.target.value)}
//                 onFocus={() => setActive(true)}
//             />
//         </div>
//     );
// };

export default SearchBar;
