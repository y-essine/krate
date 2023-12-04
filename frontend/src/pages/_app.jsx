import { useRouter } from 'next/router';
import { useEffect } from 'react';
// import { Inter } from '@next/font/google';
import '@/globals.scss';
import { pageStore, userStore } from '@/store';
import { authService } from '@/services';

// const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const { setPage } = pageStore();
  const { setUser } = userStore();

  useEffect(() => {
    setPage(router.pathname);
    authService
      .me()
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [router.pathname, setPage]);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
