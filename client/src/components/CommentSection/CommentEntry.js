import React from "react";
import { TiDelete } from 'react-icons/ti';

const CommentEntry = ({ comment }) => {
  return (
    <div key={comment.id}>
      <div>
        <h5 className="comment-header font-medium">
          {comment.commentAuthor.username}
          <span className="font-light pl-2">commented</span>
        </h5>
        <p className="comment-body bg-base-200 rounded-full pl-3 ml-3">
          {comment.commentText} 
          <TiDelete className="float-right mr-1 text-accent hover:text-accent-focus" size={23}
            onClick={() => console.log("DELETE'D", comment.id)}/>
        </p>
      </div>
    </div>
  );
};

export default CommentEntry;
