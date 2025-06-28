'use client';
import React, { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (username === 'admin' && password === 'admin') {
      setSuccess('Login berhasil!');
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 1000);
    } else {
      setError('Username atau password salah!');
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#e9f0f7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: 400, minWidth: 320, background: '#f7fafd', borderRadius: 24, boxShadow: '0 2px 24px #b3c6e6', padding: 40, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: 32 }}>
          <Image src="/window.svg" alt="logo" width={70} height={70} style={{ opacity: 0.7 }} />
        </div>
        <form style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 20 }} onSubmit={handleSubmit}>
          <div style={{ position: 'relative' }}>
            <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} style={{ width: '100%', padding: '12px 18px 12px 18px', borderRadius: 32, border: '1px solid #e0e7ef', fontSize: 16, color: '#222', background: '#fff', outline: 'none' }} />
          </div>
          <div style={{ position: 'relative' }}>
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} style={{ width: '100%', padding: '12px 18px 12px 18px', borderRadius: 32, border: '1px solid #e0e7ef', fontSize: 16, color: '#222', background: '#fff', outline: 'none' }} />
          </div>
          <button type="submit" style={{ width: '100%', padding: '14px 0', borderRadius: 32, background: '#1a357a', color: '#fff', fontWeight: 500, fontSize: 18, border: 'none', cursor: 'pointer', marginTop: 10 }}>Login</button>
          {error && <div style={{ color: 'red', marginTop: 10, textAlign: 'center' }}>{error}</div>}
          {success && <div style={{ color: 'green', marginTop: 10, textAlign: 'center' }}>{success}</div>}
        </form>
      </div>
    </div>
  );
}
