import React, { useState } from "react";
import { Textarea, Button } from "react-daisyui";

import { useMutation } from "@apollo/client";
// import addComment mutation
import { ADD_COMMENT } from "../../utils/mutation";
// import Auth
import Auth from "../../utils/auth";

const CommentForm = ({ postId, commentId }) => {
  console.log(postId);
  const [commentText, setCommentText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log(postId);
      const { data } = await addComment({
        variables: {
          postId,
          commentText,
        },
      });
      setCommentText("");
      alert(data.addComment.id);
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
        <p className="mb-2">Join the Discussion</p>
        <Textarea
          name="commentText"
          placeholder="Add a Comment or Question"
          value={commentText}
          onChange={handleChange}
          className="w-full resize-none border-2 border-base-200"
        ></Textarea>

        <p
          className={`text-sm text-black-900 float-right ${
            characterCount === 280 || error ? "text-danger" : ""
          }`}
        >
          Character Count: {characterCount}/280
          {error && <span className="ml-2">{error.message}</span>}
        </p>
        <div className="mt-2">
          <Button className="btn-sm text-base-content hover:bg-neutral-focus hover:shadow-lg rounded-full border-none">
            Add Comment
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
