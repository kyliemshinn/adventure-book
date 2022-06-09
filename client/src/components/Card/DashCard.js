import React from "react";
import { Card, Button } from 'react-daisyui';

const ExploreCard = ({image, title}) => {
  return (
    <Card className="postCard card w-96 bg-base-100 shadow-xl">
      <div className="postCard card w-96 ">
        <figure>
          <img
            {...image}
            alt="img"
          />
        </figure>
        <div className="postCard card-body items-center text-center">
          <h2 className="card card-title">{title}</h2>
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