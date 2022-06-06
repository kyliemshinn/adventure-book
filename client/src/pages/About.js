import React from "react";
import { Hero } from "react-daisyui";

const About = () => {
  <div>
    <Hero className="min-h-screen bg-base-100">
      <Hero.Content className="text-center">
        <div className="max-w-md text-secondary-content">
          <h1 className="appName mt-5 text-7xl">Welcome to Adventure Book!</h1>
          <h3>
            The best place to get personalized recommendations for locations,
            activities, restaurants, etc, to help you plan your next big
            adventure.
            <br></br>
            When planning a trip where's the first place you'd look for top
            recommendations? Google. And you'd most likely click on the first
            link, which is probably TripAdvisor, where you get the most popular,
            tourist ridden places to visit. But what if you wanted to do
            something off the beaten path? Blend with the locals and find the
            hidden gems you aren't going to find on any travel site. That's
            where we come in. With recommendations from real people who don't
            want to do what everyone else is going to do. .......
          </h3>
        </div>
      </Hero.Content>
    </Hero>
  </div>;
};

export default About;
