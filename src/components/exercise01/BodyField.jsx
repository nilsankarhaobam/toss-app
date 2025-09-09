import React from "react";
import { motion } from "framer-motion";

const BodyField = () => {
  return (
    <div className="p-10 space-y-40">
      {/* Heading */}
      <motion.h1
        className="text-3xl font-bold text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        Welcome to the World of Cricket
      </motion.h1>

      {/* Paragraph 1 */}
      <motion.p
        className="text-center text-red-700 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        The Indian Premier League (IPL) is one of the world’s most exciting and
        fast-paced cricket tournaments, where international stars and young
        talents come together to showcase thrilling performances.
      </motion.p>

      {/* Paragraph 2 */}
      <motion.p
        className="text-center text-red-700 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Among its popular teams is the Royal Challengers Bangalore (RCB), known
        for its passionate fan base, iconic players, and a legacy of never
        backing down, making every match unforgettable.
      </motion.p>

      {/* Paragraph 3 */}
      <motion.p
        className="text-center text-red-700 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        With electrifying sixes, nail-biting finishes, and world-class cricket
        action, IPL continues to grow as a celebration of the sport, uniting
        fans across the globe.
      </motion.p>

      {/* Example Card */}
      <motion.div
        className="card bg-base-200 shadow-xl p-6 max-w-md mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <p className="text-center">
          This card also animates when you scroll down 🎉
        </p>
      </motion.div>
    </div>
  );
};

export default BodyField;
