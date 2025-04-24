import Head from "next/head";
import Link from "next/link";

export default function Electronics() {
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
      width: "200px",
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
          <span style={styles.logo}>SMVM.net</span>
          <div style={styles.navLinks}>
            <Link href="/"><a style={styles.navLink}>Home</a></Link>
            <Link href="/books"><a style={styles.navLink}>Books</a></Link>
            <Link href="/electronics"><a style={styles.navLink}>Electronics</a></Link>
            <Link href="/homedecor"><a style={styles.navLink}>Home Decor</a></Link>
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
        <h1 style={styles.title}>Home Decor</h1>

        {/* Book Sections */}
        {[
          [
            { title: "Classic Radio", href: "", src: "/img/smlgVasesColors (3).jpeg" },
            { title: "Classic Radio", href: "", src: "/img/smlgVasesColors (4).jpeg" },
            { title: "Classic Radio", href: "", src: "/img/smlgVasesColors (5).jpeg" },
          ],
          [
            { title: "Classic Radio", href: "", src: "/smlgVasesColors (6).jpeg" },
            { title: "Classic Radio", href: "", src: "/igCeramicHandmade (1).jpeg" },
            { title: "Classic Radio", href: "", src: "/igCeramicHandmade (2).jpeg" },
          ],
          [
            { title: "Classic Radio", href: "", src: "/img/igCeramicHandmade (3).jpeg" },
            { title: "Classic Radio", href: "", src: "/img/igCeramicHandmade (4).jpeg" },
            { title: "Curved Computer Monitor", href: "", src: "/igCeramicHandmade (1).jpeg" },
          ],
          [
            { title: "Computer Monitor", href: "", src: "/igCeramicHandmade (5).jpeg" },
            { title: "Computer Monitor", href: "", src: "/igCeramicHandmade (6).jpeg" },
            { title: "Computer Monitor", href: "", src: "/igCeramicHandmade (7).jpeg" },
          ],
        //   [
        //     { title: "Goosebumps Mummy", href: "/themummystomb", src: "/bookimgs/goosebumpsMummy.jpg" },
        //     { title: "The Haunted Car", href: "/thehauntedcar", src: "/bookimgs/thehauntedcar.jpg" },
        //     { title: "The Ghostly Adventures", href: "/ghostlyadventures", src: "/bookimgs/theghostlyAdventures.jpg" },
        //   ],
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
