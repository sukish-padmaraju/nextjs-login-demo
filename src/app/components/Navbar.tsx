"use client";
import { Home, User, Bell, Settings, LogOut, Menu, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export function Navbar() {
  const router = useRouter();
  const userId = "me";
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return;
    function handleClick(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);

  const navItems = [
    { label: "Home", icon: <Home className="w-5 h-5" />, onClick: () => router.push("/home") },
    { label: "Profile", icon: <User className="w-5 h-5" />, onClick: () => router.push(`/user/${userId}`) },
    { label: "Notifications", icon: <Bell className="w-5 h-5" />, onClick: () => router.push("/notifications") },
    { label: "Settings", icon: <Settings className="w-5 h-5" />, onClick: () => router.push("/settings") },
    { label: "Logout", icon: <LogOut className="w-5 h-5" />, onClick: () => router.push("/login"), className: "text-red-600 mt-8" },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-gray-300/40 bg-white shadow-sm w-full relative">
        <div className="flex items-center space-x-2">
          <Menu
            className="w-6 h-6 text-blue-600 cursor-pointer"
            onClick={() => setMenuOpen((open) => !open)}
          />
          <span className="text-lg font-bold text-blue-700">Nerby Alerts</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-8 pr-3 py-1 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <Search className="absolute left-2 top-1.5 w-4 h-4 text-gray-500" />
          </div>
          <div
            className="bg-orange-500 text-white w-6 h-6 flex items-center justify-center rounded-full font-bold text-sm cursor-pointer"
            onClick={() => router.push(`/user/${userId}`)}
          >
            S
          </div>
          <Bell
            className="w-5 h-5 text-blue-700 cursor-pointer"
            onClick={() => router.push("/notifications")}
          />
        </div>
        {/* Downward Dropdown Menu */}
        {menuOpen && (
          <div
            ref={menuRef}
            className="absolute left-0 top-full min-w-[230px] max-w-xs bg-white shadow-lg border-b border-gray-200 z-50 animate-fadeInDown"
          >
            <nav className="flex flex-col gap-2 p-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  className={`flex items-center gap-2 text-gray-700 hover:text-blue-700 font-medium text-left ${item.className || ""}`}
                  onClick={() => {
                    item.onClick();
                    setMenuOpen(false);
                  }}
                >
                  {item.icon} {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}