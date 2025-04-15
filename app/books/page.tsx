import Head from "next/head";
import Link from "next/link";

export default function ecom() {
  const styles = {
    navBar: {
      width: '100%',
      backgroundColor: '#1a1a1a',
      padding: '1rem 2rem',
      boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
      position: 'sticky' as const,
      top: 0,
      zIndex: 1000,
    },
    navContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
      width: '100%',
    },
    logo: {
      color: 'white',
      fontFamily: "'Playfair Display', serif",
      fontSize: '1.5rem',
    },
    navLinks: {
      display: 'flex',
      gap: '1.5rem',
    },
    navLink: {
      color: '#ccc',
      textDecoration: 'none',
      fontFamily: "'Poppins', sans-serif",
      fontSize: '1rem',
      transition: 'color 0.2s ease-in-out',
      cursor: 'pointer',
    },

    heroSection: {
      display: 'flex',
      width: '100%',
      height: '350px',
      overflow: 'hidden',
    },
    heroImage: {
      flex: 1,
      width: '100%',
      objectFit: 'cover' as const,
      height: '100%',
    },

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
      gap: '4rem',
      justifyContent: 'center',
      alignItems: 'flex-start',
      flexWrap: 'wrap' as const,
    },
    imageCard: {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      maxWidth: '200px',
    },
    image: {
      width: '175px',
      height: 'auto',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
      objectFit: 'cover' as const,
    },
    caption: {
      marginTop: '0.5rem',
      color: '#ddd',
      textAlign: 'center' as const,
      fontSize: '0.95rem',
      fontFamily: "'Poppins', sans-serif",
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
        <title>Shop Online</title>
      </Head>

      {/* Top Navigation Menu */}
      <nav style={styles.navBar}>
        <div style={styles.navContent}>
          <span style={styles.logo}>SMVM.net</span>
          <div style={styles.navLinks}>
            <Link href="/" style={styles.navLink}>Home</Link>
            <Link href="#books" style={styles.navLink}>Books</Link>
            <Link href="#about" style={styles.navLink}>About</Link>
            <Link href="#contact" style={styles.navLink}>Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - Top Background Images */}
      <div style={styles.heroSection}>
        <img src="/bookimgs/BACKgroundcity.jpg" alt="Hero 1" style={styles.heroImage} />
        <img src="/bookimgs/BACKgroundnyc3.jpg" alt="Hero 2" style={styles.heroImage} />
        <img src="/bookimgs/BACKgroundcitymix.jpg" alt="Hero 3" style={styles.heroImage} />
      </div>

      {/* Main Content */}
      <div style={styles.page}>
        {/* Section 1 */}
        <section style={styles.section} id="books">
          <h1 style={styles.title}>Books</h1>
          <div style={styles.imageWrapper}>
            <div style={styles.imageCard}>
              <Link href="/funnystory"><img src="/bookimgs/funnystorybook.jpg" alt="Funny Story" style={styles.image} /></Link>
              <div style={styles.caption}>Funny Story</div>
            </div>
            <div style={styles.imageCard}>
              <Link href="/lovestory"><img src="/bookimgs/lovestorybook.jpg" alt="Love Story" style={styles.image} /></Link>
              <div style={styles.caption}>Love Story</div>
            </div>
            <div style={styles.imageCard}>
              <Link href="/atmosphere"><img src="/bookimgs/atmosphere.jpg" alt="Love Story" style={styles.image} /></Link>
              <div style={styles.caption}>Atmosphere</div>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.imageWrapper}>
            <div style={styles.imageCard}>
            <Link href="/bookslist/abundance"><img src="/bookimgs/abundancebook.jpg" alt="Funny Story" style={styles.image} /></Link>
              <div style={styles.caption}>Abundance</div>
            </div>
            <div style={styles.imageCard}>
              <img src="/bookimgs/aworldalonebook.jpg" alt="A world alone" style={styles.image} />
              <div style={styles.caption}>The Book of Doors</div>
            </div>
            <div style={styles.imageCard}>
              <img src="/bookimgs/circe.jpg" alt="Circe" style={styles.image} />
              <div style={styles.caption}>Book Lovers</div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section style={styles.section}>
          <div style={styles.imageWrapper}>
            <div style={styles.imageCard}>
              <img src="/bookimgs/abundancebook.jpg" alt="Abundance" style={styles.image} />
              <div style={styles.caption}>Abundance</div>
            </div>
            <div style={styles.imageCard}>
              <img src="/bookimgs/thebookofdoors.jpg" alt="The Book of Doors" style={styles.image} />
              <div style={styles.caption}>The Book of Doors</div>
            </div>
            <div style={styles.imageCard}>
              <img src="/bookimgs/bookloversbook.jpg" alt="Book Lovers" style={styles.image} />
              <div style={styles.caption}>Book Lovers</div>
            </div>
          </div>
        </section>

        {/* Second Hero Section */}
        <div style={styles.heroSection}>
          <img src="/bookimgs/BACKgrounddrawing7.jpg" alt="Hero 4" style={styles.heroImage} />
          <img src="/bookimgs/BACKgrounddrawing5.jpeg" alt="Hero 5" style={styles.heroImage} />
          <img src="/bookimgs/BACKgrounddrawingcolor9.jpg" alt="Hero 6" style={styles.heroImage} />
        </div>
        
        <section style={styles.section}>
          <div style={styles.imageWrapper}>
            <div style={styles.imageCard}>
              <img src="/bookimgs/good-omens-2.jpg" alt="Good Omens" style={styles.image} />
              <div style={styles.caption}>Good Omens</div>
            </div>
            <div style={styles.imageCard}>
              <img src="/bookimgs/thelordoftheRings.jpg" alt="The Lord of the rings" style={styles.image} />
              <div style={styles.caption}>The Lord of the rings</div>
            </div>
            <div style={styles.imageCard}>
              <img src="/bookimgs/dragonFlight.jpg" alt="Dragonflight" style={styles.image} />
              <div style={styles.caption}>Dragonflight</div>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.imageWrapper}>
            <div style={styles.imageCard}>
              <img src="/bookimgs/goosebumpsMummy.jpg" alt="Goosebumps" style={styles.image} />
              <div style={styles.caption}>Goosebumps Mummy</div>
            </div>
            <div style={styles.imageCard}>
              <img src="/bookimgs/goosebumpsHouseofshivers.jpg" alt="Goosebumps" style={styles.image} />
              <div style={styles.caption}>Goosebumps House of shiver</div>
            </div>
            <div style={styles.imageCard}>
              <img src="/bookimgs/theghostlyAdventures.jpg" alt="Goosebumps" style={styles.image} />
              <div style={styles.caption}>Goosebumps the Ghostly adventures</div>
            </div>
          </div>
        </section>


        {/* Footer */}
        <footer style={styles.footer}>
          © 2025 SMVM.net. All rights reserved.
          <h1><Link href="/termsandservice">Terms and Services</Link></h1>
        </footer>
      </div>
    </>
  );
}
