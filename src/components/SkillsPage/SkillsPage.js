import React from 'react';
import { motion } from 'framer-motion';

export default () => {
  return (
    <motion.div initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ ease: "easeIn", duration: .3 }}>
      <section className="SkillsPage">
        <h2 className="skills-header">
          my skills header
        </h2>
        <div className="skills-display">
          my skills
        </div>
        <footer className="disclaimer">
          Site under developement. Come back soon!
        </footer>
      </section>
    </motion.div>
  );
};