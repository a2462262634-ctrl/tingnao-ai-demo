import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export function TextReveal({
  text,
  className = "",
  delay = 0,
  duration = 0.05
}: TextRevealProps) {
  const characters = text.split('');
  
  return (
    <motion.div
      className={`inline-flex ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          style={{ display: "inline-block" }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{
            duration: 0.4,
            delay: delay + index * duration,
            ease: [0.25, 0.1, 0.25, 1]
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  );
}
