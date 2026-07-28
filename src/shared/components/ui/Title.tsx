import { motion, type HTMLMotionProps } from "framer-motion";

type TitleProps = HTMLMotionProps<"h2">;

export function Title({
  className = "",
  children,
  ...props
}: TitleProps) {
  return (
    <motion.h2
      className={`title ${className}`}
      {...props}
    >
      {children}
    </motion.h2>
  );
}