import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';

export function AmbientBackground() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const yOne = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? ['0%', '0%'] : ['0%', '18%'],
  );

  const yTwo = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? ['0%', '0%'] : ['0%', '-14%'],
  );

  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, 10],
  );

  return (
    <>
      <div
        className="
          pointer-events-none
          fixed
          inset-0
          z-0
          bg-[linear-gradient(145deg,#ffffff_0%,#f2f7fa_30%,#dceaf2_66%,#fffaf5_100%)]
        "
      />

      <motion.div
        style={{
          y: yOne,
          rotate,
          willChange: reduceMotion
            ? undefined
            : 'transform',
        }}
        className="
          pointer-events-none
          fixed
          -left-[28vw]
          -top-[20vw]
          z-[1]
          size-[70vw]
          rounded-full
          bg-[#b8d4df]/28
          blur-[55px]
          sm:-left-[20vw]
          sm:-top-[26vw]
          sm:size-[64vw]
          sm:blur-[90px]
          lg:blur-[110px]
        "
      />

      <motion.div
        style={{
          y: yTwo,
          willChange: reduceMotion
            ? undefined
            : 'transform',
        }}
        className="
          pointer-events-none
          fixed
          -bottom-[18vw]
          -right-[24vw]
          z-[1]
          size-[72vw]
          rounded-full
          bg-[#f5efe8]/70
          blur-[60px]
          sm:-bottom-[25vw]
          sm:-right-[15vw]
          sm:size-[62vw]
          sm:blur-[95px]
          lg:blur-[120px]
        "
      />

      <motion.div
        style={{
          y: yTwo,
          willChange: reduceMotion
            ? undefined
            : 'transform',
        }}
        className="
          pointer-events-none
          fixed
          left-[30vw]
          top-[30vh]
          z-[1]
          size-[40vw]
          rounded-full
          bg-white/45
          blur-[50px]
          sm:left-[36vw]
          sm:top-[28vh]
          sm:size-[28vw]
          sm:blur-[80px]
          lg:blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none
          fixed
          inset-0
          z-[2]
          opacity-[.08]
          [background-image:radial-gradient(rgba(47,65,86,.28)_0.55px,transparent_0.55px)]
          [background-size:7px_7px]
          sm:opacity-[.11]
        "
      />

      <div
        className="
          pointer-events-none
          fixed
          inset-0
          z-[3]
          bg-[linear-gradient(180deg,rgba(255,255,255,.18),transparent_18%,transparent_82%,rgba(255,255,255,.24))]
        "
      />
    </>
  );
}