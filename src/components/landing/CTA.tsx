// import { ArrowRight } from "lucide-react";

// export function CTA() {
//   return (
//     <section id="cta" className="relative overflow-hidden py-24 sm:py-28">
//       <div className="absolute inset-0 cta-grid-bg -z-10 pointer-events-none" />
//       <div className="absolute inset-x-0 top-0 h-36 cta-wave-top -z-10 pointer-events-none" />
//       <div className="absolute inset-x-0 bottom-0 h-36 cta-wave-bottom -z-10 pointer-events-none" />
//       <div className="relative w-full px-4 z-10">
//         <div
//           className="relative overflow-hidden w-full rounded-none p-10 text-center text-white md:p-20"
//           style={{
//             background:
//               "linear-gradient(135deg, #07122f 0%, #10254e 35%, #2d1b63 65%, #3f1c72 100%)",
//           }}
//         >
//           <div
//             className="absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-3xl"
//             style={{
//               background:
//                 "radial-gradient(circle, rgba(99, 102, 241, 0.4), transparent 70%)",
//             }}
//           />
//           <div className="absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-300/60 to-transparent" />
//           <div className="relative mx-auto max-w-3xl">
//             <div className="mb-6 flex flex-wrap justify-center gap-2">
//               {["LinkedIn", "Email", "Calls", "CRM"].map((item) => (
//                 <span key={item} className="info-chip">
//                   <span className="h-1.5 w-1.5 rounded-full data-dot" />
//                   {item}
//                 </span>
//               ))}
//             </div>
//             <h2 className="text-2xl font-bold md:text-4xl lg:text-5xl">
//               Ready to transform <br /> <span className="text-white">your  outreach?</span>
//             </h2>
//             <p className="mx-auto mt-6 max-w-lg text-xl text-white md:text-base">
//               Stop juggling multiple tools. Start engaging leads smarter. Grow your business across
//               LinkedIn, email, and phone - all from one AI-powered platform.
//             </p>
//             <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
//               <a href="#" className="btn-primary">
//                 Start free trial <ArrowRight className="h-4 w-4" />
//               </a>
//               <a href="#" className="btn-ghost">
//                 Book a demo
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }