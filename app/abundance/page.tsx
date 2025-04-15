import Image from "next/image";

export default function Abundance() {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      backgroundColor: '#000', // 🖤 Black background
    },
    imageWrapper: {
      width: '200px',
      height: '300px',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
    },
    description: {
      marginTop: '1rem',
      maxWidth: '300px',
      color: '#ddd',
      textAlign: 'center' as const,
      fontFamily: "'Poppins', sans-serif",
      fontSize: '1rem',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageWrapper}>
        <Image
          src="/bookimgs/abundancebook.jpg"
          alt="Featured Book - Abundance"
          width={200}
          height={300}
          style={{ objectFit: 'cover' }}
        />
      </div>

      <p style={styles.description}>
        *"Abundance is a nonfiction book by Ezra Klein and Derek Thompson published by Avid Reader Press in March 2025. The book examines the reasons behind the lack of progress on ambitious projects in the United States, including those related to affordable housing, infrastructure, and climate change."*
      </p>
    </div>
  );
}
