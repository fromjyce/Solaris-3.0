import Sidebar from "./sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow p-6 bg-gray-100 min-h-screen overflow-y-auto ml-64">
        {children}
      </main>
    </div>
  );
};

export default Layout;