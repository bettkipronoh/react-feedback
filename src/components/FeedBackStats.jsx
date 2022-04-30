import React, { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
const FeedBackStats = () => {
  const { feedBackList } = useContext(FeedbackContext);
  let avarage =
    feedBackList.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0) / feedBackList.length;
  return (
    <div className="feedback-stats">
      <h4>{feedBackList.length} Reviews</h4>
      <h4>
        Average rating{" "}
        {isNaN(avarage) ? 0 : avarage.toFixed(1).replace(/[,.]0$/, "")}
      </h4>
    </div>
  );
};

export default FeedBackStats;
