'use client';

import { useState } from 'react';
import { submitToGoogleSheets } from '@/lib/googleSheets';

export default function DebugFormPage() {
  const [logs, setLogs] = useState([]);
  const [testing, setTesting] = useState(false);
  
  const addLog = (message, type = 'info') => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [...prev, { timestamp, message, type }]);
  };
  
  const testSubmission = async () => {
    setLogs([]);
    setTesting(true);
    
    addLog('🚀 Starting form submission test...');
    
    // Check environment variable
    const url = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;
    if (!url) {
      addLog('❌ ERROR: NEXT_PUBLIC_GOOGLE_SHEET_URL not found!', 'error');
      addLog('Fix: Restart dev server (Ctrl+C then npm run dev)', 'error');
      setTesting(false);
      return;
    }
    
    addLog('✅ Environment variable found', 'success');
    addLog(`URL: ${url.substring(0, 50)}...`, 'info');
    
    // Prepare test data
    const testData = {
      name: 'Debug Test User',
      email: 'debug@test.com',
      phone: '9999999999',
      subject: 'Debug Test',
      message: 'This is a debug test message'
    };
    
    addLog('📦 Test data prepared', 'info');
    addLog(JSON.stringify(testData, null, 2), 'info');
    
    try {
      addLog('📤 Sending request to Google Sheets...', 'info');
      
      const result = await submitToGoogleSheets(testData, 'contact');
      
      if (result.success) {
        addLog('✅ SUCCESS: Form submitted!', 'success');
        addLog(result.message, 'success');
        addLog('📊 Now check your Google Sheet "Contact Form" tab', 'success');
      } else {
        addLog('❌ ERROR: Submission failed', 'error');
        addLog(result.message, 'error');
      }
      
    } catch (error) {
      addLog('❌ EXCEPTION: ' + error.message, 'error');
      addLog('Stack: ' + error.stack, 'error');
    }
    
    setTesting(false);
  };
  
  const getLogStyle = (type) => {
    const base = {
      padding: '8px 12px',
      marginBottom: '4px',
      borderRadius: '4px',
      fontSize: '13px',
      fontFamily: 'monospace',
      wordBreak: 'break-all'
    };
    
    switch(type) {
      case 'success':
        return { ...base, background: '#d4edda', color: '#155724', borderLeft: '4px solid #28a745' };
      case 'error':
        return { ...base, background: '#f8d7da', color: '#721c24', borderLeft: '4px solid #dc3545' };
      default:
        return { ...base, background: '#f8f9fa', color: '#333', borderLeft: '4px solid #6c757d' };
    }
  };
  
  return (
    <div style={{ padding: '40px', maxWidth: '900px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#1765F5', marginBottom: '10px' }}>🔍 Form Submission Debugger</h1>
      <p style={{ color: '#666', marginBottom: '30px' }}>
        This tool tests your Google Sheets integration and shows exactly what's happening.
      </p>
      
      <button
        onClick={testSubmission}
        disabled={testing}
        style={{
          background: testing ? '#ccc' : '#1765F5',
          color: 'white',
          border: 'none',
          padding: '15px 30px',
          fontSize: '16px',
          fontWeight: 'bold',
          borderRadius: '8px',
          cursor: testing ? 'not-allowed' : 'pointer',
          marginBottom: '20px'
        }}
      >
        {testing ? '🔄 Testing...' : '🧪 Run Test Submission'}
      </button>
      
      {logs.length > 0 && (
        <div style={{
          background: '#ffffff',
          border: '1px solid #dee2e6',
          borderRadius: '8px',
          padding: '20px',
          marginTop: '20px'
        }}>
          <h2 style={{ marginTop: 0, marginBottom: '15px', fontSize: '18px' }}>📋 Debug Log:</h2>
          
          {logs.map((log, index) => (
            <div key={index} style={getLogStyle(log.type)}>
              <span style={{ opacity: 0.7, marginRight: '10px' }}>[{log.timestamp}]</span>
              {log.message}
            </div>
          ))}
        </div>
      )}
      
      <div style={{
        marginTop: '30px',
        padding: '20px',
        background: '#fff3cd',
        borderRadius: '8px',
        borderLeft: '4px solid #ffc107'
      }}>
        <h3 style={{ marginTop: 0 }}>⚠️ Important Checks:</h3>
        <ol style={{ lineHeight: '1.8' }}>
          <li>Click "Run Test Submission" button above</li>
          <li>Watch the debug log for any errors</li>
          <li>If successful, check your Google Sheet "Contact Form" tab</li>
          <li>If errors appear, follow the suggested fixes</li>
        </ol>
      </div>
      
      <div style={{
        marginTop: '20px',
        padding: '20px',
        background: '#e7f3ff',
        borderRadius: '8px',
        borderLeft: '4px solid #1765F5'
      }}>
        <h3 style={{ marginTop: 0 }}>🔧 Common Issues:</h3>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>Environment variable not found:</strong> Restart dev server</li>
          <li><strong>Network error:</strong> Check internet connection</li>
          <li><strong>No data in sheet:</strong> Check Apps Script Executions tab for errors</li>
          <li><strong>Permission denied:</strong> Apps Script must be deployed with "Anyone" access</li>
        </ul>
      </div>
      
      <div style={{ marginTop: '30px', padding: '15px', background: '#f8f9fa', borderRadius: '8px' }}>
        <h3 style={{ marginTop: 0 }}>📊 Check Apps Script Executions:</h3>
        <ol>
          <li>Open your Google Sheet</li>
          <li>Go to <strong>Extensions → Apps Script</strong></li>
          <li>Click <strong>Executions</strong> icon (⏱️) on left sidebar</li>
          <li>Look for recent executions and any errors</li>
        </ol>
      </div>
    </div>
  );
}
