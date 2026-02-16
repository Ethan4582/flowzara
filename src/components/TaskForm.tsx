'use client';

import React, { useState } from 'react';
import type { Task, Priority, ColumnId } from '@/src/types';

interface TaskFormProps {
  task?: Task | null;            
  defaultColumn?: ColumnId;
  onSubmit: (data: {
    title: string;
    description: string;
    priority: Priority;
    dueDate: string;
    tags: string[];
    columnId: ColumnId;
  }) => void;
  onCancel: () => void;
}

export default function TaskForm({
  task = null,
  defaultColumn = 'todo',
  onSubmit,
  onCancel,
}: TaskFormProps) {
  const [title, setTitle] = useState(task?.title ?? '');
  const [description, setDescription] = useState(task?.description ?? '');
  const [priority, setPriority] = useState<Priority>(task?.priority ?? 'medium');
  const [dueDate, setDueDate] = useState(task?.dueDate ?? '');
  const [tagsStr, setTagsStr] = useState(task?.tags?.join(', ') ?? '');
  const [columnId, setColumnId] = useState<ColumnId>(task?.columnId ?? defaultColumn);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

  
    if (!title.trim()) {
      setError('Title is required.');
      return;
    }
    if (dueDate) {
      const selected = new Date(dueDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        setError('Due date cannot be in the past.');
        return;
      }
    }

    const tags = tagsStr
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    onSubmit({ title: title.trim(), description: description.trim(), priority, dueDate, tags, columnId });
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
      }}
      onClick={onCancel}
    >
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
        className="card"
        style={{ width: 440, padding: 24 }}
      >
        <h3 style={{ marginTop: 0, marginBottom: 16 }}>
          {task ? 'Edit Task' : 'New Task'}
        </h3>

        {error && <p style={{ color: 'var(--danger)', fontSize: 13, margin: '0 0 12px' }}>{error}</p>}

        <label className="small">Title *</label>
        <input
          className="input"
          style={{ width: '100%', marginBottom: 12 }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
          autoFocus
        />

        <label className="small">Description</label>
        <textarea
          className="input"
          style={{ width: '100%', marginBottom: 12, minHeight: 60, resize: 'vertical' }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Optional description"
        />

        <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
          <div style={{ flex: 1 }}>
            <label className="small">Priority</label>
            <select
              className="input"
              style={{ width: '100%' }}
              value={priority}
              onChange={(e) => setPriority(e.target.value as Priority)}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div style={{ flex: 1 }}>
            <label className="small">Column</label>
            <select
              className="input"
              style={{ width: '100%' }}
              value={columnId}
              onChange={(e) => setColumnId(e.target.value as ColumnId)}
            >
              <option value="todo">Todo</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
          </div>
        </div>

        <label className="small">Due Date</label>
        <input
          className="input"
          type="date"
          style={{ width: '100%', marginBottom: 12 }}
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

        <label className="small">Tags (comma-separated)</label>
        <input
          className="input"
          style={{ width: '100%', marginBottom: 20 }}
          value={tagsStr}
          onChange={(e) => setTagsStr(e.target.value)}
          placeholder="e.g. urgent, frontend"
        />

        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
          <button type="button" className="btn secondary" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className="btn">
            {task ? 'Save' : 'Create'}
          </button>
        </div>
      </form>
    </div>
  );
}