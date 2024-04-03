// // // // import { resourcesLinks, platformLinks, communityLinks } from "../constants";
// // // // const Footer = () => {
// // // //   return (
// // // //     <footer className="mt-20 border-t py-10 border-neutral-700">
// // // //       <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
// // // //         <div>
// // // //           <h3 className="text-md font-semibold mb-4">Resources</h3>
// // // //           <ul className="space-y-2">
// // // //             {resourcesLinks.map((link, index) => (
// // // //               <li key={index}>
// // // //                 <a
// // // //                   href={link.href}
// // // //                   className="text-neutral-300 hover:text-white"
// // // //                 >
// // // //                   {link.text}
// // // //                 </a>
// // // //               </li>
// // // //             ))}
// // // //           </ul>
// // // //         </div>
// // // //         <div>
// // // //           <h3 className="text-md font-semibold mb-4">Platform</h3>
// // // //           <ul className="space-y-2">
// // // //             {platformLinks.map((link, index) => (
// // // //               <li key={index}>
// // // //                 <a
// // // //                   href={link.href}
// // // //                   className="text-neutral-300 hover:text-white"
// // // //                 >
// // // //                   {link.text}
// // // //                 </a>
// // // //               </li>
// // // //             ))}
// // // //           </ul>
// // // //         </div>
// // // //         <div>
// // // //           <h3 className="text-md font-semibold mb-4">Community</h3>
// // // //           <ul className="space-y-2">
// // // //             {communityLinks.map((link, index) => (
// // // //               <li key={index}>
// // // //                 <a
// // // //                   href={link.href}
// // // //                   className="text-neutral-300 hover:text-white"
// // // //                 >
// // // //                   {link.text}
// // // //                 </a>
// // // //               </li>
// // // //             ))}
// // // //           </ul>
// // // //         </div>
// // // //       </div>
// // // //     </footer>
// // // //   );
// // // // };

// // // // export default Footer;


// // // import React from 'react';
// // // // Import icons from a library like react-icons
// // // import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

// // // const Footer = () => {
// // //   const currentYear = new Date().getFullYear(); // Dynamically set the current year

// // //   return (
// // //     <footer className="bg-gray-800 text-white py-8">
// // //       <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
// // //         {/* Social Links */}
// // //         <div className="mb-4">
// // //           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
// // //             <FaFacebookF />
// // //           </a>
// // //           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
// // //             <FaTwitter />
// // //           </a>
// // //           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
// // //             <FaInstagram />
// // //           </a>
// // //           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
// // //             <FaLinkedinIn />
// // //           </a>
// // //         </div>

// // //         {/* Copyright Notice */}
// // //         <div>
// // //           © {currentYear} Gig Ahooy!!!. All Rights Reserved.
// // //         </div>
// // //       </div>
// // //     </footer>
// // //   );
// // // };

// // // export default Footer;







// // import React from 'react';
// // import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

// // const Footer = () => {
// //   const currentYear = new Date().getFullYear(); // Dynamically set the current year

// //   return (
// //     <footer className="bg-gray-800 text-white py-8">
// //       <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
// //         {/* Social Links */}
// //         <div className="flex mb-4"> {/* Ensure this div is displayed as a flex container */}
// //           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
// //             <FaFacebookF />
// //           </a>
// //           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
// //             <FaTwitter />
// //           </a>
// //           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
// //             <FaInstagram />
// //           </a>
// //           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
// //             <FaLinkedinIn />
// //           </a>
// //         </div>

// //         {/* Copyright Notice */}
// //         <div>
// //           © {currentYear} Your Company Name. All Rights Reserved.
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;



// import React from 'react';
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

// const Footer = () => {
//   const currentYear = new Date().getFullYear(); // Dynamically set the current year

//   return (
//     // "bg-gray-800" for dark gray background, and "w-full" to ensure it stretches fully
//     <footer className="bg-gray-800 text-white py-8 w-full">
//       <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
//         {/* Social Links */}
//         <div className="flex mb-4">
//           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
//             <FaFacebookF />
//           </a>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
//             <FaTwitter />
//           </a>
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
//             <FaInstagram />
//           </a>
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
//             <FaLinkedinIn />
//           </a>
//         </div>

//         {/* Copyright Notice */}
//         <div>
//           © {currentYear} Your Company Name. All Rights Reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Dynamically set the current year

  return (
    <footer className="bg-black text-white py-8 w-full">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        {/* Social Links */}
        <div className="flex mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FaLinkedinIn />
          </a>
        </div>

        {/* Copyright Notice */}
        <div>
          © {currentYear} Gig Ahooy. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
