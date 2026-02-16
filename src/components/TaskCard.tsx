'use client';

import React from 'react';
import type { Task } from '@/src/types';

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string, title: string) => void;
}


export default function TaskCard({ task, onEdit, onDelete }: TaskCardProps) {
  const priorityBadgeColor =
    task.priority === 'high'
      ? 'var(--prio-high)'
      : task.priority === 'medium'
        ? 'var(--prio-medium)'
        : 'var(--prio-low)';

  return (
    <div className={`task priority-${task.priority}`}>
    
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
        <strong style={{ fontSize: 14, flex: 1 }}>{task.title}</strong>
        <div style={{ display: 'flex', gap: 4, flexShrink: 0 }}>
          <button
            className="btn secondary"
            style={{ padding: '2px 8px', fontSize: 12 }}
            onClick={() => onEdit(task)}
          >
            Edit
          </button>
          <button
            className="btn"
            style={{ padding: '2px 8px', fontSize: 12, background: 'var(--danger)' }}
            onClick={() => onDelete(task.id, task.title)}
          >
            Del
          </button>
        </div>
      </div>

   
      {task.description && (
        <p className="small" style={{ margin: '4px 0 0' }}>
          {task.description}
        </p>
      )}

    
      <div className="meta">
        <span
          style={{
            background: priorityBadgeColor,
            color: '#fff',
            padding: '1px 6px',
            borderRadius: 4,
            fontSize: 11,
            fontWeight: 600,
          }}
        >
          {task.priority}
        </span>
        {task.dueDate && <span>📅 {new Date(task.dueDate).toLocaleDateString()}</span>}
        {task.tags.map((tag) => (
          <span
            key={tag}
            style={{ background: 'var(--bg)', padding: '1px 6px', borderRadius: 4, fontSize: 11 }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}