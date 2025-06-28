import Image from 'next/image';

export default function LoginPage() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#e9f0f7', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      flexDirection: 'column',
      padding: '20px'
    }}>
      <div style={{ marginBottom: 20, textAlign: 'center' }}>
        <Image 
          src="/img/Merpati.png" 
          alt="logo" 
          width={60} 
          height={60} 
          style={{ 
            opacity: 0.9,
            borderRadius: '50%',
            objectFit: 'cover'
          }} 
        />
      </div>
      <h2 style={{ color: '#1a357a', marginBottom: 20, fontSize: 24 }}>Redirecting...</h2>
      <p style={{ color: '#666', textAlign: 'center', fontSize: 16 }}>Please wait while we redirect you to the login page.</p>
      <script dangerouslySetInnerHTML={{
        __html: `
          window.location.href = '/';
        `
      }} />
    </div>
  );
} 