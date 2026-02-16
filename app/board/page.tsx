'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/src/context/AuthContext';
import { BoardProvider, useBoard } from '@/src/context/BoardContext';
import type { Task, ColumnId, Priority } from '@/src/types';
import ProtectedRoute from '@/src/components/ProtectedRoute';
import Column from '@/src/components/Column';
import TaskForm from '@/src/components/TaskForm';
import SearchFilter from '@/src/components/SearchFilter';
import ActivityLog from '@/src/components/ActivityLog';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from '@/src/context/ThemeContext';

import { useTheme } from '@/src/context/ThemeContext';

import ThemeSwitcher from '@/src/components/ThemeSwitcher';

const COLUMNS: { id: ColumnId; title: string }[] = [
  { id: 'todo', title: 'Todo' },
  { id: 'doing', title: 'Doing' },
  { id: 'done', title: 'Done' },
];


function sortByDue(a: Task, b: Task): number {
  if (!a.dueDate && !b.dueDate) return 0;
  if (!a.dueDate) return 1;
  if (!b.dueDate) return -1;
  return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
}

function BoardContent() {
  const { state, dispatch } = useBoard();
  const { email, logout } = useAuth();
  const router = useRouter();
  const { currentTheme } = useTheme();


  const [search, setSearch] = useState('');
  const [priorityFilter, setPriorityFilter] = useState<Priority | 'all'>('all');
  const [sortDue, setSortDue] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [defaultCol, setDefaultCol] = useState<ColumnId>('todo');


  const [showActivityPopover, setShowActivityPopover] = useState(false);

 
  const columnTasks = useMemo(() => {
    let tasks = state.tasks;

    if (search) {
      const q = search.toLowerCase();
      tasks = tasks.filter((t) => t.title.toLowerCase().includes(q));
    }
    if (priorityFilter !== 'all') {
      tasks = tasks.filter((t) => t.priority === priorityFilter);
    }
    if (sortDue) {
      tasks = [...tasks].sort(sortByDue);
    }

    const map: Record<ColumnId, Task[]> = { todo: [], doing: [], done: [] };
    tasks.forEach((t) => map[t.columnId].push(t));
    return map;
  }, [state.tasks, search, priorityFilter, sortDue]);


  const handleAddTask = useCallback((col: ColumnId) => {
    setEditingTask(null);
    setDefaultCol(col);
    setFormOpen(true);
  }, []);

  const handleEdit = useCallback((task: Task) => {
    setEditingTask(task);
    setFormOpen(true);
  }, []);

  const handleDelete = useCallback(
    (id: string, title: string) => {
      if (confirm(`Delete "${title}"?`)) {
        dispatch({ type: 'DELETE_TASK', payload: { id, title } });
      }
    },
    [dispatch],
  );

  const handleFormSubmit = useCallback(
    (data: Omit<Task, 'id' | 'createdAt'>) => {
      if (editingTask) {
        dispatch({ type: 'EDIT_TASK', payload: { id: editingTask.id, updates: data } });
      } else {
        dispatch({ type: 'CREATE_TASK', payload: data });
      }
      setFormOpen(false);
      setEditingTask(null);
    },
    [dispatch, editingTask],
  );

  const handleReset = useCallback(() => {
    if (confirm('Reset the entire board? This cannot be undone.')) {
      dispatch({ type: 'RESET_BOARD' });
    }
  }, [dispatch]);

  const handleLogout = useCallback(() => {
    logout();
    router.push('/login');
  }, [logout, router]);


  const handleDragStart = useCallback((e: React.DragEvent, taskId: string) => {
    e.dataTransfer.setData('text/plain', taskId);
    e.dataTransfer.effectAllowed = 'move';
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent, toColumn: ColumnId) => {
      e.preventDefault();
      const taskId = e.dataTransfer.getData('text/plain');
      if (taskId) {
        dispatch({ type: 'MOVE_TASK', payload: { id: taskId, toColumn } });
      }
    },
    [dispatch],
  );

  return (
    <div className="relative min-h-screen">
     
      <div
          className={`absolute inset-0 ${currentTheme?.backgroundClass || ''}`}
          style={currentTheme?.backgroundStyle}
        />

      <div className="relative z-10 container py-6">
        {/* ── Header ── */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <h1 style={{ margin: 0, fontSize: 22 }}>📋 Task Board</h1>
            <p className="small" style={{ margin: '4px 0 0' }}>
              Signed in as <strong>{email}</strong>
            </p>
          </div>

          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        
            <ThemeSwitcher />

    
            <div
              style={{ position: 'relative', display: 'inline-block' }}
              onMouseEnter={() => setShowActivityPopover(true)}
              onMouseLeave={() => setShowActivityPopover(false)}
              aria-haspopup="true"
              aria-expanded={showActivityPopover}
            >
              <button
                className="btn secondary"
                style={{
                  transition: 'background-color 140ms, color 140ms',
                  background: showActivityPopover ? 'var(--color-primary)' : undefined,
                  color: showActivityPopover ? 'var(--text-inverse)' : undefined,
                  borderColor: showActivityPopover ? 'transparent' : undefined,
                }}
              >
                Activity Log
              </button>

              <AnimatePresence>
                {showActivityPopover && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.98 }}
                    transition={{ duration: 0.12 }}
                    style={{
                      position: 'absolute',
                      right: 0,
                      top: 'calc(100% + 8px)',
                      width: 320,
                      zIndex: 60,
                    }}
                  >
                   
                    <ActivityLog activities={state.activities} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button className="btn secondary" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>

        <SearchFilter
          search={search}
          onSearchChange={setSearch}
          priorityFilter={priorityFilter}
          onPriorityChange={setPriorityFilter}
          sortByDueDate={sortDue}
          onSortToggle={() => setSortDue(!sortDue)}
          onReset={handleReset}
        />

        <div className="board">
          {COLUMNS.map((col) => (
            <Column
              key={col.id}
              columnId={col.id}
              title={col.title}
              tasks={columnTasks[col.id]}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onAddTask={handleAddTask}
              onDragStart={handleDragStart}
              onDrop={handleDrop}
            />
          ))}
        </div>

      
        {formOpen && (
          <TaskForm
            task={editingTask}
            defaultColumn={defaultCol}
            onSubmit={handleFormSubmit}
            onCancel={() => {
              setFormOpen(false);
              setEditingTask(null);
            }}
          />
        )}
      </div>
    </div>
  );
}



export default function BoardPage() {
  return (
    <ProtectedRoute>
      <ThemeProvider>
        <BoardProvider>
          <BoardContent />
        </BoardProvider>
      </ThemeProvider>
    </ProtectedRoute>
  );
}