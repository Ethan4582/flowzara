import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BoardProvider, useBoard } from '@/src/context/BoardContext';

function BoardHarness() {
  const { state, dispatch } = useBoard();

  return (
    <div>
      <span data-testid="task-count">{state.tasks.length}</span>
      <span data-testid="activity-count">{state.activities.length}</span>
      <span data-testid="last-activity">{state.activities[0]?.message ?? ''}</span>

     
      {state.tasks.map((t) => (
        <span key={t.id} data-testid={`task-${t.id}`} data-column={t.columnId}>
          {t.title}
        </span>
      ))}

      <button
        data-testid="create-task"
        onClick={() =>
          dispatch({
            type: 'CREATE_TASK',
            payload: {
              title: 'Test Task',
              description: 'A test',
              priority: 'medium',
              dueDate: '',
              tags: ['test'],
              columnId: 'todo',
            },
          })
        }
      />
      <button
        data-testid="move-first-to-doing"
        onClick={() => {
          const first = state.tasks[0];
          if (first) dispatch({ type: 'MOVE_TASK', payload: { id: first.id, toColumn: 'doing' } });
        }}
      />
      <button
        data-testid="delete-first"
        onClick={() => {
          const first = state.tasks[0];
          if (first) dispatch({ type: 'DELETE_TASK', payload: { id: first.id, title: first.title } });
        }}
      />
    </div>
  );
}

describe('BoardContext — task operations', () => {
  beforeEach(() => localStorage.clear());

  it('creates a task and logs the activity', () => {
    render(
      <BoardProvider>
        <BoardHarness />
      </BoardProvider>,
    );

    expect(screen.getByTestId('task-count')).toHaveTextContent('0');
    fireEvent.click(screen.getByTestId('create-task'));
    expect(screen.getByTestId('task-count')).toHaveTextContent('1');
    expect(screen.getByTestId('last-activity')).toHaveTextContent('Created "Test Task"');
  });

  it('moves a task to a different column and logs the activity', () => {
    render(
      <BoardProvider>
        <BoardHarness />
      </BoardProvider>,
    );

    fireEvent.click(screen.getByTestId('create-task'));
    fireEvent.click(screen.getByTestId('move-first-to-doing'));

    expect(screen.getByTestId('last-activity')).toHaveTextContent('Moved "Test Task"');
    // The task's column should now be "doing" — we check via data attribute
    const taskEl = screen.getByText('Test Task');
    expect(taskEl.getAttribute('data-column')).toBe('doing');
  });

  it('deletes a task and logs the activity', () => {
    render(
      <BoardProvider>
        <BoardHarness />
      </BoardProvider>,
    );

    fireEvent.click(screen.getByTestId('create-task'));
    expect(screen.getByTestId('task-count')).toHaveTextContent('1');

    fireEvent.click(screen.getByTestId('delete-first'));
    expect(screen.getByTestId('task-count')).toHaveTextContent('0');
    expect(screen.getByTestId('last-activity')).toHaveTextContent('Deleted "Test Task"');
  });
});