import Image from 'next/image';

export default function Dashboard() {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Product Page</h1>
            <p>34" Curved screen Computer monitor!</p>
            <p>HD</p>
            <p>3440*1440 144Hz</p>
            <p>Brand: Titan Army Gaming Monitor</p>
            <p>Price: $689.99</p>
            
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                <div style={{ margin: '10px' }}>
                    <Image
                        src="/img/img1.jpeg" // Corrected path
                        alt="Product 1"
                        width={300}
                        height={300}
                        objectFit="cover"
                    />
                </div>
                
                <div style={{ margin: '10px' }}>
                    <Image
                        src="/img/img2.jpeg" // Corrected path
                        alt="Product 2"
                        width={300}
                        height={300}
                        objectFit="cover"
                    />
                </div>

                <div style={{ margin: '10px' }}>
                    <Image
                        src="/img/img3.jpeg" // Corrected path
                        alt="Product 3"
                        width={300}
                        height={300}
                        objectFit="cover"
                    />
                </div>
                  <div>
                     <span style={{ color: 'blue' }}>Fastest payment option: </span>
                     Email-Banking transfer to ( urls3931@gmail.com )
                     <br />
                     Include Shipping info under "messages"
                  </div>
               
            </div>
        </div>
    );
}
