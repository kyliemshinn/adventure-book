import React from "react";
import "../../styles/Dashboard.css";
import { Badge } from "react-daisyui";

const Sidebar = () => {
  return (
    <div className="grid col-span-2 mt-5 mb-10">
      <div className="bg-base-200 ">
        <div className="bg-primary">
          <h2 className="pl-2">Saved Posts</h2>
        </div>
        <div className="place-items-center">
          <div className="pl-3 pt-3">
            {/* saved cards */}
            <div className="card w-96 h-36 bg-base-100 shadow-xl savePost m-3">
              <div className="card-body p-5">
                <h2 className="card-title">Italy</h2>
                <p>Carl Fredricksen</p>
                <Badge className="badge badge-outline">#italy</Badge>
                <Badge className="badge badge-outline">#colosseum</Badge>
              </div>
            </div>

            <div className="card w-96 h-36 bg-base-100 shadow-xl savePost m-3">
              <div className="card-body p-5">
                <h2 className="card-title">Bali</h2>
                <p>Carl Fredricksen</p>
                <Badge className="badge badge-outline">#bali</Badge>
                <Badge className="badge badge-outline">#jimbaran</Badge>
                <Badge className="badge badge-outline">#spa</Badge>
              </div>
            </div>

            <div className="card w-96 h-36 bg-base-100 shadow-xl savePost m-3">
              <div className="card-body p-5">
                <h2 className="card-title">Dijbouti</h2>
                <p>Carl Fredricksen</p>
                <Badge className="badge badge-outline">#redsea</Badge>
                <Badge className="badge badge-outline">#dijbouti</Badge>
                <Badge className="badge badge-outline">#whitesaltbeaches</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
