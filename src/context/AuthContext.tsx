'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { getItem, setItem, removeItem } from '@/src/utils/storage';

/* ── hardcoded credentials ── */
const VALID_EMAIL = 'intern@demo.com';
const VALID_PASSWORD = 'intern123';

/* ── localStorage keys ── */
const AUTH_KEY = 'flowzara_auth';
export const REMEMBER_KEY = 'flowzara_remember';

interface AuthContextType {
  isAuthenticated: boolean;
  email: string | null;
  loading: boolean;
  login: (email: string, password: string, remember: boolean) => string | null;
  signup: (email: string, password: string) => string | null;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  /* Hydrate auth state from localStorage on mount */
  useEffect(() => {
    const stored = getItem<{ email: string } | null>(AUTH_KEY, null);
    if (stored?.email) {
      setIsAuthenticated(true);
      setEmail(stored.email);
    }
    setLoading(false);
  }, []);

  const login = useCallback(
    (inputEmail: string, inputPassword: string, remember: boolean): string | null => {
      if (inputEmail !== VALID_EMAIL) return 'Invalid email address.';
      if (inputPassword !== VALID_PASSWORD) return 'Incorrect password.';

      setIsAuthenticated(true);
      setEmail(inputEmail);
      setItem(AUTH_KEY, { email: inputEmail });

      if (remember) {
        setItem(REMEMBER_KEY, inputEmail);
      } else {
        removeItem(REMEMBER_KEY);
      }
      return null; // success
    },
    [],
  );

  const signup = useCallback(
    (inputEmail: string, inputPassword: string): string | null => {
      if (inputEmail !== VALID_EMAIL)
        return 'Only intern@demo.com can sign up in this demo.';
      if (inputPassword.length < 6)
        return 'Password must be at least 6 characters.';
      if (inputPassword !== VALID_PASSWORD)
        return 'Use the demo password: intern123.';

      setIsAuthenticated(true);
      setEmail(inputEmail);
      setItem(AUTH_KEY, { email: inputEmail });
      return null;
    },
    [],
  );

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    setEmail(null);
    removeItem(AUTH_KEY);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, email, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}