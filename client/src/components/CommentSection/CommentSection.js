import React, { useState } from "react";
import { TiDelete } from "react-icons/ti";

import { useMutation } from "@apollo/client";
import { REMOVE_COMMENT } from "../../utils/mutation";

const CommentSection = ({ comments = [] }) => {
  // const [commentList, setCommentList] = useState('');

  // const [removeComment] = useMutation(REMOVE_COMMENT);

  const handleRemove = (e) => {
    e.preventDefault();
    console.log("clicked");
    // const newList = commentList.filter((comment) => comment);

    //   setCommentList(newList);
    // }

    if (!comments.length) {
      return <h3 className="py-3">No Comments Yet</h3>;
    }

    return (
      <>
        <div>
          <h3 className="display-inline-block w-fit text-lg font-semibold pb-2">
            Comments
            <span className="text-base-300 text-md font-light pl-3">
              ({comments.length})
            </span>
          </h3>
        </div>
        <div className="ml-5">
          {comments &&
            comments.map((comment) => (
              <div key={comment._id}>
                <div>
                  <h5 className="comment-header font-medium">
                    {comment.commentAuthor.username}
                    <span class="font-light pl-2">commented</span>
                  </h5>
                  <p className="comment-body bg-base-200 rounded-full pl-3 ml-3">
                    {comment.commentText}
                    <TiDelete
                      className="float-right mr-1  text-accent hover:text-accent-focus"
                      size={23}
                      onClick={() => handleRemove(comment.id)}
                    />
                  </p>
                </div>
              </div>
            ))}
        </div>
      </>
    );
  };
};

export default CommentSection;
