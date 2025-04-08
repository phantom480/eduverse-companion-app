
import { useState } from "react";
import { LoginForm } from "@/components/auth/LoginForm";
import { Dashboard } from "@/components/dashboard/Dashboard";
import { Navbar } from "@/components/layout/Navbar";
import { UserRole } from "@/lib/types";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<UserRole>("student");

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };
  
  return (
    <div className="min-h-screen bg-college-gray flex flex-col">
      {isLoggedIn ? (
        <>
          <Navbar />
          <main className="flex-1">
            <Dashboard role={userRole} />
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
