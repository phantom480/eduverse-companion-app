
import { Button } from "@/components/ui/button";
import { currentUser } from "@/utils/mockData";
import { UserAvatar } from "@/components/common/UserAvatar";
import { Bell, BookOpen, Calendar, FileText, Home, LogOut } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const NavItem = ({ icon, label, active, onClick }: NavItemProps) => (
  <Button
    variant="ghost"
    className={cn(
      "flex items-center gap-2 justify-start w-full", 
      active ? "bg-college-light text-college-accent" : "hover:bg-college-light hover:text-college-accent"
    )}
    onClick={onClick}
  >
    {icon}
    <span>{label}</span>
  </Button>
);

export function Navbar() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  
  const navItems = [
    { icon: <Home size={18} />, label: "Dashboard" },
    { icon: <Calendar size={18} />, label: "Schedule" },
    { icon: <FileText size={18} />, label: "Assignments" },
    { icon: <BookOpen size={18} />, label: "Notes" },
    { icon: <Bell size={18} />, label: "Announcements" },
  ];

  return (
    <div className="border-b bg-white flex justify-between items-center px-6 py-2">
      <div className="flex items-center gap-2">
        <div className="font-bold text-xl text-college-primary">CollegeCompanion</div>
      </div>
      
      <div className="hidden md:flex gap-1">
        {navItems.map((item) => (
          <NavItem 
            key={item.label}
            icon={item.icon}
            label={item.label}
            active={activeTab === item.label}
            onClick={() => setActiveTab(item.label)}
          />
        ))}
      </div>
      
      <div className="flex items-center gap-4">
        <div className="hidden sm:block text-right text-sm">
          <div className="font-medium">{currentUser.name}</div>
          <div className="text-xs text-gray-500 capitalize">{currentUser.role}</div>
        </div>
        <UserAvatar user={currentUser} />
      </div>
    </div>
  );
}
