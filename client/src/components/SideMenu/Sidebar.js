import React from "react";
import '../../styles/Dashboard.css'

const Sidebar = () => {
  return (
    <div className="grid col-span-2 mt-5 mb-10">
      <div className="bg-base-200 ">
        <div className="bg-primary">
          <h2 className="pl-2">Saved Posts</h2>
        </div>
        <div className="place-items-center">
        <div className="pl-3 pt-3">
          <div className="card w-96 h-36 bg-base-100 shadow-xl savePost">
            <div className="card-body">
              <h2 className="card-title">Post Title</h2>
              <p>Username</p>
              <p>#Tags</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
