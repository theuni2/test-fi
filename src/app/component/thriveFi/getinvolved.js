// import React from "react";

// export default function Getinvolve() {
//   return (
//     <div>
//       <section className="text-gray-600 body-font bg-white">
//         <div className="container px-5 py-24 mx-auto">
//           <div className="flex flex-col text-center w-full mb-20">
//             <h1 className="sm:text-3xl text-2xl title-font mb-4 text-gray-900 font-extrabold ">
//               Get Involved
//             </h1>
//             <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
//             Join us in empowering individuals with essential financial knowledge and skills. Whether you're a someone looking to enhance your financial literacy, a school or community eager to provide valuable education, or a sponsor or speaker ready to make an impact — there's a place for you in our mission. Together, we can create opportunities for learning, growth, and lasting financial empowerment.
//             </p>
//           </div>
//           <div className="flex flex-wrap -m-4 text-center">
//             <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
//               <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
//                 <svg
//                   fill="none"
//                   stroke="currentColor"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2"
//                   className="text-gray-900 w-12 h-12 mb-3 inline-block"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
//                   <circle cx="9" cy="7" r="4"></circle>
//                   <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
//                 </svg>
//                 <h2 className="title-font font-medium text-3xl text-gray-900">
//                   For Students
//                 </h2>
//                 <p className="leading-relaxed py-1.5">
//                 Participate in our events to learn and grow your financial knowledge.
//                 </p>
//               </div>
//             </div>
//             <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
//               <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
//                 <svg
//                   className="text-gray-900 w-12 h-12 mb-3 inline-block"
//                   width="100"
//                   height="100"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M12 2L2 7L12 12L22 7L12 2Z"
//                     stroke="black"
//                     stroke-width="2"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                   />
//                   <path
//                     d="M2 17V7"
//                     stroke="black"
//                     stroke-width="2"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                   />
//                   <path
//                     d="M22 17V7"
//                     stroke="black"
//                     stroke-width="2"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                   />
//                   <path
//                     d="M12 22V12"
//                     stroke="black"
//                     stroke-width="2"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                   />
//                 </svg>

//                 <h2 className="title-font font-medium text-3xl text-gray-900">
//                   For Schools & Communities
//                 </h2>
//                 <p className="leading-relaxed">
//                   {" "}
//                   Partner with us to bring financial education programs to your students.
//                 </p>
//               </div>
//             </div>
//             <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
//               <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
//                 <svg
//                   width="100"
//                   height="100"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   className="text-gray-900 w-12 h-12 mb-3 inline-block"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <circle
//                     cx="12"
//                     cy="8"
//                     r="4"
//                     stroke="black"
//                     stroke-width="2"
//                   />
//                   <path
//                     d="M12 22V16"
//                     stroke="black"
//                     stroke-width="2"
//                     stroke-linecap="round"
//                   />
//                   <path
//                     d="M8 22V18"
//                     stroke="black"
//                     stroke-width="2"
//                     stroke-linecap="round"
//                   />
//                   <path
//                     d="M16 22V18"
//                     stroke="black"
//                     stroke-width="2"
//                     stroke-linecap="round"
//                   />
//                 </svg>
//                 <h2 className="title-font font-medium text-3xl text-gray-900">
//                 For Sponsors & Speakers
//                 </h2>
//                 <p className="leading-relaxed">
//                 Support and contribute to our mission of promoting financial literacy.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { GraduationCap, Building2, Megaphone } from "lucide-react";

// export default function Getinvolve() {
//   const items = [
//     {
//       title: "For Students",
//       desc: "Participate in our events to learn and grow your financial knowledge.",
//       Icon: GraduationCap,
//     },
//     {
//       title: "For Schools & Communities",
//       desc: "Partner with us to bring financial education programs to your students.",
//       Icon: Building2,
//     },
//     {
//       title: "For Sponsors & Speakers",
//       desc: "Support and contribute to our mission of promoting financial literacy.",
//       Icon: Megaphone,
//     },
//   ];

//   const container = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.12, delayChildren: 0.2 },
//     },
//   };

//   const item = {
//     hidden: { opacity: 0, y: 22 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
//   };

//   return (
//     <section id="get-involved" className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20">
//       {/* Decorative blobs */}
//       <div className="pointer-events-none absolute -top-40 -right-24 h-80 w-80 rounded-full bg-indigo-300/30 blur-3xl" />
//       <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-fuchsia-300/30 blur-3xl" />

//       <div className="container mx-auto px-5">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.7 }}
//           className="text-center max-w-3xl mx-auto mb-14"
//         >
//           <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/70 px-4 py-1 text-sm font-medium text-indigo-700">
//             <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
//             Get Involved
//           </div>
//           <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold leading-tight bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-700 bg-clip-text text-transparent">
//             Be part of the movement
//           </h1>
//           <p className="mt-4 text-gray-700">
//             Join us in empowering individuals with essential financial knowledge and skills. Whether you're looking to
//             enhance your financial literacy, a school/community eager to provide valuable education, or a sponsor/speaker
//             ready to make an impact — there's a place for you in our mission.
//           </p>
//         </motion.div>

//         {/* Cards */}
//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.25 }}
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
//         >
//           {items.map(({ title, desc, Icon }, idx) => (
//             <motion.div key={idx} variants={item}>
//               {/* Gradient Border Wrapper */}
//               <div className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-indigo-400 via-purple-400 to-fuchsia-400 transition-transform duration-300 will-change-transform">
//                 {/* Card Body */}
//                 <div className="rounded-2xl h-full w-full bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:bg-white">
//                   {/* Shine */}
//                   <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(120px 60px at 20% 0%, rgba(255,255,255,0.8), transparent 60%), radial-gradient(160px 80px at 80% 0%, rgba(255,255,255,0.6), transparent 60%)" }} />

//                   <div className="relative flex flex-col items-center text-center px-6 py-8">
//                     <div className="mb-4 inline-flex items-center justify-center rounded-2xl p-3 bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-md group-hover:translate-y-[-2px] transition-transform">
//                       <Icon className="h-7 w-7" />
//                     </div>

//                     <h3 className="title-font text-xl font-bold text-gray-900">
//                       {title}
//                     </h3>
//                     <p className="mt-2 text-gray-600 leading-relaxed">
//                       {desc}
//                     </p>

//                     {/* Optional CTA (link to contact or details) */}
//                     {/* <a href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-indigo-700 hover:text-indigo-900">
//                       Learn more
//                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
//                     </a> */}
//                   </div>
//                 </div>

//                 {/* Hover glow */}
//                 <div className="pointer-events-none absolute -inset-1 rounded-3xl opacity-0 blur-2xl transition duration-300 group-hover:opacity-70" style={{ background: "conic-gradient(from 180deg at 50% 50%, rgba(99,102,241,0.35), rgba(168,85,247,0.35), rgba(236,72,153,0.35), rgba(99,102,241,0.35))" }} />
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { GraduationCap, Building2, Megaphone } from "lucide-react";

// export default function Getinvolve() {
//   const items = [
//     {
//       title: "For Students",
//       desc: "Participate in our events to learn and grow your financial knowledge.",
//       Icon: GraduationCap,
//     },
//     {
//       title: "For Schools & Communities",
//       desc: "Partner with us to bring financial education programs to your students.",
//       Icon: Building2,
//     },
//     {
//       title: "For Sponsors & Speakers",
//       desc: "Support and contribute to our mission of promoting financial literacy.",
//       Icon: Megaphone,
//     },
//   ];

//   const container = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.12, delayChildren: 0.2 },
//     },
//   };

//   const item = {
//     hidden: { opacity: 0, y: 22 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
//     },
//   };

//   return (
//     <section
//       id="get-involved"
//       className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20"
//     >
//       {/* Decorative blobs */}
//       {/* <div className="pointer-events-none absolute -top-40 -right-24 h-80 w-80 rounded-full bg-indigo-300/30 blur-3xl" />
//       <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-fuchsia-300/30 blur-3xl" />

//       {/* 💡 Decorative bulb image */}
//       {/* <motion.img
//         src="/blob.png" // 🔹 put bulb.png inside your public/ folder
//         alt="Bulb"
//         initial={{ opacity: 0, scale: 0.9 }}
//         whileInView={{ opacity: 0.15, scale: 1 }}
//         transition={{ duration: 1.2 }}
//         className="absolute top-1/2 left-1/2 w-[500px] -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
//       />

// {/* 💡 Decorative blob image (replaced) */}
// {/* <motion.img
//   src="/blob.png"   // 🔹 Use the new uploaded blob file
//   alt="Blob"
//   initial={{ opacity: 0, scale: 0.9 }}
//   whileInView={{ opacity: 0.2, scale: 1 }}
//   transition={{ duration: 1.2 }}
//   className="absolute top-1/2 left-1/2 w-[480px] -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
// />
//  */} 

//  {/* 💡 Random decorative blobs */}
// <motion.img
//   src="/blob.png"
//   alt="Blob Top Left"
//   initial={{ opacity: 0, scale: 0.9 }}
//   whileInView={{ opacity: 0.7, scale: 1 }}
//   transition={{ duration: 1.2 }}
//   className="absolute -top-20 -left-20 w-64 pointer-events-none select-none"
// />

// <motion.img
//   src="/blob.png"
//   alt="Blob Bottom Right"
//   initial={{ opacity: 0, scale: 0.9 }}
//   whileInView={{ opacity: 0.7, scale: 1 }}
//   transition={{ duration: 1.2 }}
//   className="absolute bottom-10 right-10 w-72 pointer-events-none select-none"
// />

// <motion.img
//   src="/blob.png"
//   alt="Blob Middle Right"
//   initial={{ opacity: 0, scale: 0.9 }}
//   whileInView={{ opacity: 0.3, scale: 1 }}
//   transition={{ duration: 1.2 }}
//   className="absolute top-1/3 right-1/4 w-56 pointer-events-none select-none"
// />


//       <div className="container mx-auto px-5 relative z-10">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.4 }}
//           transition={{ duration: 0.7 }}
//           className="text-center max-w-3xl mx-auto mb-14"
//         >
//           <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/70 px-4 py-1 text-sm font-medium text-indigo-700">
//             <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
//             Get Involved
//           </div>
//           <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold leading-tight bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-700 bg-clip-text text-transparent">
//             Be part of the movement
//           </h1>
//           <p className="mt-4 text-gray-700">
//             Join us in empowering individuals with essential financial knowledge
//             and skills. Whether you're looking to enhance your financial
//             literacy, a school/community eager to provide valuable education, or
//             a sponsor/speaker ready to make an impact — there's a place for you
//             in our mission.
//           </p>
//         </motion.div>

//         {/* Cards */}
//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.25 }}
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
//         >
//           {items.map(({ title, desc, Icon }, idx) => (
//             <motion.div key={idx} variants={item}>
//               {/* Gradient Border Wrapper */}
//               <div className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-indigo-400 via-purple-400 to-fuchsia-400 transition-transform duration-300 will-change-transform">
//                 {/* Card Body */}
//                 <div className="rounded-2xl h-full w-full bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:bg-white">
//                   {/* Shine */}
//                   <div
//                     className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                     style={{
//                       background:
//                         "radial-gradient(120px 60px at 20% 0%, rgba(255,255,255,0.8), transparent 60%), radial-gradient(160px 80px at 80% 0%, rgba(255,255,255,0.6), transparent 60%)",
//                     }}
//                   />

//                   <div className="relative flex flex-col items-center text-center px-6 py-8">
//                     <div className="mb-4 inline-flex items-center justify-center rounded-2xl p-3 bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-md group-hover:translate-y-[-2px] transition-transform">
//                       <Icon className="h-7 w-7" />
//                     </div>

//                     <h3 className="title-font text-xl font-bold text-gray-900">
//                       {title}
//                     </h3>
//                     <p className="mt-2 text-gray-600 leading-relaxed">{desc}</p>
//                   </div>
//                 </div>

//                 {/* Hover glow */}
//                 <div
//                   className="pointer-events-none absolute -inset-1 rounded-3xl opacity-0 blur-2xl transition duration-300 group-hover:opacity-70"
//                   style={{
//                     background:
//                       "conic-gradient(from 180deg at 50% 50%, rgba(99,102,241,0.35), rgba(168,85,247,0.35), rgba(236,72,153,0.35), rgba(99,102,241,0.35))",
//                   }}
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }


"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Building2, Megaphone } from "lucide-react";

export default function Getinvolve() {
  const items = [
    {
      title: "For Students",
      desc: "Participate in our events to strengthen your financial knowledge and skills.",
      Icon: GraduationCap,
    },
    {
      title: "For Schools & Communities",
      desc: "Partner with us to bring impactful financial education to students.",
      Icon: Building2,
    },
    {
      title: "For Sponsors & Speakers",
      desc: "Support our mission and inspire the next generation of financial leaders.",
      Icon: Megaphone,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="get-involved"
      className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20"
    >
      {/* Decorative Blobs */}
      <motion.img
        src="/blob.png"
        alt="Blob Top Left"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute -top-24 -left-24 w-72 pointer-events-none select-none"
      />

      <motion.img
        src="/blob.png"
        alt="Blob Bottom Right"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute bottom-16 right-12 w-80 pointer-events-none select-none"
      />

      <motion.img
        src="/blob.png"
        alt="Blob Middle Right"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute top-1/3 right-1/4 w-60 pointer-events-none select-none"
      />

      <div className="container mx-auto px-5 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/70 px-4 py-1 text-sm font-medium text-indigo-700">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            Get Involved
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl font-[oswald] font-extrabold leading-tight text-gray-900">
            Be part of the movement
          </h1>
          <p className="mt-5 text-gray-700 text-lg leading-relaxed">
            Join us in empowering individuals with essential financial
            knowledge and skills. Whether you're a student, school, community,
            or sponsor — there's a place for you in our mission.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {items.map(({ title, desc, Icon }, idx) => (
            <motion.div key={idx} variants={item}>
              {/* Gradient Border Wrapper */}
              <div className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-indigo-400 via-purple-400 to-fuchsia-400 transition-transform duration-300 will-change-transform">
                {/* Card Body */}
                <div className="rounded-3xl h-full w-full bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:bg-white">
                  {/* Shine Effect */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "radial-gradient(120px 60px at 20% 0%, rgba(255,255,255,0.8), transparent 60%), radial-gradient(160px 80px at 80% 0%, rgba(255,255,255,0.6), transparent 60%)",
                    }}
                  />

                  <div className="relative flex flex-col items-center text-center px-6 py-10">
                    <div className="mb-5 inline-flex items-center justify-center rounded-2xl p-4 bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-md group-hover:translate-y-[-2px] transition-transform">
                      <Icon className="h-8 w-8" />
                    </div>

                    <h3 className="text-xl font-[oswald] font-bold text-gray-900">
                      {title}
                    </h3>
                    <p className="mt-3 text-gray-600 leading-relaxed">{desc}</p>
                  </div>
                </div>

                {/* Hover Glow */}
                <div
                  className="pointer-events-none absolute -inset-1 rounded-3xl opacity-0 blur-2xl transition duration-300 group-hover:opacity-70"
                  style={{
                    background:
                      "conic-gradient(from 180deg at 50% 50%, rgba(99,102,241,0.35), rgba(168,85,247,0.35), rgba(236,72,153,0.35), rgba(99,102,241,0.35))",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
