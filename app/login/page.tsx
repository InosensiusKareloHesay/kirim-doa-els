export default function LoginPage() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#e9f0f7', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
      <h2 style={{ color: '#1a357a', marginBottom: 20 }}>Redirecting...</h2>
      <p style={{ color: '#666' }}>Please wait while we redirect you to the login page.</p>
      <script dangerouslySetInnerHTML={{
        __html: `
          window.location.href = '/';
        `
      }} />
    </div>
  );
} 