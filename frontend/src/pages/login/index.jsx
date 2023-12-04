import Head from 'next/head';
import LoginForm from '@/features/auth/LoginForm';
import Image from 'next/image';
import { Codesandbox } from 'react-feather';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login - Krate</title>
      </Head>
      <div className="flex flex-col items-center p-6 gap-6">
        <div className="h-20 text-3xl font-extrabold flex items-center justify-center hover:text-accent cursor-default">
          <div className="flex items-center gap-3">
            <Codesandbox width={40} height={40} />
            <div>Krate</div>
          </div>
        </div>
        <LoginForm />
      </div>
    </>
  );
}
