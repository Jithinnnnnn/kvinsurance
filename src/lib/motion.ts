export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const smoothTransition = {
  duration: 0.5,
  ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
};

export const viewport = {
  once: true,
  amount: 0.2,
};
