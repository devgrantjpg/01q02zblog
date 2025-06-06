import Head from "next/head";
import Link from "next/link";

export default function Ecom() {
  const styles = {
    navBar: {
      width: '100%',
      backgroundColor: '#1a1a1a',
      padding: '1rem 2rem',
      boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
      position: 'sticky' as const,
      top: 0,
      zIndex: 10, // Lowered to prevent overlapping dropdowns
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
          <span style={styles.logo}>Latest Trending Products</span>
          <div style={styles.navLinks}>
            <Link href="/" style={styles.navLink}>Home</Link>
            <Link href="/books" style={styles.navLink}>Books</Link>
            <Link href="/electronics" style={styles.navLink}>Electronics</Link>
            <Link href="/homedecor" style={styles.navLink}>Home Decor</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={styles.heroSection}>
        <img src="/bookimgs/BACKgroundcity.jpg" alt="Hero 1" style={styles.heroImage} />
        <img src="/bookimgs/BACKgroundnyc3.jpg" alt="Hero 2" style={styles.heroImage} />
        <img src="/bookimgs/BACKgroundcitymix.jpg" alt="Hero 3" style={styles.heroImage} />
      </div>

      {/* Main Content */}
      <div style={styles.page}>
        <h1 style={styles.title}>Books</h1>

        {/* Section 1 */}
        <section style={styles.section}>
          <div style={styles.imageWrapper}>
            {[
              { href: "/circe", img: "circe.jpg", title: "Circe" },
              { href: "thelordoftherings", img: "thelordoftheRings.jpg", title: "The Lord of the rings" },
              { href: "dragonflight", img: "dragonFlight.jpg", title: "Dragon flight" },
            ].map((book, i) => (
              <div style={styles.imageCard} key={i}>
                <Link href={book.href}><img src={`/bookimgs/${book.img}`} alt={book.title} style={styles.image} /></Link>
                <div style={styles.caption}>{book.title}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2 */}
        <section style={styles.section}>
          <div style={styles.imageWrapper}>
            {[
              { href: "/abundance", img: "abundancebook.jpg", title: "Abundance" },
              { href: "/thebookofdoors", img: "thebookofdoors.jpg", title: "The Book of Doors" },
              { href: "/booklovers", img: "bookloversbook.jpg", title: "Book Lovers" },
            ].map((book, i) => (
              <div style={styles.imageCard} key={i}>
                <Link href={book.href}><img src={`/bookimgs/${book.img}`} alt={book.title} style={styles.image} /></Link>
                <div style={styles.caption}>{book.title}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 */}
        <section style={styles.section} id="books">
          <div style={styles.imageWrapper}>
            {[
              { href: "/funnystory", img: "funnystorybook.jpg", title: "Funny Story" },
              { href: "/lovestory", img: "lovestorybook.jpg", title: "Love Story" },
              { href: "/atmosphere", img: "atmosphere.jpg", title: "Atmosphere" },
            ].map((book, i) => (
              <div style={styles.imageCard} key={i}>
                <Link href={book.href}><img src={`/bookimgs/${book.img}`} alt={book.title} style={styles.image} /></Link>
                <div style={styles.caption}>{book.title}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 */}
        <section style={styles.section}>
          <div style={styles.imageWrapper}>
            {[
              { href: "/goodomens", img: "good-omens-2.jpg", title: "Good Omens" },
              { href: "/aworldalone", img: "aworldalonebook.jpg", title: "A world alone" },
              { href: "/theoutsiders", img: "theoutsidersbook.jpg", title: "The Outsiders" },
            ].map((book, i) => (
              <div style={styles.imageCard} key={i}>
                <Link href={book.href}><img src={`/bookimgs/${book.img}`} alt={book.title} style={styles.image} /></Link>
                <div style={styles.caption}>{book.title}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5 */}
        <section style={styles.section}>
          <div style={styles.imageWrapper}>
            {[
              { href: "/themummystomb", img: "goosebumpsMummy.jpg", title: "Goosebumps Mummy" },
              { href: "/thehauntedcar", img: "thehauntedcar.jpg", title: "Goosebumps The haunted car" },
              { href: "/ghostlyadventures", img: "theghostlyAdventures.jpg", title: "Goosebumps The Ghostly adventures" },
            ].map((book, i) => (
              <div style={styles.imageCard} key={i}>
                <Link href={book.href}><img src={`/bookimgs/${book.img}`} alt={book.title} style={styles.image} /></Link>
                <div style={styles.caption}>{book.title}</div>
              </div>
            ))}
          </div>
        </section>

                {/* Hero Section 2 */}
                <div style={styles.heroSection}>
          <img src="/bookimgs/BACKgrounddrawing7.jpg" alt="Hero 4" style={styles.heroImage} />
          <img src="/bookimgs/BACKgrounddrawing5.jpeg" alt="Hero 5" style={styles.heroImage} />
          <img src="/bookimgs/BACKgrounddrawingcolor9.jpg" alt="Hero 6" style={styles.heroImage} />
        </div>

        {/* Footer */}
        <footer style={styles.footer}>
          © 2025 SMVM.net. All rights reserved.
          <h1><Link href="/termsandservice">Terms and Services</Link></h1>
        </footer>
      </div>
    </>
  );
}
