import React from "react";
import { Hero, Textarea, Button } from "react-daisyui";

// TO-DO: carousel for images
// TO-DO: description section
// TO-DO: comment box

// TO-DO: add comment form submission box
// TO-DO: handle form submit to post comment
// TO-DO: allow user to view any tagged locations
// TO-DO: allow user to save this post to their dashboard

const ViewPost = () => {
  return (
    <div className="text-neutral-content">
      <Hero className="">
        <div className="postContainer bg-base-200 mx-9 my-9 py-6 px-6 pb-7">
          <h2 className="text-bold text-lg text-neutral-content">Post Title</h2>
          <h3>Posted by "Username" </h3>

          <div className="grid grid-cols-2 gap-2 py-3">
            <div
              id="carouselExampleIndicators"
              className="carousel slide relative"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner relative w-full overflow-hidden">
                {/* <div className="carousel-item active float-left w-full">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                    className="block w-full"
                    alt="Wild Landscape"
                  />
                </div> */}
                <div className="carousel-item float-left w-full">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                    className="block w-full"
                    alt="Exotic Fruits"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon inline-block bg-no-repeat"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon inline-block bg-no-repeat"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            {/* <Carousel className="mx-36 h-96 w-100">
              <Carousel.Item
                src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB"
                alt="Car"
              />
              <Carousel.Item
                src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6"
                alt="Car"
              />
              <Carousel.Item
                src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693"
                alt="Car"
              />
            </Carousel> */}

            <div className="bg-base-100">
              <h3>Description</h3>
            </div>
          </div>
          <div>
            <p>Add Comment or Question</p>
            <Textarea className="w-full">Comment Section</Textarea>
            <Button className="btn-sm hover:bg-secondary-focus hover:shadow-lg rounded-full border-none">
              Add Comment
            </Button>
          </div>
        </div>
      </Hero>
    </div>
  );
};

export default ViewPost;
