'use client';

import React from 'react';
import type { Activity } from '@/src/types';

interface ActivityLogProps {
  activities: Activity[];
}

/** Scrollable list of recent board actions */
export default function ActivityLog({ activities }: ActivityLogProps) {
  if (activities.length === 0) {
    return <p className="muted" style={{ fontSize: 13, padding: 8 }}>No recent activity.</p>;
  }

  return (
    <div className="activity">
      {activities.map((a) => (
        <div key={a.id} style={{ marginBottom: 6 }}>
          <span>{a.message}</span>
          <span className="muted" style={{ marginLeft: 8, fontSize: 11 }}>
            {new Date(a.timestamp).toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
}