// import React, { useState, useEffect } from 'react';
// import Header from '..';
// import MobileMenu from '../mobileHeader';

// const ResponsiveHeader = () => {
//   const [windowWidth, setWindowWidth] = useState(0);

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       setWindowWidth(window.innerWidth);

//       const handleResize = () => {
//         setWindowWidth(window.innerWidth);
//       };

//       window.addEventListener('resize', handleResize);

//       return () => {
//         window.removeEventListener('resize', handleResize);
//       };
//     }
//   }, []);

//   return windowWidth > 900 ? <Header /> : <MobileMenu />;
// };


// export default ResponsiveHeader;