import Sidebar from "./sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow bg-gray-100 min-h-screen overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;