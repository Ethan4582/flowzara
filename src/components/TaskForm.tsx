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
      className="fixed inset-0  flex items-center justify-center z-50"
      onClick={onCancel}
    >
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-6 w-[440px]"
      >
        <h3 className="text-lg font-semibold mt-0 mb-4">
          {task ? 'Edit Task' : 'New Task'}
        </h3>

        {error && (
          <p className="text-red-600 text-sm mb-3">
            {error}
          </p>
        )}

        <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
        <input
          className="w-full border border-gray-300 rounded px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
          autoFocus
        />

        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <textarea
          className="w-full border border-gray-300 rounded px-3 py-2 mb-3 min-h-[60px] resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Optional description"
        />

        <div className="flex gap-3 mb-3">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
            <select
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={priority}
              onChange={(e) => setPriority(e.target.value as Priority)}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Column</label>
            <select
              className="w-3/4 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={columnId}
              onChange={(e) => setColumnId(e.target.value as ColumnId)}
            >
              <option value="todo">Todo</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
          </div>
        </div>

        <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
        <input
          className="w-full border border-gray-300 rounded px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

        <label className="block text-sm font-medium text-gray-700 mb-1">Tags (comma-separated)</label>
        <input
          className="w-full border border-gray-300 rounded px-3 py-2 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={tagsStr}
          onChange={(e) => setTagsStr(e.target.value)}
          placeholder="e.g. urgent, frontend"
        />

        <div className="flex gap-2 justify-end">
          <button
            type="button"
            className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {task ? 'Save' : 'Create'}
          </button>
        </div>
      </form>
    </div>
  );
}