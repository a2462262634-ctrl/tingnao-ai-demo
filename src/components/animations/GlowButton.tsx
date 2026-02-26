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
  glowColor = "rgba(16, 139, 254, 0.6)"
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
          boxShadow: `0 0 20px ${glowColor}, 0 0 40px ${glowColor}`,
        }}
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute inset-0 rounded-[inherit] pointer-events-none"
        style={{
          background: `linear-gradient(90deg, transparent, ${glowColor}, transparent)`,
        }}
        animate={{
          x: ['-100%', '200%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </motion.button>
  );
}
