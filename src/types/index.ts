/** Priority levels for tasks */
export type Priority = 'low' | 'medium' | 'high';

/** Fixed column identifiers */
export type ColumnId = 'todo' | 'doing' | 'done';

/** Task model */
export interface Task {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  dueDate: string;       // ISO date string or ''
  tags: string[];
  createdAt: string;     // ISO timestamp
  columnId: ColumnId;
}

/** Activity log entry */
export interface Activity {
  id: string;
  message: string;
  timestamp: string;     // ISO timestamp
}

/** Full board state persisted to localStorage */
export interface BoardState {
  tasks: Task[];
  activities: Activity[];
}


