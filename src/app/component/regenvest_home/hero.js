// import React from 'react'

// export default function Hero() {
//   return (
//     <div><section class="text-gray-600 body-font bg-black">
//     <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
//       <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
//         <h1 class="title-font sm:text-4xl text-3xl mb-4  text-white font-bold">ReGenVest Challenge
//           <br class="hidden lg:inline-block"/> By The Olive School
//           </h1>
//         <p class="mb-4 leading-relaxed text-6xl font-serif text-gray-200">India Edition</p>
//     <p class="mb-3 leading-relaxed text-3xl font-serif text-gray-200">Student in grades IX through XII may participate</p>
//     <p class="mb-3 leading-relaxed text-3xl font-serif text-gray-200">Deadline: June 20, 2025</p>

//         <div class="flex justify-center">
//         {/* <a href='https://docs.google.com/forms/d/e/1FAIpQLSdjsiBbhJyug5E96pEzcPRKb5ag06RsDxgu8kbemsRuw88vrA/viewform?usp=header'>

//           <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
//        </a> */}
//         </div>
//       </div>
//       <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 border-2 rounded-2xl border-white shadow-amber-100">
//         <img class="object-cover object-center rounded-2xl" alt="hero" src="images/slogo.png"/>
//       </div>
//     </div>
//   </section>
//   </div>
//   )
// }


"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HeroReGenVest() {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.10, delayChildren: 0.06 } },
  };
  const item = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative overflow-hidden bg-black">
      {/* decorative blurred blobs */}
      <div className="pointer-events-none absolute -top-32 -right-16 w-72 h-72 rounded-full bg-indigo-700/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-fuchsia-600/10 blur-3xl" />

      <div className="container mx-auto px-6 py-16 md:py-24">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col-reverse md:flex-row items-center gap-10"
        >
          {/* LEFT: Text */}
          <motion.div variants={item} className="md:w-1/2 text-center md:text-left">
            <motion.span
              variants={item}
              className="inline-block px-3 py-1 rounded-full bg-white/5 text-xs font-medium text-gray-200 mb-4"
            >
              India Edition
            </motion.span>

            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
            >
              <span className="block bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-700 bg-clip-text text-transparent">
                ReGenVest Challenge
              </span>
              <span className="block text-gray-300 mt-2 text-lg md:text-xl font-medium">
                By The Olive School
              </span>
            </motion.h1>

            <motion.p variants={item} className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl mx-auto md:mx-0">
              Students in <strong>Grades IX — XII</strong> are invited to participate.
              Showcase your financial thinking, propose solutions, and win mentorship
              and recognition from industry experts.
            </motion.p>

            <motion.div variants={item} className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow">
                Deadline: <b>Closed</b> (June 20, 2025)

              </span>

              {/* <a
                href="/regenvest"
                className="inline-flex items-center px-5 py-2 rounded-full text-sm bg-white text-black font-semibold hover:scale-105 transition transform"
                aria-label="Learn more about ReGenVest"
              >
                Learn More
              </a> */}

              <a
                href="#result"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-5 py-2 rounded-full text-sm bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-700 text-white font-semibold shadow hover:brightness-105 transition"
                aria-label="Register for ReGenVest"
              >
               View Results
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT: Image/Card */}
          <motion.div variants={item} className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-2xl p-1 bg-white/5 border border-white/8 shadow-xl transform transition-all hover:scale-[1.03]">
              <img
                src="/images/slogo.png"
                alt="ReGenVest logo"
                className="w-full h-full object-contain rounded-xl bg-black p-6"
              />
              <div className="absolute -bottom-4 left-4 px-3 py-1 rounded-full bg-black/60 text-xs text-gray-200 backdrop-blur">
                Essay Competition • India
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
