'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth, REMEMBER_KEY } from '@/src/context/AuthContext';
import { getItem } from '@/src/utils/storage';

export default function LoginPage() {
  const { login, isAuthenticated } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');

  /* Pre-fill email from "Remember me" */
  useEffect(() => {
    const saved = getItem<string | null>(REMEMBER_KEY, null);
    if (saved) {
      setEmail(saved);
      setRemember(true);
    }
  }, []);

  /* Redirect if already logged in */
  useEffect(() => {
    if (isAuthenticated) router.replace('/board');
  }, [isAuthenticated, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const err = login(email.trim(), password, remember);
    if (err) {
      setError(err);
    } else {
      router.push('/board');
    }
  };

  return (
    <div className="auth-page">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Welcome back</h2>
        <p className="sub">Sign in to your task board</p>

        {error && (
          <p style={{ color: 'var(--danger)', fontSize: 13, margin: '0 0 12px' }}>{error}</p>
        )}

        <label>Email</label>
        <input
          className="input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="intern@demo.com"
          required
        />

        <label>Password</label>
        <input
          className="input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          required
        />

        <label style={{ display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer', marginBottom: 16 }}>
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          <span style={{ fontWeight: 400 }}>Remember me</span>
        </label>

        <button type="submit" className="btn">
          Sign In
        </button>

        <p style={{ textAlign: 'center', marginTop: 16, fontSize: 13, color: 'var(--text-weak)' }}>
          Don&apos;t have an account?{' '}
          <Link href="/signup" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}