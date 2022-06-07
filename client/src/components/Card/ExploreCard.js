import React from "react";
import { Card, Badge } from 'react-daisyui';

const ExploreCard = () => {
    return (
        <Card className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://api.lorem.space/image/shoes?w=400&h=225"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Bali</h2>
              {/* create link to user profile */}
              <p>Username Link</p>
              <div className="card-actions justify-end text-accent-content">
                {/* convert to buttons or links to see other posts with same tags */}
                <Badge className="badge badge-outline">#Surfing</Badge>
                <div className="badge badge-outline">#Beach</div>
                <div className="badge badge-outline">#Hiking</div>
                <div className="badge badge-outline">#Spearfishing</div>
              </div>
            </div>
          </Card>
    )
}


export default ExploreCard;