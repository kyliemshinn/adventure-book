import { ReactBingmaps } from "react-bingmaps-plus";
import React, { useState } from "react";


function AddPost() {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

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

  return (
    <div>
      <div>
        <div className="card lg:card-side bg-base-100 shadow-xl m-32">
          <div className="card-body">
            <h1 className="card-title justify-center text-secondary-content">
              Add A Post!
            </h1>
            {/* nested card for adding a photo */}
            <div className="card bg-primary text-primary-content justify-center">
              <div className="card-body m-16">
                <h2 className="card-title justify-center">Add Photo</h2>

                <div className="justify-center">
                  {/* <input type="file" onChange={changeHandler} />
                <button onClick={handleSubmission}>upload</button> */}
                  {/* </div>
                  {this.fileData()}
                </div> */}
                  <input type="file" name="file" onChange={changeHandler} className="justify-center" />
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
                {/* nested card for adding a description */}
                <textarea
                  className="textarea textarea-bordered"
                  placeholder="Description of where you went activities, restaurants..."
                ></textarea>
                {/* nested for adding a location or title */}
                <textarea
                  className="textarea textarea-bordered"
                  placeholder="Location or Title"
                ></textarea>

                <div className="card-actions justify-end">
                  <button className="btn btn-primary rounded-full">
                    Add Post
                  </button>
                </div>
              </div>
            </div>
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
