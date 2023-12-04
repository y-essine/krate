import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { workspaceService } from '@/services';
import MainLayout from '@/shared/components/layouts/MainLayout';
import Head from 'next/head';
// import BoardCard from '../../components/ui/card/BoardCard';
import { useState } from 'react';

const Workspace = () => {
  const [workspace, setWorkspace] = useState(null);
  const router = useRouter();
  const { index } = router.query;

  useEffect(() => {
    if (index) {
      workspaceService.fetch(index).then((res) => {
        setWorkspace(res.data);
      });
    }
  }, [index]);

  return (
    <>
      <Head>
        <title>Workspace - Krate {workspace && workspace?.name}</title>
      </Head>
      <MainLayout>
        <div className="py-6">
          <h1 className="px-6 text-3xl font-bold">Workspace: {workspace?.name}</h1>
          <div className="mt-10 pl-6">
            <div className="pr-6">
              <p className="text-sm font-semibold">
                Pending Approvals {''}
                <a href="#" className="text-accent-light cursor-pointer hover:underline">
                  Assigned to me
                </a>
              </p>
            </div>
          </div>
          <div className="mt-10 pl-6">
            <div className="pr-6 font-semibold">
              {workspace &&
                workspace?.boards &&
                workspace.boards.map((board) => (
                  // <BoardCard board={board} key={board.id} />
                  <div key={board.id} className="flex items-center gap-3 cursor-pointer">
                    <h1 className="text-accent-light uppercase">{board.name}</h1>
                    <h2 className="text-sm ">{board.description}</h2>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Workspace;
