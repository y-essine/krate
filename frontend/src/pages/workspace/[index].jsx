import { useRouter } from 'next/router';
import { workspaceStore } from '@/store';
import { useEffect } from 'react';
import Head from 'next/head';
// import BoardCard from '../../components/ui/card/BoardCard';

export default function Workspace() {
  const { workspace, fetchWorkspace } = workspaceStore();
  const router = useRouter();
  const { index } = router.query;

  useEffect(() => {
    if (index) {
      fetchWorkspace(index).then(() => {
        console.log(workspace);
      });
    }
  }, [index]);

  return (
    <>
      <Head>
        <title>Waeve - Workspace {workspace && workspace?.name}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
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
            {workspace?.boards &&
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
    </>
  );
}
