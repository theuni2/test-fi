// import React from 'react'
// import { FaChartLine, FaUsers, FaGlobe } from "react-icons/fa";
// import Nav from '../component/nav';
// import Footer from '../component/thriveFi/footer';


// export default function Page() {
//   return (
//     <div>
//         <Nav/>
//  <div className="max-w-3xl my-4 mx-auto p-6 font-sans shadow-2xl">
//       <h1 className="text-3xl font-bold mb-4">About Us</h1>

//       <p className="mb-4">
//         <strong className="font-semibold">At ThriveFi, our mission is to bring meaningful financial education to students around the world through engaging challenges that delve into the complexities of finance. Founded by Arizona-based high school student Anvay Arora, ThriveFi is stepping onto the global stage by organizing competitions and hosting expert-led discussions to raise awareness and promote literacy in personal and global finance. </strong>
//        <br/>
//          At the core of ThriveFi are our guiding principles—the 3 Cs: Conference, Competition, and Consulting. These pillars reflect our commitment to creating dynamic learning opportunities, encouraging informed dialogue, and providing mentorship to students as they navigate the world of finance. Each “C” has been built in with a missiong and drives the initiatives we create to empower the next generation of financial thinkers.

//       </p>

   

//       <h2 className="text-2xl font-semibold mb-2">What We Do</h2>

// <ul className="list-disc list-inside mb-4">
//   <li><span role="img" aria-label="checkmark">✔️</span> Organize finance-focused competitions that challenge students to think critically</li>
//   <li><span role="img" aria-label="checkmark">✔️</span> Host global expert-led discussions to promote financial literacy</li>
//   <li><span role="img" aria-label="checkmark">✔️</span> Empower students with real-world consulting experiences and mentorship</li>
//   <li><span role="img" aria-label="checkmark">✔️</span> Deliver accessible, engaging financial education rooted in real-life application</li>
// </ul>

// {/* <h2 className="text-2xl font-semibold mb-2">Our Vision</h2> */}

// {/* <ul className="list-disc list-inside mb-4">
//   <li><span role="img" aria-label="conference">🎤</span> Expand our global conference series to spark informed financial dialogue</li>
//   <li><span role="img" aria-label="competition">🏆</span> Launch innovative competitions to inspire the next generation of financial leaders</li>
//   <li><span role="img" aria-label="community">🌐</span> Build an inclusive community of finance learners and professionals worldwide</li>
//   <li><span role="img" aria-label="mentor">🤝</span> Provide personalized consulting and mentorship to help students grow</li>
// </ul>

// <p>
//   At ThriveFi, we are more than just a platform—we are a global initiative led by students, for students.
// </p> */}

//     </div>
//     <Footer/>
//     </div>
//   )
// }


"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaUsers,
  FaGlobe,
  FaCheckCircle,
  FaMicrophone,
  FaTrophy,
  FaHandshake,
} from "react-icons/fa";
import Nav from "../component/nav";
import Footer from "../component/thriveFi/footer";

export default function Page() {
  const whatWeDo = [
    {
      icon: <FaChartLine className="text-indigo-600 text-2xl" />,
      text: "Organize finance-focused competitions that challenge students to think critically",
    },
    {
      icon: <FaGlobe className="text-purple-600 text-2xl" />,
      text: "Host global expert-led discussions to promote financial literacy",
    },
    {
      icon: <FaUsers className="text-fuchsia-600 text-2xl" />,
      text: "Empower students with real-world consulting experiences and mentorship",
    },
    {
      icon: <FaCheckCircle className="text-indigo-600 text-2xl" />,
      text: "Deliver accessible, engaging financial education rooted in real-life application",
    },
  ];

  const ourVision = [
    {
      icon: <FaMicrophone className="text-purple-600 text-2xl" />,
      text: "Expand our global conference series to spark informed financial dialogue",
    },
    {
      icon: <FaTrophy className="text-fuchsia-600 text-2xl" />,
      text: "Launch innovative competitions to inspire the next generation of financial leaders",
    },
    {
      icon: <FaGlobe className="text-indigo-600 text-2xl" />,
      text: "Build an inclusive community of finance learners and professionals worldwide",
    },
    {
      icon: <FaHandshake className="text-purple-600 text-2xl" />,
      text: "Provide personalized consulting and mentorship to help students grow",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Nav />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-700 bg-clip-text text-transparent text-center mb-8"
          >
            About Us
          </motion.h1>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white shadow-xl rounded-2xl p-8 mb-12"
          >
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              <strong className="font-semibold">
                At ThriveFi, our mission is to bring meaningful financial
                education to students around the world through engaging
                challenges that delve into the complexities of finance.
              </strong>{" "}
              Founded by Arizona-based high school student Anvay Arora, ThriveFi
              is stepping onto the global stage by organizing competitions and
              hosting expert-led discussions to raise awareness and promote
              literacy in personal and global finance.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              At the core of ThriveFi are our guiding principles—the{" "}
              <span className="font-bold">3 Cs</span>: Conference, Competition,
              and Consulting. These pillars reflect our commitment to creating
              dynamic learning opportunities, encouraging informed dialogue,
              and providing mentorship to students as they navigate the world
              of finance. Each “C” has been built with a mission and drives the
              initiatives we create to empower the next generation of financial
              thinkers.
            </p>
          </motion.div>

          {/* What We Do */}
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl font-bold leading-tight bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-700 bg-clip-text text-transparent mb-6"
          >
            What We Do
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {whatWeDo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-start bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mr-4">{item.icon}</div>
                <p className="text-gray-700">{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Our Vision */}
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-3xl font-bold leading-tight bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-700 bg-clip-text text-transparent mb-6"
          >
            Our Vision
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {ourVision.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-start bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mr-4">{item.icon}</div>
                <p className="text-gray-700">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
