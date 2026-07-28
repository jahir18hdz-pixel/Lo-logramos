import { motion, type HTMLMotionProps } from "framer-motion";

type SubtitleProps = HTMLMotionProps<"p">;

export function Subtitle({
  className = "",
  children,
  ...props
}: SubtitleProps) {
  return (
    <motion.p
      className={`subtitle ${className}`}
      {...props}
    >
      {children}
    </motion.p>
  );
}