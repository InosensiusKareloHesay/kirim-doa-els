'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../Navbar';

// Data dummy rentang 15/6 - 5/7, jumlah acak 1-5 per tanggal
const dummyData = [
  { nama: 'Dewi', doa: 'Mohon kesehatan keluarga.', tanggal: '2025-06-15' },
  { nama: 'Budi', doa: 'Mohon kelancaran usaha.', tanggal: '2025-06-15' },
  { nama: 'Sinta', doa: 'Mohon jodoh.', tanggal: '2025-06-16' },
  { nama: 'Rina', doa: 'Mohon kesehatan orang tua.', tanggal: '2025-06-16' },
  { nama: 'Andi', doa: 'Mohon kelulusan ujian.', tanggal: '2025-06-16' },
  { nama: 'Tono', doa: 'Mohon pekerjaan.', tanggal: '2025-06-17' },
  { nama: 'Lina', doa: 'Mohon perlindungan dalam perjalanan.', tanggal: '2025-06-17' },
  { nama: 'Joko', doa: 'Mohon ketenangan hati.', tanggal: '2025-06-17' },
  { nama: 'Sari', doa: 'Mohon kesembuhan anak.', tanggal: '2025-06-18' },
  { nama: 'Dewi', doa: 'Mohon kelancaran proyek.', tanggal: '2025-06-18' },
  { nama: 'Rudi', doa: 'Mohon rejeki lancar.', tanggal: '2025-06-18' },
  { nama: 'Eka', doa: 'Mohon kesehatan keluarga.', tanggal: '2025-06-19' },
  { nama: 'Fani', doa: 'Mohon damai di rumah.', tanggal: '2025-06-19' },
  { nama: 'Dewi', doa: 'Mohon kesehatan keluarga.', tanggal: '2025-06-20' },
  { nama: 'Budi', doa: 'Mohon kelancaran usaha.', tanggal: '2025-06-20' },
  { nama: 'Sinta', doa: 'Mohon jodoh.', tanggal: '2025-06-20' },
  { nama: 'Rina', doa: 'Mohon kesehatan orang tua.', tanggal: '2025-06-21' },
  { nama: 'Andi', doa: 'Mohon kelulusan ujian.', tanggal: '2025-06-21' },
  { nama: 'Tono', doa: 'Mohon pekerjaan.', tanggal: '2025-06-21' },
  { nama: 'Lina', doa: 'Mohon perlindungan dalam perjalanan.', tanggal: '2025-06-21' },
  { nama: 'Joko', doa: 'Mohon ketenangan hati.', tanggal: '2025-06-22' },
  { nama: 'Sari', doa: 'Mohon kesembuhan anak.', tanggal: '2025-06-22' },
  { nama: 'Dewi', doa: 'Mohon kelancaran proyek.', tanggal: '2025-06-22' },
  { nama: 'Rudi', doa: 'Mohon rejeki lancar.', tanggal: '2025-06-23' },
  { nama: 'Eka', doa: 'Mohon kesehatan keluarga.', tanggal: '2025-06-23' },
  { nama: 'Fani', doa: 'Mohon damai di rumah.', tanggal: '2025-06-23' },
  { nama: 'Dewi', doa: 'Mohon kesehatan keluarga.', tanggal: '2025-06-24' },
  { nama: 'Budi', doa: 'Mohon kelancaran usaha.', tanggal: '2025-06-24' },
  { nama: 'Sinta', doa: 'Mohon jodoh.', tanggal: '2025-06-24' },
  { nama: 'Rina', doa: 'Mohon kesehatan orang tua.', tanggal: '2025-06-25' },
  { nama: 'Andi', doa: 'Mohon kelulusan ujian.', tanggal: '2025-06-25' },
  { nama: 'Tono', doa: 'Mohon pekerjaan.', tanggal: '2025-06-25' },
  { nama: 'Lina', doa: 'Mohon perlindungan dalam perjalanan.', tanggal: '2025-06-25' },
  { nama: 'Joko', doa: 'Mohon ketenangan hati.', tanggal: '2025-06-26' },
  { nama: 'Sari', doa: 'Mohon kesembuhan anak.', tanggal: '2025-06-26' },
  { nama: 'Dewi', doa: 'Mohon kelancaran proyek.', tanggal: '2025-06-26' },
  { nama: 'Rudi', doa: 'Mohon rejeki lancar.', tanggal: '2025-06-27' },
  { nama: 'Eka', doa: 'Mohon kesehatan keluarga.', tanggal: '2025-06-27' },
  { nama: 'Fani', doa: 'Mohon damai di rumah.', tanggal: '2025-06-27' },
  { nama: 'Dewi', doa: 'Mohon kesehatan keluarga.', tanggal: '2025-06-28' },
  { nama: 'Budi', doa: 'Mohon kelancaran usaha.', tanggal: '2025-06-28' },
  { nama: 'Sinta', doa: 'Mohon jodoh.', tanggal: '2025-06-28' },
  { nama: 'Rina', doa: 'Mohon kesehatan orang tua.', tanggal: '2025-06-29' },
  { nama: 'Andi', doa: 'Mohon kelulusan ujian.', tanggal: '2025-06-29' },
  { nama: 'Tono', doa: 'Mohon pekerjaan.', tanggal: '2025-06-29' },
  { nama: 'Lina', doa: 'Mohon perlindungan dalam perjalanan.', tanggal: '2025-06-30' },
  { nama: 'Joko', doa: 'Mohon ketenangan hati.', tanggal: '2025-06-30' },
  { nama: 'Sari', doa: 'Mohon kesembuhan anak.', tanggal: '2025-07-01' },
  { nama: 'Dewi', doa: 'Mohon kelancaran proyek.', tanggal: '2025-07-01' },
  { nama: 'Rudi', doa: 'Mohon rejeki lancar.', tanggal: '2025-07-01' },
  { nama: 'Eka', doa: 'Mohon kesehatan keluarga.', tanggal: '2025-07-02' },
  { nama: 'Fani', doa: 'Mohon damai di rumah.', tanggal: '2025-07-02' },
  { nama: 'Dewi', doa: 'Mohon kesehatan keluarga.', tanggal: '2025-07-03' },
  { nama: 'Budi', doa: 'Mohon kelancaran usaha.', tanggal: '2025-07-03' },
  { nama: 'Sinta', doa: 'Mohon jodoh.', tanggal: '2025-07-03' },
  { nama: 'Rina', doa: 'Mohon kesehatan orang tua.', tanggal: '2025-07-04' },
  { nama: 'Andi', doa: 'Mohon kelulusan ujian.', tanggal: '2025-07-04' },
  { nama: 'Tono', doa: 'Mohon pekerjaan.', tanggal: '2025-07-04' },
  { nama: 'Lina', doa: 'Mohon perlindungan dalam perjalanan.', tanggal: '2025-07-05' },
  { nama: 'Joko', doa: 'Mohon ketenangan hati.', tanggal: '2025-07-05' },
];

function groupByTanggal(data: any[]): Record<string, any[]> {
  return data.reduce((acc: Record<string, any[]>, curr: any) => {
    acc[curr.tanggal] = acc[curr.tanggal] || [];
    acc[curr.tanggal].push(curr);
    return acc;
  }, {});
}

function formatDateDMY(dateStr: string): string {
  const [y, m, d] = dateStr.split('-');
  return `${d}/${m}/${y}`;
}

export default function DoaPage() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [filter, setFilter] = useState({ from: '', to: '' });
  const [filteredData, setFilteredData] = useState(dummyData);
  const [grouped, setGrouped] = useState(groupByTanggal(dummyData));

  useEffect(() => {
    console.log(filter)
    let data = dummyData;
    if (filter.from || filter.to) {
      data = dummyData.filter(d => {
        if (filter.from && d.tanggal < filter.from) return false;
        if (filter.to && d.tanggal > filter.to) return false;
        return true;
      });
    }
    console.log(data)
    setFilteredData(data);
    setGrouped(groupByTanggal(data));
  }, [filter]);

  return (
    <div style={{ minHeight: '100vh', background: '#e9f0f7', display: 'flex', flexDirection: 'column' }}>
      <Navbar title="List Doa" showBack onBack={() => router.push('/dashboard')} onLogout={() => router.push('/login')} />
      {/* Filter & Reset Button */}
      <div style={{ padding: '32px 40px 0 40px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <button onClick={() => setShowModal(true)} style={{ padding: '12px 32px', borderRadius: 24, background: '#3570b6', color: '#fff', fontWeight: 500, fontSize: 16, border: 'none', cursor: 'pointer' }}>Filter</button>
        <button onClick={() => { setFilter({ from: '', to: '' }); setDateFrom(''); setDateTo(''); }} style={{ padding: '12px 32px', borderRadius: 24, background: '#e0e7ef', color: '#222', fontWeight: 500, fontSize: 16, border: 'none', cursor: 'pointer' }}>Reset</button>
        {filter.from && filter.to && (
          <span style={{ marginLeft: 18, color: '#3570b6', fontWeight: 500, fontSize: 15 }}>
            {filter.from.split('-').reverse().join('/')} s/d {filter.to.split('-').reverse().join('/')}
          </span>
        )}
      </div>
      {/* Modal Filter */}
      {showModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.25)', zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: '#fff', borderRadius: 16, padding: 32, minWidth: 280, boxShadow: '0 2px 16px #b3c6e6', display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div style={{ fontWeight: 600, fontSize: 18, color: '#1a357a', marginBottom: 8 }}>Pilih Rentang Tanggal</div>
            <label style={{ color: '#222', fontWeight: 500 }}>Dari</label>
            <input type="date" value={dateFrom} onChange={e => setDateFrom(e.target.value)} style={{ padding: '10px 16px', borderRadius: 8, border: '1px solid #e0e7ef', fontSize: 16, color: dateFrom ? '#111' : '#888' }} />
            <label style={{ color: '#222', fontWeight: 500 }}>Sampai</label>
            <input type="date" value={dateTo} onChange={e => setDateTo(e.target.value)} style={{ padding: '10px 16px', borderRadius: 8, border: '1px solid #e0e7ef', fontSize: 16, color: dateTo ? '#111' : '#888' }} />
            <div style={{ display: 'flex', gap: 12, marginTop: 10 }}>
              <button onClick={() => setShowModal(false)} style={{ flex: 1, padding: '10px 0', borderRadius: 24, background: '#e0e7ef', color: '#222', fontWeight: 500, fontSize: 16, border: 'none', cursor: 'pointer' }}>Batal</button>
              <button onClick={() => { setFilter({ from: dateFrom, to: dateTo }); setShowModal(false); }} style={{ flex: 1, padding: '10px 0', borderRadius: 24, background: '#1a357a', color: '#fff', fontWeight: 500, fontSize: 16, border: 'none', cursor: 'pointer' }}>Oke</button>
            </div>
          </div>
        </div>
      )}
      {/* List Doa */}
      <div style={{ marginTop: 32, padding: '0 40px', flex: 1, overflowY: 'auto' }}>
        {Object.keys(grouped).length === 0 && <div style={{ color: '#888', marginTop: 16 }}>Tidak ada doa.</div>}
        {Object.entries(grouped).map(([tanggal, list]: [string, any[]]) => (
          <div key={tanggal} style={{ marginBottom: 32 }}>
            <div style={{ fontWeight: 600, color: '#111', marginBottom: 12, fontSize: 17 }}>{formatDateDMY(tanggal)}</div>
            {list.map((item: any, idx: number) => (
              <div key={idx} style={{ background: '#fff', borderRadius: 12, padding: '18px 24px', marginBottom: 12, boxShadow: '0 1px 6px #e0e7ef', color: '#222' }}>
                <div style={{ fontWeight: 600, fontSize: 16 }}>{item.nama}</div>
                <div style={{ fontSize: 15, marginTop: 4 }}>{item.doa}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 700px) {
          nav { padding: 14px 16px !important; }
          div[style*='padding: 32px 40px 0 40px'] { padding: 18px 12px 0 12px !important; }
          div[style*='padding: 0 40px'] { padding: 0 8px !important; }
          div[style*='min-width: 280px'] { min-width: 90vw !important; }
          button { font-size: 16px !important; }
        }
      `}</style>
    </div>
  );
} 