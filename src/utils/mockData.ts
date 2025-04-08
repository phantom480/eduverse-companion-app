
import { Assignment, Announcement, ClassSchedule, Test, User } from "@/lib/types";

export const currentUser: User = {
  id: "1",
  name: "Alex Johnson",
  email: "alex.johnson@college.edu",
  role: "student",
  profileImage: "https://i.pravatar.cc/150?img=11"
};

export const todaySchedule: ClassSchedule[] = [
  {
    id: "cs1",
    subject: "Computer Science 101",
    day: "Monday",
    startTime: "09:00",
    endTime: "10:30",
    room: "Hall B-12",
    teacher: "Dr. Sarah Williams"
  },
  {
    id: "math1",
    subject: "Advanced Mathematics",
    day: "Monday",
    startTime: "11:00",
    endTime: "12:30",
    room: "Hall A-5",
    teacher: "Prof. Robert Chen"
  },
  {
    id: "phys1",
    subject: "Physics Lab",
    day: "Monday",
    startTime: "14:00",
    endTime: "16:00",
    room: "Lab 4",
    teacher: "Dr. Michael Brown"
  }
];

export const weeklySchedule: ClassSchedule[] = [
  ...todaySchedule,
  {
    id: "cs2",
    subject: "Database Systems",
    day: "Tuesday",
    startTime: "10:00",
    endTime: "11:30",
    room: "Hall C-7",
    teacher: "Prof. Lisa Garcia"
  },
  {
    id: "eng1",
    subject: "Technical Writing",
    day: "Tuesday",
    startTime: "13:00",
    endTime: "14:30",
    room: "Hall A-3",
    teacher: "Dr. James Wilson"
  },
  {
    id: "cs3",
    subject: "Web Development",
    day: "Wednesday",
    startTime: "09:00",
    endTime: "10:30",
    room: "Lab 2",
    teacher: "Prof. Emma Davis"
  },
  {
    id: "art1",
    subject: "Design Fundamentals",
    day: "Wednesday",
    startTime: "11:00",
    endTime: "12:30",
    room: "Studio 3",
    teacher: "Prof. David Lee"
  },
  {
    id: "math2",
    subject: "Statistics",
    day: "Thursday",
    startTime: "14:00",
    endTime: "15:30",
    room: "Hall B-8",
    teacher: "Dr. Jennifer White"
  },
  {
    id: "cs4",
    subject: "Algorithms",
    day: "Friday",
    startTime: "10:00",
    endTime: "11:30",
    room: "Hall A-1",
    teacher: "Dr. Thomas Anderson"
  }
];

export const pendingAssignments: Assignment[] = [
  {
    id: "a1",
    title: "Web Development Project",
    subject: "Web Development",
    description: "Create a responsive website with HTML, CSS, and JavaScript",
    dueDate: "2025-04-15"
  },
  {
    id: "a2",
    title: "Database Design Assignment",
    subject: "Database Systems",
    description: "Design a normalized database schema for the given case study",
    dueDate: "2025-04-12"
  },
  {
    id: "a3",
    title: "Physics Problem Set",
    subject: "Physics Lab",
    description: "Solve the mechanics problems on pages 45-48",
    dueDate: "2025-04-10"
  }
];

export const upcomingTests: Test[] = [
  {
    id: "t1",
    subject: "Computer Science 101",
    title: "Midterm Exam",
    date: "2025-04-20",
    time: "10:00 - 12:00",
    room: "Exam Hall 1"
  },
  {
    id: "t2",
    subject: "Advanced Mathematics",
    title: "Quiz 3",
    date: "2025-04-14",
    time: "09:00 - 09:45",
    room: "Hall A-5"
  }
];

export const recentAnnouncements: Announcement[] = [
  {
    id: "an1",
    title: "Campus Maintenance Notice",
    content: "The main library will be closed this weekend for maintenance. Online resources remain available.",
    date: "2025-04-07",
    author: "Facilities Department",
    important: true
  },
  {
    id: "an2",
    title: "Upcoming Career Fair",
    content: "Don't miss the Spring Career Fair next Monday. Over 50 companies will be attending. Bring your resume!",
    date: "2025-04-06",
    author: "Career Services",
    important: true
  },
  {
    id: "an3",
    title: "New Research Opportunities",
    content: "The Computer Science department has new research assistant positions available. Apply by April 20th.",
    date: "2025-04-05",
    author: "Dr. Thomas Anderson"
  },
  {
    id: "an4",
    title: "Student Council Elections",
    content: "Nominations for Student Council positions are now open. Submit your application by April 15th.",
    date: "2025-04-04",
    author: "Student Affairs Office"
  }
];
