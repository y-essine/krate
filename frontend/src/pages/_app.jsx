import { useRouter } from 'next/router';
import { useEffect } from 'react';
// import { Inter } from '@next/font/google';
import '@/globals.scss';

import Home from '@/pages/_home';
import Navbar from '@/shared/components/layouts/navbar/Navbar';
import Sidebar from '@/shared/components/layouts/sidebar/Sidebar';
import { pageStore } from '@/store';

// const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const { setPage, isHome, isLogin, isRegister } = pageStore();

  useEffect(() => {
    setPage(router.pathname);
  }, [router.pathname, setPage]);

  return (
    <>
      {isLogin || isRegister ? (
        <Component {...pageProps} />
      ) : (
        <div className="flex h-full">
          <Sidebar />
          <div className="h-full w-full xs:w-[calc(100%-7rem)] lg:w-[calc(100%-14rem)] pb-16 xs:pb-0">
            <Navbar />
            <>{isHome ? <Home /> : <Component {...pageProps} />}</>
          </div>
        </div>
      )}
    </>
  );
}
