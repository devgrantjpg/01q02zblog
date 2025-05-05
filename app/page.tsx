import Head from "next/head";
import Link from "next/link";

export default function Ecom() {
  const styles = {
    navBar: {
      width: "100%",
      backgroundColor: "#1a1a1a",
      padding: "1rem 2rem",
      boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
      position: "relative" as const,
      zIndex: 1, // behind layout nav
    },
    navContent: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      maxWidth: "1200px",
      margin: "0 auto",
      width: "100%",
    },
    logo: {
      color: "white",
      fontFamily: "'Playfair Display', serif",
      fontSize: "1.5rem",
    },
    navLinks: {
      display: "flex",
      gap: "1.5rem",
    },
    navLink: {
      color: "#ccc",
      textDecoration: "none",
      fontFamily: "'Poppins', sans-serif",
      fontSize: "1rem",
      transition: "color 0.2s ease-in-out",
      cursor: "pointer",
    },
    heroSection: {
      display: "flex",
      width: "100%",
      height: "350px",
      overflow: "hidden",
    },
    heroImage: {
      flex: 1,
      width: "100%",
      objectFit: "cover" as const,
      height: "100%",
    },
    page: {
      minHeight: "100vh",
      width: "100%",
      backgroundColor: "#111",
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "center",
      justifyContent: "flex-start",
      padding: "2rem",
      boxSizing: "border-box" as const,
    },
    section: {
      marginBottom: "4rem",
    },
    title: {
      fontFamily: "'Playfair Display', serif",
      fontSize: "3rem",
      color: "white",
      marginBottom: "2rem",
      textAlign: "center" as const,
    },
    imageWrapper: {
      display: "flex",
      gap: "4rem",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "wrap" as const,
    },
    imageCard: {
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "center",
      maxWidth: "200px",
    },
    image: {
      width: "175px",
      height: "auto",
      borderRadius: "12px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
      objectFit: "cover" as const,
    },
    caption: {
      marginTop: "0.5rem",
      color: "#ddd",
      textAlign: "center" as const,
      fontSize: "0.95rem",
      fontFamily: "'Poppins', sans-serif",
    },
    footer: {
      width: "100%",
      backgroundColor: "#1a1a1a",
      color: "#ccc",
      padding: "2rem 1rem",
      textAlign: "center" as const,
      fontFamily: "'Poppins', sans-serif",
      fontSize: "1rem",
      borderTop: "1px solid #333",
      marginTop: "auto",
    },
  };

  return (
    <>
      <Head>
        <title>Shop Online</title>
      </Head>

      {/* Navbar */}
      <nav style={styles.navBar}>
        <div style={styles.navContent}>
          <span style={styles.logo}>Latest Trending Products</span>
          <div style={styles.navLinks}>
            <Link href="/"><a style={styles.navLink}>Home</a></Link>
            <Link href="/books"><a style={styles.navLink}>Books</a></Link>
            <Link href="/homedecor"><a style={styles.navLink}>Home Decor</a></Link>
            <Link href="/electronics"><a style={styles.navLink}>Electronics</a></Link>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <div style={styles.heroSection}>
        <img src="/bookimgs/BACKgroundcity.jpg" alt="Hero 1" style={styles.heroImage} />
        <img src="/bookimgs/BACKgroundnyc3.jpg" alt="Hero 2" style={styles.heroImage} />
        <img src="/bookimgs/BACKgroundcitymix.jpg" alt="Hero 3" style={styles.heroImage} />
      </div>

      {/* Main Page */}
      <div style={styles.page}>
        <h1 style={styles.title}>Books</h1>

        {/* Book Sections */}
        {[
          [
            { title: "Circe", href: "/circe", src: "/bookimgs/circe.jpg" },
            { title: "The Lord of the Rings", href: "/thelordoftherings", src: "/bookimgs/thelordoftheRings.jpg" },
            { title: "Dragon Flight", href: "/dragonflight", src: "/bookimgs/dragonFlight.jpg" },
          ],
          [
            { title: "Abundance", href: "/abundance", src: "/bookimgs/abundancebook.jpg" },
            { title: "The Book of Doors", href: "/thebookofdoors", src: "/bookimgs/thebookofdoors.jpg" },
            { title: "Book Lovers", href: "/booklovers", src: "/bookimgs/bookloversbook.jpg" },
          ],
          [
            { title: "Funny Story", href: "/funnystory", src: "/bookimgs/funnystorybook.jpg" },
            { title: "Love Story", href: "/lovestory", src: "/bookimgs/lovestorybook.jpg" },
            { title: "Atmosphere", href: "/atmosphere", src: "/bookimgs/atmosphere.jpg" },
          ],
          [
            { title: "Good Omens", href: "/goodomens", src: "/bookimgs/good-omens-2.jpg" },
            { title: "A World Alone", href: "/aworldalone", src: "/bookimgs/aworldalonebook.jpg" },
            { title: "The Outsiders", href: "/theoutsiders", src: "/bookimgs/theoutsidersbook.jpg" },
          ],
          [
            { title: "Goosebumps Mummy", href: "/themummystomb", src: "/bookimgs/goosebumpsMummy.jpg" },
            { title: "The Haunted Car", href: "/thehauntedcar", src: "/bookimgs/thehauntedcar.jpg" },
            { title: "The Ghostly Adventures", href: "/ghostlyadventures", src: "/bookimgs/theghostlyAdventures.jpg" },
          ],
        ].map((section, index) => (
          <section key={index} style={styles.section}>
            <div style={styles.imageWrapper}>
              {section.map((book, i) => (
                <div style={styles.imageCard} key={i}>
                  <Link href={book.href}>
                    <a><img src={book.src} alt={book.title} style={styles.image} /></a>
                  </Link>
                  <div style={styles.caption}>{book.title}</div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Hero Section 2 */}
        <div style={styles.heroSection}>
          <img src="/bookimgs/BACKgrounddrawing7.jpg" alt="Hero 4" style={styles.heroImage} />
          <img src="/bookimgs/BACKgrounddrawing5.jpeg" alt="Hero 5" style={styles.heroImage} />
          <img src="/bookimgs/BACKgrounddrawingcolor9.jpg" alt="Hero 6" style={styles.heroImage} />
        </div>

        {/* Footer */}
        <footer style={styles.footer}>
          © 2025 SMVM.net. All rights reserved.
          <h1>
            <Link href="/termsandservice">
              <a>Terms and Services</a>
            </Link>
          </h1>
        </footer>
      </div>
    </>
  );
}
