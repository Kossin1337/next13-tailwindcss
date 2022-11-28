'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute z-10 w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <h2>Hollyweed</h2>
      {/* <h2 className={'"fontFamily: "Hollyweed"'}>Hollyweed</h2> */}
      <img src="/search.svg" alt="" />
    </div>
  </motion.nav>
);

export default Navbar;
