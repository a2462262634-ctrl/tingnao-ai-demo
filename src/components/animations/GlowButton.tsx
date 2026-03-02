import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

interface GlowButtonProps {
  className?: string;
  onClick?: () => void;
  glowColor?: string;
}

export function GlowButton({
  children,
  className = "",
  onClick,
  glowColor = "rgba(16, 139, 254, 1.0)"
}: PropsWithChildren<GlowButtonProps>) {
  return (
    <motion.button
      className={`relative overflow-visible ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <motion.div
        className="absolute inset-0 rounded-[inherit] pointer-events-none"
        style={{
          boxShadow: `0 0 30px ${glowColor}, 0 0 60px ${glowColor}, 0 0 90px ${glowColor}`,
        }}
        animate={{
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute inset-[-4px] rounded-[inherit] pointer-events-none"
        style={{
          boxShadow: `0 0 15px ${glowColor}, 0 0 30px ${glowColor} inset`,
        }}
        animate={{
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3
        }}
      />
      
      <motion.div
        className="absolute inset-[-2px] rounded-[inherit] pointer-events-none"
        style={{
          background: `linear-gradient(90deg, transparent, ${glowColor}, transparent)`,
          filter: 'blur(1px)',
        }}
        animate={{
          x: ['-100%', '200%'],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute inset-[-1px] rounded-[inherit] pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 70%)`,
          filter: 'blur(2px)',
        }}
        animate={{
          opacity: [0, 0.4, 0],
          scale: [0.8, 1.1, 0.8],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.button>
  );
}
