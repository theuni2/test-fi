// import React from "react";

// export default function Event() {
//   return (
//     <div>  
//       <section className="text-gray-600 body-font bg-white">
//         <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
//           <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
//             <h3 className="text-base">Our First Event</h3>
//             <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-gray-900">
//               {" "}
//               ReGenVest Essay Competition
//             </h1>
//             <p className="mb-8 leading-relaxed">
//             ThriveFi is proud to announce the launch of the ReGenVest Challenge in India, an initiative designed to engage senior students in critical financial thinking. The challenge invites senior school students to write essay on a range of pressing financial topics, encouraging them to explore real-world problems and propose innovative solutions.

//        </p>
//             <div className="flex justify-center">
//             {/* <a href='https://docs.google.com/forms/d/e/1FAIpQLSdjsiBbhJyug5E96pEzcPRKb5ag06RsDxgu8kbemsRuw88vrA/viewform?usp=header'>

//               <button className="inline-flex text-white bg-gray-800 border-0  py-2 px-6 focus:outline-none hover:bg-gray-950 rounded-xl text-lg">
//                 Submit
//               </button>
//               </a> */}
//               <a href='/regenvest'>
//               <button className="inline-flex text-white bg-gray-800 border-0 mx-2 py-2 px-6 focus:outline-none hover:bg-gray-950 rounded-xl text-lg">
//                 Learn More
//               </button>
//               </a>
//             </div>
//           </div>
//           <div className="lg:max-w-lg lg:w-full rounded-2xl md:w-1/2 w-5/6">
//             <img
//               className="object-cover object-center rounded-2xl"
//               alt="hero"
//               src="/images/regenvestimg.jpeg"
//             />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Event() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16">
      <div className="container mx-auto px-5 flex flex-col md:flex-row items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-10 flex flex-col md:items-start md:text-left mb-12 md:mb-0 items-center text-center"
        >
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm uppercase tracking-wider text-purple-600 font-semibold"
          >
            Our First Event
          </motion.h3>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="sm:text-4xl text-3xl mb-4 font-extrabold leading-tight bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-700 bg-clip-text text-transparent"
          >
            ReGenVest Essay Competition
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-8 leading-relaxed text-gray-700"
          >
            ThriveFi is proud to announce the launch of the ReGenVest Challenge
            in India, an initiative designed to engage senior students in
            critical financial thinking. The challenge invites senior school
            students to write essays on pressing financial topics, encouraging
            them to explore real-world problems and propose innovative
            solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center"
          >
            <a href="/regenvest">
              <button className="inline-flex text-white bg-gradient-to-r from-indigo-600 to-purple-600 border-0 py-3 px-8 focus:outline-none hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 rounded-xl text-lg shadow-lg hover:shadow-xl">
                Learn More
              </button>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="object-cover object-center rounded-2xl shadow-lg"
            alt="ReGenVest"
            src="/images/regenvestimg.jpeg"
          />
        </motion.div>
      </div>
    </section>
  );
}
