import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Funnystory() {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      backgroundColor: '#000',
    },
    imageWrapper: {
      width: '200px',
      height: '300px',
      marginTop: '1rem',
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
    },
    button: {
      marginTop: '1.5rem',
      background: 'linear-gradient(to right, #4facfe, #00f2fe)',
      color: '#000',
      border: 'none',
      padding: '0.75rem 1.5rem',
      fontSize: '1rem',
      fontWeight: 'bold' as const,
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'transform 0.2s ease-in-out',
    }
  };

  return (
    <div style={styles.container}>
      {/* 📚 Book Cover Image under title */}
      <div style={styles.imageWrapper}>
        <Image
          src="/bookimgs/theghostlyAdventures.jpg"
          alt="Funny Story"
          width={200}
          height={300}
          style={{ objectFit: 'cover' }}
        />
      </div>

      <p style={styles.description}>
        *"A gifted boy has visions in his nightmares and finds himself in the middle of a haunted church mystery in this thrilling middle-grade series debut.

        Jamie O’Hare just wants to be a normal kid...but normal kids don’t see ghosts.
 
        Twelve-year-old Jamie and his family move to a new town for a fresh start after his father passes away. But when his increasingly creepy nightmares start to seem real, he finds himself following clues from a ghost to unlock an old church treasure mystery. Will he and his new friends uncover the truth to the haunted church before it’s too late?"*
      </p>

      <p style={{ color: '#bbb' }}>Tax included</p>
      <p style={{ color: '#bbb' }}>Free shipping</p>
      <p style={{ color: '#bbb' }}>Paperback Novel</p>

      <Link href="https://www.paypal.com/ncp/payment/BU5Q6CJCJG2FU" passHref>
        <Button style={styles.button}>Buy</Button>
      </Link>
    </div>
  );
}
