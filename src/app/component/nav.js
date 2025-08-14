// import React from 'react'



// export default function Nav() {
//   return (
// <div>
//   <header className="text-gray-600 body-font bg-white">
//     <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
      
//       <img className="sm:w-[10%] h-[10%] w-[20%] my-2" src="/images/logo.png" />

//       <nav className="flex flex-wrap items-center text-base justify-center md:ml-auto md:mr-0 md:justify-end w-full md:w-auto">
//         <a className="mr-5 hover:text-gray-900 hover:cursor-pointer" href="/">Home</a>
//         <a className="mr-5 hover:text-gray-900 hover:cursor-pointer" href="/about_thrivefi">About Us</a>
//         <a className="mr-5 hover:text-gray-900 hover:cursor-pointer" href="/regenvest">ReGenVest</a>
//         <a className="mr-5 hover:text-gray-900 hover:cursor-pointer" href="/speaker">Conference</a>
//       </nav>

//       <a href="https://docs.google.com/forms/d/e/1FAIpQLScrDPfVkT2_cd-gPOFke3YqXT1Tp8xfeDH2iQiuzkxuYMhf-g/viewform">
//         {/* Register button can go here if needed */}
//       </a>

//     </div>
//   </header>
// </div>

//   )
// }


"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Nav() {
  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about_thrivefi" },
    { name: "ReGenVest", href: "/regenvest" },
    { name: "Conference", href: "/speaker" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        
        {/* Logo */}
        <a href="/" className="flex items-center">
         
          <span className="ml-3 text-2xl font-extrabold leading-tight bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-700 bg-clip-text text-transparent">
            ThriveFi
          </span>
        </a>

        {/* Navigation */}
        <nav className="flex flex-wrap items-center text-base justify-center md:ml-auto md:mr-0 md:justify-end w-full md:w-auto">
          {links.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="mr-5 font-semibold leading-tight bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-700 bg-clip-text text-transparent hover:opacity-80 transition-all duration-200"
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        {/* Register Button */}
        {/* <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScrDPfVkT2_cd-gPOFke3YqXT1Tp8xfeDH2iQiuzkxuYMhf-g/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-3 md:mt-0 inline-flex items-center px-6 py-2 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-700 shadow-md hover:shadow-lg transition-all duration-300"
          >
            Register
          </motion.button>
        </a> */}

      </div>
    </header>
  );
}
