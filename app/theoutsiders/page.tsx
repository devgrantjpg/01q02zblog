import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Theoutsiders() {
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
          src="/bookimgs/theoutsidersbook.jpg"
          alt="The outsiders"
          width={200}
          height={300}
          style={{ objectFit: 'cover' }}
        />
      </div>

      <p style={styles.description}>
        *"No one ever said life was easy. But Ponyboy is pretty sure that he's got things figured out. He knows that he can count on his brothers, Darry and Sodapop. And he knows that he can count on his friends—true friends who would do anything for him, like Johnny and Two-Bit. But not on much else besides trouble with the Socs, a vicious gang of rich kids whose idea of a good time is beating up on “greasers” like Ponyboy. At least he knows what to expect—until the night someone takes things too far.

        The Outsiders is a dramatic and enduring work of fiction that laid the groundwork for the YA genre. S. E. Hinton's classic story of a boy who finds himself on the outskirts of regular society remains as powerful today as it was the day it was first published. "The Outsiders transformed young-adult fiction from a genre mostly about prom queens, football players and high school crushes to one that portrayed a darker, truer world." —The New York Times
        Taut with tension, filled with drama." —The Chicago Tribune"*
      </p>

      <p style={{ color: '#bbb' }}>Tax included</p>
      <p style={{ color: '#bbb' }}>Free shipping</p>
      <p style={{ color: '#bbb' }}>Paperback Novel</p>

      <Link href="https://www.paypal.com/ncp/payment/5QX4W6ULG8RAC" passHref>
        <Button style={styles.button}>Buy</Button>
      </Link>
    </div>
  );
}
