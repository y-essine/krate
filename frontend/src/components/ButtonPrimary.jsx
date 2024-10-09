import clsx from "clsx";

const ButtonPrimary = ({ ghost, children, className, ...props }) => {
    return (
        <button
            className={clsx(
                "px-4 py-2 rounded-lg bg-secondary hover:bg-zinc-800 w-full h-10",
                className,
                {
                    "bg-transparent hover:bg-secondary": ghost,
                }
            )}
            {...props}
        >
            {children || "Click me!"}
        </button>
    );
};

export default ButtonPrimary;
