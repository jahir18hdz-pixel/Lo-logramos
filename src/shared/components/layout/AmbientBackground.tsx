import { motion, useScroll, useTransform } from 'framer-motion';

export function AmbientBackground() {
  const { scrollYProgress } = useScroll();
  const yOne = useTransform(scrollYProgress, [0, 1], ['0%', '32%']);
  const yTwo = useTransform(scrollYProgress, [0, 1], ['0%', '-24%']);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 22]);

  return <>
    <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(145deg,#ffffff_0%,#f2f7fa_30%,#dceaf2_66%,#fffaf5_100%)]" />
    <motion.div style={{ y: yOne, rotate }} className="pointer-events-none fixed -left-[20vw] -top-[26vw] z-[1] size-[64vw] rounded-full bg-[#b8d4df]/32 blur-[110px]" />
    <motion.div style={{ y: yTwo }} className="pointer-events-none fixed -bottom-[25vw] -right-[15vw] z-[1] size-[62vw] rounded-full bg-[#f5efe8]/80 blur-[125px]" />
    <motion.div style={{ y: yTwo }} className="pointer-events-none fixed left-[36vw] top-[28vh] z-[1] size-[28vw] rounded-full bg-white/55 blur-[100px]" />
    <div className="pointer-events-none fixed inset-0 z-[2] opacity-[.11] [background-image:radial-gradient(rgba(47,65,86,.28)_0.55px,transparent_0.55px)] [background-size:7px_7px]" />
    <div className="pointer-events-none fixed inset-0 z-[3] bg-[linear-gradient(180deg,rgba(255,255,255,.18),transparent_18%,transparent_82%,rgba(255,255,255,.24))]" />
  </>;
}
