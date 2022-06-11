import React, { useState } from "react";
// import { Hero } from "react-daisyui";
import { UPDATE_POST } from "../../utils/mutation";
import { useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import "../../App.css";

const EditPost = ({ title, tags, content }) => {
  const params = useParams();
  const [postState, setPostState] = useState({});

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "tags") {
      value = value.split(" ");
    }
    setPostState({
      ...postState,
      [name]: value
    });
  };
  const [updatePost] = useMutation(UPDATE_POST);

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(params.postId);
      const updatedPost = await updatePost({
        variables: {
          postId: params.postId,
          title: postState.title,
          tags: postState.tags,
          content: postState.content
        }
      });
      console.log(updatedPost.data.updatePost.id);
      window.location.assign("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="pageContainer">
      <div>
        <div className="card lg:card-side bg-base-100 shadow-xl m-24">
          <div className="card-body">
            <h1 className="card-title justify-center text-secondary-content text-3xl p-4">
              Update A Post!
            </h1>
            <div className="card bg-primary text-primary-content justify-center">
              <div className="card-body m-16 justify-center">
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  className="input input-bordered"
                  value={title}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="tags"
                  placeholder="#Tags"
                  className="input input-bordered"
                  value={tags}
                  onChange={handleChange}
                />
                <textarea
                  name="content"
                  className="textarea textarea-bordered"
                  placeholder="Update Descripton"
                  value={content}
                  onChange={handleChange}
                ></textarea>
                <button
                  onClick={handleEditSubmit}
                  className="btn btn-primary rounded-full"
                >
                  Update POST
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPost;
