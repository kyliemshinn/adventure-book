import React from 'react';
import { Textarea } from 'react-daisyui';

const CommentSection = ({ comments = [] }) => {
    if(!comments.length) {
        return <h3 className="py-3">No Comments Yet</h3>;
    }

    return (
        <>
      <h3 className="display-inline-block w-full">
        Comments
      </h3>
      <Textarea readonly className="flex my-4  resize-none border-2 border-base-200">
        {comments &&
          comments.map((comment) => (
            <div key={comment._id} className="col-12 mb-3 pb-3">
              <div className="p-3 bg-dark text-light">
                <h5 className="card-header">
                  {comment.commentAuthor} commented{' '}
                  {/* <span style={{ fontSize: '0.825rem' }}>
                    on {comment.createdAt}
                  </span> */}
                </h5>
                <p className="card-body">{comment.commentText}</p>
              </div>
            </div>
          ))}
      </Textarea>
    </>
    )
};

export default CommentSection;