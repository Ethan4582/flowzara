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

/* ── Column config ── */
const COLUMNS: { id: ColumnId; title: string }[] = [
  { id: 'todo', title: 'Todo' },
  { id: 'doing', title: 'Doing' },
  { id: 'done', title: 'Done' },
];

/** Sort helper — empty dueDates pushed last */
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

  /* ── UI state ── */
  const [search, setSearch] = useState('');
  const [priorityFilter, setPriorityFilter] = useState<Priority | 'all'>('all');
  const [sortDue, setSortDue] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [defaultCol, setDefaultCol] = useState<ColumnId>('todo');
  const [showActivity, setShowActivity] = useState(false);

  /* ── Filtered & sorted tasks per column ── */
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

  /* ── Handlers ── */
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

  /* ── Drag & Drop (HTML5) ── */
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
    <div className="container">
      {/* ── Header ── */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 22 }}>📋 Task Board</h1>
          <p className="small" style={{ margin: '4px 0 0' }}>
            Signed in as <strong>{email}</strong>
          </p>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button
            className={`btn ${showActivity ? '' : 'secondary'}`}
            onClick={() => setShowActivity(!showActivity)}
          >
            Activity Log
          </button>
          <button className="btn secondary" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {/* ── Controls ── */}
      <SearchFilter
        search={search}
        onSearchChange={setSearch}
        priorityFilter={priorityFilter}
        onPriorityChange={setPriorityFilter}
        sortByDueDate={sortDue}
        onSortToggle={() => setSortDue(!sortDue)}
        onReset={handleReset}
      />

      {/* ── Activity Log (collapsible) ── */}
      {showActivity && (
        <div className="card" style={{ marginTop: 16 }}>
          <strong style={{ fontSize: 13 }}>Recent Activity</strong>
          <ActivityLog activities={state.activities} />
        </div>
      )}

      {/* ── Board columns ── */}
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

      {/* ── Task Form Modal ── */}
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
  );
}

/** Board page wrapped with providers and auth guard */
export default function BoardPage() {
  return (
    <ProtectedRoute>
      <BoardProvider>
        <BoardContent />
      </BoardProvider>
    </ProtectedRoute>
  );
}