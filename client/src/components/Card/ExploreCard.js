import React from "react";
import { Card, Badge } from 'react-daisyui';

const ExploreCard = ({ author, title, tags }) => {
    return (
        <Card className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://api.lorem.space/image/shoes?w=400&h=225"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              {/* create link to user profile */}
              <p>{author}</p>
              
              <div className="card-actions justify-end text-accent-content">
                {/* convert to buttons or links to see other posts with same tags */}
                {/* map through tags */}
                <Badge className="badge badge-outline">{tags}</Badge>
                {/* <div className="badge badge-outline">#Beach</div>
                <div className="badge badge-outline">#Hiking</div>
                <div className="badge badge-outline">#Spearfishing</div> */}
              </div>
            </div>
          </Card>
    )
}


export default ExploreCard;