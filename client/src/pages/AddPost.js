import { ReactBingmaps } from "react-bingmaps-plus";
import React, { useState, setState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_POST } from "../utils/mutation";
import Map from "../components/Map"

// import Button from "../components/MainButton/Button"

function AddPost() {

  //Bingmaps
  /*const [pushpins, setPushpins] = useState([
      {
        "location":[0,0], "option":{ color: "red"}
      }])*/
  //console.log(this.state);
  //setState({});

  //setting up upload image
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  ///upload image by cloudinary
  const uploadImage = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload-preset", "qufwrwdm");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dw5epcgjt/image/upload",
      {
        method: "post",
        body: data,
      }
      );
      const file = await res.json();
      setImage(file.secure_url);
      setLoading(false);
    };
    
    // when the button is clicked for new post to create - run this function
    const [createPost, setPost] = useState({
      content: "",
      tags: [""],
      location: { latitude: 0, longitude: 0 },
    });

    const [addPost, { error }] = useMutation(CREATE_POST);
    
    console.log(error)

    const handlePostSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await addPost({
        variables: {
          content: createPost.content,
          tags: createPost.tags,
          location: createPost.location,
        },
      });
      console.log(data);
      setPost({
        content: "",
        tags: [""],
        location: { latitude: 0, longitude: 0 },
      });
    } catch (error) {
      console.error(error);
      console.log("testing");
    }
  };

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(name, value);
    setPost({
      ...createPost,
      [name]: value,
    });
  }
/*
      <div style={{ height: "600px", width: "800px" }}>
        <ReactBingmaps
          bingmapKey="AuobAMXGIQwgjimas4B-M6-ohLbmLaLNDIUojn2nI-VCDEh1VxaL__j48GUmEu-C"
          key={"A"}
        />
      </div>*/
  return (
    <div>
      <h1>H1</h1>
      <div style={{ height: "600px", width: "800px" }}>
        <Map />
      </div>
      <div>
        <div className="card lg:card-side bg-base-100 shadow-xl m-24">
          <div className="card-body">
            <h1 className="card-title justify-center text-secondary-content text-3xl p-4">
              Add A Post!
            </h1>
            <div className="card bg-primary text-primary-content justify-center">
              <div className="card-body m-16 justify-center">
                <h2 className="card-title justify-center">Add Photo</h2>
                  <input
                    type="file"
                    name="file"
                    placeholder="add image"
                    onChange={uploadImage}
                    className="place-items-center"
                  />
                {loading ? (
                  <h3>Upload Image</h3>
                ) : (
                  <img src={image} style={{ width: "300px" }} alt="selected" />
                )}
                  <input type="text" placeholder="#Tags" className="input input-bordered" />
                  <input type="text" placeholder="Location" className="input input-bordered" />
                <textarea
                  name="content"
                  className="textarea textarea-bordered"
                  placeholder="Description of where you went activities, restaurants..."
                  onChange={handleChange}
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPost;

