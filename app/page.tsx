import Link from 'next/link';

export default function LandingPage() {
  return (
    <div style={{ height: '100vh', display: 'grid', placeItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h1>Landing (placeholder)</h1>
        <p style={{ color: 'var(--text-weak)', marginBottom: 24 }}>
          Other pages (/home, /features, /about, /pricing, /contact) are intentionally left empty.
        </p>
        <Link
          href="/login"
          className="btn"
          style={{ textDecoration: 'none', padding: '10px 20px' }}
        >
          Go to Assignment (Login)
        </Link>
      </div>
    </div>
  );
}