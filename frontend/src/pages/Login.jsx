import ButtonPrimary from "@/components/ButtonPrimary";
import GoogleLoginButton from "@/components/GoogleLoginButton";
import LottieTest from "@/components/LottieTest";
import API from "@/services";
import { useAuthStore } from "@/stores";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [isLoading, setIsLoading] = useState(false);
    const [isGoogleLoading, setIsGoogleLoading] = useState(false);

    const [error, setError] = useState(null);

    const user = useAuthStore((state) => state.user);
    const setUser = useAuthStore((state) => state.setUser);

    const onSubmit = (data) => {
        setIsLoading(true);
        setUser(null);
        setError(null);
        API.post("/auth/login", data)
            .then((res) => {
                setUser(res.data);
            })
            .catch((err) => {
                setError("Error logging in");
            })
            .finally((err) => {
                setIsLoading(false);
            });
    };

    const responseMessage = async (response) => {
        setUser(null);
        setError(null);
        const googleToken = response.access_token;
        setIsGoogleLoading(true);
        API.post("/auth/google/" + googleToken)
            .then((res) => {
                setUser(res.data);
            })
            .catch((err) => {
                setError("Error logging in");
            })
            .finally(() => {
                setIsGoogleLoading(false);
            });

        // const email = res.data.email;
        // console.log("User email:", email);
        // console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };

    return (
        <div className="h-screen w-screen">
            <div className="flex h-full p-12 justify-center">
                <div className="w-96 space-y-4">
                    <h1 className="text-3xl font-semibold text-white">Login</h1>
                    <p className="text-white/50 text-sm">
                        Welcome back! Please login to your account.
                    </p>
                    <LottieTest />
                    <form
                        className="space-y-4"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div>
                            <label className="block text-primary-t text-sm">
                                Email
                            </label>
                            <input
                                type="email"
                                className="w-full rounded-lg border-none bg-white/5 py-1.5 px-3"
                                {...register("email", { required: true })}
                            />
                        </div>
                        <div>
                            <label className="block text-primary-t text-sm">
                                Password
                            </label>
                            <input
                                type="password"
                                className="w-full rounded-lg border-none bg-white/5 py-1.5 px-3"
                                {...register("password", { required: true })}
                            />
                        </div>

                        <ButtonPrimary disabled={isLoading}>
                            {!isLoading ? "Enter" : <div>...</div>}
                        </ButtonPrimary>

                        <GoogleLoginButton
                            onSuccess={responseMessage}
                            onError={errorMessage}
                            isLoading={isGoogleLoading}
                        />

                        {user && (
                            <div className="text-sm line-clamp-2">
                                {JSON.stringify(user)}
                            </div>
                        )}
                        {error && (
                            <div className="text-sm  text-red-400">
                                {JSON.stringify(error)}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
