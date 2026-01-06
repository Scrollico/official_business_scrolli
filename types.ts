
export type Role = 'user' | 'assistant';

export interface Message {
  id: string;
  role: Role;
  content: string;
  timestamp: Date;
  sources?: Array<{
    title: string;
    uri: string;
  }>;
  feedback?: 'up' | 'down';
}

export interface EventScheduleItem {
  time: string;
  title: string;
}

export interface EventData {
  name: string;
  topic: string;
  date: string;
  venue: string;
  schedule: EventScheduleItem[];
}
