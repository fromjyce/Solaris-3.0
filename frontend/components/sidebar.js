import { useRouter } from "next/router";  
import { MdSpaceDashboard } from "react-icons/md";
import { FaStoreAlt, FaSignOutAlt } from "react-icons/fa";
import { FaWallet } from "react-icons/fa6";
import { HiTrophy } from "react-icons/hi2";
import { IoSettings } from "react-icons/io5";
import Link from "next/link";
import { useAuth } from "@/context/useAuth";

export default function Sidebar() {
  const router = useRouter();
  const { logout } = useAuth();

  const sidebarLinks = [
    { name: "Dashboard", href: "/dashboard", icon: <MdSpaceDashboard/> },
    { name: "Marketplace", href: "/market", icon: <FaStoreAlt/> },
    { name: "Wallet", href: "/wallet", icon: <FaWallet/> },
    { name: "Rewards", href: "/rewards", icon: <HiTrophy/> },
    { name: "Settings", href: "/settings", icon: <IoSettings/> },
  ];

  return (
    <div className="w-64 min-h-screen bg-[#3f8649ff] text-white flex flex-col fixed top-0 left-0">
      <div className="p-6 text-2xl font-bold border-b border-[#072000ff] kumbhSans">
        <Link href="/" className="hover:text-[#072000ff]">Solaris 2.0</Link>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul>
          {sidebarLinks.map((link) => (
            <li
              key={link.name}
              className={`p-4 flex items-center gap-3 hover:bg-[#072000ff] gabarito text-xl ${
                router.pathname === link.href ? "bg-[#072000ff]" : ""
              }`}
            >
              {link.icon}
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div
        onClick={logout}
        className="p-4 border-t border-[#072000ff] gabarito text-xl hover:bg-[#072000ff] cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <FaSignOutAlt />
          Logout
        </div>
      </div>
      <div className="p-4 mt-auto text-md text-center afacad border-t border-[#072000ff]">
        <p>
          Developed by <strong>Team Simpsons</strong> for{" "}
          <strong>I ❤️ Hackathon</strong>
        </p>
      </div>
    </div>
  );
}
