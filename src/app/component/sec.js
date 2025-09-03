// "use client";
// import { motion } from "framer-motion";
// import { LineChart, Line, ResponsiveContainer } from "recharts";

// const data = [
//   { x: 1, y: 10 },
//   { x: 2, y: 40 },
//   { x: 3, y: 25 },
//   { x: 4, y: 90 },
//   { x: 5, y: 30 },
//   { x: 6, y: 60 },
//   { x: 7, y: 50 },
// ];

// export default function Sec1() {
//   return (
//     <section className="flex flex-col md:flex-row items-center justify-between bg-gray-50 min-h-[70vh] px-10 py-16">
//       {/* Left Content */}
//       <div className="max-w-xl">
//         <h1 className="text-6xl font-extrabold tracking-tight text-black leading-tight">
//           ST<span className="inline-block transform scale-x-[-1]">Ø</span>P THE <br />
//           FINANCE <br />
//           <span className="italic font-light">ID•LE</span>
//         </h1>
//         <p className="text-gray-600 mt-6 text-lg max-w-md">
//           Get exclusive offers, invest ideas and more.
//         </p>
//       </div>

//       {/* Right Content */}
//       <div className="relative bg-white rounded-2xl shadow-md p-8 mt-10 md:mt-0">
//         {/* Users Badge */}
//         <div className="absolute -top-6 -left-6 bg-black text-white rounded-full px-6 py-4 font-bold text-lg shadow-lg">
//           Users <br /> Over 200
//         </div>

//         {/* Chart */}
//         <div className="w-[350px] h-[200px]">
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart data={data}>
//               <Line
//                 type="monotone"
//                 dataKey="y"
//                 stroke="#000"
//                 strokeWidth={3}
//                 dot={{ r: 6, fill: "red" }}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Powered By */}
//         <div className="flex items-center gap-2 justify-end mt-3">
//           <span className="text-xs font-medium text-gray-500">POWERED BY</span>
//           <span className="bg-green-200 text-green-900 px-2 py-1 rounded-md font-bold">
//             B
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import { motion } from "framer-motion";
// import { LineChart, Line, ResponsiveContainer } from "recharts";

// const data = [
//   { x: 1, y: 10 },
//   { x: 2, y: 40 },
//   { x: 3, y: 25 },
//   { x: 4, y: 90 },
//   { x: 5, y: 30 },
//   { x: 6, y: 60 },
//   { x: 7, y: 50 },
// ];

// export default function Sec1() {
//   return (
//     <section className="flex flex-col md:flex-row items-center justify-between bg-gray-50 min-h-[70vh] px-10 py-16">
//       {/* Left Content */}
//       <div className="max-w-xl">
//         <h1 className="text-6xl font-extrabold tracking-tight text-black leading-tight">
//           ST<span className="inline-block transform scale-x-[-1]">Ø</span>P THE <br />
//           FINANCE <br />
//           <span className="italic font-light">ID•LE</span>
//         </h1>
//         <p className="text-gray-600 mt-6 text-lg max-w-md">
//           Get exclusive offers, invest ideas and more.
//         </p>
//       </div>

//       {/* Right Content */}
//       <div className="relative bg-white rounded-2xl shadow-md p-8 mt-10 md:mt-0">
//         {/* Users Badge */}
//         <div className="absolute -top-6 -left-6 bg-black text-white rounded-full px-6 py-4 font-bold text-lg shadow-lg">
//           Users <br /> 50K
//         </div>

//         {/* Chart */}
//         <div className="w-[350px] h-[200px]">
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart data={data}>
//               <Line
//                 type="monotone"
//                 dataKey="y"
//                 stroke="#000"
//                 strokeWidth={3}
//                 dot={{ r: 6, fill: "red" }}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Powered By */}
//         <div className="flex items-center gap-2 justify-end mt-3">
//           <span className="text-xs font-medium text-gray-500">POWERED BY</span>
//           <span className="bg-green-200 text-green-900 px-2 py-1 rounded-md font-bold">
//             B
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";
// import { motion } from "framer-motion";
// import { LineChart, Line, ResponsiveContainer } from "recharts";
// import { useState } from "react";

// const data = [
//   { x: 1, y: 10 },
//   { x: 2, y: 40 },
//   { x: 3, y: 25 },
//   { x: 4, y: 90 },
//   { x: 5, y: 30 },
//   { x: 6, y: 60 },
//   { x: 7, y: 50 },
// ];

// export default function Sec1() {
//   const [animate, setAnimate] = useState(false);

//   return (
//     <section className="flex flex-col md:flex-row items-center justify-between bg-gray-50 min-h-[70vh] px-10 py-16">
//       {/* Left Content */}
//       <div className="max-w-xl">
//         <h1 className="text-6xl font-extrabold tracking-tight text-black leading-tight">
//           ST<span className="inline-block transform scale-x-[-1]">Ø</span>P THE <br />
//           FINANCE <br />
//           <span className="italic font-light">ID•LE</span>
//         </h1>
//         <p className="text-gray-600 mt-6 text-lg max-w-md">
//           Get exclusive offers, invest ideas and more.
//         </p>
//       </div>

//       {/* Right Content */}
//       <motion.div
//         className="relative bg-white rounded-2xl shadow-md p-8 mt-10 md:mt-0"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{
//           opacity: 1,
//           y: 0,
//           transition: { duration: 0.8 },
//         }}
//         viewport={{ once: true }}
//         onViewportEnter={() => setAnimate(true)}
//       >
//         {/* Users Badge */}
//         <div className="absolute -top-6 -left-6 bg-black text-white rounded-full px-6 py-4 font-bold text-lg shadow-lg">
//           Users <br /> 50K
//         </div>

//         {/* Chart */}
//         <div className="w-[350px] h-[200px]">
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart data={data}>
//               <Line
//                 type="monotone"
//                 dataKey="y"
//                 stroke="#000"
//                 strokeWidth={3}
//                 dot={{ r: 6, fill: "red" }}
//                 isAnimationActive={animate}   // 👈 animate only after scroll
//                 animationDuration={2000}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Powered By */}
//         <div className="flex items-center gap-2 justify-end mt-3">
//           <span className="text-xs font-medium text-gray-500">POWERED BY</span>
//           <span className="bg-green-200 text-green-900 px-2 py-1 rounded-md font-bold">
//             B
//           </span>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

// "use client";
// import { motion, useInView } from "framer-motion";
// import { LineChart, Line, ResponsiveContainer } from "recharts";
// import { useEffect, useRef, useState } from "react";

// const data = [
//   { x: 1, y: 10 },
//   { x: 2, y: 40 },
//   { x: 3, y: 25 },
//   { x: 4, y: 90 },
//   { x: 5, y: 30 },
//   { x: 6, y: 60 },
//   { x: 7, y: 50 },
// ];

// // Counter animation function
// function Counter({ from = 0, to = 50000, duration = 2000 }) {
//   const [value, setValue] = useState(from);

//   useEffect(() => {
//     let start = null;
//     const step = (timestamp) => {
//       if (!start) start = timestamp;
//       const progress = Math.min((timestamp - start) / duration, 1);
//       setValue(Math.floor(progress * (to - from) + from));
//       if (progress < 1) requestAnimationFrame(step);
//     };
//     requestAnimationFrame(step);
//   }, [from, to, duration]);

//   return <>{value.toLocaleString()}</>;
// }

// export default function Sec1() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { amount: 0.3 }); // visible when 30% in viewport
//   const [animate, setAnimate] = useState(false);
//   const [triggerCount, setTriggerCount] = useState(false);

//   useEffect(() => {
//     if (isInView) {
//       setAnimate(false); // reset
//       setTimeout(() => setAnimate(true), 50); // re-trigger chart animation
//       setTriggerCount(true); // trigger counter
//     }
//   }, [isInView]);

//   return (
//     <section
//       ref={ref}
//       className="flex flex-col md:flex-row items-center justify-between bg-gray-50 min-h-[70vh] px-10 py-16"
//     >
//       {/* Left Content */}
//       <div className="max-w-xl">
//         <h1 className="text-6xl font-extrabold tracking-tight text-black leading-tight">
//           ST<span className="inline-block transform scale-x-[-1]">Ø</span>P THE <br />
//           FINANCE <br />
//           <span className="italic font-light">ID•LE</span>
//         </h1>
//         <p className="text-gray-600 mt-6 text-lg max-w-md">
//           Get exclusive offers, invest ideas and more.
//         </p>
//       </div>

//       {/* Right Content */}
//       <motion.div
//         className="relative bg-white rounded-2xl shadow-md p-8 mt-10 md:mt-0"
//         initial={{ opacity: 0, y: 50 }}
//         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//         transition={{ duration: 0.8 }}
//       >
//         {/* Users Badge */}
//         <div className="absolute -top-6 -left-6 bg-black text-white rounded-full px-6 py-4 font-bold text-lg shadow-lg">
//           Users <br />
//           {triggerCount && <Counter to={200} />} {/* 👈 animated number */}
//         </div>

//         {/* Chart */}
//         <div className="w-[350px] h-[200px]">
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart data={data}>
//               <Line
//                 type="monotone"
//                 dataKey="y"
//                 stroke="#000"
//                 strokeWidth={3}
//                 dot={{ r: 6, fill: "red" }}
//                 isAnimationActive={animate} // animate when in view
//                 animationDuration={2000}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Powered By */}
//         <div className="flex items-center gap-2 justify-end mt-3">
//           <span className="text-xs font-medium text-gray-500">POWERED BY</span>
//           <span className="bg-green-200 text-green-900 px-2 py-1 rounded-md font-bold">
//             B
//           </span>
//         </div>
//       </motion.div>
//     </section>
//   );
// }


// "use client";
// import { motion, useInView } from "framer-motion";
// import { LineChart, Line, ResponsiveContainer } from "recharts";
// import { useEffect, useRef, useState } from "react";

// const data = [
//   { x: 1, y: 10 },
//   { x: 2, y: 40 },
//   { x: 3, y: 25 },
//   { x: 4, y: 90 },
//   { x: 5, y: 30 },
//   { x: 6, y: 60 },
//   { x: 7, y: 50 },
// ];

// // Counter animation function
// function Counter({ from = 0, to = 200, duration = 2000 }) {
//   const [value, setValue] = useState(from);

//   useEffect(() => {
//     let start = null;
//     const step = (timestamp) => {
//       if (!start) start = timestamp;
//       const progress = Math.min((timestamp - start) / duration, 1);
//       setValue(Math.floor(progress * (to - from) + from));
//       if (progress < 1) requestAnimationFrame(step);
//     };
//     requestAnimationFrame(step);
//   }, [from, to, duration]);

//   return <>{value.toLocaleString()}</>;
// }

// export default function Sec1() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { amount: 0.3 });
//   const [animate, setAnimate] = useState(false);
//   const [triggerCount, setTriggerCount] = useState(false);

//   useEffect(() => {
//     if (isInView) {
//       // Reset chart + counter on every scroll into view
//       setAnimate(false);
//       setTriggerCount(false);

//       // Delay slightly so reset is visible
//       setTimeout(() => {
//         setAnimate(true);
//         setTriggerCount(true);
//       }, 100);
//     }
//   }, [isInView]);

//   return (
//     <section
//       ref={ref}
//       className="flex flex-col md:flex-row items-center justify-between bg-gray-50 min-h-[70vh] px-10 py-16"
//     >
//       {/* Left Content */}
//       <motion.div
//         className="max-w-xl"
//         initial={{ opacity: 0, x: -50 }}
//         animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h1 className="sm:text-4xl text-3xl mb-4 font-extrabold leading-tight bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-700 bg-clip-text text-transparent">
//           Empowering Students <br /> Through Financial Education
//         </h1>
//         <p className="text-gray-600 mt-6 text-lg max-w-md">
//           At the core of ThriveFi are our guiding principles—the <strong>3 Cs</strong>:
//             <span className="text-purple-600 font-bold "> Conference</span>, 
//             <span className="text-purple-600 font-bold"> Competition</span>, and 
//             <span className="text-purple-600 font-bold"> Consulting</span>. 
//           These pillars reflect our commitment to creating dynamic learning opportunities, 
//           encouraging informed dialogue, and providing mentorship to students as they 
//           navigate the world of finance.
//         </p>
//       </motion.div>

//       {/* Right Content */}
//       <motion.div
//         className="relative bg-white rounded-2xl shadow-md p-8 mt-10 md:mt-0"
//         initial={{ opacity: 0, y: 50 }}
//         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//         transition={{ duration: 0.8 }}
//       >
//         {/* Users Badge */}
//         <div className="absolute -top-6 -left-6 bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-700 text-white rounded-full px-6 py-4 font-bold text-lg shadow-lg">
//           Users <br />
//           {triggerCount && <Counter to={200} />} {/* animated number */}
//         </div>

//         {/* Chart */}
//         <div className="w-[350px] h-[200px]">
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart data={data}>
//               <Line
//                 type="monotone"
//                 dataKey="y"
//                 stroke="#000"
//                 strokeWidth={3}
//                 dot={{ r: 6, fill: "purple" }}
//                 isAnimationActive={animate}
//                 animationDuration={2000}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Powered By */}
//         <div className="flex items-center gap-2 justify-end mt-3">
//           <span className="text-xs font-medium text-gray-500">POWERED BY</span>
//           <span className="bg-green-200 text-green-900 px-2 py-1 rounded-md font-bold">
//             B
//           </span>
//         </div>
//       </motion.div>
//     </section>
//   );
// }





// "use client";
// import { motion, useInView } from "framer-motion";
// import { LineChart, Line, ResponsiveContainer } from "recharts";
// import { useEffect, useRef, useState } from "react";

// const data = [
//   { x: 1, y: 10 },
//   { x: 2, y: 40 },
//   { x: 3, y: 25 },
//   { x: 4, y: 90 },
//   { x: 5, y: 30 },
//   { x: 6, y: 60 },
//   { x: 7, y: 50 },
// ];

// // Counter animation function
// function Counter({ from = 0, to = 200, duration = 2000 }) {
//   const [value, setValue] = useState(from);

//   useEffect(() => {
//     let start = null;
//     const step = (timestamp) => {
//       if (!start) start = timestamp;
//       const progress = Math.min((timestamp - start) / duration, 1);
//       setValue(Math.floor(progress * (to - from) + from));
//       if (progress < 1) requestAnimationFrame(step);
//     };
//     requestAnimationFrame(step);
//   }, [from, to, duration]);

//   return <>{value.toLocaleString()}</>;
// }

// export default function Sec1() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { amount: 0.3 });
//   const [animate, setAnimate] = useState(false);
//   const [triggerCount, setTriggerCount] = useState(false);

//   useEffect(() => {
//     if (isInView) {
//       setAnimate(false);
//       setTriggerCount(false);
//       setTimeout(() => {
//         setAnimate(true);
//         setTriggerCount(true);
//       }, 100);
//     }
//   }, [isInView]);

//   return (
//     <section
//       ref={ref}
//       className="relative overflow-hidden min-h-[90vh] flex flex-col items-center justify-center px-6 py-20"
//     >
//       {/* 🔵 Background blobs */}
//       <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-emerald-400/30 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-sky-400/30 rounded-full blur-3xl"></div>

//       {/* 🔸 Marquee strip */}
//       <motion.div
//         className="relative w-full bg-emerald-500 py-6 overflow-hidden mb-12"
//         initial={{ opacity: 0, y: 50 }}
//         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//         transition={{ duration: 0.8 }}
//       >
//         <motion.div
//           className="whitespace-nowrap text-white font-extrabold text-3xl flex gap-12"
//           animate={{ x: ["100%", "-100%"] }}
//           transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
//         >
//           <span>🚀 Invest Smart •</span>
//           <span>📈 Grow Wealth •</span>
//           <span>💡 Financial Freedom •</span>
//           <span>🔥 Thrive with Us •</span>
//         </motion.div>

//         {/* Overlay image (from public folder) */}
//         <img
//           src="/bull.png" // 👈 put your bull/finance image here
//           alt="Finance Icon"
//           className="absolute right-10 top-1/2 -translate-y-1/2 w-24 h-24 opacity-80"
//         />
//       </motion.div>

//       {/* 🔹 Content */}
//       <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full max-w-6xl">
//         {/* Left Content */}
//         <motion.div
//           className="max-w-xl z-10"
//           initial={{ opacity: 0, x: -50 }}
//           animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
//             Empowering Students <br /> Through Financial Education
//           </h1>
//           <p className="text-gray-700 mt-6 text-lg max-w-md">
//             At the core of ThriveFi are our guiding principles—the 3 Cs:{" "}
//             <span className="font-semibold">
//               Conference, Competition, and Consulting
//             </span>
//             . These pillars reflect our commitment to creating dynamic learning
//             opportunities, encouraging informed dialogue, and providing
//             mentorship to students as they navigate the world of finance.
//           </p>
//         </motion.div>

//         {/* Right Content (Card with counter + chart) */}
//         <motion.div
//           className="relative bg-white rounded-2xl shadow-xl p-8 z-10"
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//           transition={{ duration: 0.8 }}
//         >
//           {/* Users Badge */}
//           <div className="absolute -top-6 -left-6 bg-black text-white rounded-full px-6 py-4 font-bold text-lg shadow-lg">
//             Users <br />
//             {triggerCount && <Counter to={200} />}
//           </div>

//           {/* Chart */}
//           <div className="w-[350px] h-[200px]">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={data}>
//                 <Line
//                   type="monotone"
//                   dataKey="y"
//                   stroke="#10b981" // emerald
//                   strokeWidth={3}
//                   dot={{ r: 6, fill: "#3b82f6" }} // blue dots
//                   isAnimationActive={animate}
//                   animationDuration={2000}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>

//           {/* Powered By */}
//           <div className="flex items-center gap-2 justify-end mt-3">
//             <span className="text-xs font-medium text-gray-500">
//               POWERED BY
//             </span>
//             <span className="bg-emerald-200 text-emerald-900 px-2 py-1 rounded-md font-bold">
//               B
//             </span>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



// "use client";
// import { motion, useInView } from "framer-motion";
// import { LineChart, Line, ResponsiveContainer } from "recharts";
// import { useEffect, useRef, useState } from "react";

// const data = [
//   { x: 1, y: 10 },
//   { x: 2, y: 40 },
//   { x: 3, y: 25 },
//   { x: 4, y: 90 },
//   { x: 5, y: 30 },
//   { x: 6, y: 60 },
//   { x: 7, y: 50 },
// ];

// // Counter animation function
// function Counter({ from = 0, to = 200, duration = 2000 }) {
//   const [value, setValue] = useState(from);

//   useEffect(() => {
//     let start = null;
//     const step = (timestamp) => {
//       if (!start) start = timestamp;
//       const progress = Math.min((timestamp - start) / duration, 1);
//       setValue(Math.floor(progress * (to - from) + from));
//       if (progress < 1) requestAnimationFrame(step);
//     };
//     requestAnimationFrame(step);
//   }, [from, to, duration]);

//   return <>{value.toLocaleString()}</>;
// }

// export default function Sec1() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { amount: 0.3 });
//   const [animate, setAnimate] = useState(false);
//   const [triggerCount, setTriggerCount] = useState(false);
//   const [chartKey, setChartKey] = useState(0); // 👈 force remount key

//   useEffect(() => {
//     if (isInView) {
//       // Reset chart + counter
//       setAnimate(false);
//       setTriggerCount(false);

//       // Delay slightly so reset is visible
//       setTimeout(() => {
//         setAnimate(true);
//         setTriggerCount(true);
//         setChartKey((prev) => prev + 1); // 👈 change key to replay chart animation
//       }, 100);
//     }
//   }, [isInView]);

//   return (
//     <section
//       ref={ref}
//       className="flex flex-col md:flex-row items-center justify-between bg-gray-50 min-h-[70vh] px-10 py-16"
//     >
//       {/* Left Content */}
//       <motion.div
//         className="max-w-xl"
//         initial={{ opacity: 0, x: -50 }}
//         animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h1 className="sm:text-6xl text-4xl mb-6 font-bold leading-tight tracking-tight text-gray-900 font-[Oswald]">
//         {/* <h1 className="sm:text-4xl text-3xl font-[Oswald] mb-4 font-extrabold leading-tight bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-700 bg-clip-text text-transparent"> */}
//           Empowering Students <br /> Through Financial Education
//         </h1>
//         <p className="text-gray-600 mt-6 text-lg max-w-md">
//           At the core of ThriveFi are our guiding principles—the <strong>3 Cs</strong>:
//           <span className="text-purple-600 font-bold "> Conference</span>, 
//           <span className="text-purple-600 font-bold"> Competition</span>, and 
//           <span className="text-purple-600 font-bold"> Consulting</span>. 
//           These pillars reflect our commitment to creating dynamic learning opportunities, 
//           encouraging informed dialogue, and providing mentorship to students as they 
//           navigate the world of finance.
//         </p>
//       </motion.div>

//       {/* Right Content */}
//       <motion.div
//         className="relative bg-white rounded-2xl shadow-md p-8 mt-10 md:mt-0"
//         initial={{ opacity: 0, y: 50 }}
//         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//         transition={{ duration: 0.8 }}
//       >
//         {/* Users Badge */}
//         <div className="absolute -top-6 -left-6 bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-700 text-white rounded-full px-6 py-4 font-bold text-lg shadow-lg">
//           Users <br />
//           {triggerCount && <Counter to={200} />} {/* animated number */}
//         </div>

//         {/* Chart */}
//         <div className="w-[350px] h-[200px]">
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart key={chartKey} data={data}> {/* 👈 key forces re-render */}
//               <Line
//                 type="monotone"
//                 dataKey="y"
//                 stroke="#000"
//                 strokeWidth={3}
//                 dot={{ r: 6, fill: "purple" }}
//                 isAnimationActive={animate}
//                 animationDuration={2000}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Powered By */}
//         <div className="flex items-center gap-2 justify-end mt-3">
//           <span className="text-xs font-medium text-gray-500">POWERED BY</span>
//           <span className="bg-green-200 text-green-900 px-2 py-1 rounded-md font-bold">
//             B
//           </span>
//         </div>
//       </motion.div>
//     </section>
//   );
// }




// "use client";
// import { motion, useInView } from "framer-motion";
// import { LineChart, Line, ResponsiveContainer } from "recharts";
// import { useEffect, useRef, useState } from "react";

// const data = [
//   { x: 1, y: 10 },
//   { x: 2, y: 40 },
//   { x: 3, y: 25 },
//   { x: 4, y: 90 },
//   { x: 5, y: 30 },
//   { x: 6, y: 60 },
//   { x: 7, y: 50 },
// ];

// // Counter animation function
// function Counter({ from = 0, to = 200, duration = 2000 }) {
//   const [value, setValue] = useState(from);

//   useEffect(() => {
//     let start = null;
//     const step = (timestamp) => {
//       if (!start) start = timestamp;
//       const progress = Math.min((timestamp - start) / duration, 1);
//       setValue(Math.floor(progress * (to - from) + from));
//       if (progress < 1) requestAnimationFrame(step);
//     };
//     requestAnimationFrame(step);
//   }, [from, to, duration]);

//   return <>{value.toLocaleString()}</>;
// }

// export default function Sec1() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { amount: 0.3 });
//   const [animate, setAnimate] = useState(false);
//   const [triggerCount, setTriggerCount] = useState(false);
//   const [chartKey, setChartKey] = useState(0);

//   useEffect(() => {
//     if (isInView) {
//       setAnimate(false);
//       setTriggerCount(false);

//       setTimeout(() => {
//         setAnimate(true);
//         setTriggerCount(true);
//         setChartKey((prev) => prev + 1);
//       }, 100);
//     }
//   }, [isInView]);

//   return (
//     <section
//       ref={ref}
//       className="relative flex flex-col md:flex-row items-center justify-between bg-gray-50 min-h-[70vh] px-10 py-16 overflow-hidden"
//     >
//       {/* 🔹 Floating Background Blobs */}
//       <motion.img
//         src="/blob.png"
//         alt="decor"
//         className="absolute top-10 left-10 w-40 opacity-30 animate-float z-0"
//       />
//       <motion.img
//         src="/blob.png"
//         alt="decor"
//         className="absolute bottom-10 right-10 w-52 opacity-60 animate-float-delayed z-0"
//       />
//       <motion.img
//         src="/blob.png"
//         alt="decor"
//         className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 opacity-50 animate-float-slow z-0"
//       />

//       {/* Left Content */}
//       <motion.div
//         className="max-w-xl relative z-10"
//         initial={{ opacity: 0, x: -50 }}
//         animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h1 className="sm:text-6xl text-4xl mb-6 font-bold leading-tight tracking-tight text-gray-900 font-[Oswald]">
//           Empowering Students <br /> Through Financial Education
//         </h1>
//         <p className="text-gray-600 mt-6 text-base font-medium max-w-md">
//           {/* At the core of ThriveFi are our guiding principles—the <strong>3 Cs</strong>:
//           <span className="text-purple-600 font-bold "> Conference</span>, 
//           <span className="text-purple-600 font-bold"> Competition</span>, and 
//           <span className="text-purple-600 font-bold"> Consulting</span>. 
//           These pillars reflect our commitment to creating dynamic learning opportunities, 
//           encouraging informed dialogue, and providing mentorship to students as they 
//           navigate the world of finance. */}
//           At the heart of ThriveFi are the 3 Cs 
//           <span className="text-purple-600 font-bold "> Conference</span>, 
//           <span className="text-purple-600 font-bold"> Competition</span>, and 
//           <span className="text-purple-600 font-bold"> Consulting</span>. 
//           These pillars drive our mission to spark learning, foster dialogue, and mentor students in their financial journey.
//         </p>
//       </motion.div>

//       {/* Right Content */}
//       <motion.div
//         className="relative bg-white rounded-2xl shadow-md p-8 mt-10 md:mt-0 z-10"
//         initial={{ opacity: 0, y: 50 }}
//         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//         transition={{ duration: 0.8 }}
//       >
//         {/* Users Badge */}
//         <div className="absolute -top-6 -left-6 bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-700 text-white rounded-full px-6 py-4 font-bold text-lg shadow-lg">
//           Users <br />
//           {triggerCount && <Counter to={200} />}
//         </div>

//         {/* Chart */}
//         <div className="w-[350px] h-[200px]">
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart key={chartKey} data={data}>
//               <Line
//                 type="monotone"
//                 dataKey="y"
//                 stroke="#000"
//                 strokeWidth={3}
//                 dot={{ r: 6, fill: "purple" }}
//                 isAnimationActive={animate}
//                 animationDuration={2000}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Powered By */}
//         <div className="flex items-center gap-2 justify-end mt-3">
//           {/* <span className="text-xs font-medium text-gray-500">POWERED BY</span>
//           <span className="bg-green-200 text-green-900 px-2 py-1 rounded-md font-bold">
//             B
//           </span> */}
//         </div>
//       </motion.div>

//       {/* 🔹 Floating Animation Styles */}
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
// import { motion, useInView } from "framer-motion";
// import { LineChart, Line, ResponsiveContainer } from "recharts";
// import { useEffect, useRef, useState } from "react";

// const data = [
//   { x: 1, y: 10 },
//   { x: 2, y: 40 },
//   { x: 3, y: 25 },
//   { x: 4, y: 90 },
//   { x: 5, y: 30 },
//   { x: 6, y: 60 },
//   { x: 7, y: 50 },
// ];

// // Counter animation function
// function Counter({ from = 0, to = 200, duration = 2000 }) {
//   const [value, setValue] = useState(from);

//   useEffect(() => {
//     let start = null;
//     const step = (timestamp) => {
//       if (!start) start = timestamp;
//       const progress = Math.min((timestamp - start) / duration, 1);
//       setValue(Math.floor(progress * (to - from) + from));
//       if (progress < 1) requestAnimationFrame(step);
//     };
//     requestAnimationFrame(step);
//   }, [from, to, duration]);

//   return <>{value.toLocaleString()}</>;
// }

// export default function Sec1() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { amount: 0.3 });
//   const [animate, setAnimate] = useState(false);
//   const [triggerCount, setTriggerCount] = useState(false);
//   const [chartKey, setChartKey] = useState(0);

//   useEffect(() => {
//     if (isInView) {
//       setAnimate(false);
//       setTriggerCount(false);

//       setTimeout(() => {
//         setAnimate(true);
//         setTriggerCount(true);
//         setChartKey((prev) => prev + 1);
//       }, 100);
//     }
//   }, [isInView]);

//   return (
//     <section
//       ref={ref}
//       className="relative flex flex-col md:flex-row items-center justify-between bg-gray-50 min-h-[70vh] px-6 sm:px-10 py-12 sm:py-16 overflow-hidden"
//     >
//       {/* 🔹 Floating Background Blobs */}
//       <motion.img
//         src="/blob.png"
//         alt="decor"
//         className="absolute top-6 left-6 w-16 sm:w-40 opacity-30 animate-float z-0"
//       />
//       <motion.img
//         src="/blob.png"
//         alt="decor"
//         className="absolute bottom-6 right-6 w-16 sm:w-52 opacity-60 animate-float-delayed z-0"
//       />
//       <motion.img
//         src="/blob.png"
//         alt="decor"
//         className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 sm:w-32 opacity-50 animate-float-slow z-0"
//       />

//       {/* Left Content */}
//       <motion.div
//         className="max-w-xl relative z-10 text-center md:text-left"
//         initial={{ opacity: 0, x: -50 }}
//         animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-gray-900 font-[Oswald] mb-6">
//           Empowering Students <br /> Through Financial Education
//         </h1>
//         <p className="text-gray-600 text-sm sm:text-base lg:text-lg font-medium max-w-md mx-auto md:mx-0">
//           At the heart of ThriveFi are the 3 Cs
//           <span className="text-purple-600 font-bold"> Conference</span>,
//           <span className="text-purple-600 font-bold"> Competition</span>, and
//           <span className="text-purple-600 font-bold"> Consulting</span>. These
//           pillars drive our mission to spark learning, foster dialogue, and mentor
//           students in their financial journey.
//         </p>
//       </motion.div>

//       {/* Right Content */}
//       <motion.div
//         className="relative bg-white rounded-2xl shadow-md p-6 sm:p-8 mt-10 md:mt-0 z-10 w-full max-w-sm sm:max-w-md"
//         initial={{ opacity: 0, y: 50 }}
//         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//         transition={{ duration: 0.8 }}
//       >
//         {/* Users Badge */}
//         <div className="absolute -top-5 -left-5 sm:-top-6 sm:-left-6 bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-700 text-white rounded-full px-4 sm:px-6 py-2 sm:py-4 font-bold text-sm sm:text-lg shadow-lg">
//           Users <br />
//           {triggerCount && <Counter to={200} />}
//         </div>

//         {/* Chart */}
//         <div className="w-full h-[180px] sm:h-[220px]">
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart key={chartKey} data={data}>
//               <Line
//                 type="monotone"
//                 dataKey="y"
//                 stroke="#000"
//                 strokeWidth={3}
//                 dot={{ r: 4, fill: "purple" }}
//                 isAnimationActive={animate}
//                 animationDuration={2000}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </motion.div>

//       {/* 🔹 Floating Animation Styles */}
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

"use client";
import { motion, useInView } from "framer-motion";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const data = [
  { x: 1, y: 10 },
  { x: 2, y: 40 },
  { x: 3, y: 25 },
  { x: 4, y: 90 },
  { x: 5, y: 30 },
  { x: 6, y: 60 },
  { x: 7, y: 50 },
];

// Counter animation function
function Counter({ from = 0, to = 200, duration = 2000 }) {
  const [value, setValue] = useState(from);

  useEffect(() => {
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setValue(Math.floor(progress * (to - from) + from));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [from, to, duration]);

  return <>{value.toLocaleString()}</>;
}

export default function Sec1() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const [animate, setAnimate] = useState(false);
  const [triggerCount, setTriggerCount] = useState(false);
  const [chartKey, setChartKey] = useState(0);

  useEffect(() => {
    if (isInView) {
      setAnimate(false);
      setTriggerCount(false);

      setTimeout(() => {
        setAnimate(true);
        setTriggerCount(true);
        setChartKey((prev) => prev + 1);
      }, 100);
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="relative flex flex-col md:flex-row items-center justify-between bg-gray-50 min-h-[70vh] px-6 sm:px-10 py-12 sm:py-16 overflow-hidden"
    >
      {/* 🔹 Floating Animated Blobs (with PNGs) */}
      <motion.div
        initial={{ x: -50, y: -50, opacity: 0.3 }}
        animate={{ x: [0, 30, -30, 0], y: [0, 20, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-24 h-24 z-0"
      >
        <Image
          src="/blob.png"
          alt="blob"
          width={200}
          height={200}
          className="w-full h-full"
        />
      </motion.div>

      <motion.div
        initial={{ x: 30, y: 50, opacity: 0.4 }}
        animate={{ x: [0, -40, 40, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-32 h-32 z-0"
      >
        <Image
          src="/blob.png"
          alt="blob"
          width={250}
          height={250}
          className="w-full h-full"
        />
      </motion.div>

      <motion.div
        initial={{ x: 0, y: 0, opacity: 0.2 }}
        animate={{ x: [0, 20, -20, 0], y: [0, -15, 15, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 z-0"
      >
        <Image
          src="/blob.png"
          alt="blob"
          width={220}
          height={220}
          className="w-full h-full"
        />
      </motion.div>

      {/* Left Content */}
      {/* <motion.div
        className="max-w-xl relative z-10 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-gray-900 font-[Oswald] mb-6">
          Empowering Students <br /> Through Financial Education
        </h1>
        <p className="text-gray-600 text-sm sm:text-base lg:text-lg font-medium max-w-md mx-auto md:mx-0">
          {/* At the heart of ThriveFi are the 3 Cs
          <span className="text-purple-600 font-bold"> Conference</span>,
          <span className="text-purple-600 font-bold"> Competition</span>, and
          <span className="text-purple-600 font-bold"> Consulting</span>. These
          pillars drive our mission to spark learning, foster dialogue, and mentor
          students in their financial journey. */}

          {/* At the heart of ThriveFi are the 3 Cs: Conference, Competition, and Consulting. Think of them as the Avengers of financial education, different powers working together toward one mission. Together, they spark curiosity, inspire bold discussions, and guide tomorrow’s leaders on their money-smart journeys.

But wait, this isn’t just another school event. This is international. Your students won’t only be competing against their classmates; they will face bright minds from different countries, time zones, and snack preferences.

<span className="text-purple-600 font-bold"> Conference: Where ideas clash, insights emerge, and students sound much smarter than most adults at family dinners. </span> 
<span className="text-purple-600 font-bold">Competition: Where teams channel their inner Shark Tank energy—without the TV drama—to solve real-world financial problems.  </span>
<span className="text-purple-600 font-bold">Consulting: Where students get to act as advisors—because why should adults have all the fun?</span>

So, principals, gather your brightest students. Rally your squads. Whether you’re from Dubai, Delhi, Singapore, or São Paulo, this is your chance to think globally, compete boldly, and consult like a pro.

Sign up, show up, and maybe go down in ThriveFi history as the team that conquered the 3 Cs.
        </p>
      </motion.div> */} 

      {/* Left Content */}
<motion.div
  className="max-w-xl relative z-10 text-center md:text-left"
  initial={{ opacity: 0, x: -50 }}
  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
  transition={{ duration: 0.8 }}
>
  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-gray-900 font-[Oswald] mb-6">
    Empowering Students <br /> Through Financial Education
  </h1>

  <p className="text-gray-600 text-sm sm:text-base lg:text-lg font-medium mb-4">
    At the heart of <span className="font-bold text-purple-600">ThriveFi</span> are the
    <span className="font-bold text-purple-600"> 3 Cs</span>: Conference, Competition, and Consulting.  
    Think of them as the Avengers of financial education—different powers united for one mission.
  </p>

  <ul className="text-gray-700 text-sm sm:text-base lg:text-lg font-medium list-disc pl-5 space-y-2 mb-6">
    <li>
      <span className="font-bold text-purple-600">Conference:</span> Where ideas clash, insights emerge, and students sound smarter than most adults at family dinners.
    </li>
    <li>
      <span className="font-bold text-purple-600">Competition:</span> Teams channel their inner Shark Tank energy—without the TV drama—to solve real-world financial problems.
    </li>
    <li>
      <span className="font-bold text-purple-600">Consulting:</span> Students step up as advisors—because why should adults have all the fun?
    </li>
  </ul>

  <p className="text-gray-600 text-sm sm:text-base lg:text-lg font-medium mb-4">
    But wait—this isn’t just another school event. This is <span className="font-bold">international</span>. 
    Your students won’t only compete with classmates, but with bright minds from across countries, cultures, and time zones.
  </p>

  <p className="text-gray-900 font-semibold text-base sm:text-lg lg:text-xl">
    Principals, gather your brightest students. Rally your squads.  
    Whether you’re from Dubai, Delhi, Singapore, or São Paulo—this is your chance to think globally, compete boldly, and consult like a pro.
  </p>

  <p className="mt-4 text-purple-700 font-bold text-base sm:text-lg">
    Sign up. Show up. And maybe go down in ThriveFi history as the team that conquered the 3 Cs.
  </p>
</motion.div>


      {/* Right Content */}
      <motion.div
        className="relative bg-white rounded-2xl shadow-md p-6 sm:p-8 mt-10 md:mt-0 z-10 w-full max-w-sm sm:max-w-md"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        {/* Users Badge */}
        <div className="absolute -top-5 -left-5 sm:-top-6 sm:-left-6 bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-700 text-white rounded-full px-4 sm:px-6 py-2 sm:py-4 font-bold text-sm sm:text-lg shadow-lg">
          Users <br />
          {triggerCount && <Counter to={200} />}
        </div>

        {/* Chart */}
        <div className="w-full h-[180px] sm:h-[220px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart key={chartKey} data={data}>
              <Line
                type="monotone"
                dataKey="y"
                stroke="#000"
                strokeWidth={3}
                dot={{ r: 4, fill: "purple" }}
                isAnimationActive={animate}
                animationDuration={2000}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </section>
  );
}
