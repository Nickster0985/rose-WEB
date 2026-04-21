import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

// Change this to your IP!
const API_BASE_URL = "http://85.215.220.246:11443/";

const App = () => {
  const [stats, setStats] = useState({ totalScanned: 0, threatsDetected: 0 });
  const [recentStrikes, setRecentStrikes] = useState([]);

  useEffect(() => {
    console.log("HUD Initialized...");
    const fetchData = async () => {
      try {
        const sRes = await fetch(`${API_BASE_URL}/api/stats`);
        const sData = await sRes.json();
        setStats(sData);
      } catch (e) { console.error("Stats Fetch Error:", e); }
    };
    fetchData();
  }, []);

  return (
    <div style={{ backgroundColor: 'black', color: 'red', minHeight: '100vh', padding: '50px', textAlign: 'center', fontFamily: 'monospace' }}>
      <h1 style={{ fontSize: '3rem', border: '2px solid red', padding: '20px' }}>R.O.S.E. SYSTEM ONLINE</h1>
      <p style={{ color: 'white' }}>If you see this, the code is working perfectly.</p>
      <div style={{ marginTop: '20px', color: '#555' }}>
        Target IP: {API_BASE_URL}
      </div>
    </div>
  );
};

// This part is CRITICAL to fix the black screen
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
