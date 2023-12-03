import Modal from "@components/ui/modals/Modal";
import { Dialog } from "@headlessui/react";
import { LogOut } from "react-feather";

const LogoutModal = ({ openNow, onClose }) => {
    const onLogoutButton = () => {
        console.log("logging out...");
        onClose();
    };

    return (
        <Modal openNow={openNow} onClose={onClose}>
            <Dialog.Title
                as="h3"
                className="text-lg font-bold leading-6 text-red-400 flex items-center"
            >
                <LogOut size={22} className="mr-2" /> Logging out
            </Dialog.Title>
            <div className="mt-2">
                <p className="text-sm text-darker-t">
                    You will be logged out of this account.
                </p>
                <p className="text-sm text-darker-t">
                    Are you sure you want to continue?
                </p>
            </div>

            <div className="mt-4">
                <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-lighter/80 px-4 py-2 text-sm font-medium text-red-400 hover:bg-lighter focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={() => onLogoutButton()}
                >
                    Yes, Logout!
                </button>
            </div>
        </Modal>
    );
};

export default LogoutModal;
