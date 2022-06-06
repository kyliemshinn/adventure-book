import React from "react";

const AddPost = () => {
  return (
    <div class="card lg:card-side bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
