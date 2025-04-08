
import { pendingAssignments, recentAnnouncements, todaySchedule, upcomingTests } from "@/utils/mockData";
import { Timetable } from "@/components/timetable/Timetable";
import { Announcements } from "@/components/announcements/Announcements";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarCheck, FileText } from "lucide-react";

interface DashboardProps {
  role: 'student' | 'teacher' | 'admin';
}

export function Dashboard({ role }: DashboardProps) {
  return (
    <div className="container py-6 max-w-6xl">
      <h1 className="text-2xl font-bold mb-6">Your Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-7 gap-6">
        <div className="col-span-1 md:col-span-4 space-y-6">
          <Timetable schedule={todaySchedule} />
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Pending Assignments</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {pendingAssignments.length > 0 ? (
                <div className="divide-y">
                  {pendingAssignments.map((assignment) => (
                    <div key={assignment.id} className="p-3 hover:bg-gray-50">
                      <div className="flex justify-between">
                        <div className="flex items-start">
                          <FileText size={16} className="mr-2 mt-0.5 text-college-accent" />
                          <div>
                            <h3 className="font-medium">{assignment.title}</h3>
                            <p className="text-sm text-gray-500">{assignment.subject}</p>
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">Due: {assignment.dueDate}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-6 text-center text-gray-500">No pending assignments</div>
              )}
            </CardContent>
          </Card>
        </div>
        
        <div className="col-span-1 md:col-span-3 space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Upcoming Tests</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {upcomingTests.length > 0 ? (
                <div className="divide-y">
                  {upcomingTests.map((test) => (
                    <div key={test.id} className="p-3 hover:bg-gray-50">
                      <div className="flex justify-between">
                        <div className="flex items-start">
                          <CalendarCheck size={16} className="mr-2 mt-0.5 text-college-secondary" />
                          <div>
                            <h3 className="font-medium">{test.title}</h3>
                            <p className="text-sm text-gray-500">{test.subject}</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-1 flex flex-col text-sm">
                        <span className="text-gray-600">Date: {test.date}</span>
                        <span className="text-gray-600">Time: {test.time}</span>
                        {test.room && <span className="text-gray-600">Room: {test.room}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-6 text-center text-gray-500">No upcoming tests</div>
              )}
            </CardContent>
          </Card>
          
          <Announcements announcements={recentAnnouncements} />
        </div>
      </div>
    </div>
  );
}
