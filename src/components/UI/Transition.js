import React from 'react';
import { motion } from 'framer-motion';

const Transition = ({ children }) => {
	return (
		<motion.div
			initial={{ opacity: 0, x: 1000 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: -1000 }}
			transition={{ duration: 0.5 }}
		>
			{children}
		</motion.div>
	);
};

export default Transition;
