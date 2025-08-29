// "use client";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// export default function ParallaxCards() {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   // Cards slide up into place and then stay
//   const card1Y = useTransform(scrollYProgress, [0, 0.2], ["100%", "0%"]);
//   const card2Y = useTransform(scrollYProgress, [0.33, 0.53], ["100%", "0%"]);
//   const card3Y = useTransform(scrollYProgress, [0.66, 0.86], ["100%", "0%"]);

//   const card1Opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
//   const card2Opacity = useTransform(scrollYProgress, [0.33, 0.43], [0, 1]);
//   const card3Opacity = useTransform(scrollYProgress, [0.66, 0.76], [0, 1]);

//   return (
//     <div ref={containerRef} className="relative h-[300vh] bg-gray-900">
//       {/* Sticky wrapper */}
//       <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        
//         {/* Card 1 */}
//         <motion.div
//           style={{ y: card1Y, opacity: card1Opacity }}
//           className="absolute w-80 h-56 bg-blue-500 rounded-2xl shadow-xl flex items-center justify-center text-white text-2xl font-bold"
//         >
//           Card 1
//         </motion.div>

//         {/* Card 2 */}
//         <motion.div
//           style={{ y: card2Y, opacity: card2Opacity }}
//           className="absolute w-80 h-56 bg-green-500 rounded-2xl shadow-xl flex items-center justify-center text-white text-2xl font-bold"
//         >
//           Card 2
//         </motion.div>

//         {/* Card 3 */}
//         <motion.div
//           style={{ y: card3Y, opacity: card3Opacity }}
//           className="absolute w-80 h-56 bg-red-500 rounded-2xl shadow-xl flex items-center justify-center text-white text-2xl font-bold"
//         >
//           Card 3
//         </motion.div>
//       </div>
//     </div>
//   );
// }


// "use client";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import { Lightbulb, Trophy, Briefcase } from "lucide-react"; // icons
// // import ParticleSphereCanvas from "./ParticleSphereCanvas"; 


// export default function ThreeCsParallax() {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   // Animations for stacking reveal
//   const card1Y = useTransform(scrollYProgress, [0, 0.2], ["100%", "0%"]);
//   const card2Y = useTransform(scrollYProgress, [0.33, 0.53], ["100%", "0%"]);
//   const card3Y = useTransform(scrollYProgress, [0.66, 0.86], ["100%", "0%"]);

//   const card1Opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
//   const card2Opacity = useTransform(scrollYProgress, [0.33, 0.43], [0, 1]);
//   const card3Opacity = useTransform(scrollYProgress, [0.66, 0.76], [0, 1]);

//   return (
//     <div ref={containerRef} className="relative h-[300vh] bg-white">
//       {/* Sticky wrapper */}
//       <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

//         {/* Card 1 - Conference */}
//         {/* <motion.div
//           style={{ y: card1Y, opacity: card1Opacity }}
//           className="absolute w-11/12 max-w-5xl bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200 shadow-xl p-10 flex items-center justify-between hover:scale-[1.02] transition-transform duration-300"
//         >
//           <div className="max-w-md">
//             <span className="text-sm uppercase tracking-widest text-orange-500 font-semibold">
//               Event
//             </span>
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Conference</h2>
//             <p className="text-gray-700 leading-relaxed">
//               Engaging finance conferences where students and experts come together 
//               to exchange knowledge, discuss innovations, and explore real-world strategies.
//             </p>
//           </div>
//           <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-orange-500 to-yellow-400 flex items-center justify-center shadow-lg">
//             <Lightbulb className="w-16 h-16 text-white" />
//           </div>
//         </motion.div> */}

//      <motion.div
//   style={{ y: card1Y, opacity: card1Opacity }}
//   className="absolute w-11/12 max-w-6xl bg-black text-white rounded-2xl shadow-xl p-12 flex items-center justify-between"
// >
//   {/* Left Text Section */}
//   <div className="max-w-lg">
//     <h2 className="text-4xl font-extrabold mb-4">
//       Main mission of our <span className="text-orange-500">company</span>
//     </h2>
//     <p className="text-gray-300 leading-relaxed mb-6">
//       Our team of experts strives to benefit society and contribute to its 
//       economic development while ensuring the implementation of high-quality projects.
//     </p>
//     <button className="inline-flex items-center text-sm font-bold text-white bg-orange-500 px-5 py-2 rounded-lg hover:bg-orange-600 transition">
//       OUR HISTORY <span className="ml-2">→</span>
//     </button>
//   </div>

//   {/* Right Visual Section */}
//   <div className="w-[400px] h-[400px] flex items-center justify-center relative">
//     {/* ParticleSphere visualization */}
//     <div className="absolute inset-0 rounded-full overflow-hidden">
//       {/* <ParticleSphereCanvas /> */}
//       </div>
//   </div>
// </motion.div>



//         {/* Card 2 - Competition */}
//         <motion.div
//           style={{ y: card2Y, opacity: card2Opacity }}
//           className="absolute w-10/11 max-w-5xl bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200 shadow-xl p-10 flex items-center justify-between hover:scale-[1.02] transition-transform duration-300"
//         >
//           <div className="max-w-md">
//             <span className="text-sm uppercase tracking-widest text-green-500 font-semibold">
//               Challenge
//             </span>
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Competition</h2>
//             <p className="text-gray-700 leading-relaxed">
//               Hands-on competitions challenging students to apply financial concepts, 
//               sharpen analytical skills, and collaborate under real-world pressure.
//             </p>
//           </div>
//           <div className="w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-green-500 to-emerald-400 flex items-center justify-center shadow-lg">
//             <Trophy className="w-16 h-16 text-white" />
//           </div>
//         </motion.div>

//         {/* Card 3 - Consulting */}
//         <motion.div
//           style={{ y: card3Y, opacity: card3Opacity }}
//           className="absolute w-09/10 max-w-5xl bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200 shadow-xl p-10 flex items-center justify-between hover:scale-[1.02] transition-transform duration-300"
//         >
//           <div className="max-w-md">
//             <span className="text-sm uppercase tracking-widest text-blue-500 font-semibold">
//               Guidance
//             </span>
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Consulting</h2>
//             <p className="text-gray-700 leading-relaxed">
//               Consulting initiatives offering mentorship and industry insights, 
//               preparing students with the skills and confidence to succeed in finance careers.
//             </p>
//           </div>
//           <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg">
//             {/* <Briefcase className="w-16 h-16 text-white" /> */}
//             <iframe src='https://my.spline.design/colorbox3copy-g9oSODF3wwrLXjlYumN2rkbI/' frameborder='0' width='100%' height='100%'></iframe>  
              

//           </div>
//         </motion.div>


//       </div>
//     </div>
//   );
// }


// "use client";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import { Users, School, Mic } from "lucide-react"; // swapped icons for relevance

// export default function ThreeCsParallax() {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   // Animations for stacking reveal
//   const card1Y = useTransform(scrollYProgress, [0, 0.2], ["100%", "0%"]);
//   const card2Y = useTransform(scrollYProgress, [0.33, 0.53], ["100%", "0%"]);
//   const card3Y = useTransform(scrollYProgress, [0.66, 0.86], ["100%", "0%"]);

//   const card1Opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
//   const card2Opacity = useTransform(scrollYProgress, [0.33, 0.43], [0, 1]);
//   const card3Opacity = useTransform(scrollYProgress, [0.66, 0.76], [0, 1]);

//   return (
//     <div ref={containerRef} className="relative h-[300vh] bg-white">
//       {/* Sticky wrapper */}
//       <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

//         {/* Card 1 - Students */}
    
//         <motion.div
//   style={{ y: card1Y, opacity: card1Opacity }}
//   className="absolute w-11/12 max-w-6xl bg-[#78cc84] text-black font-[Oswald] rounded-2xl shadow-xl p-12 flex flex-col md:flex-row items-center justify-between"
// >
//   {/* Left Text Section */}
//   <div className="max-w-lg mb-8 md:mb-0">
//     <h2 className="text-4xl font-extrabold mb-4">
//       For <span className="text-orange-500">Students</span>
//     </h2>
//     <p className="text-white/90 leading-relaxed mb-6">
//       Participate in our events to learn and grow your financial knowledge.
//       Gain practical insights and skills that will help you make smarter financial decisions.
//     </p>
//     <button className="inline-flex items-center text-sm font-bold text-white bg-orange-500 px-5 py-2 rounded-lg hover:bg-orange-600 transition">
//       JOIN NOW <span className="ml-2">→</span>
//     </button>
//   </div>

//   {/* Right Video Section */}
//   <div className="w-[280px] h-[500px] flex items-center justify-center relative rounded-2xl overflow-hidden ">
//     <video
//       src="/images/vid2.mp4"  // 🔹 replace with your actual MP4 file path
//       autoPlay
//       loop
//       muted
//       playsInline
//       className="w-full h-full object-cover"
//     />
//   </div>
// </motion.div>


//         {/* Card 2 - Schools & Communities */}
//      <motion.div
//   style={{ y: card2Y, opacity: card2Opacity }}
//   className="absolute w-10/11 max-w-5xl bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200 shadow-xl p-10 flex items-center justify-between hover:scale-[1.02] transition-transform duration-300"
// >
//   <div className="max-w-md">
//     <span className="text-sm uppercase tracking-widest text-green-500 font-semibold">
//       Partnership
//     </span>
//     <h2 className="text-4xl font-bold text-gray-900 mb-4">
//       For Schools & Communities
//     </h2>
//     <p className="text-gray-700 leading-relaxed">
//       Partner with us to bring financial education programs to your students. 
//       Together, we can create meaningful opportunities for lifelong learning.
//     </p>
//   </div>

//   {/* Right side visual with video instead of icon */}
//   <div 
//     className="w-[300px] h-[300px] rounded-full flex items-center justify-center shadow-lg overflow-hidden"
//     style={{ backgroundColor: "#74b2cf" }} // your uploaded blue color
//   >
//     <video
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         src="/images/vid1.mp4" // place your video in public/
//         autoPlay
//         muted
//         loop
//         playsInline
//       />
//   </div>
// </motion.div>


//         {/* Card 3 - Sponsors & Speakers */}
//         <motion.div
//           style={{ y: card3Y, opacity: card3Opacity }}
//           className="absolute w-09/10 max-w-5xl bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200 shadow-xl p-10 flex items-center justify-between hover:scale-[1.02] transition-transform duration-300"
//         >
//           <div className="max-w-md">
//             <span className="text-sm uppercase tracking-widest text-blue-500 font-semibold">
//               Support
//             </span>
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               For Sponsors & Speakers
//             </h2>
//             <p className="text-gray-700 leading-relaxed">
//               Support and contribute to our mission of promoting financial literacy. 
//               Share your expertise, inspire others, and help us create a lasting impact.
//             </p>
//           </div>
//           <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg">
//             {/* <Mic className="w-16 h-16 text-white" /> */}
//                 <iframe src='https://my.spline.design/colorbox3copy-g9oSODF3wwrLXjlYumN2rkbI/' frameborder='0' width='100%' height='100%' className="rounded-full"></iframe>  

//           </div>
//         </motion.div>

//       </div>
//     </div>
//   );
// }

// "use client";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// export default function ThreeCsParallax() {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   // Card 1: visible at load; gentle upward drift
//   const card1Y = useTransform(scrollYProgress, [0, 0.3], ["0%", "-10%"]);
//   const card1Opacity = useTransform(scrollYProgress, [0, 0.001], [1, 1]); // stay visible

//   // Card 2: slides in after some scroll
//   const card2Y = useTransform(scrollYProgress, [0.18, 0.38], ["110%", "0%"]);
//   const card2Opacity = useTransform(scrollYProgress, [0.18, 0.28], [0, 1]);

//   // Card 3: slides in later
//   const card3Y = useTransform(scrollYProgress, [0.5, 0.7], ["110%", "0%"]);
//   const card3Opacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);

//   return (
//     <div ref={containerRef} className="relative h-[300vh] bg-white">
//       {/* Sticky wrapper for Parallax Cards */}
//       <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
//         {/* Card 1 - Students (visible immediately) */}
//         <motion.div
//           style={{ y: card1Y, opacity: card1Opacity }}
//           className="absolute w-11/12 max-w-6xl bg-[#78cc84] text-black rounded-2xl shadow-xl p-12 flex flex-col md:flex-row items-center justify-between will-change-transform"
//         >
//           <div className="max-w-lg mb-8 md:mb-0">
//             <h2 className="text-4xl font-extrabold mb-4">
//               For <span className="text-orange-500">Students</span>
//             </h2>
//             <p className="text-white/90 leading-relaxed mb-6">
//               Participate in our events to learn and grow your financial knowledge.
//               Gain practical insights and skills that will help you make smarter financial decisions.
//             </p>
//           </div>

//           <div className="w-[280px] h-[500px] flex items-center justify-center relative rounded-2xl overflow-hidden">
//             <video
//               src="/images/vid2.mp4"
//               autoPlay
//               loop
//               muted
//               playsInline
//               className="w-full h-full object-cover"
//               poster="/images/vid2-poster.jpg"  // optional: avoids flash on slow loads
//             />
//           </div>
//         </motion.div>

//         {/* Card 2 - Schools & Communities */}
//         <motion.div
//           style={{ y: card2Y, opacity: card2Opacity }}
//           className="absolute w-10/11 max-w-5xl bg-[#75b3ce] backdrop-blur-xl rounded-2xl border border-gray-200 shadow-xl p-10 flex items-center justify-between hover:scale-[1.02] transition-transform duration-300 will-change-transform"
//         >
//           <div className="max-w-md">
//             <span className="text-sm uppercase tracking-widest text-gray-100 font-semibold">
//               Partnership
//             </span>
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               For Schools & Communities
//             </h2>
//             <p className="text-gray-700 leading-relaxed">
//               Partner with us to bring financial education programs to your students. 
//               Together, we can create meaningful opportunities for lifelong learning.
//             </p>
//           </div>

//           <div className="w-[300px] h-[300px] flex items-center justify-center overflow-hidden relative">
//             <video
//               className="w-full h-full object-cover"
//               src="/images/vid1.mp4"
//               autoPlay
//               muted
//               loop
//               playsInline
//               poster="/images/vid1-poster.jpg"
//             />
//           </div>
//         </motion.div>

//         {/* Card 3 - Sponsors & Speakers */}
//         <motion.div
//           style={{ y: card3Y, opacity: card3Opacity }}
//           className="absolute w-9/10 max-w-5xl bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200 shadow-xl p-10 flex items-center justify-between hover:scale-[1.02] transition-transform duration-300 will-change-transform"
//         >
//           <div className="max-w-md">
//             <span className="text-sm uppercase tracking-widest text-blue-500 font-semibold">
//               Support
//             </span>
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               For Sponsors & Speakers
//             </h2>
//             <p className="text-gray-700 leading-relaxed">
//               Support and contribute to our mission of promoting financial literacy. 
//               Share your expertise, inspire others, and help us create a lasting impact.
//             </p>
//           </div>
//           <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg overflow-hidden">
//             <iframe
//               src="https://my.spline.design/colorbox3copy-g9oSODF3wwrLXjlYumN2rkbI/"
//               frameBorder="0"
//               width="100%"
//               height="100%"
//               className="rounded-full"
//             />
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }


"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ThreeCsParallax() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Card 1
  const card1Y = useTransform(scrollYProgress, [0, 0.3], ["0%", "-10%"]);
  const card1Opacity = useTransform(scrollYProgress, [0, 0.001], [1, 1]);

  // Card 2
  const card2Y = useTransform(scrollYProgress, [0.18, 0.38], ["110%", "0%"]);
  const card2Opacity = useTransform(scrollYProgress, [0.18, 0.28], [0, 1]);

  // Card 3
  const card3Y = useTransform(scrollYProgress, [0.5, 0.7], ["110%", "0%"]);
  const card3Opacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-white">
      {/* Sticky wrapper */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

        {/* Card 1 */}
        <motion.div
          style={{ y: card1Y, opacity: card1Opacity }}
          className="absolute w-11/12 max-w-6xl bg-[#78cc84] text-black rounded-2xl shadow-xl p-8 sm:p-10 flex flex-col md:flex-row items-center md:items-start justify-between will-change-transform"
        >
          <div className="max-w-lg mb-6 md:mb-0">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              For <span className="text-orange-500">Students</span>
            </h2>
            <p className="text-white/90 leading-relaxed mb-6 text-sm sm:text-base">
              Participate in our events to learn and grow your financial knowledge.
              Gain practical insights and skills that will help you make smarter financial decisions.
            </p>
          </div>

          <div className="w-full md:w-[280px] h-64 md:h-[500px] flex items-center justify-center relative rounded-2xl overflow-hidden">
            <video
              src="/images/vid2.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              poster="/images/vid2-poster.jpg"
            />
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          style={{ y: card2Y, opacity: card2Opacity }}
          className="absolute w-11/12 max-w-5xl bg-[#75b3ce] backdrop-blur-xl rounded-2xl border border-gray-200 shadow-xl p-8 sm:p-10 flex flex-col md:flex-row items-center md:items-start justify-between will-change-transform"
        >
          <div className="max-w-md mb-6 md:mb-0">
            <span className="text-xs sm:text-sm uppercase tracking-widest text-gray-100 font-semibold">
              Partnership
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              For Schools & Communities
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Partner with us to bring financial education programs to your students. 
              Together, we can create meaningful opportunities for lifelong learning.
            </p>
          </div>

          <div className="w-full md:w-[300px] h-56 md:h-[300px] flex items-center justify-center overflow-hidden relative">
            <video
              className="w-full h-full object-cover"
              src="/images/vid1.mp4"
              autoPlay
              muted
              loop
              playsInline
              poster="/images/vid1-poster.jpg"
            />
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          style={{ y: card3Y, opacity: card3Opacity }}
          className="absolute w-11/12 max-w-5xl bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200 shadow-xl p-8 sm:p-10 flex flex-col md:flex-row items-center md:items-start justify-between will-change-transform"
        >
          <div className="max-w-md mb-6 md:mb-0">
            <span className="text-xs sm:text-sm uppercase tracking-widest text-blue-500 font-semibold">
              Support
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              For Sponsors & Speakers
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Support and contribute to our mission of promoting financial literacy. 
              Share your expertise, inspire others, and help us create a lasting impact.
            </p>
          </div>

          <div className="w-full md:w-48 h-48 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg overflow-hidden">
            <iframe
              src="https://my.spline.design/colorbox3copy-g9oSODF3wwrLXjlYumN2rkbI/"
              frameBorder="0"
              width="100%"
              height="100%"
              className="rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
