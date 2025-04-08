
import { useState } from "react";
import { LoginForm } from "@/components/auth/LoginForm";
import { Navbar } from "@/components/layout/Navbar";
import { UserRole } from "@/lib/types";
import DashboardTabContent from "@/components/dashboard/DashboardTabContent";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<UserRole>("student");
  const [activeTab, setActiveTab] = useState("Dashboard");

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };
  
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  
  return (
    <div className="min-h-screen bg-college-gray flex flex-col">
      {isLoggedIn ? (
        <>
          <Navbar onTabChange={handleTabChange} />
          <main className="flex-1">
            <DashboardTabContent role={userRole} activeTab={activeTab} />
          </main>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-b from-white to-college-light">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-college-accent mb-2">CollegeCompanion</h1>
            <p className="text-xl text-gray-600">Your all-in-one college management application</p>
          </div>
          
          <LoginForm onLoginSuccess={handleLoginSuccess} />
        </div>
      )}
    </div>
  );
};

export default Index;
