// app/dashboard/page.tsx
"use client"; // Keep this if you want to use client-side features like the link

import React from 'react';

export default function DashboardPage() {
  return (
    // Paste the content from the immersive artifact here directly
    // You might need to adjust styling or import Link if you want the button to work
    // and you've removed all other imports.
    <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem', backgroundColor: '#f8fafc'}}>
      <div style={{maxWidth: '600px', padding: '2rem', borderRadius: '0.75rem', backgroundColor: '#ffffff', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'}}>
        <h1 style={{fontSize: '2.25rem', fontWeight: '700', color: '#6b21a8', marginBottom: '1rem'}}>Access Restricted</h1>
        <p style={{fontSize: '1.125rem', color: '#4b5563', lineHeight: '1.75rem', marginBottom: '1.5rem'}}>
          This section of the application contains proprietary content and is not publicly accessible.
          Unauthorized access attempts are logged to ensure the security and integrity of my intellectual property.
        </p>
        <p style={{fontSize: '1.125rem', fontWeight: '600', color: '#4b5563', marginBottom: '2rem'}}>
          The content you are seeking is not available here.
        </p>
        <a href="/" style={{display: 'inline-block', padding: '0.75rem 1.5rem', borderRadius: '0.375rem', backgroundColor: '#6d28d9', color: '#ffffff', textDecoration: 'none', fontWeight: '500', transition: 'background-color 0.3s ease'}}>
          Return to Home Page
        </a>
        <p style={{fontSize: '0.875rem', color: '#6b7280', marginTop: '1.5rem'}}>
          For legitimate inquiries, please refer to my main site.
        </p>
      </div>
    </div>
  );
}