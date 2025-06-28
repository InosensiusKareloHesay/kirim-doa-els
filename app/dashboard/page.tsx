'use client';
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../Navbar';

export default function DashboardPage() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    }
    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu]);

  return (
    <div style={{ minHeight: '100vh', background: '#e9f0f7', display: 'flex', flexDirection: 'column' }}>
      <Navbar title="Admin Home" onLogout={() => {
        const isGitHubPages = window.location.hostname === 'inosensiuskarelohesay.github.io';
        const basePath = isGitHubPages ? '/kirim-doa-els' : '';
        router.push(`${basePath}/`);
      }} />
      {/* Bagian tengah biru dengan background cover, benar-benar menempel ke atas */}
      <div style={{
        background: `#1a357a url('/img/Bg-Dashboard.jpg') center center / cover no-repeat`,
        width: '100%',
        height: '50vh',
        marginTop: 0,
        position: 'relative',
        zIndex: 1,
        top: 0,
        left: 0,
      }} />
      {/* Tombol bawah */}
      <div className="dashboard-btn-group" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '40px 0', gap: 24, flexDirection: 'row' }}>
        <button className="dashboard-btn" onClick={() => {
          const isGitHubPages = window.location.hostname === 'inosensiuskarelohesay.github.io';
          const basePath = isGitHubPages ? '/kirim-doa-els' : '';
          router.push(`${basePath}/doa/`);
        }} style={{ flex: 1, minWidth: 180, maxWidth: 320, padding: '14px 0', borderRadius: 32, background: '#1a357a', color: '#fff', fontWeight: 600, fontSize: 20, border: 'none', cursor: 'pointer', transition: 'background 0.2s' }}>Lihat List Doa</button>
        <button className="dashboard-btn" style={{ flex: 1, minWidth: 180, maxWidth: 320, padding: '14px 0', borderRadius: 32, background: '#3570b6', color: '#fff', fontWeight: 600, fontSize: 20, border: 'none', cursor: 'pointer', transition: 'background 0.2s' }}>Download List Doa</button>
      </div>
      <style>{`
        @media (max-width: 700px) {
          nav { padding: 14px 16px !important; }
          div[style*='height: 50vh'] { height: 220px !important; }
          .dashboard-btn-group {
            flex-direction: column !important;
            gap: 14px !important;
            padding: 24px 12px !important;
            align-items: stretch !important;
          }
          .dashboard-btn {
            font-size: 17px !important;
            min-width: 0 !important;
            max-width: 100% !important;
            padding: 14px 0 !important;
            height: auto !important;
            border-radius: 28px !important;
          }
        }
      `}</style>
    </div>
  );
} 