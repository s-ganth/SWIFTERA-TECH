// Fix: Import Variants type from framer-motion.
import { Variants } from 'framer-motion';

// Fix: Add explicit return type 'Variants' to the function.
export const fadeIn = (direction: 'up' | 'down' | 'left' | 'right' = 'up', delay: number = 0, duration: number = 0.5): Variants => ({
  hidden: {
    y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
    x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    opacity: 0,
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: duration,
      delay: delay,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
});

// Fix: Add explicit return type 'Variants' to the function for consistency and to prevent future errors.
export const staggerContainer = (staggerChildren: number, delayChildren: number): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});
