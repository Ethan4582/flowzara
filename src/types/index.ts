
export type Priority = 'low' | 'medium' | 'high';

export type ColumnId = 'todo' | 'doing' | 'done';

/** Task model */
export interface Task {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  dueDate: string;      
  tags: string[];
  createdAt: string;     
  columnId: ColumnId;
}

/** Activity log entry */
export interface Activity {
  id: string;
  message: string;
  timestamp: string;    
}

/** Full board state persisted to localStorage */
export interface BoardState {
  tasks: Task[];
  activities: Activity[];
}


