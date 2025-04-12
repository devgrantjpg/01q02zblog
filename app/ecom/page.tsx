import Head from 'next/head';
import Link from 'next/link';

export default function BackgroundPage() {
  const currentYear = new Date().getFullYear();

  const styles = {
    page: {
      minHeight: '100vh',
      width: '100%',
      backgroundColor: '#111',
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '2rem',
      boxSizing: 'border-box' as const,
    },
    section: {
      marginBottom: '4rem',
    },
    title: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '3rem',
      color: 'white',
      marginBottom: '2rem',
      textAlign: 'center' as const,
    },
    imageWrapper: {
      display: 'flex',
      gap: '2rem',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap' as const,
    },
    image: {
      width: '350px',
      height: 'auto',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
      objectFit: 'cover' as const,
    },
    footer: {
      width: '100%',
      backgroundColor: '#1a1a1a',
      color: '#ccc',
      padding: '2rem 1rem',
      textAlign: 'center' as const,
      fontFamily: "'Poppins', sans-serif",
      fontSize: '1rem',
      borderTop: '1px solid #333',
      marginTop: 'auto',
    },
  };

  return (
    <>
      <Head>
        <title>Background Page</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Poppins:wght@400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div style={styles.page}>
        {/* Section 1 */}
        <section style={styles.section}>
          <h1 style={styles.title}>Home Decor</h1>
          <div style={styles.imageWrapper}>
            <img
              src="/img/smlgVasesColors (4).jpeg"
              alt="Vase Decor"
              style={styles.image}
            />
            <img
              src="/img/smlgVasesColors (5).jpeg"
              alt="Colorful Vase"
              style={styles.image}
            />
          </div>
        </section>

        {/* Section 2 */}
        <section style={styles.section}>
          <h1 style={styles.title}>Computer Products</h1>
          <div style={styles.imageWrapper}>
            <img src="/img/img1.jpeg" alt="Computer Item 1" style={styles.image} />
            <img src="/img/img7.jpeg" alt="Computer Item 2" style={styles.image} />
          </div>
        </section>

        {/* Footer */}
        <footer style={styles.footer}>
          © {currentYear} SMVM.net. All rights reserved.
          <h1><Link href="termsandservice">Terms and Services</Link></h1>
        </footer>
      </div>
    </>
  );
}
