import Navbar from '@/shared/components/layouts/navbar/Navbar';
import Sidebar from '@/shared/components/layouts/sidebar/Sidebar';

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="flex h-full">
        <Sidebar />
        <div className="h-full w-full xs:w-[calc(100%-7rem)] lg:w-[calc(100%-14rem)] pb-16 xs:pb-0">
          <Navbar />
          <>{children}</>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
