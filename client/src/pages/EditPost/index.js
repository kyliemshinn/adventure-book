import React, { useEffect, useState } from "react";
import { QUERY_SINGLE_POST } from "../../utils/queries";
import { UPDATE_POST } from "../../utils/mutation";
import { useQuery, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import "../../styles/Dashboard.css";
import "../../App.css";

const EditPost = () => {
  const params = useParams();
  const [postState, setPostState] = useState({
    title: "",
    tags: [],
    content: ""
  });
  let [originalPostState, setOriginialPostState] = useState({});
  function expandTagsArray() {
    let value = postState.tags;
    value = value.join(" ");
    value.replace("#", ""); // remove hashtags
    return value;
  }

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

  const { loading, data } = useQuery(QUERY_SINGLE_POST, {
    variables: { postId: params.postId }
  });
  useEffect(() => {
    if (data) {
      setPostState(data.post);
      setOriginialPostState(data.post);
    }
  }, [data]);
  const [updatePost] = useMutation(UPDATE_POST);

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    console.log("Original post data:" + data.post);
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

  const goBack = (e) => {
    window.location.assign("/dashboard");
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="pageContainer">
      <div className="card bg-base-100 shadow-xl m-24 update">
        <div className="card-body updateCard">
          <h1 className="card-title justify-center text-secondary-content text-3xl p-4">
            Update A Post!
          </h1>
          <div className="card bg-primary text-primary-content justify-center updateContent">
            <div className="card-body m-16 justify-center updateInput">
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="input input-bordered"
                value={postState.title}
                onChange={handleChange}
              />
              <input
                type="text"
                name="tags"
                placeholder="#Tags"
                className="input input-bordered"
                value={expandTagsArray()}
                onChange={handleChange}
              />
              <textarea
                name="content"
                className="textarea textarea-bordered"
                placeholder="Update Descripton"
                value={postState.content}
                onChange={handleChange}
              ></textarea>
              <div className="flex justify-center updateBtns">
                <button
                  onClick={goBack}
                  className="btn btn-accent rounded-full m-1"
                >
                  ⬅ Go Back
                </button>
                <button
                  onClick={handleEditSubmit}
                  className="btn btn-accent fit-content rounded-full m-1"
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
