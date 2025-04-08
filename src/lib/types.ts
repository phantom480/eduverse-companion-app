
export type UserRole = 'student' | 'teacher' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  profileImage?: string;
}

export interface ClassSchedule {
  id: string;
  subject: string;
  day: string;
  startTime: string;
  endTime: string;
  room: string;
  teacher: string;
}

export interface Assignment {
  id: string;
  title: string;
  subject: string;
  description: string;
  dueDate: string;
  completed?: boolean;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  important?: boolean;
}

export interface Test {
  id: string;
  subject: string;
  title: string;
  date: string;
  time: string;
  room?: string;
}
