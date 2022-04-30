import React from "react";
import { createContext, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import FeedbackData from "../data/FeedbackData";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedBackList, setFeedBack] = useState(FeedbackData);
  const deleteItem = (id) => {
    if (window.confirm("Are you sure you want to delete feedback?")) {
      setFeedBack(feedBackList.filter((item) => item.id !== id));
    }
  };

  const handleAddFeedBack = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedBack([newFeedback, ...feedBackList]);
  };
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    isEdit: false,
  });

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      isEdit: true,
    });
  };
  const updateFeedback = (id, upItem) => {
    setFeedBack(
      feedBackList.map((item) =>
        item.id === id ? { ...item, ...upItem } : item
      )
    );
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedBackList,
        deleteItem,
        handleAddFeedBack,
        feedbackEdit,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
