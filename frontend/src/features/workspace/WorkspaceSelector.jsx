import { userStore, workspaceStore } from '@/store';
import { useEffect, useState } from 'react';
import { ChevronDown } from 'react-feather';

const WorkspaceSelector = () => {
  const { user } = userStore();
  const { workspace } = workspaceStore();

  const [isWorkspaceSelectorOpen, setWorkspaceSelectorOpen] = useState(false);
  const [selectedWorkspace, setSelectedWorkspace] = useState(null);

  useEffect(() => {
    if (workspace) {
      setSelectedWorkspace(workspace);
    }
  }, [workspace]);

  return (
    <div className="relative">
      <button
        className="flex items-center justify-center h-12 py-3 px-4 rounded-md bg-secondary duration-200"
        onClick={() => setWorkspaceSelectorOpen(true)}>
        <span className="text-sm font-semibold">
          {selectedWorkspace?.name || 'Select a workspace'}
        </span>
        <ChevronDown className="w-4 h-4 ml-1 " />
      </button>
      {isWorkspaceSelectorOpen &&
        // <WorkspaceSelectorModal
        //     selectedWorkspace={selectedWorkspace}
        //     setSelectedWorkspace={setSelectedWorkspace}
        //     onClose={() => setWorkspaceSelectorOpen(false)}
        // />
        'Hello'}
    </div>
  );
};

export default WorkspaceSelector;
