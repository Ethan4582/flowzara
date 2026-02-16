import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskForm from '@/src/components/TaskForm';

describe('TaskForm — validation', () => {
  it('shows error when title is empty', () => {
    const onSubmit = jest.fn();
    const onCancel = jest.fn();

    render(<TaskForm onSubmit={onSubmit} onCancel={onCancel} />);

 
    fireEvent.click(screen.getByText('Create'));

    expect(screen.getByText('Title is required.')).toBeInTheDocument();
    expect(onSubmit).not.toHaveBeenCalled();
  });
});