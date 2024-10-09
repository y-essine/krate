import clsx from "clsx";

const Spinner = ({ className, size }) => {
    return (
        <div className={clsx(className, "flex justify-center w-full h-full")}>
            <div
                className="border-[6px] border-accent-light/30 border-t-accent-light rounded-full animate-spin"
                style={{ width: `${size}rem`, height: `${size}rem` }}
            ></div>
        </div>
    );
};

export default Spinner;
