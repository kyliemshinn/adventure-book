import { ReactBingmaps } from "react-bingmaps-plus";
import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_POST } from "../utils/mutation";
import Map from "../components/Map"
import { Link } from "react-router-dom";

// import Button from "../components/MainButton/Button"

function AddPost() {

  function getRandomLocation() {
    return [getRandomLatitide(), getRandomLongitude()];

    function getRandomLatitide() {
      return (Math.random() * 180) - 90;
    }
    
    function getRandomLongitude() {
      return (Math.random() * 360) - 180;
    }
  }

  const [pushPins, setPushPins] = useState([]);

  const [location, setLocation] = useState([0.01, 0.01]);

  function readLocation(arg)
  {
    setPushPins([{
      "location":[arg.latitude, arg.longitude],
      "option":{ color: 'red', title: 'I have no idea where this is!' }
    }])
    setLocation([arg.latitude, arg.longitude]);
  }

  //setting up upload image
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  ///upload image by cloudinary
  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "kyliedefault");
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
    title: "",
    content: "",
    tags: [""],
    location: { latitude: 0, longitude: 0 },
  });

  const [addPost, { error }] = useMutation(CREATE_POST);

  const handlePostSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await addPost({
        variables: {
          title: createPost.title,
          content: createPost.content,
          tags: createPost.tags,
          location: createPost.location,
        },
      });
      console.log(data);
      setPost({
        title: "",
        content: "",
        tags: [""],
        location: { latitude: 0, longitude: 0 },
      });
    } catch {
      console.error("Error!", error);
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
    <div className="pageContainer">
      <Map height="600px" width="800px" locations={pushPins} onClick={readLocation}/>
      <h1 className="text-neutral-content">{location[0] + ", " + location[1]}</h1>
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
                  <h3>Uploading Image...</h3>
                ) : (
                  <img src={image} style={{ width: "300px" }} alt="selected" />
                )}
                <input
                  type="text"
                  name="title"
                  placeholder="#Tags"
                  className="input input-bordered"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="tags"
                  placeholder="#Tags"
                  className="input input-bordered"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  className="input input-bordered"
                  onChange={handleChange}
                />
                <textarea
                  name="content"
                  className="textarea textarea-bordered"
                  placeholder="Description of where you went activities, restaurants..."
                  onChange={handleChange}
                ></textarea>
                <div className="card-actions justify-end">
                  <Link to="/dashboard">
                    <button
                      onClick={handlePostSubmit}
                      className="btn btn-primary rounded-full"
                    >
                      ADD POST
                    </button>
                  </Link>
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
