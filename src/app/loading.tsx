"use client";

import Image from 'next/image';

export default function Loading() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'white',
      zIndex: 9999
    }}>
      <div style={{
        animation: 'spin 1.4s linear infinite',
        filter: 'drop-shadow(0 0 10px rgba(0, 140, 60, 0.25))'
      }}>
        <Image
          src="/loader/leaf-ring.png.png"
          alt="Loading"
          width={220}
          height={220}
          priority
        />
      </div>
      <p style={{
        fontSize: '14px',
        color: '#0b5d2a',
        opacity: 0.85,
        marginTop: '18px'
      }}>Loading...</p>
      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}