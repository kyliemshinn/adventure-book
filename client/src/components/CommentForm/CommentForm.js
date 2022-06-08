import React, { useState } from "react";
import { Textarea, Button } from "react-daisyui";

import { useMutation } from "@apollo/client";
// import addComment mutation
import { ADD_COMMENT } from "../../utils/mutation";
// import Auth
import Auth from "../../utils/auth";

const CommentForm = ({ commentId }) => {
  const [commentText, setCommentText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addComment({
        variables: {
          commentId,
          commentText,
          commentAuthor: Auth.getProfile().data.username,
        },
      });
      setCommentText("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "commentText" && value.length <= 280) {
      setCommentText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div className="commentSection">
      <form className="" onSubmit={handleFormSubmit}>
        <Textarea
          name="commentText"
          placeholder="Add a Comment or Question"
          value={commentText}
          onChange={handleChange}
          className="w-full"
        >
          Comment Section
        </Textarea>
        <p class="text-sm text-blue-900 float-right">Max 280 characters</p>
        <div>
          <Button className="btn-sm hover:bg-secondary-focus hover:shadow-lg rounded-full border-none">
            Add Comment
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
