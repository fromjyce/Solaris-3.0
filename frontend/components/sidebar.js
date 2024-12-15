// components/Sidebar.js
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-6">Market Navigation</h2>
      <ul className="space-y-4">
        <li>
          <Link href="#market">
            <a className="hover:text-green-400">Live Market Data</a>
          </Link>
        </li>
        <li>
          <Link href="#rec-trading">
            <a className="hover:text-green-400">REC Trading</a>
          </Link>
        </li>
        <li>
          <Link href="#dashboard">
            <a className="hover:text-green-400">Energy Dashboard</a>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <a className="hover:text-green-400">About</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
