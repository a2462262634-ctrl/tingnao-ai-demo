import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

interface HoverCardProps {
  className?: string;
  hoverScale?: number;
  hoverY?: number;
}

export function HoverCard({ 
  children, 
  className = "",
  hoverScale = 1,
  hoverY = -8
}: PropsWithChildren<HoverCardProps>) {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        y: hoverY,
        scale: hoverScale,
        boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
