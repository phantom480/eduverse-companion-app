
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClassSchedule } from "@/lib/types";
import { Clock } from "lucide-react";

interface TimetableProps {
  schedule: ClassSchedule[];
  title?: string;
  compact?: boolean;
}

export function Timetable({ schedule, title = "Today's Classes", compact = false }: TimetableProps) {
  // Sort schedule by start time
  const sortedSchedule = [...schedule].sort((a, b) => 
    a.startTime.localeCompare(b.startTime)
  );

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        {sortedSchedule.length > 0 ? (
          <div className="space-y-1">
            {sortedSchedule.map((item) => (
              <div 
                key={item.id}
                className="p-3 border-l-4 border-college-primary hover:bg-college-light transition-colors"
              >
                <div className="flex justify-between">
                  <h3 className="font-medium">{item.subject}</h3>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock size={14} className="mr-1" />
                    {item.startTime} - {item.endTime}
                  </div>
                </div>
                {!compact && (
                  <div className="mt-1 flex justify-between text-sm">
                    <span className="text-gray-600">{item.room}</span>
                    <span className="text-gray-600">{item.teacher}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="p-6 text-center text-gray-500">
            No classes scheduled
          </div>
        )}
      </CardContent>
    </Card>
  );
}
