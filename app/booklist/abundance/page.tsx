export default function FeaturedBook() {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      backgroundColor: '#000', // 🖤 Black background
    },
    image: {
      width: '200px',
      height: '300px',
      objectFit: 'cover' as const,
      borderRadius: '10px',
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
      <img 
        src="/bookimgs/abundancebook.jpg" 
        alt="Featured Book" 
        style={styles.image} 
      />
      <p style={styles.description}>
        *"Abundance is a nonfiction book by Ezra Klein and Derek Thompson published by Avid Reader Press in March 2025. The book examines the reasons behind the lack of progress on ambitious projects in the United States, including those related to affordable housing, infrastructure, and climate change."*
      </p>
    </div>
  );
}
