import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_POST } from "../utils/mutation";
import Map from "../components/Map"
import { Link } from "react-router-dom";

// import Button from "../components/MainButton/Button"

function AddPost() {

  //setting up upload image
  const [images, setImage] = useState("");
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
    tags: [""]
  });

  const [pushPins, setPushPins] = useState([]);

  const [location, setLocation] = useState([0.01, 0.01]);

  function readLocation(arg)
  {
    /*setPushPins([{
      "location":[arg.latitude, arg.longitude],
      "option":{ color: 'red' }
    }]);*/
    setPushPins([arg.latitude, arg.longitude]);
    setLocation([arg.latitude, arg.longitude]);
  }

  const [addPost] = useMutation(CREATE_POST);

  const handlePostSubmit = async (event) => {
    event.preventDefault();

    const processedLocation = { latitude: location[0], longitude: location[1] }
    console.log(createPost);

    try {
    await addPost({
      variables: {
        images: [images],
        title: createPost.title,
        content: createPost.content,
        tags: createPost.tags,
        location: processedLocation,
      },
    });
    window.location.assign('/dashboard');
    } catch(e) {
      alert(e);
    }
  };

  function handleChange(e) {
    let { name, value } = e.target;
    if(name === "tags") {
      value = value.split(" ");
    }
    setPost({
      ...createPost,
      [name]: value,
    });
  }
  return (
    <div className="pageContainer">
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
                  <>
                  <h3>Uploading Image...</h3>
                  </>
                ) : (
                  <>
                  <img src={images} style={{ width: "300px" }} alt="selected" />
                  </>
                )}
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  className="input input-bordered"
                  onChange={handleChange}
                  onSubmit={() => {console.log("!!!")}}
                />
                <input
                  type="text"
                  name="tags"
                  placeholder="#Tags"
                  className="input input-bordered"
                  onChange={handleChange}
                />
                <textarea
                  name="content"
                  className="textarea textarea-bordered"
                  placeholder="Description of where you went activities, restaurants..."
                  onChange={handleChange}
                ></textarea>
                <Map height="600px" width="800px" locations={[pushPins]} onClick={readLocation}/>
                <div>
                  <p>Latitude: {location[0]}</p>
                  <p>Longitude: {location[1]}</p>
                </div>
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
