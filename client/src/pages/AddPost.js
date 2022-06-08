import { ReactBingmaps } from "react-bingmaps-plus";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_POST } from "../utils/mutation";
// import Button from "../components/MainButton/Button"

function AddPost() {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [createPost, setPost] = useState({content:"", author:"Kylie", tags:[""], location:{latitude:0, longitude:0}});

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = () => {
    const formData = new FormData();

    formData.append("File", selectedFile);

    //TODO: change route according to what we will need
    fetch("/addpost/", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const [addPost, { error }] = useMutation(CREATE_POST);

  const handlePostSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await addPost({
        variables: { content: createPost.content, author: createPost.author, tags: createPost.tags, location: createPost.location },
      });
      console.log(data)
      setPost("");
    } catch (error) {
      console.error(error);
      console.log("is this working")
    }
  };

  return (
    <div>
      <div>
        <div className="card lg:card-side bg-base-100 shadow-xl m-32">
          <div className="card-body">
            <h1 className="card-title justify-center text-secondary-content">
              Add A Post!
            </h1>
            {/* {Auth.loggedIn() ? ( */}
            <div className="card bg-primary text-primary-content justify-center">
              <div className="card-body m-16">
                <h2 className="card-title justify-center">Add Photo</h2>

                <div className="justify-center">
                  <input
                    type="file"
                    name="file"
                    onChange={changeHandler}
                    className="justify-center"
                  />
                  {isFilePicked ? (
                    <div>
                      <img src={selectedFile} alt="selected"></img>
                      <p>Filetype: {selectedFile.type}</p>
                      <p>Size in bytes: {selectedFile.size}</p>
                      <p>
                        lastModifiedDate:{" "}
                        {selectedFile.lastModifiedDate.toLocaleDateString()}
                      </p>
                    </div>
                  ) : (
                    <p>Select a file to show details</p>
                  )}
                  <div>
                    <button onClick={handleSubmission}>Submit</button>
                  </div>
                </div>
                <textarea
                  className="textarea textarea-bordered"
                  placeholder="Description of where you went activities, restaurants..."
                ></textarea>
                <textarea
                  className="textarea textarea-bordered"
                  placeholder="Location or Title"
                ></textarea>

                <div className="card-actions justify-end">
                  <button
                    onClick={handlePostSubmit}
                    className="btn btn-primary rounded-full"
                  >
                    ADD POST
                  </button>
                </div>
              </div>
            </div>
            {/* ) : (
              <p>
                You need to be logged in to endorse skills. Please{' '}
                <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
              </p> */}
          </div>
        </div>
      </div>
      <div style={{ height: "600px", width: "800px" }}>
        <ReactBingmaps
          bingmapKey="AuobAMXGIQwgjimas4B-M6-ohLbmLaLNDIUojn2nI-VCDEh1VxaL__j48GUmEu-C"
          key={"A"}
        />
      </div>
    </div>
  );
}

export default AddPost;

//TODO: add backend portion to host images
