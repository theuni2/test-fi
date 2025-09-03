// import React from 'react'

// export default function Sponser() {
//   return (
//     <div>
//         <section class="text-gray-600 body-font bg-gray-300">
// <div class="container mx-auto flex px-5 py-4 items-center justify-center flex-col"> 
//   <img class="lg:w-1/6 md:w-1/4 w-1/2 h-auto mb-10 object-cover object-center rounded-full" alt="hero" src="/images/image.png"/>
//   <div class="text-center lg:w-2/3 w-full">
//     <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Proudly Sponsored By WellFund</h1>
//     <p class="mb-8 leading-relaxed">
//       WellFund empowers startups by providing them with strategic resources, expert financial insights, and access to a strong investor network. WellFund offers curated funding opportunities, guidance on fundraising and financial planning, and a supportive community of founders and mentors—ensuring that capital is never a barrier to innovation and sustainable growth.
//     </p>
//   </div>
// </div>


// </section>
//     </div>
//   )
// }


"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Sponser() {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-100 via-white to-gray-200 py-16">
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-purple-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-indigo-200/30 blur-3xl" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-6 flex flex-col items-center text-center"
      >
        <motion.img
          variants={item}
          src="/images/image.png"
          alt="WellFund Logo"
          className="w-40 h-40 object-cover rounded-full shadow-lg border-4 border-white mb-6"
        />

        <motion.h2
          variants={item}
          className="text-3xl md:text-4xl font-extrabold bg-black font-[oswald] bg-clip-text text-transparent"
        >
          Proudly Sponsored By WellFund
        </motion.h2>
        {/* <motion.h2
          variants={item}
          className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-700 bg-clip-text text-transparent"
        >
          Proudly Sponsored By WellFund
        </motion.h2> */}

        <motion.p
          variants={item}
          className="mt-4 max-w-2xl text-gray-700 leading-relaxed text-lg"
        >
          WellFund empowers startups by providing strategic resources, expert financial insights, and access to a strong investor network. They offer curated funding opportunities, guidance on fundraising and financial planning, and a supportive community of founders and mentors—ensuring that capital is never a barrier to innovation and sustainable growth.
        </motion.p>
      </motion.div>
    </section>
  );
}
