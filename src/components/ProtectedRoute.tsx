'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/src/context/AuthContext';


export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) router.replace('/login');
  }, [isAuthenticated, loading, router]);

  if (loading) {
    return <div className="center" style={{ height: '100vh' }}>Loading…</div>;
  }
  if (!isAuthenticated) {
    return <div className="center" style={{ height: '100vh' }}>Redirecting to login…</div>;
  }
  return <>{children}</>;
}