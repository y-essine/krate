import ButtonPrimary from "./ButtonPrimary";
import { useGoogleLogin } from "@react-oauth/google";
import Spinner from "./Spinner";

const googleLogoUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png";

const GoogleLoginButton = ({ onSuccess, onError, isLoading }) => {
    const login = useGoogleLogin({
        onSuccess,
        onError,
        isSignedIn: true,
        accessType: "offline",
    });

    return (
        <ButtonPrimary onClick={login} className="text-sm" type="button">
            <div className="flex items-center justify-center">
                {isLoading ? (
                    <>...</>
                ) : (
                    <>
                        <img
                            src={googleLogoUrl}
                            alt="google-icon"
                            className="w-5 h-5 mr-2"
                        />
                        Sign In with Google
                    </>
                )}
            </div>
        </ButtonPrimary>
    );
};

export default GoogleLoginButton;
