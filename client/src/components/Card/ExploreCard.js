import React from "react";
import { Card, Badge } from "react-daisyui";

const ExploreCard = ({ author, title, tags, image }) => {

  return (
    <Card className="postCard card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          // src="https://api.lorem.space/image/shoes?w=400&h=225"
          // alt="Shoes"
          src={image}
          alt="img"
          className="cardImage"
        />
      </figure>
      
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{author}</p>
        <div className="card-actions justify-end text-accent-content">
          {tags.map((tag) => (
            <Badge className="badge badge-outline">{tag}</Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ExploreCard;
