'use client';

import React, { createContext, useContext, useReducer, useEffect, useRef } from 'react';
import type { Task, Activity, ColumnId, BoardState } from '@/src/types';
import { getItem, setItem } from '@/src/utils/storage';

const BOARD_KEY = 'flowzara_board';
const MAX_ACTIVITIES = 50;


function uid(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function log(activities: Activity[], message: string): Activity[] {
  return [
    { id: uid(), message, timestamp: new Date().toISOString() },
    ...activities,
  ].slice(0, MAX_ACTIVITIES);
}


export type BoardAction =
  | { type: 'CREATE_TASK'; payload: Omit<Task, 'id' | 'createdAt'> }
  | { type: 'EDIT_TASK'; payload: { id: string; updates: Partial<Task> } }
  | { type: 'DELETE_TASK'; payload: { id: string; title: string } }
  | { type: 'MOVE_TASK'; payload: { id: string; toColumn: ColumnId } }
  | { type: 'RESET_BOARD' }
  | { type: 'HYDRATE'; payload: BoardState };

const initialState: BoardState = { tasks: [], activities: [] };

function boardReducer(state: BoardState, action: BoardAction): BoardState {
  switch (action.type) {
    case 'CREATE_TASK': {
      const task: Task = { ...action.payload, id: uid(), createdAt: new Date().toISOString() };
      return {
        tasks: [...state.tasks, task],
        activities: log(state.activities, `Created "${task.title}" in ${task.columnId}`),
      };
    }
    case 'EDIT_TASK': {
      const t = state.tasks.find((x) => x.id === action.payload.id);
      if (!t) return state;
      return {
        tasks: state.tasks.map((x) =>
          x.id === action.payload.id ? { ...x, ...action.payload.updates } : x,
        ),
        activities: log(state.activities, `Edited "${t.title}"`),
      };
    }
    case 'DELETE_TASK':
      return {
        tasks: state.tasks.filter((x) => x.id !== action.payload.id),
        activities: log(state.activities, `Deleted "${action.payload.title}"`),
      };
    case 'MOVE_TASK': {
      const t = state.tasks.find((x) => x.id === action.payload.id);
      if (!t || t.columnId === action.payload.toColumn) return state;
      return {
        tasks: state.tasks.map((x) =>
          x.id === action.payload.id ? { ...x, columnId: action.payload.toColumn } : x,
        ),
        activities: log(state.activities, `Moved "${t.title}" from ${t.columnId} → ${action.payload.toColumn}`),
      };
    }
    case 'RESET_BOARD':
      return { tasks: [], activities: log([], 'Board was reset') };
    case 'HYDRATE':
      return action.payload;
    default:
      return state;
  }
}



interface BoardContextType {
  state: BoardState;
  dispatch: React.Dispatch<BoardAction>;
}

const BoardContext = createContext<BoardContextType | null>(null);

export function BoardProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(boardReducer, initialState);
  const hydrated = useRef(false);

  

  useEffect(() => {
    const stored = getItem<BoardState | null>(BOARD_KEY, null);
    if (stored && Array.isArray(stored.tasks)) {
      dispatch({ type: 'HYDRATE', payload: stored });
    }
    hydrated.current = true;
  }, []);


  useEffect(() => {
    if (hydrated.current) setItem(BOARD_KEY, state);
  }, [state]);

  return (
    <BoardContext.Provider value={{ state, dispatch }}>
      {children}
    </BoardContext.Provider>
  );
}

export function useBoard() {
  const ctx = useContext(BoardContext);
  if (!ctx) throw new Error('useBoard must be used within BoardProvider');
  return ctx;
}


