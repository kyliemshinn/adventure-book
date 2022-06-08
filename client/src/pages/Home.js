import React from "react";
import { Link } from "react-router-dom";
import { Hero } from "react-daisyui";
import "../App.css";
import "../styles/Homepage.css"

const Home = () => {
  return (
    <div>
      <Hero className="min-h-screen bg-base-100">
        <Hero.Content className="text-center">
          <div className="max-w-md text-secondary-content">
            <h1 className="appName mt-5 text-7xl">ADVENTURE BOOK</h1>
            {/* <Card> */}
            <div className="bookContainer py-32">
              <div className="book">
                <span className="page turn"></span>
                <span className="page turn"></span>
                <span className="page turn"></span>
                <span className="page turn"></span>
                <span className="page turn"></span>
                <span className="page turn"></span>
                <span className="cover"></span>
                <span className="page"></span>
                <span className="cover turn"></span>
              </div>
            </div>
            <h2 className="text-4xl">
              Get Inspired<br></br>
              Plan Your Next Adventure
            </h2>
            {/* </Card> */}

            <Link
              to="/explore"
              className="btn hover:bg-accent-focus hover:shadow-lg rounded-full border-none mt-8 bg-accent text-base-content"
            >
              Explore
            </Link>
          </div>
        </Hero.Content>
      </Hero>

      <Hero className="bg-base-200 bg-opacity-60">
        <Hero.Content className="text-center text-neutral-content my-7">
          <div>
            <h2 className="py-6 text-2xl font-medium">
              Get Recommendations From Real People <br></br>
              Who Have Experienced The Places You Want to Go, And The Activities
              You Want To Do. <br></br>
              Discover Hidden Gems, Live Like The Locals Do. <br></br>
              Google and Travel Advisor Don’t Always Know It All.
            </h2>
            <Link
              to="/explore"
              className="btn hover:bg-accent-focus hover:shadow-lg rounded-full border-none mt-4 bg-accent text-base-content"
            >
              Explore
            </Link>
          </div>
        </Hero.Content>
      </Hero>
    </div>
  );
};

export default Home;
