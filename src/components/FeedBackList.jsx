import { motion, AnimatePresence } from "framer-motion";
import FeedBackItem from "./FeedBackItem";
import React, { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
const FeedBackList = () => {
  const { feedBackList } = useContext(FeedbackContext);
  return (
    <div className="feedback-list"> 
      <AnimatePresence>
        {!feedBackList || feedBackList.length === 0 ? (
          <h1>No feedback yet!</h1>
        ) : (
          feedBackList.map((feedBack) => (
            <motion.div
              key={feedBack.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedBackItem
                feedBack={feedBack}
                key={feedBack.id}
              />
            </motion.div>
          ))
        )}
      </AnimatePresence>
    </div>
  );
};

export default FeedBackList;
