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


// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaChartLine,
//   FaUsers,
//   FaGlobe,
//   FaCheckCircle,
//   FaMicrophone,
//   FaTrophy,
//   FaHandshake,
// } from "react-icons/fa";
// import Nav from "../component/nav";
// import Footer from "../component/thriveFi/footer";

// export default function Page() {
//   const whatWeDo = [
//     {
//       icon: <FaChartLine className="text-indigo-600 text-2xl" />,
//       text: "Organize finance-focused competitions that challenge students to think critically",
//     },
//     {
//       icon: <FaGlobe className="text-purple-600 text-2xl" />,
//       text: "Host global expert-led discussions to promote financial literacy",
//     },
//     {
//       icon: <FaUsers className="text-fuchsia-600 text-2xl" />,
//       text: "Empower students with real-world consulting experiences and mentorship",
//     },
//     {
//       icon: <FaCheckCircle className="text-indigo-600 text-2xl" />,
//       text: "Deliver accessible, engaging financial education rooted in real-life application",
//     },
//   ];

//   const ourVision = [
//     {
//       icon: <FaMicrophone className="text-purple-600 text-2xl" />,
//       text: "Expand our global conference series to spark informed financial dialogue",
//     },
//     {
//       icon: <FaTrophy className="text-fuchsia-600 text-2xl" />,
//       text: "Launch innovative competitions to inspire the next generation of financial leaders",
//     },
//     {
//       icon: <FaGlobe className="text-indigo-600 text-2xl" />,
//       text: "Build an inclusive community of finance learners and professionals worldwide",
//     },
//     {
//       icon: <FaHandshake className="text-purple-600 text-2xl" />,
//       text: "Provide personalized consulting and mentorship to help students grow",
//     },
//   ];

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <Nav />

//       <section className="py-16">
//         <div className="max-w-4xl mx-auto px-6">
//           {/* Title */}
//           <motion.h1
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-700 bg-clip-text text-transparent text-center mb-8"
//           >
//             About Us
//           </motion.h1>

//           {/* Mission Statement */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//             className="bg-white shadow-xl rounded-2xl p-8 mb-12"
//           >
//             <p className="text-gray-700 text-lg leading-relaxed mb-4">
//               <strong className="font-semibold">
//                 At ThriveFi, our mission is to bring meaningful financial
//                 education to students around the world through engaging
//                 challenges that delve into the complexities of finance.
//               </strong>{" "}
//               Founded by Arizona-based high school student Anvay Arora, ThriveFi
//               is stepping onto the global stage by organizing competitions and
//               hosting expert-led discussions to raise awareness and promote
//               literacy in personal and global finance.
//             </p>
//             <p className="text-gray-700 text-lg leading-relaxed">
//               At the core of ThriveFi are our guiding principles—the{" "}
//               <span className="font-bold">3 Cs</span>: Conference, Competition,
//               and Consulting. These pillars reflect our commitment to creating
//               dynamic learning opportunities, encouraging informed dialogue,
//               and providing mentorship to students as they navigate the world
//               of finance. Each “C” has been built with a mission and drives the
//               initiatives we create to empower the next generation of financial
//               thinkers.
//             </p>
//           </motion.div>

//           {/* What We Do */}
//           <motion.h2
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4, duration: 0.6 }}
//             className="text-3xl font-bold leading-tight bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-700 bg-clip-text text-transparent mb-6"
//           >
//             What We Do
//           </motion.h2>

//           <div className="grid md:grid-cols-2 gap-6 mb-12">
//             {whatWeDo.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.5 + index * 0.1 }}
//                 className="flex items-start bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow duration-300"
//               >
//                 <div className="mr-4">{item.icon}</div>
//                 <p className="text-gray-700">{item.text}</p>
//               </motion.div>
//             ))}
//           </div>

//           {/* Our Vision */}
//           <motion.h2
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6, duration: 0.6 }}
//             className="text-3xl font-bold leading-tight bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-700 bg-clip-text text-transparent mb-6"
//           >
//             Our Vision
//           </motion.h2>

//           <div className="grid md:grid-cols-2 gap-6">
//             {ourVision.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.7 + index * 0.1 }}
//                 className="flex items-start bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow duration-300"
//               >
//                 <div className="mr-4">{item.icon}</div>
//                 <p className="text-gray-700">{item.text}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }


// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import Nav from "../component/nav";
// import Footer from "../component/thriveFi/footer";
// import {
//   FaChartLine,
//   FaUsers,
//   FaGlobe,
//   FaCheckCircle,
//   FaMicrophone,
//   FaTrophy,
//   FaHandshake,
// } from "react-icons/fa";

// export default function About() {
//   const whatWeDo = [
//     {
//       icon: <FaChartLine className="text-indigo-600 text-3xl" />,
//       text: "Organize finance-focused competitions that challenge students to think critically",
//       img: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=800&q=80",
//       // img: "https://images.unsplash.com/photo-1508387027470-9a96a4c9af7b?auto=format&fit=crop&w=800&q=80",
//     },
//     {
//       icon: <FaGlobe className="text-purple-600 text-3xl" />,
//       text: "Host global expert-led discussions to promote financial literacy",
//       img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
//     },
//     {
//       icon: <FaUsers className="text-fuchsia-600 text-3xl" />,
//       text: "Empower students with real-world consulting experiences and mentorship",
//       img: "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=800&q=80",
//     },
//     {
//       icon: <FaCheckCircle className="text-indigo-600 text-3xl" />,
//       text: "Deliver accessible, engaging financial education rooted in real-life application",
//       img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80",
//       // img: "https://images.unsplash.com/photo-1581090700227-4c4b1b1a1a4b?auto=format&fit=crop&w=800&q=80",
//     },
//   ];

//   const ourVision = [
//     {
//       icon: <FaMicrophone className="text-purple-600 text-3xl" />,
//       text: "Expand our global conference series to spark informed financial dialogue",
//       img: "https://images.unsplash.com/photo-1523582407565-efee5cf4a353?auto=format&fit=crop&w=800&q=80",
//       // img: "https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=800&q=80",
//     },
//     {
//       icon: <FaTrophy className="text-fuchsia-600 text-3xl" />,
//       text: "Launch innovative competitions to inspire the next generation of financial leaders",
//       img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
//     },
//     {
//       icon: <FaGlobe className="text-indigo-600 text-3xl" />,
//       text: "Build an inclusive community of finance learners and professionals worldwide",
//       img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
//     },
//     {
//       icon: <FaHandshake className="text-purple-600 text-3xl" />,
//       text: "Provide personalized consulting and mentorship to help students grow",
//       img: "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=800&q=80",
//     },
//   ];

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <Nav />

//       {/* Hero Section */}
//       <section className="relative flex flex-col md:flex-row items-center justify-between w-full bg-white px-6 md:px-12 py-16 overflow-hidden">
//         {/* Background Blobs */}
//         <motion.div
//           initial={{ x: -50, opacity: 0.3 }}
//           animate={{ y: [0, 20, 0] }}
//           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute top-10 left-[-40px] w-72 opacity-30"
//         >
//           <Image src="/blob.png" alt="Blob Left" width={280} height={280} />
//         </motion.div>

//         <motion.div
//           initial={{ x: 50, opacity: 0.3 }}
//           animate={{ y: [0, -25, 0] }}
//           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute bottom-[-60px] right-[-80px] w-72 opacity-30 hidden md:block"
//         >
//           <Image src="/blob.png" alt="Blob Right" width={300} height={300} />
//         </motion.div>

//         {/* Left Content */}
//         <div className="flex flex-col justify-center w-full md:w-1/2 relative z-10 text-center md:text-left">
//           <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-700 bg-clip-text text-transparent leading-snug font-[Oswald]">
//             About ThriveFi
//           </h1>
//           <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-lg mx-auto md:mx-0">
//             ThriveFi empowers students with accessible financial education. Founded by high school student Anvay Arora, we bring the <span className="font-bold text-purple-600">3 Cs</span> — Conference, Competition, and Consulting — to life, shaping the next generation of financial thinkers.
//           </p>
//         </div>

//         {/* Right Content */}
//         <div className="relative w-full md:w-1/2 mt-10 md:mt-0 md:pl-12 z-10">
//           <Image
//             src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80"
//             alt="Finance Learning"
//             width={800}
//             height={600}
//             className="w-full h-auto object-cover rounded-2xl shadow-lg"
//           />
//         </div>
//       </section>

//       {/* What We Do Section */}
//       <section className="py-16 px-6 md:px-12">
          
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-700 bg-clip-text text-transparent"
//         >
//           What We Do
//         </motion.h2>

//         <div className="grid md:grid-cols-2 gap-8">
//           {whatWeDo.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 * index, duration: 0.6 }}
//               className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all"
//             >
               
//               <div className="md:w-1/3 h-40 relative">
//                 <Image
//                   src={item.img}
//                   alt="About Card"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="p-6 flex items-start gap-4 md:w-2/3">
//                 {item.icon}
//                 <p className="text-gray-700 text-base leading-relaxed">
//                   {item.text}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Our Vision Section */}
//       <section className="py-16 px-6 md:px-12 bg-gray-100">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-700 bg-clip-text text-transparent"
//         >
//           Our Vision
//         </motion.h2>

//         <div className="grid md:grid-cols-2 gap-8">
//           {ourVision.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 * index, duration: 0.6 }}
//               className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all"
//             >
//               <div className="md:w-1/3 h-40 relative">
//                 <Image
//                   src={item.img}
//                   alt="Vision Card"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="p-6 flex items-start gap-4 md:w-2/3">
//                 {item.icon}
//                 <p className="text-gray-700 text-base leading-relaxed">
//                   {item.text}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }

import React from 'react'
import About from './body'


export default function Page() {
  return (
    <div>
<About/>
    </div>
  )
}

