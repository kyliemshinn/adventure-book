import { ReactBingmaps } from "react-bingmaps-plus";
import axios from "axios";
import React, { Component } from "react";

  class AddPost extends Component {
    state = {
      // Initially, no file is selected
      selectedFile: null,
    };

    // On file select (from the pop up)
    onFileChange = (event) => {
      // Update the state
      this.setState({ selectedFile: event.target.files[0] });
    };

    // On file upload (click the upload button)
    onFileUpload = () => {
      // Create an object of formData
      const formData = new FormData();

      // Update the formData object
      formData.append(
        "image",
        this.state.selectedFile,
        this.state.selectedFile.name
      );

      // Details of the uploaded file
      console.log(this.state.selectedFile);

      // Request made to the backend api
      // Send formData object
      axios
        .post("api/uploadfile", formData, {
          onUploadProgress: (ProgressEvent) => {
            console.log(
              "upload progress" +
                Math.round(ProgressEvent.loaded / ProgressEvent.total) * 100 +
                "%"
            );
          },
        })
        .then((res) => {
          console.log(res);
        });
    };

    // File content to be displayed after
    // file upload is complete
    fileData = () => {
      if (this.state.selectedFile) {
        return (
          <div>
            <h2>File Details:</h2>

            <p>File Name: {this.state.selectedFile.name}</p>

            <p>File Type: {this.state.selectedFile.type}</p>

            <p>
              Last Modified:{" "}
              {this.state.selectedFile.lastModifiedDate.toDateString()}
            </p>
          </div>
        );
      } else {
        return (
          <div>
            <br />
            <h4>Choose before Pressing the Upload button</h4>
          </div>
        );
      }
    };
    fileSelectedHandler = (event) => {
      console.log(event.target.files[0]);
    };

    render() {
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
                    {/* link to browse */}
                    {/* <button className="justify-center" type="file">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      fill="currentColor"
                      className="bi bi-plus-circle"
                      viewBox="0 0 16 16"
                      type="file"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </button> */}

                    <div className="justify-center">
                      <input type="file" onChange={this.onFileChange} />
                      <button onClick={this.onFileUpload}></button>
                    </div>
                    {this.fileData()}
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

            <div style={{ height: "600px", width: "800px" }}>
              <ReactBingmaps
                bingmapKey="AuobAMXGIQwgjimas4B-M6-ohLbmLaLNDIUojn2nI-VCDEh1VxaL__j48GUmEu-C"
                key={"A"}
              />
            </div>
          </div>
        </div>
      );
    }
  }
  
export default AddPost;
