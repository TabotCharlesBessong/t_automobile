'use client';
import { useEffect, useState } from 'react';

export default function DbStatus() {
  const [status, setStatus] = useState<'ok' | 'error' | 'loading'>('loading');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/health')
      .then(res => res.json())
      .then(data => {
        setStatus(data.status);
        setMessage(data.message);
      })
      .catch(() => {
        setStatus('error');
        setMessage('MongoDB connection failed');
      });
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 px-4 py-2 rounded shadow text-xs font-semibold"
      style={{ background: status === 'ok' ? '#4CAF50' : '#FF5252', color: 'white' }}>
      DB: {status === 'loading' ? 'Checking...' : message}
    </div>
  );
}
