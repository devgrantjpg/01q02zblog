// 'use client';

// import { useEffect } from 'react';

// export default function Chart() {
//   useEffect(() => {
//     document.body.style.overflow = 'hidden';
//     return () => {
//       document.body.style.overflow = 'auto';
//     };
//   }, []);

//   return (
//     <div
//       style={{
//         width: '100vw',
//         height: '100vh', // Shorter black overlay
//         overflow: 'hidden',
//         backgroundColor: '#000',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'flex-end',
//       }}
//     >
//       <iframe
//         src="https://0z010xchart.vercel.app/"
//         width="100%"
//         height="120%" // Match parent container
//         style={{
//           border: 'none',
//           transform: 'translateY(-20%)', // Adjust this to scroll into lower part
//           pointerEvents: 'auto',
//         }}
//         scrolling="no"
//         allowFullScreen
//         title="Live Chart"
//         sandbox="allow-scripts allow-same-origin"
//       />
//     </div>
//   );
// }
