import React from "react";
import { Button } from "react-daisyui";

const About = () => {
  return (
    <div className="text-secondary-content text-center my-10">
      <h2 className="py-6 text-2xl  font-medium">Welcome to Adventure Book!</h2>
      <h3>
        Your one-stop-shop for your travel experiences - from
        planning to sharing with the world.
        <br></br>Get personalized recommendations for locations, activities, restaurants, etc, to help you plan your next big adventure.
        <br></br>
        No more relying on TripAdvisor and getting stuck visiting the most
        tourist ridden places and hard to book excursions.
        <br></br>
        Easily plan vacations with unique
        recommendations from real like-minded people who don't want to do what
        everyone else is doing. <br></br>
        Get off the beaten path. <br></br>
        Blend with the locals. <br></br>
        Try new things. <br></br> 
        Discover hidden gems you aren't going to find on any
        travel site or Google marketing ads.
        <br></br>
        
        Get out there and create new memories you'll remember forever!
      </h3>
      <Button className="btn hover:shadow-lg rounded-full border-none mt-4 bg-base-300 text-base-content">
        Explore
      </Button>
    </div>
  );

export default About;
