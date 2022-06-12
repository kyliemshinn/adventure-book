import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_POST } from "../utils/mutation";
import Map from "../components/Map";
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
        body: data
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

  function readLocation(arg) {
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

    const processedLocation = { latitude: location[0], longitude: location[1] };
    console.log(createPost);

    try {
      await addPost({
        variables: {
          images: [images],
          title: createPost.title,
          content: createPost.content,
          tags: createPost.tags,
          location: processedLocation
        }
      });
      window.location.assign("/dashboard");
    } catch (e) {
      alert(e);
    }
  };

  function handleChange(e) {
    let { name, value } = e.target;
    if (name === "tags") {
      value = value.split(" ");
    }
    setPost({
      ...createPost,
      [name]: value
    });
  }
  return (
    <div className="pageContainer">
      <div className="card-body ">
        <div className="card bg-primary text-primary-content justify-center ">
          <h1 className="card-title justify-center text-secondary-content text-3xl p-4 mt-8">
            Add A Post!
          </h1>
          <div className="card-body mt-8 justify-center grid grid-cols-2">
            <div className="mt-28 mx-10">
              <div className="m-2">
                <input
                  type="file"
                  name="file"
                  multiple="multiple"
                  accept="image/jpeg, image/png, image/jpg"
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
                    <div className="grid row">
                      <img
                        src={images}
                        style={{ width: "300px" }}
                        alt=" "
                      />
                    </div>
                  </>
                )}
              </div>
              <div className="m-3">
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  className="input input-bordered w-full"
                  onChange={handleChange}
                  onSubmit={() => {
                    console.log("!!!");
                  }}
                />
              </div>
              <div className="m-3">
                <input
                  type="text"
                  name="tags"
                  placeholder="#Tags"
                  className="input input-bordered w-full"
                  onChange={handleChange}
                />
              </div>
              <div className="m-3">
                <textarea
                  name="content"
                  className="textarea textarea-bordered w-full"
                  placeholder="Description of where you went activities, restaurants..."
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <div className="ml-16">
              <h3 className="text-lg font-bold">Click On The Map To Pin A Location</h3>
              <Map
                height="440px"
                width="640px"
                locations={[pushPins]}
                onClick={readLocation}
              />
              <div className="pt-2 text-lg font-bold ">
                <p>Latitude: {location[0]}</p>
                <p>Longitude: {location[1]}</p>
              </div>
            </div>
          </div>
          <div className="card-actions justify-end m-6 mr-16">
            <Link to="/dashboard">
              <button
                onClick={handlePostSubmit}
                className="btn btn-accent rounded-full"
              >
                ADD POST
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
