
import React from "react";
import { Timetable } from "@/components/timetable/Timetable";
import { Announcements } from "@/components/announcements/Announcements";
import { UserRole } from "@/lib/types";
import { Dashboard } from "./Dashboard";

interface DashboardTabContentProps {
  activeTab: string;
  role: UserRole;
}

const DashboardTabContent: React.FC<DashboardTabContentProps> = ({ activeTab, role }) => {
  switch (activeTab) {
    case "Dashboard":
      return <Dashboard role={role} />;
    case "Schedule":
      return <Timetable />;
    case "Announcements":
      return <Announcements />;
    case "Assignments":
      return (
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Assignments</h2>
          <p className="text-gray-600">Assignment tracking feature coming soon.</p>
        </div>
      );
    case "Notes":
      return (
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Notes</h2>
          <p className="text-gray-600">Notes sharing feature coming soon.</p>
        </div>
      );
    default:
      return <Dashboard role={role} />;
  }
};

export default DashboardTabContent;
