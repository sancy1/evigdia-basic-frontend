
// import { cn } from "@/lib/utils"

// interface UniqueLogoProps {
//   darkMode?: boolean
//   size?: "sm" | "md" | "lg"
// }

// export function UniqueLogo({ darkMode = false, size = "md" }: UniqueLogoProps) {
//   const sizeClasses = {
//     sm: "w-6 h-6",
//     md: "w-8 h-8",
//     lg: "w-12 h-12",
//   }

//   return (
//     <div className={cn("relative", sizeClasses[size])}>
//       {/* Outer rotating ring */}
//       <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 animate-spin-slow opacity-60">
//         <div className="absolute top-0 left-1/2 w-1 h-1 bg-blue-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
//         <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-purple-400 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
//       </div>

//       {/* Inner hexagonal core */}
//       <div className="absolute inset-1 flex items-center justify-center">
//         <svg viewBox="0 0 24 24" className="w-full h-full">
//           {/* Hexagonal background */}
//           <polygon points="12,2 20,7 20,17 12,22 4,17 4,7" fill="url(#hexGradient)" className="drop-shadow-sm" />

//           {/* Inner neural network pattern */}
//           <g stroke="white" strokeWidth="0.8" fill="none" opacity="0.9">
//             <circle cx="8" cy="8" r="1.5" fill="white" />
//             <circle cx="16" cy="8" r="1.5" fill="white" />
//             <circle cx="12" cy="16" r="1.5" fill="white" />
//             <circle cx="12" cy="12" r="1" fill="white" />

//             <line x1="8" y1="8" x2="12" y2="12" />
//             <line x1="16" y1="8" x2="12" y2="12" />
//             <line x1="12" y1="12" x2="12" y2="16" />
//           </g>

//           {/* Gradient definitions */}
//           <defs>
//             <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" stopColor="#3B82F6" />
//               <stop offset="50%" stopColor="#8B5CF6" />
//               <stop offset="100%" stopColor="#EC4899" />
//             </linearGradient>
//           </defs>
//         </svg>
//       </div>

//       {/* Floating particles */}
//       <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
//       <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse opacity-60 animation-delay-500"></div>
//     </div>
//   )
// }


























// import { cn } from "@/lib/utils"

// interface UniqueLogoProps {
//   darkMode?: boolean
//   size?: "sm" | "md" | "lg"
//   colorTheme?: "cyber" | "energy" | "aurora" | "galaxy" | "ocean" | "neon"
// }

// export function UniqueLogo({ darkMode = false, size = "md", colorTheme = "cyber" }: UniqueLogoProps) {
//   const sizeClasses = {
//     sm: "w-6 h-6",
//     md: "w-8 h-8",
//     lg: "w-12 h-12",
//   }

//   // Color theme configurations
//   const colorThemes = {
//     cyber: {
//       ringGradient: "from-cyan-400 to-emerald-500",
//       particles: { top: "bg-cyan-400", bottom: "bg-emerald-400" },
//       hexGradient: {
//         start: "#06B6D4", // cyan-500
//         middle: "#14B8A6", // teal-500
//         end: "#10B981", // emerald-500
//       },
//     },
//     energy: {
//       ringGradient: "from-amber-400 to-red-500",
//       particles: { top: "bg-amber-400", bottom: "bg-red-400" },
//       hexGradient: {
//         start: "#F59E0B", // amber-500
//         middle: "#F97316", // orange-500
//         end: "#EF4444", // red-500
//       },
//     },
//     aurora: {
//       ringGradient: "from-emerald-400 to-violet-500",
//       particles: { top: "bg-emerald-400", bottom: "bg-violet-400" },
//       hexGradient: {
//         start: "#10B981", // emerald-500
//         middle: "#06B6D4", // cyan-500
//         end: "#8B5CF6", // violet-500
//       },
//     },
//     galaxy: {
//       ringGradient: "from-indigo-500 to-cyan-400",
//       particles: { top: "bg-indigo-400", bottom: "bg-cyan-400" },
//       hexGradient: {
//         start: "#4F46E5", // indigo-600
//         middle: "#7C3AED", // violet-600
//         end: "#06B6D4", // cyan-500
//       },
//     },
//     ocean: {
//       ringGradient: "from-teal-400 to-blue-600",
//       particles: { top: "bg-teal-400", bottom: "bg-blue-400" },
//       hexGradient: {
//         start: "#14B8A6", // teal-500
//         middle: "#3B82F6", // blue-500
//         end: "#1E40AF", // blue-700
//       },
//     },
//     neon: {
//       ringGradient: "from-lime-400 to-fuchsia-500",
//       particles: { top: "bg-lime-400", bottom: "bg-fuchsia-400" },
//       hexGradient: {
//         start: "#84CC16", // lime-500
//         middle: "#06B6D4", // cyan-500
//         end: "#D946EF", // fuchsia-500
//       },
//     },
//   }

//   const currentTheme = colorThemes[colorTheme]

//   return (
//     <div className={cn("relative", sizeClasses[size])}>
//       {/* Outer rotating ring */}
//       <div
//         className={cn(
//           "absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r animate-spin-slow opacity-60",
//           currentTheme.ringGradient,
//         )}
//       >
//         <div
//           className={cn(
//             "absolute top-0 left-1/2 w-1 h-1 rounded-full transform -translate-x-1/2 -translate-y-1/2",
//             currentTheme.particles.top,
//           )}
//         ></div>
//         <div
//           className={cn(
//             "absolute bottom-0 left-1/2 w-1 h-1 rounded-full transform -translate-x-1/2 translate-y-1/2",
//             currentTheme.particles.bottom,
//           )}
//         ></div>
//       </div>

//       {/* Inner hexagonal core */}
//       <div className="absolute inset-1 flex items-center justify-center">
//         <svg viewBox="0 0 24 24" className="w-full h-full">
//           {/* Hexagonal background */}
//           <polygon
//             points="12,2 20,7 20,17 12,22 4,17 4,7"
//             fill={`url(#hexGradient-${colorTheme})`}
//             className="drop-shadow-sm"
//           />

//           {/* Inner neural network pattern */}
//           <g stroke="white" strokeWidth="0.8" fill="none" opacity="0.9">
//             <circle cx="8" cy="8" r="1.5" fill="white" />
//             <circle cx="16" cy="8" r="1.5" fill="white" />
//             <circle cx="12" cy="16" r="1.5" fill="white" />
//             <circle cx="12" cy="12" r="1" fill="white" />

//             <line x1="8" y1="8" x2="12" y2="12" />
//             <line x1="16" y1="8" x2="12" y2="12" />
//             <line x1="12" y1="12" x2="12" y2="16" />
//           </g>

//           {/* Gradient definitions */}
//           <defs>
//             <linearGradient id={`hexGradient-${colorTheme}`} x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" stopColor={currentTheme.hexGradient.start} />
//               <stop offset="50%" stopColor={currentTheme.hexGradient.middle} />
//               <stop offset="100%" stopColor={currentTheme.hexGradient.end} />
//             </linearGradient>
//           </defs>
//         </svg>
//       </div>

//       {/* Floating particles */}
//       <div
//         className={cn(
//           "absolute -top-1 -right-1 w-2 h-2 rounded-full animate-pulse opacity-60",
//           currentTheme.particles.top,
//         )}
//       ></div>
//       <div
//         className={cn(
//           "absolute -bottom-1 -left-1 w-1.5 h-1.5 rounded-full animate-pulse opacity-60 animation-delay-500",
//           currentTheme.particles.bottom,
//         )}
//       ></div>
//     </div>
//   )
// }

























import { cn } from "@/lib/utils"

interface UniqueLogoProps {
  darkMode?: boolean
  size?: "sm" | "md" | "lg"
}

export function UniqueLogo({ darkMode = false, size = "md" }: UniqueLogoProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  }

  return (
    <div className={cn("relative", sizeClasses[size])}>
      {/* Outer rotating ring */}
      <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-purple-600 to-violet-500 animate-spin-slow opacity-60">
        <div className="absolute top-0 left-1/2 w-1 h-1 bg-purple-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-violet-400 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Inner hexagonal core */}
      <div className="absolute inset-1 flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-full h-full">
          {/* Hexagonal background */}
          <polygon points="12,2 20,7 20,17 12,22 4,17 4,7" fill="url(#purpleHexGradient)" className="drop-shadow-sm" />

          {/* Inner neural network pattern */}
          <g stroke="white" strokeWidth="0.8" fill="none" opacity="0.9">
            <circle cx="8" cy="8" r="1.5" fill="white" />
            <circle cx="16" cy="8" r="1.5" fill="white" />
            <circle cx="12" cy="16" r="1.5" fill="white" />
            <circle cx="12" cy="12" r="1" fill="white" />

            <line x1="8" y1="8" x2="12" y2="12" />
            <line x1="16" y1="8" x2="12" y2="12" />
            <line x1="12" y1="12" x2="12" y2="16" />
          </g>

          {/* Gradient definitions */}
          <defs>
            <linearGradient id="purpleHexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7C3AED" /> {/* violet-600 */}
              <stop offset="50%" stopColor="#8B5CF6" /> {/* violet-500 */}
              <stop offset="100%" stopColor="#A855F7" /> {/* purple-500 */}
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse opacity-60 animation-delay-500"></div>
    </div>
  )
}
