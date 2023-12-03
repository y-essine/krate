import LoginForm from '@/features/auth/LoginForm';

export default function Login() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="h-20 text-xl font-extrabold flex items-center justify-center">
          <div className="hover:text-accent cursor-default">Sidebar</div>
        </div>
        <LoginForm />
      </div>
    </>
  );
}
