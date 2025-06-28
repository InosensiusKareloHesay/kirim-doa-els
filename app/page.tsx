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
        // Use absolute path that works with basePath
        window.location.href = '/kirim-doa-els/dashboard/';
      }, 1000);
    } else {
      setError('Username atau password salah!');
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#e9f0f7', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div style={{ 
        width: '100%', 
        maxWidth: 400, 
        minWidth: 280, 
        background: '#f7fafd', 
        borderRadius: 24, 
        boxShadow: '0 2px 24px #b3c6e6', 
        padding: '40px 20px', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center' 
      }}>
        <div style={{ marginBottom: 32, textAlign: 'center' }}>
          <Image 
            src="/img/Merpati.png" 
            alt="logo" 
            width={80} 
            height={80} 
            style={{ 
              opacity: 0.9,
              borderRadius: '50%',
              objectFit: 'cover'
            }} 
          />
        </div>
        <form style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 20 }} onSubmit={handleSubmit}>
          <div style={{ position: 'relative' }}>
            <input 
              type="text" 
              placeholder="Username" 
              value={username} 
              onChange={e => setUsername(e.target.value)} 
              style={{ 
                width: '100%', 
                padding: '14px 18px', 
                borderRadius: 32, 
                border: '1px solid #e0e7ef', 
                fontSize: 16, 
                color: '#222', 
                background: '#fff', 
                outline: 'none',
                boxSizing: 'border-box'
              }} 
            />
          </div>
          <div style={{ position: 'relative' }}>
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              style={{ 
                width: '100%', 
                padding: '14px 18px', 
                borderRadius: 32, 
                border: '1px solid #e0e7ef', 
                fontSize: 16, 
                color: '#222', 
                background: '#fff', 
                outline: 'none',
                boxSizing: 'border-box'
              }} 
            />
          </div>
          <button 
            type="submit" 
            style={{ 
              width: '100%', 
              padding: '16px 0', 
              borderRadius: 32, 
              background: '#1a357a', 
              color: '#fff', 
              fontWeight: 600, 
              fontSize: 18, 
              border: 'none', 
              cursor: 'pointer', 
              marginTop: 10,
              transition: 'background 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = '#2a4a8a'}
            onMouseOut={(e) => e.currentTarget.style.background = '#1a357a'}
          >
            Login
          </button>
          {error && <div style={{ color: 'red', marginTop: 10, textAlign: 'center', fontSize: 14 }}>{error}</div>}
          {success && <div style={{ color: 'green', marginTop: 10, textAlign: 'center', fontSize: 14 }}>{success}</div>}
        </form>
      </div>
      <style jsx>{`
        @media (max-width: 480px) {
          div[style*="padding: 20px"] {
            padding: 10px !important;
          }
          div[style*="padding: 40px 20px"] {
            padding: 30px 16px !important;
            min-width: 260px !important;
          }
          input {
            font-size: 16px !important;
            padding: 12px 16px !important;
          }
          button {
            font-size: 16px !important;
            padding: 14px 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
