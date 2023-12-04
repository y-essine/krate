import { useState } from 'react';
import Link from 'next/link';
import { Menu } from '@headlessui/react';
import { Settings, User as Profile, LogOut } from 'react-feather';
import clsx from 'clsx';
import Avatar from '@components/ui/avatars/Avatar';
import Dropdown from '@components/ui/dropdown/Dropdown';
import LogoutModal from './modals/LogoutModal';
import { userStore } from '@/store';

const UserDropdownAvatar = () => {
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
  const { user } = userStore();

  return (
    <>
      <Dropdown element={<Avatar className="h-12 w-12" />}>
        <div>
          <Menu.Item className="cursor-default">
            {({}) => (
              <div className={clsx('text-primary-t/80', 'block px-4 py-2 text-sm cursor-pointer')}>
                <span className="flex items-center  h-20">Connected as: {user?.username}</span>
              </div>
            )}
          </Menu.Item>
        </div>
        <div className="py-1">
          <Menu.Item>
            {({ active }) => (
              <div className="px-1">
                <Link
                  href="/profile"
                  className={clsx(
                    active ? 'bg-accent' : 'text-primary-t/80',
                    'block px-3 py-1 text-sm cursor-pointer rounded'
                  )}>
                  <span className="flex items-center">
                    <Profile size={18} className="w-6 mr-2" /> Profile
                  </span>
                </Link>
              </div>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <div className="px-1">
                <Link
                  href="/settings"
                  className={clsx(
                    active ? 'bg-accent' : 'text-primary-t/80',
                    'block px-3 py-1 text-sm cursor-pointer rounded'
                  )}>
                  <span className="flex items-center">
                    <Settings size={16} className="w-6 mr-2" /> Settings
                  </span>
                </Link>
              </div>
            )}
          </Menu.Item>
        </div>
        <div className="py-1">
          <Menu.Item>
            {({ active }) => (
              <div className="px-1">
                <a
                  className={clsx(
                    active ? 'bg-accent' : 'text-primary-t/80',
                    'block px-3 py-1 text-sm cursor-pointer rounded'
                  )}
                  onClick={() => setLogoutModalOpen(true)}>
                  <span className="flex items-center">
                    <LogOut size={16} className="w-6 mr-2" /> Logout
                  </span>
                </a>
              </div>
            )}
          </Menu.Item>
        </div>
      </Dropdown>
      <LogoutModal openNow={isLogoutModalOpen} onClose={() => setLogoutModalOpen(false)} />
    </>
  );
};

export default UserDropdownAvatar;
