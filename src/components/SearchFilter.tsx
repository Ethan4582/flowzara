'use client';

import React from 'react';
import type { Priority } from '@/src/types';

interface SearchFilterProps {
  search: string;
  onSearchChange: (val: string) => void;
  priorityFilter: Priority | 'all';
  onPriorityChange: (val: Priority | 'all') => void;
  sortByDueDate: boolean;
  onSortToggle: () => void;
  onReset: () => void;
}

/** Search, priority filter, sort toggle, and reset controls */
export default function SearchFilter({
  search,
  onSearchChange,
  priorityFilter,
  onPriorityChange,
  sortByDueDate,
  onSortToggle,
  onReset,
}: SearchFilterProps) {
  return (
    <div className="controls">
      <input
        className="input"
        placeholder="Search by title…"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select
        className="input"
        style={{ minWidth: 140 }}
        value={priorityFilter}
        onChange={(e) => onPriorityChange(e.target.value as Priority | 'all')}
      >
        <option value="all">All Priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button className={`btn ${sortByDueDate ? '' : 'secondary'}`} onClick={onSortToggle}>
        Sort by Due Date {sortByDueDate ? '↑' : ''}
      </button>
      <button className="btn" style={{ background: 'var(--danger)' }} onClick={onReset}>
        Reset Board
      </button>
    </div>
  );
}