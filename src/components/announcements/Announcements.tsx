
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Announcement } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

interface AnnouncementsProps {
  announcements: Announcement[];
}

export function Announcements({ announcements }: AnnouncementsProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Announcements</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        {announcements.length > 0 ? (
          <div className="divide-y">
            {announcements.map((item) => (
              <div key={item.id} className="p-3 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium flex items-center gap-2">
                    {item.title}
                    {item.important && (
                      <Badge variant="destructive" className="text-xs">Important</Badge>
                    )}
                  </h3>
                  <span className="text-xs text-gray-500">{item.date}</span>
                </div>
                <p className="mt-1 text-sm text-gray-600 line-clamp-2">{item.content}</p>
                <div className="mt-2 text-xs text-gray-500">
                  By {item.author}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-6 text-center text-gray-500">
            No announcements
          </div>
        )}
      </CardContent>
    </Card>
  );
}
