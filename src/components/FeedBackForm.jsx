import React, { useContext, useEffect } from "react";
import { useState } from "react";
import FeedbackContext from "../context/FeedbackContext";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card";
const FeedBackForm = () => {
  const { handleAddFeedBack, feedbackEdit, updateFeedback } = useContext(
    FeedbackContext
  );

  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);
  const handleTextChanged = (e) => {
    if (e.target.value === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (e.target.value !== "" && e.target.value.length < 10) {
      setBtnDisabled(true);
      setMessage("Text must be at least 10 characters");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }

    setText(e.target.value);
  };
  const handleSubmission = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedBack = {
        text,
        rating,
      };
      if (feedbackEdit.isEdit) {
        updateFeedback(feedbackEdit.item.id, newFeedBack);
      } else {
        handleAddFeedBack(newFeedBack);
      }
      setText("");
    }
  };
  useEffect(() => {
    if (feedbackEdit.isEdit) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);
  return (
    <Card>
      <form onSubmit={handleSubmission}>
        <h2>How would you rate our services to you?</h2>
        <RatingSelect select={setRating} />
        <div className="input-group">
          <input
            onChange={handleTextChanged}
            value={text}
            type="text"
            placeholder="Write your comment"
          />
          <Button isDisable={btnDisabled} type="submit">
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedBackForm;
