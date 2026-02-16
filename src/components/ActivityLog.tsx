'use client';

import React from 'react';
import type { Activity } from '@/src/types';

interface ActivityLogProps {
  activities: Activity[];
}

/** Scrollable list of recent board actions presented as a card */
export default function ActivityLog({ activities }: ActivityLogProps) {
  if (activities.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 shadow-md p-4 max-h-[360px] overflow-y-auto">
        <p className="text-gray-500 text-sm text-center py-5 m-0">
          No recent activity.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-md p-4 max-h-[360px] overflow-y-auto">
      {activities.map((a) => (
        <div key={a.id} className="py-2.5 border-b border-gray-100 last:border-0">
          <span className="block text-gray-800 font-medium mb-1 leading-tight">
            {a.message}
          </span>
          <span className="block text-gray-500 text-xs">
            {new Date(a.timestamp).toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
}