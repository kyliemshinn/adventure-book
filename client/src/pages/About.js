import React from "react";
import { Button } from "react-daisyui";

const About = () => {
  return (
    <div className="container card text-secondary-content text-center my-10">
      <div>
      </div>
      <h2 className="py-6 text-2xl font-extrabold">Welcome to Adventure Book!</h2>
      <p>
        Your one-stop-shop for your travel experiences - from planning to
        sharing with the world.
      </p>
      <br></br>
      <p>
        Get personalized recommendations for locations, activities, restaurants,
        etc, to help you plan your next big adventure.
      </p>
      {/* <br></br> */}
      <p>
        No more relying on TripAdvisor and getting stuck visiting the most
        tourist ridden places and hard to book excursions.
      </p>
      <br></br>
      <p>
        Easily plan vacations with unique recommendations from real like-minded
        people who don't want to do what everyone else is doing.
      </p>
      <br></br>
      <p className="font-bold">Get off the beaten path.</p>
      <p className="font-bold">Blend with the locals.</p>
      <p className="font-bold">Try new things.</p>
      <br></br>
      <p>
        Discover hidden gems you aren't going to find on any travel site or
        Google marketing ads.
      </p>
      <br></br>

      <h3 className="font-bold text-lg">Get out there and create new memories you'll remember forever!</h3>

      <div className="pt-5">
        <Button className="btn rounded-full bg-accent border-none hover:bg-accent-focus hover:shadow-lg text-base-content">
          Explore
        </Button>
      </div>
    </div>
  );
};

export default About;
