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
      className="column flex flex-col h-[800px] max-h-[800px]" 
      onDragOver={(e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
      }}
      onDrop={(e) => onDrop(e, columnId)}
    >
     
      <div className="column-header flex items-center justify-between px-2 py-1">
        <div className="flex items-center gap-2">
          <span
            className="w-2.5 h-2.5 rounded-full inline-block"
            style={{ background: DOT_COLORS[columnId] }}
          />
          <span className="font-medium">{title}</span>
          <span className="muted text-xs font-normal">
            ({tasks.length})
          </span>
        </div>
        <button
          className="btn px-2 py-0.5 text-base leading-none"
          onClick={() => onAddTask(columnId)}
        >
          +
        </button>
      </div>

      <div className="flex-1 overflow-y-auto space-y-2 px-1">
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
          <p className="muted text-center py-8 text-sm">
            Drop tasks here
          </p>
        )}
      </div>
    </div>
  );
}