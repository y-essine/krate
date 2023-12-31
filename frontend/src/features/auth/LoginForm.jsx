import { useRouter } from 'next/router';
import { authService } from '@/services';
import { useForm } from 'react-hook-form';
import { authStore } from '@/store';
import Cookies from 'js-cookie';

export default function LoginForm() {
  const router = useRouter();
  const { accessToken, setTokens } = authStore();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    setTokens({});
    await authService
      .login(data)
      .then((res) => {
        Cookies.set('accessToken', res.data.access_token);
        Cookies.set('refreshToken', res.data.refresh_token);
        Cookies.set('expiresIn', res.data.expires_in);
        setTokens(res.data);
        router.push('/');
      })
      .catch((err) => {
        alert(err);
      });
    // if (response) {
    //   router.push('/home');
    // }
  };

  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <div className="h-20 text-xl font-extrabold flex items-center justify-center">
          <div className="hover:text-accent cursor-default">Login</div>
        </div>
        <div className="w-full sm:w-80">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2">
              <label htmlFor="username" className="font-semibold">
                Username
              </label>
              <input
                type="username"
                name="username"
                id="username"
                placeholder="Enter your username"
                className="bg-secondary rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                {...register('username', {
                  required: 'Username is required',
                  minLength: { value: 3, message: 'Username must be at least 3 characters' }
                })}
              />
              {errors.username && <div className="text-red-500">{errors.username.message}</div>}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="font-semibold">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="bg-secondary rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                {...register('password', { required: 'Password is required' })}
              />
              {errors.password && <div className="text-red-500">{errors.password.message}</div>}
            </div>
            <button
              type="submit"
              className="bg-accent text-white rounded-md px-4 py-2 hover:bg-accent/70">
              Login
            </button>
          </form>

          {accessToken && (
            <div className="flex flex-col gap-2 mt-6 w-80 h-20">
              <span className="font-semibold text-sm text-darker-t">Access token?</span>
              <p className="text-accent-light hover:underline font-semibold truncate">
                {accessToken}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
