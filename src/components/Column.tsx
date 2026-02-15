'use client';

import React from 'react';
import type { Task, ColumnId } from '@/src/types';
import TaskCard from './TaskCard';

interface ColumnProps {
  columnId: ColumnId;
  title: string;
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (id: string, title: string) => void;
  onAddTask: (col: ColumnId) => void;
  /** HTML5 drag callbacks forwarded from the board */
  onDragStart: (e: React.DragEvent, taskId: string) => void;
  onDrop: (e: React.DragEvent, col: ColumnId) => void;
}

const DOT_COLORS: Record<ColumnId, string> = {
  todo: 'var(--prio-low)',
  doing: 'var(--prio-medium)',
  done: 'var(--success)',
};

export default function Column({
  columnId,
  title,
  tasks,
  onEdit,
  onDelete,
  onAddTask,
  onDragStart,
  onDrop,
}: ColumnProps) {
  return (
    <div
      className="column"
      onDragOver={(e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
      }}
      onDrop={(e) => onDrop(e, columnId)}
    >
      {/* column header */}
      <div className="column-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: DOT_COLORS[columnId],
              display: 'inline-block',
            }}
          />
          <span>{title}</span>
          <span className="muted" style={{ fontSize: 12, fontWeight: 400 }}>
            ({tasks.length})
          </span>
        </div>
        <button
          className="btn"
          style={{ padding: '2px 10px', fontSize: 16, lineHeight: 1 }}
          onClick={() => onAddTask(columnId)}
        >
          +
        </button>
      </div>

      {/* task cards */}
      {tasks.map((task) => (
        <div
          key={task.id}
          draggable
          onDragStart={(e) => onDragStart(e, task.id)}
        >
          <TaskCard task={task} onEdit={onEdit} onDelete={onDelete} />
        </div>
      ))}

      {tasks.length === 0 && (
        <p className="muted center" style={{ padding: 32, fontSize: 13 }}>
          Drop tasks here
        </p>
      )}
    </div>
  );
}