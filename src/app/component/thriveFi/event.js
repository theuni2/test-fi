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

// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// export default function Event() {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16">
//       <div className="container mx-auto px-5 flex flex-col md:flex-row items-center">
        
//         {/* Left Content */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-10 flex flex-col md:items-start md:text-left mb-12 md:mb-0 items-center text-center"
//         >
//           <motion.h3
//             initial={{ opacity: 0, y: -10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-sm uppercase tracking-wider text-purple-600 font-semibold"
//           >
//             Our First Event
//           </motion.h3>

//           <motion.h1
//             initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//             className="sm:text-4xl text-3xl mb-4 font-extrabold leading-tight bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-700 bg-clip-text text-transparent"
//           >
//             ReGenVest Essay Competition
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.6 }}
//             className="mb-8 leading-relaxed text-gray-700"
//           >
//             ThriveFi is proud to announce the launch of the ReGenVest Challenge
//             in India, an initiative designed to engage senior students in
//             critical financial thinking. The challenge invites senior school
//             students to write essays on pressing financial topics, encouraging
//             them to explore real-world problems and propose innovative
//             solutions.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.8 }}
//             className="flex justify-center gap-4"
//           >
//             <a href="/regenvest">
//               <button className="inline-flex text-white bg-gradient-to-r from-indigo-600 to-purple-600 border-0 py-3 px-8 focus:outline-none hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 rounded-xl text-lg shadow-lg hover:shadow-xl">
//                 Learn More
//               </button>
//             </a>

//             <motion.a
//               href="/regenvest#result"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.97 }}
//               className="inline-flex text-white bg-gray-900 border-0 py-3 px-8 focus:outline-none hover:bg-gray-800 rounded-xl text-lg shadow-lg"
//             >
//               View Result
//             </motion.a>
//           </motion.div>
//         </motion.div> {/* ✅ Properly closed Left Content div */}

//         {/* Right Image */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
//         >
//           <motion.img
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//             className="object-cover object-center rounded-2xl shadow-lg"
//             alt="ReGenVest"
//             src="/images/regenvestimg.jpeg"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import { useEffect, useState, useRef } from "react";

// export default function Event() {
//   const [count, setCount] = useState(0);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           // Animate counter
//           let start = 0;
//           const end = 200; // Final number
//           const duration = 2000; // 2s
//           const stepTime = Math.abs(Math.floor(duration / end));

//           const timer = setInterval(() => {
//             start += 1;
//             setCount(start);
//             if (start === end) clearInterval(timer);
//           }, stepTime);
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full h-screen flex flex-col items-center justify-center bg-black overflow-hidden"
//     >
//       {/* Background Video */}
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         src="/yourvideo.mp4" // put video in public/
//         autoPlay
//         muted
//         loop
//         playsInline
//       />

//       {/* Dark overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

//       {/* Floating Blob Elements */}
//       <img
//         src="/blob.png" // replace with your uploaded blob image
//         alt="decor"
//         className="absolute top-10 left-10 w-32 animate-float"
//       />
//       <img
//         src="/blob.png"
//         alt="decor"
//         className="absolute bottom-20 right-16 w-24 animate-float-delayed"
//       />
//       <img
//         src="/blob.png"
//         alt="decor"
//         className="absolute top-1/3 right-1/4 w-40 animate-float-slow"
//       />

//       {/* Number Counter */}
//       <div className="relative z-10 text-white text-6xl font-bold">
//         {count}
//       </div>

//       {/* Extra Styles for floating animation */}
//       <style jsx>{`
//         @keyframes float {
//           0% {
//             transform: translateY(0px) rotate(0deg);
//           }
//           50% {
//             transform: translateY(-20px) rotate(10deg);
//           }
//           100% {
//             transform: translateY(0px) rotate(0deg);
//           }
//         }
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//         .animate-float-delayed {
//           animation: float 7s ease-in-out infinite;
//           animation-delay: 2s;
//         }
//         .animate-float-slow {
//           animation: float 10s ease-in-out infinite;
//         }
//       `}</style>
//     </section>
//   );
// }


// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// export default function Event() {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16">
//       {/* 🔹 Floating Background Elements */}
//   <motion.img
//   src="/blob.png"
//   alt="decor"
//   className="absolute top-10 left-10 w-32 opacity-70 animate-float z-0"
// />
// <motion.img
//   src="/blob.png"
//   alt="decor"
//   className="absolute bottom-10 right-10 w-40 opacity-60 animate-float-delayed z-0"
// />
// <motion.img
//   src="/blob.png"
//   alt="decor"
//   className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 opacity-50 animate-float-slow z-0"
// />



//       <div className="container mx-auto px-5 flex flex-col md:flex-row items-center relative z-10">
//         {/* Left Content */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-10 flex flex-col md:items-start md:text-left mb-12 md:mb-0 items-center text-center"
//         >
//           <motion.h3
//             initial={{ opacity: 0, y: -10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-sm uppercase tracking-wider text-purple-600 font-semibold"
//           >
//             Our First Event
//           </motion.h3>

//           <motion.h1
//             initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//             className="sm:text-4xl text-3xl mb-4 font-extrabold leading-tight bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-700 bg-clip-text text-transparent"
//           >
//             ReGenVest Essay Competition
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.6 }}
//             className="mb-8 leading-relaxed text-gray-700"
//           >
//             ThriveFi is proud to announce the launch of the ReGenVest Challenge
//             in India, an initiative designed to engage senior students in
//             critical financial thinking. The challenge invites senior school
//             students to write essays on pressing financial topics, encouraging
//             them to explore real-world problems and propose innovative
//             solutions.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.8 }}
//             className="flex justify-center gap-4"
//           >
//             <a href="/regenvest">
//               <button className="inline-flex text-white bg-gradient-to-r from-indigo-600 to-purple-600 border-0 py-3 px-8 focus:outline-none hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 rounded-xl text-lg shadow-lg hover:shadow-xl">
//                 Learn More
//               </button>
//             </a>

//             <motion.a
//               href="/regenvest#result"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.97 }}
//               className="inline-flex text-white bg-gray-900 border-0 py-3 px-8 focus:outline-none hover:bg-gray-800 rounded-xl text-lg shadow-lg"
//             >
//               View Result
//             </motion.a>
//           </motion.div>
//         </motion.div>

//         {/* Right Image */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
//         >
//           <motion.img
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//             className="object-cover object-center rounded-2xl shadow-lg"
//             alt="ReGenVest"
//             src="/images/regenvestimg.jpeg"
//           />
//         </motion.div>
//       </div>

//       {/* Floating Animation Styles */}
//       <style jsx>{`
//         @keyframes float {
//           0% {
//             transform: translateY(0px) rotate(0deg);
//           }
//           50% {
//             transform: translateY(-20px) rotate(10deg);
//           }
//           100% {
//             transform: translateY(0px) rotate(0deg);
//           }
//         }
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//         .animate-float-delayed {
//           animation: float 8s ease-in-out infinite;
//           animation-delay: 2s;
//         }
//         .animate-float-slow {
//           animation: float 10s ease-in-out infinite;
//         }
//       `}</style>
//     </section>
//   );
// }

// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// export default function Event() {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16">
//       {/* 🔹 Floating Background Elements */}
//       <motion.img
//         src="/blob.png"
//         alt="decor"
//         className="absolute top-10 left-10 w-32 opacity-70 animate-float z-0"
//       />
//       <motion.img
//         src="/blob.png"
//         alt="decor"
//         className="absolute bottom-10 right-10 w-40 opacity-60 animate-float-delayed z-0"
//       />
//       <motion.img
//         src="/blob.png"
//         alt="decor"
//         className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 opacity-50 animate-float-slow z-0"
//       />

//       <div className="container mx-auto px-5 flex flex-col md:flex-row items-center relative z-10">
//         {/* Left Content */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-10 flex flex-col md:items-start md:text-left mb-12 md:mb-0 items-center text-center"
//         >
//           <motion.h3
//             initial={{ opacity: 0, y: -10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-sm uppercase tracking-wider text-purple-600 font-semibold"
//           >
//             Our First Event
//           </motion.h3>

//           {/* 🔹 Updated Heading Font */}
//           <motion.h1
//             initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//             className="sm:text-6xl text-4xl mb-6 font-bold leading-tight tracking-tight text-gray-900 font-[Oswald]"
//           >
//             INVESTMENT FOR THE <span className="italic">FUTURE</span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.6 }}
//             className="mb-8 leading-relaxed text-gray-700"
//           >
//             ThriveFi is proud to announce the launch of the ReGenVest Challenge
//             in India, an initiative designed to engage senior students in
//             critical financial thinking. The challenge invites senior school
//             students to write essays on pressing financial topics, encouraging
//             them to explore real-world problems and propose innovative
//             solutions.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.8 }}
//             className="flex justify-center gap-4"
//           >
//             <a href="/regenvest">
//               <button className="inline-flex text-white bg-gradient-to-r from-indigo-600 to-purple-600 border-0 py-3 px-8 focus:outline-none hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 rounded-xl text-lg shadow-lg hover:shadow-xl">
//                 Learn More
//               </button>
//             </a>

//             <motion.a
//               href="/regenvest#result"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.97 }}
//               className="inline-flex text-white bg-gray-900 border-0 py-3 px-8 focus:outline-none hover:bg-gray-800 rounded-xl text-lg shadow-lg"
//             >
//               View Result
//             </motion.a>
//           </motion.div>
//         </motion.div>

//         {/* Right Image with GIF overlay */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
//         >
//           <motion.img
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//             className="object-cover object-center rounded-2xl shadow-lg"
//             alt="ReGenVest"
//             src="/images/regenvestimg.jpeg"
//           />

//           {/* 🔹 Finance GIF at bottom-left over border */}
//           <motion.img
//             src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlxZG9nb3Yyd2Zwbzduc3NtdGlseXVhZTBrb3dteHFvcHVrMXB0byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LV7b0I8PclupfEcXVZ/giphy.gif" // replace with your GIF path
//             alt="Finance GIF"
//             className="absolute bottom-4 left-4 w-24 h-24 sm:w-28 sm:h-28 rounded-lg shadow-lg border-2 border-white"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 1, duration: 0.8 }}
//           />
//         </motion.div>
//       </div>

//       {/* Floating Animation Styles */}
//       <style jsx>{`
//         @keyframes float {
//           0% {
//             transform: translateY(0px) rotate(0deg);
//           }
//           50% {
//             transform: translateY(-20px) rotate(10deg);
//           }
//           100% {
//             transform: translateY(0px) rotate(0deg);
//           }
//         }
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//         .animate-float-delayed {
//           animation: float 8s ease-in-out infinite;
//           animation-delay: 2s;
//         }
//         .animate-float-slow {
//           animation: float 10s ease-in-out infinite;
//         }
//       `}</style>
//     </section>
//   );
// }

// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function Event() {
//   return (
//     <section className="flex flex-col md:flex-row items-stretch justify-between w-full bg-white px-6 md:px-12 py-16">
//       {/* Left Side */}
//       <div className="flex flex-col justify-start w-full md:w-1/2">
        
//         {/* Smooth Card Box */}
//         <div className="relative bg-[#e05fcf81] rounded-[28px] p-8 md:p-10 shadow-md max-w-lg">
//           {/* Icon + Text */}
//           <div className="flex items-center space-x-3">
           
//             <span className="uppercase text-xs md:text-sm font-bold text-gray-800 tracking-wide">
//              Our First Event
//             </span>
//           </div>

//           {/* Heading */}
//           <h2 className="mt-3 text-3xl md:text-4xl font-extrabold font-[oswald] text-gray-900 leading-snug">
//            ReGenVest Essay 
//             <span className="relative text-[#ff5722]">
              
//               {/* underline wave */}
//               <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[url('/icons/wave.svg')] bg-repeat-x"></span>
//             </span>{" "}
//             <br /> Competition
//           </h2>

//           {/* Plane Image */}
//           <motion.div
//             initial={{ x: -30, y: 20, opacity: 0 }}
//             animate={{ x: 0, y: 0, opacity: 1 }}
//             transition={{ duration: 0.9, ease: "easeOut" }}
//             className="absolute bottom-[-35px] right-[-70px] w-48 md:w-56"
//           >
//             <Image
//               src="/images/bull.png"
//               alt="Plane"
//               width={220}
//               height={220}
//               className="object-contain"
//             />
//           </motion.div>
//         </div>

//         {/* Description */}
//         <p className="mt-12 text-base font-bold w-1/2 md:text-base text-gray-700 leading-relaxed max-w-md">
//           ThriveFi proudly launches the ReGenVest Challenge in India, inviting senior school students to write essays on key financial issues, fostering critical thinking and innovative problem-solving.
//         </p>

//         {/* Work Progress Button */}
//         <button className="mt-6 text-sm md:text-base font-semibold tracking-wide text-black flex items-center hover:ml-1 transition-all">
//           Know More <span className="ml-2">➝</span>
//         </button>
//       </div>

//       {/* Right Image */}
//       <div className="relative w-full md:w-1/2 mt-12 md:mt-0 md:pl-12">
//         <Image
//           src="/images/regenvestimg.jpeg"
//           alt="Office Team"
//           width={800}
//           height={600}
//           className="w-full h-full object-cover rounded-[28px]"
//         />
//         {/* Bottom Button */}
//         <button className="absolute bottom-6 right-8 bg-transparent font-semibold text-white p-3 rounded-xl bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-700 text-sm md:text-base flex items-center hover:mr-1 transition-all">
//           View Result <span className="ml-2">➝</span>
//         </button>
//       </div>
//     </section>
//   );
// }



// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function Event() {
//   return (
//     <section className="flex flex-col md:flex-row items-stretch justify-between w-full bg-white px-4 sm:px-6 md:px-12 py-12 md:py-16">
      
//       {/* Left Side */}
//       <div className="flex flex-col justify-start w-full md:w-1/2">
        
//         {/* Smooth Card Box */}
//         <div className="relative bg-[#e05fcf81] rounded-[24px] p-6 sm:p-8 md:p-10 shadow-md max-w-full md:max-w-lg">
          
//           {/* Icon + Text */}
//           <div className="flex items-center space-x-2 sm:space-x-3">
//             <span className="uppercase text-xs sm:text-sm font-bold text-gray-800 tracking-wide">
//               Our First Event
//             </span>
//           </div>

//           {/* Heading */}
//           <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold font-[oswald] text-gray-900 leading-snug">
//             ReGenVest Essay{" "}
//             <span className="relative text-[#ff5722]">
//               {/* underline wave */}
//               <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[url('/icons/wave.svg')] bg-repeat-x"></span>
//             </span>{" "}
//             <br /> Competition
//           </h2>

//           {/* Bull Image */}
//           <motion.div
//             initial={{ x: -30, y: 20, opacity: 0 }}
//             animate={{ x: 0, y: 0, opacity: 1 }}
//             transition={{ duration: 0.9, ease: "easeOut" }}
//             className="absolute bottom-[-30px] right-[-40px] w-32 sm:w-40 md:w-56 overflow-hidden"
//           >
//             <Image
//               src="/images/bull.png"
//               alt="Bull Icon"
//               width={220}
//               height={220}
//               className="object-contain overflow-hidden"
//             />
//           </motion.div>
//         </div>

//         {/* Description */}
//         <p className="mt-10 text-sm sm:text-base font-medium text-gray-700 leading-relaxed max-w-full md:max-w-md">
//           ThriveFi proudly launches the ReGenVest Challenge in India, inviting senior school students to write essays on key financial issues, fostering critical thinking and innovative problem solving.
//         </p>

//         {/* Work Progress Button */}
//         <button className="mt-6 text-sm sm:text-base font-semibold tracking-wide text-black flex items-center hover:ml-1 transition-all">
//           Know More <span className="ml-2">➝</span>
//         </button>
//       </div>

//       {/* Right Image */}
//       <div className="relative w-full md:w-1/2 mt-10 md:mt-0 md:pl-12">
//         <Image
//           src="/images/regenvestimg.jpeg"
//           alt="Event Banner"
//           width={800}
//           height={600}
//           className="w-full h-auto object-cover rounded-[24px]"
//         />
        
//         {/* Bottom Button */}
//         <button className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-700 text-white font-semibold px-4 py-2 sm:px-5 sm:py-3 rounded-xl text-xs sm:text-sm md:text-base flex items-center hover:mr-1 transition-all">
//           View Result <span className="ml-2">➝</span>
//         </button>
//       </div>
//     </section>
//   );
// }



// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function Event() {
//   return (
//     <section className="flex flex-col md:flex-row items-stretch justify-between w-full bg-white px-4 sm:px-6 md:px-12 py-12 md:py-16">
//       {/* Left Side */}
//       <div className="flex flex-col justify-start w-full md:w-1/2 relative">
//         {/* Smooth Card Box */}
//         <div className="relative bg-[#e05fcf81] rounded-[24px] p-6 sm:p-8 md:p-10 shadow-md max-w-full md:max-w-lg">
//           {/* Icon + Text */}
//           <div className="flex items-center space-x-2 sm:space-x-3">
//             <span className="uppercase text-xs sm:text-sm font-bold text-gray-800 tracking-wide">
//               Our First Event
//             </span>
//           </div>

//           {/* Heading */}
//           <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold font-[oswald] text-gray-900 leading-snug">
//             ReGenVest Essay{" "}
//             <span className="relative text-[#ff5722]">
//               {/* underline wave */}
//               <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[url('/icons/wave.svg')] bg-repeat-x"></span>
//             </span>{" "}
//             <br /> Competition
//           </h2>

//           {/* Bull Image */}
//           <motion.div
//             initial={{ x: -30, y: 20, opacity: 0 }}
//             animate={{ x: 0, y: 0, opacity: 1 }}
//             transition={{ duration: 0.9, ease: "easeOut" }}
//             className="absolute bottom-[-30px] right-[-40px] w-32 sm:w-40 md:w-56 overflow-hidden"
//           >
//             <Image
//               src="/images/bull.png"
//               alt="Bull Icon"
//               width={220}
//               height={220}
//               className="object-contain overflow-hidden"
//             />
//           </motion.div>
//         </div>

//         {/* Description */}
//         <p className="mt-10 text-sm sm:text-base font-medium text-gray-700 leading-relaxed max-w-full md:max-w-md">
//           ThriveFi proudly launches the ReGenVest Challenge in India, inviting senior school students to write essays on key financial issues, fostering critical thinking and innovative problem solving.
//         </p>

//         {/* Work Progress Button */}
//         <button className="mt-6 text-sm sm:text-base font-semibold tracking-wide text-black flex items-center hover:ml-1 transition-all">
//           Know More <span className="ml-2">➝</span>
//         </button>

//         {/* Blob Image Below Button */}
//         <motion.div
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           className="mt-8 w-40 sm:w-52 md:w-64"
//         >
//           <Image
//             src="/blob.png" // make sure blob.svg exists in your /public/images folder
//             alt="Decorative Blob"
//             width={300}
//             height={300}
//             className="object-contain"
//           />
//         </motion.div>
//       </div>

//       {/* Right Image */}
//       <div className="relative w-full md:w-1/2 mt-10 md:mt-0 md:pl-12">
//         <Image
//           src="/images/regenvestimg.jpeg"
//           alt="Event Banner"
//           width={800}
//           height={600}
//           className="w-full h-auto object-cover rounded-[24px]"
//         />

//         {/* Bottom Button */}
//         <button className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-700 text-white font-semibold px-4 py-2 sm:px-5 sm:py-3 rounded-xl text-xs sm:text-sm md:text-base flex items-center hover:mr-1 transition-all">
//           View Result <span className="ml-2">➝</span>
//         </button>
//       </div>
//     </section>
//   );
// }



// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function Event() {
//   return (
//     <section className="flex flex-col md:flex-row items-stretch justify-between w-full bg-white px-4 sm:px-6 md:px-12 py-12 md:py-16">
//       {/* Left Side */}
//       <div className="flex flex-col justify-start w-full md:w-1/2 relative">
//         {/* Smooth Card Box */}
//         <div className="relative bg-[#e05fcf81] rounded-[24px] p-6 sm:p-8 md:p-10 shadow-md max-w-full md:max-w-lg">
//           {/* Icon + Text */}
//           <div className="flex items-center space-x-2 sm:space-x-3">
//             <span className="uppercase text-xs sm:text-sm font-bold text-gray-800 tracking-wide">
//               Our First Event
//             </span>
//           </div>

//           {/* Heading */}
//           <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold font-[oswald] text-gray-900 leading-snug">
//             ReGenVest Essay{" "}
//             <span className="relative text-[#ff5722]">
//               {/* underline wave */}
//               <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[url('/icons/wave.svg')] bg-repeat-x"></span>
//             </span>{" "}
//             <br /> Competition
//           </h2>

//           {/* Bull Image */}
//           <motion.div
//             initial={{ x: -30, y: 20, opacity: 0 }}
//             animate={{ x: 0, y: 0, opacity: 1 }}
//             transition={{ duration: 0.9, ease: "easeOut" }}
//             className="absolute bottom-[-30px] right-[-40px] w-32 sm:w-40 md:w-56 overflow-hidden"
//           >
//             <Image
//               src="/images/bull.png"
//               alt="Bull Icon"
//               width={220}
//               height={220}
//               className="object-contain overflow-hidden"
//             />
//           </motion.div>
//         </div>

//         {/* Description */}
//         <p className="mt-10 text-sm sm:text-base font-medium text-gray-700 leading-relaxed max-w-full md:max-w-md">
//           ThriveFi proudly launches the ReGenVest Challenge in India, inviting senior school students to write essays on key financial issues, fostering critical thinking and innovative problem solving.
//         </p>

//         {/* Work Progress Button */}
//         <button className="mt-6 text-sm sm:text-base font-semibold tracking-wide text-black flex items-center hover:ml-1 transition-all">
//           Know More <span className="ml-2">➝</span>
//         </button>

//         {/* Blob Image Below Button */}
//         <motion.div
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           className="mt-8 w-40 sm:w-52 md:w-64"
//         >
//           <Image
//             src="/blob.png" // make sure blob.svg exists in your /public/images folder
//             alt="Decorative Blob"
//             width={300}
//             height={300}
//             className="object-contain opacity-70"
//           />
//         </motion.div>
//       </div>

//       {/* Right Image */}
//       <div className="relative w-full md:w-1/2 mt-10 md:mt-0 md:pl-12">
//         <Image
//           src="/images/regenvestimg.jpeg"
//           alt="Event Banner"
//           width={800}
//           height={600}
//           className="w-full h-auto object-cover rounded-[24px]"
//         />

//         {/* Bottom Button */}
//         <button className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-700 text-white font-semibold px-4 py-2 sm:px-5 sm:py-3 rounded-xl text-xs sm:text-sm md:text-base flex items-center hover:mr-1 transition-all">
//           View Result <span className="ml-2">➝</span>
//         </button>
//       </div>
//     </section>
//   );
// }


"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Event() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between w-full bg-white px-4 sm:px-6 md:px-12 py-12 md:py-20 overflow-hidden">
      {/* Background Blobs */}
      <motion.div
        initial={{ x: -50, y: 0, opacity: 0.3 }}
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-9 left-[-40px] w-64 sm:w-72 opacity-30"
      >
        <Image
          src="/blob.png"
          alt="Background Blob Left"
          width={300}
          height={300}
          className="object-contain"
        />
      </motion.div>
      <motion.div
        initial={{ x: -50, y: 0, opacity: 0.3 }}
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-9 left-1/2 w-64  sm:w-72 opacity-30"
      >
        <Image
          src="/blob.png"
          alt="Background Blob Left"
          width={300}
          height={300}
          className="object-contain "
        />
      </motion.div>

      <motion.div
        initial={{ x: 50, y: 0, opacity: 0.3 }}
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-60px] right-[-80px] w-72 sm:w-96 opacity-30 hidden md:block"
      >
        <Image
          src="/blob.png"
          alt="Background Blob Right"
          width={350}
          height={350}
          className="object-contain"
        />
      </motion.div>

      {/* Left Side - Vertically Centered */}
      <div className="flex flex-col justify-center md:items-start items-center  w-full md:w-1/2 relative z-10">
        {/* Card */}
        <div className="relative bg-[#e05fcf81] rounded-[24px] p-6 sm:p-8 md:p-10 shadow-md max-w-full md:max-w-lg  text-center md:text-left">
          <span className="uppercase text-xs sm:text-sm font-bold text-gray-800 tracking-wide">
            Our First Event
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold font-[oswald] text-gray-900 leading-snug">
            ReGenVest Essay{" "}
            <span className="relative text-[#ff5722]">
              <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[url('/icons/wave.svg')] bg-repeat-x"></span>
            </span>
            <br /> Competition
          </h2>

          {/* Bull Icon */}
          <motion.div
            initial={{ x: -30, y: 20, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute bottom-[-30px] right-[-40px] w-32 sm:w-40 md:w-56"
          >
            <Image
              src="/images/bull.png"
              alt="Bull Icon"
              width={220}
              height={220}
              className="object-contain"
            />
          </motion.div>
        </div>

        {/* Description */}
        {/* <p className="mt-10 text-base md:text-lg font-medium text-gray-700  text-center md:text-left leading-relaxed max-w-md">
         
Yes, you heard it right. India is about to host one of the most unique and thought-provoking essay competitions. We’re inviting senior school students to step up and showcase their thinking on the world’s toughest financial issues.

But don’t worry—it’s not your usual “write-an-essay, get-a-grade” situation. Instead, this competition focuses on impressive critical thinking, eye-catching problem-solving, and ideas that could actually change how the world invests, saves, and grows.

Students: Ready to move beyond the usual debates about pocket money? You can take on topics like climate finance, digital currencies, or sustainable investing. 
Principals: Here’s your chance to send your students onto a real international stage to showcase their talent and gain a global perspective. 
Parents: Get ready to see your kids discuss fiscal policy at the dinner table, complete with footnotes.

So, whether you’re from Delhi or Dubai, Mumbai or Manila, join the ReGenVest Challenge. Write. Compete. Inspire. And maybe, just maybe, become the next voice shaping the financial future.        
        </p> */}

        {/* Description */}
<div className="mt-10 text-base md:text-lg font-medium text-gray-700 leading-relaxed max-w-md space-y-4 text-center md:text-left">
  <p>
    Yes, you heard it right—India is about to host one of the most unique and
    thought-provoking essay competitions. Senior school students will have the
    chance to step up and share their ideas on the world’s toughest financial
    challenges.
  </p>

  <p>
    But this isn’t your usual “write an essay, get a grade” situation. The
    ReGenVest Challenge celebrates <span className="font-semibold text-purple-700">
    critical thinking</span>, <span className="font-semibold text-purple-700">
    problem-solving</span>, and <span className="font-semibold text-purple-700">
    bold ideas</span> that could reshape how the world invests, saves, and grows.
  </p>

  <ul className="list-disc pl-5 space-y-2">
    <li>
      <span className="font-bold text-purple-600">Students:</span> Move beyond
      pocket money debates—tackle topics like climate finance, digital currencies,
      or sustainable investing.
    </li>
    <li>
      <span className="font-bold text-purple-600">Principals:</span> Give your
      students a global stage to showcase their talent and gain fresh perspectives.
    </li>
    <li>
      <span className="font-bold text-purple-600">Parents:</span> Get ready to
      hear dinner table conversations about fiscal policy—footnotes included.
    </li>
  </ul>

  <p className="text-gray-900 font-semibold">
    From Delhi to Dubai, Mumbai to Manila—join the ReGenVest Challenge. Write.
    Compete. Inspire. And maybe, just maybe, become the next voice shaping the
    financial future.
  </p>
</div>


        {/* Button */}
  <a href='/regenvest'>
    <button className="mt-6 text-base md:text-lg font-semibold tracking-wide   text-black flex items-center hover:ml-1 transition-all">
      Know More <span className="ml-2">➝</span>
    </button>
  </a>
</div>
      {/* Right Side - Hero Image */}
      <div className="relative w-full md:w-1/2 mt-10 md:mt-0 md:pl-12 z-10">
        <Image
          src="/images/regenvestimg.jpeg"
          alt="Event Banner"
          width={800}
          height={600}
          className="w-full h-auto object-cover rounded-[24px]"
        />

        {/* Button Overlay */}
        <a href='/regenvest#result'>
        <button className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-700 text-white font-semibold px-4 py-2 sm:px-5 sm:py-3 rounded-xl text-sm md:text-base flex items-center hover:mr-1 transition-all">
          View Result <span className="ml-2">➝</span>
        </button>
        </a>
      </div>
    </section>
  );
}
