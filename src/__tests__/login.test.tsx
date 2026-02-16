import { render, screen, fireEvent } from '@testing-library/react';
import { AuthProvider, useAuth } from '@/src/context/AuthContext';

function LoginHarness() {
  const { isAuthenticated, email, login, logout } = useAuth();
  const [error, setError] = React.useState('');

  return (
    <div>
      <span data-testid="status">{isAuthenticated ? 'authenticated' : 'anonymous'}</span>
      <span data-testid="email">{email ?? ''}</span>
      <span data-testid="error">{error}</span>
      <button
        data-testid="login-valid"
        onClick={() => {
          const err = login('intern@demo.com', 'intern123', false);
          setError(err ?? '');
        }}
      />
      <button
        data-testid="login-invalid"
        onClick={() => {
          const err = login('wrong@mail.com', 'wrong', false);
          setError(err ?? '');
        }}
      />
      <button data-testid="logout" onClick={logout} />
    </div>
  );
}

import React from 'react';

describe('AuthContext — login flow', () => {
  beforeEach(() => localStorage.clear());

  it('rejects invalid credentials with an error message', () => {
    render(
      <AuthProvider>
        <LoginHarness />
      </AuthProvider>,
    );

    fireEvent.click(screen.getByTestId('login-invalid'));

    expect(screen.getByTestId('status')).toHaveTextContent('anonymous');
    expect(screen.getByTestId('error')).not.toHaveTextContent('');
  });

  it('accepts valid credentials and sets authenticated state', () => {
    render(
      <AuthProvider>
        <LoginHarness />
      </AuthProvider>,
    );

    fireEvent.click(screen.getByTestId('login-valid'));

    expect(screen.getByTestId('status')).toHaveTextContent('authenticated');
    expect(screen.getByTestId('email')).toHaveTextContent('intern@demo.com');
  });

  it('logout clears authentication', () => {
    render(
      <AuthProvider>
        <LoginHarness />
      </AuthProvider>,
    );

    fireEvent.click(screen.getByTestId('login-valid'));
    expect(screen.getByTestId('status')).toHaveTextContent('authenticated');

    fireEvent.click(screen.getByTestId('logout'));
    expect(screen.getByTestId('status')).toHaveTextContent('anonymous');
  });
});