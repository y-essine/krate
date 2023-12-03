import create from 'zustand';
import { devtools, combine } from 'zustand/middleware';
import useRouter from 'next/router';

const initialState = {
  isLogin: false,
  isRegister: false,
  isHome: false,
  isExplore: false,
  isSettings: false,
  isWorkspaces: false,
  isBoard: false,
};

const pageStore = create(
  devtools(
    combine(
      {
        isLogin: false,
        isRegister: false,
        isHome: false,
        isExplore: false,
        isSettings: false,
        isWorkspaces: false,
        isBoard: false,
      },
      (set) => ({
        setPage: (page) => {
          switch (page) {
            // if '/login' set state to initial state and set isLogin to true
            case '/login':
              set(() => initialState);
              set(() => ({ isLogin: true }));
              break;
            case '/register':
              set(() => initialState);
              set(() => ({ isRegister: true }));
              break;
            case '/':
              set(() => initialState);
              set(() => ({ isHome: true }));
              break;
            case '/explore':
              set(() => initialState);
              set(() => ({ isExplore: true }));
              break;
            case '/settings':
              set(() => initialState);
              set(() => ({ isSettings: true }));
              break;
            case '/workspaces':
              set(() => initialState);
              set(() => ({ isWorkspaces: true }));
              break;
            case '/boards':
              set(() => initialState);
              set(() => ({ isBoard: true }));
              break;
            default:
              set(() => initialState);
              break;

          }
        }
      })
    )
  )
);

export default pageStore;
