export type ActivityType =
  | 'transport'
  | 'activity'
  | 'food'
  | 'accommodation'
  | 'shopping'
  | 'other';

export interface LocationItem {
  name: string;
  url: string;
}

export interface Activity {
  time: string;
  title: string;
  description?: string;
  type: ActivityType;
  locations?: LocationItem[];
}

export interface DayPlan {
  date: string;
  title: string;
  activities: Activity[];
}

export interface TodoItem {
  id: string;
  label: string;
  checked: boolean;
  comment: string;
  mapUrl?: string;
  mapName?: string;
}

export interface TipItem {
  subtitle: string;
  content: string;
  highlight?: boolean;
  warning?: boolean;
}

export interface TipCategory {
  id: string;
  title: string;
  iconName: 'file-text' | 'credit-card' | 'utensils' | 'plug' | 'phone-call';
  badge?: string;
  items: TipItem[];
}
