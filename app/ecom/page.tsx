// pages/background.tsx
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function BackgroundPage() {
  const pageStyle: React.CSSProperties = {
    minHeight: '100vh',
    width: '100%',
    backgroundColor: '#111',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '2rem',
    boxSizing: 'border-box',
  };

  const sectionStyle: React.CSSProperties = {
    marginBottom: '4rem',
  };

  const titleStyle: React.CSSProperties = {
    fontFamily: "'Playfair Display', serif",
    fontSize: '3rem',
    color: 'white',
    marginBottom: '2rem',
    textAlign: 'center',
  };

  const imageWrapperStyle: React.CSSProperties = {
    display: 'flex',
    gap: '2rem',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  };

  const imageStyle: React.CSSProperties = {
    width: '350px',
    height: 'auto',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
    objectFit: 'cover',
  };

  const footerStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: '#1a1a1a',
    color: '#ccc',
    padding: '2rem 1rem',
    textAlign: 'center',
    fontFamily: "'Poppins', sans-serif",
    fontSize: '1rem',
    borderTop: '1px solid #333',
    marginTop: 'auto',
  };

  return (
    <>
      <Head>
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Poppins:wght@400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div style={pageStyle}>
        {/* First Section */}
        <div style={sectionStyle}>
          <h1 style={titleStyle}>Home Decor</h1>
          <div style={imageWrapperStyle}>
            <img src="/img/smlgVasesColors (4).jpeg" alt="Image 1" style={imageStyle} />
            <img src="/img/smlgVasesColors (5).jpeg" alt="Image 2" style={imageStyle} />
          </div>
        </div>

        {/* Second Section */}
        <div style={sectionStyle}>
          <h1 style={titleStyle}>Computer Products</h1>
          <div style={imageWrapperStyle}>
            <img src="/img/img1.jpeg" alt="Image 1" style={imageStyle} />
            <img src="/img/img7.jpeg" alt="Image 2" style={imageStyle} />
          </div>
        </div>

        <footer style={footerStyle}>
          © {new Date().getFullYear()} SMVM.net  All rights reserved. 
          <h1><Link href="/termsandservice">Term and Service</Link></h1>
        </footer>
      </div>
    </>
  );
}
