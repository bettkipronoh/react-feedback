import Card from "./shared/Card";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import { FaTimes,FaEdit } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";
const FeedBackItem = ({ feedBack }) => {
  const { deleteItem,editFeedback } = useContext(FeedbackContext);
  return (
    <Card reverse={false}>
      <div className="num-display">{feedBack.rating}</div>
      <button
        onClick={() => deleteItem(feedBack.id)}
        className="close"
        color="purple"
      >
        <FaTimes />
      </button>
      <button onClick={()=>editFeedback(feedBack)} className="edit">
        <FaEdit color="purple"/>
      </button>
      <div className="text-display">{feedBack.text}</div>
    </Card>
  );
};
FeedBackItem.propTypes = {
  feedBack: PropTypes.object.isRequired,
};
export default FeedBackItem;
