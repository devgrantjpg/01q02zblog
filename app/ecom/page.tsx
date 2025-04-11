import Image from 'next/image';
import Link from 'next/link';

export default function ProductPage() {
  const products = [
    {
      title: "Titan Army Gaming Monitor",
      description: '34" HD Curved Monitor',
      price: '',
      image: '/img/img1.jpeg',
    },
    {
      title: "HD Movies",
      description: 'LCD Display • 3440×1440',
      price: '',
      image: '/img/img2.jpeg',
    },
    {
      title: "Curved Widescreen",
      description: 'HD • HDR400 1500R',
      price: '',
      image: '/img/img3.jpeg',
    },
    {
      title: "144Hz",
      description: 'Audio out • DP • HDMI',
      price: '',
      image: '/img/img5.jpeg',
    },

  ];

  return (
    <div style={{
      backgroundColor: '#000',
      color: '#fff',
      minHeight: '100vh',
      padding: '40px'
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Featured Products</h1>
      <Link href="https://www.paypal.com/ncp/payment/B74PJ66UWGJAU"><h1 style={{ textAlign: 'center', marginBottom: '40px', color: '#0f0'}}>Titan Army Gaming Monitor $689</h1></Link>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '40px'
      }}>
        {products.map((product, index) => (
          <div key={index} style={{ width: '350px', textAlign: 'center' }}>
            <div style={{ width: '350px', height: '350px', position: 'relative' }}>
              <Image
                src={product.image}
                alt={product.title}
                fill
                style={{
                  objectFit: 'cover',
                  borderRadius: '10px'
                }}
              />
            </div>
            <h2 style={{ marginTop: '15px' }}>{product.title}</h2>
            <p>{product.description}</p>
            <p style={{ fontWeight: 'bold', color: '#0f0' }}>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
