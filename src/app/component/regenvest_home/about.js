// import React from 'react';

// export default function Bout() {
//   return (
//     <div>
//       <section className="text-gray-600 body-font bg-gray-300">
//         <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
//           <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
//             <img
//               className="object-cover object-center rounded"
//               alt="hero"
//               src="/images/olive.png"
//             />
//           </div>
//           <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
//             <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
//             ReGenVest Challenge 2025: Shaping Tomorrow’s Financial Thinkers
//               <br className="hidden lg:inline-block" />
//             </h1>
//             <p className="mb-4 leading-relaxed">
//               {/* The Olive School proudly presents its Finance Essay Competition. The competition aims to engage young minds in meaningful discourse on real
// world issues involving finance, sustainability, and economic strategy.
//  Participants will explore the evolving landscape of sustainable finance through
//  a thought-provoking essay competition that challenges critical thinking,
//  research, and analytical reasoning. */}
//  ThriveFi is proud to announce the launch of the ReGenVest Challenge in India, an initiative designed to engage senior students in critical financial thinking. The challenge invites senior school students to write essay on a range of pressing financial topics, encouraging them to explore real-world problems and propose innovative solutions.

// In collaboration with<b> The Olive School, located in Thol, Distt. Kurukshetra, Haryana,</b> the ReGenVest Challenge offers a unique platform for students to enter the public discourse and have their voices heard. Winning essays will be published, providing students with recognition and a meaningful opportunity to showcase their insights.
//             </p>
//             <div className="mb-8 leading-relaxed text-left">
//               {/* <p>
//                 📅{' '}
//                 <span className="font-extrabold text-black">
//                   Speaker Sessions Date: Saturday and Sunday, May 17 and 18
//                 </span>
//               </p> */}
           
//               <p>
//                 🔍{' '}
//                 <span className="font-extrabold text-black">
//                 ESSAY TOPICS <br/>
//                 </span>
//                 You can choose one of the following topics:

//               </p>
//               <ol className="list-decimal list-inside mt-2 space-y-2 text-left">
//                 <li>
//                   <b>The Role of Sustainable Finance in Addressing Climate Change</b>
//                   <br />
//                   <i>
//                     To what extent can sustainable finance effectively mitigate climate risks while
//                     ensuring economic growth?
//                   </i>
//                 </li>
//                 <li>
//                   <b>ESG Investing: A Genuine Path to Sustainability or Just Greenwashing?</b>
//                   <br />
//                   Critically assess the impact of Environmental, Social, and Governance (ESG)
//                   investing on corporate behavior and financial performance.
//                 </li>
//                 <li>
//                   <b>The Future of Green Bonds: A Catalyst for Sustainable Development?</b>
//                   <br />
//                   Evaluate the effectiveness of green bonds in financing sustainable projects and
//                   driving global environmental goals.
//                 </li>
//               </ol>
//               <p className="mt-4">
//               We believe that participation from your school would significantly contribute
//  to the vibrancy of the event and provide an excellent opportunity for your
//  students to showcase their talent on a national platform
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }





"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBook, FaLeaf, FaGlobe, FaTrophy, FaChartLine } from "react-icons/fa";

export default function Bout() {
  const topics = [
    {
      title: "The Role of Sustainable Finance in Addressing Climate Change",
      desc:
        "To what extent can sustainable finance effectively mitigate climate risks while ensuring economic growth?",
      Icon: FaLeaf,
    },
    {
      title: "ESG Investing: A Genuine Path to Sustainability or Just Greenwashing?",
      desc:
        "Critically assess the impact of Environmental, Social, and Governance (ESG) investing on corporate behavior and financial performance.",
      Icon: FaChartLine,
    },
    {
      title: "The Future of Green Bonds: A Catalyst for Sustainable Development?",
      desc:
        "Evaluate the effectiveness of green bonds in financing sustainable projects and driving global environmental goals.",
      Icon: FaGlobe,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.06 } },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -top-28 -right-20 w-72 h-72 rounded-full bg-indigo-300/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-fuchsia-300/18 blur-3xl" />

      <div className="container mx-auto px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          {/* Image / Visual */}
          <motion.div variants={item} className="md:w-1/2 w-full">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white/70 p-6">
              <img
                src="/images/olive.png"
                alt="The Olive School — ReGenVest"
                className="w-full h-auto object-contain rounded-2xl bg-white p-6"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={item} className="md:w-1/2 w-full">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium">
              ReGenVest Challenge • 2025
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight font-[oswald] bg-black bg-clip-text text-transparent">
              ReGenVest Challenge 2025: Shaping Tomorrow’s Financial Thinkers
            </h2>

            <p className="mt-4 text-gray-700 text-lg leading-relaxed">
              ThriveFi is proud to announce the launch of the ReGenVest Challenge in India — an initiative designed to engage senior
              students in critical financial thinking. In collaboration with <strong>The Olive School, Thol (Kurukshetra, Haryana)</strong>, the
              Challenge invites students to submit essays on pressing financial topics. Winning essays will be published and receive
              recognition from academic and industry experts.
            </p>

            {/* Topics */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3 text-black">Essay Topics</h3>

              <motion.ol className="space-y-4" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                {topics.map((t, i) => (
                  <motion.li
                    key={i}
                    variants={item}
                    className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow duration-200"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-none mt-1">
                        <div className="w-11 h-11 rounded-lg flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                          <t.Icon className="w-5 h-5" />
                        </div>
                      </div>

                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{t.title}</h4>
                        <p className="text-gray-600 mt-1">{t.desc}</p>
                      </div>

                      <div className="flex-none text-sm font-semibold text-indigo-600">#{i + 1}</div>
                    </div>
                  </motion.li>
                ))}
              </motion.ol>
            </div>

            {/* CTA */}
            {/* <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/regenvest"
                className="inline-flex items-center px-5 py-2 rounded-full bg-white text-black font-semibold shadow hover:scale-105 transition-transform"
              >
                Learn More
              </a>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScrDPfVkT2_cd-gPOFke3YqXT1Tp8xfeDH2iQiuzkxuYMhf-g/viewform"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-700 text-white font-semibold shadow hover:brightness-105 transition"
              >
                Register Now
              </a>
            </div> */}

            {/* <p className="mt-4 text-sm text-gray-500">Deadline: <strong>June 20, 2025</strong></p> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
