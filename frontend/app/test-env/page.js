'use client';

export default function TestEnvPage() {
  const url = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;
  
  return (
    <div style={{ padding: '40px', fontFamily: 'monospace' }}>
      <h1 style={{ color: '#1765F5' }}>🔍 Environment Variable Test</h1>
      
      <div style={{ 
        marginTop: '20px', 
        padding: '20px', 
        background: '#f5f5f5', 
        borderRadius: '8px',
        wordBreak: 'break-all'
      }}>
        <h2>NEXT_PUBLIC_GOOGLE_SHEET_URL:</h2>
        {url ? (
          <>
            <p style={{ color: 'green', fontSize: '18px', fontWeight: 'bold' }}>
              ✅ Environment Variable Found!
            </p>
            <p style={{ 
              background: 'white', 
              padding: '10px', 
              borderRadius: '4px',
              marginTop: '10px',
              fontSize: '12px'
            }}>
              {url}
            </p>
          </>
        ) : (
          <p style={{ color: 'red', fontSize: '18px', fontWeight: 'bold' }}>
            ❌ Environment Variable NOT Found
          </p>
        )}
      </div>
      
      <div style={{ marginTop: '30px' }}>
        <h3>Next Steps:</h3>
        <ul style={{ lineHeight: '1.8' }}>
          <li>
            {url ? (
              <span style={{ color: 'green' }}>✅ Environment variable is working!</span>
            ) : (
              <span style={{ color: 'red' }}>❌ Need to restart dev server</span>
            )}
          </li>
          <li>Test forms at <a href="/contact" style={{ color: '#1765F5' }}>/contact</a></li>
          <li>Check Google Sheet for submitted data</li>
        </ul>
      </div>
      
      <div style={{ 
        marginTop: '30px',
        padding: '20px',
        background: '#E0F2FE',
        borderRadius: '8px'
      }}>
        <h3>🧪 Quick Form Test</h3>
        <p>Forms to test:</p>
        <ul>
          <li><a href="/contact" style={{ color: '#1765F5' }}>Contact Form</a></li>
          <li><a href="/career-counselling" style={{ color: '#1765F5' }}>Career Counselling Form</a></li>
          <li><a href="/" style={{ color: '#1765F5' }}>Homepage Form</a></li>
        </ul>
      </div>
    </div>
  );
}
