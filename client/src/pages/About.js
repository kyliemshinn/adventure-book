import React from "react";
import { Button } from "react-daisyui";

const About = () => {
  <div>
    <h2 className="py-6 text-2xl font-medium">Welcome to Adventure Book!</h2>
    <h3>
      The best place to get personalized recommendations for locations,
      activities, restaurants, etc, to help you plan your next big adventure.
      <br></br>
      When planning a trip where's the first place you'd look for top
      recommendations? Google. And you'd most likely click on the first link,
      which is probably TripAdvisor, where you get the most popular, tourist
      ridden places to visit. But what if you wanted to do something off the
      beaten path? Blend with the locals and find the hidden gems you aren't
      going to find on any travel site. That's where we come in. With
      recommendations from real people who don't want to do what everyone else
      is going to do. .......
    </h3>
    <Button className="btn hover:shadow-lg rounded-full border-none mt-4 bg-base-300 text-base-content">
      Explore
    </Button>
  </div>
};

export default About;
