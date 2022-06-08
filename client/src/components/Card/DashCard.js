import React from "react";
import { Card, Button } from 'react-daisyui';

const ExploreCard = () => {
  return (
    <Card className="card w-96 bg-base-100 shadow-xl">
      <div className="card w-96 ">
        <figure>
          <img
            src="https://api.lorem.space/image/shoes?w=400&h=225"
            alt="Shoes"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Title</h2>
          <div className="card-actions justify-end text-base-content">
            <Button className="btn-sm rounded-full bg-secondary border-none text-base-content hover:bg-secondary-focus hover:shadow-lg">
              Edit
            </Button>
            <Button className="btn-sm rounded-full bg-secondary border-none text-base-content hover:bg-secondary-focus hover:shadow-lg">
              Delete
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ExploreCard;