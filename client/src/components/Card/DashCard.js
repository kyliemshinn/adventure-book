import React from "react";
import { Card, Button } from 'react-daisyui';
import { useMutation } from '@apollo/client';
import { REMOVE_POST, UPDATE_POST } from "../../utils/mutation";
import { QUERY_POSTS } from "../../utils/queries";

const ExploreCard = ({image, title}) => {
  //remove post
  const [removePost, { error }] = useMutation(REMOVE_POST, {
    update(cache, {data: {removePost} }) {
      try {
        cache.writeQuery({
          query: QUERY_POSTS,
          data: { post: removePost }
        });

      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleRemovePost = async (post) => {
    try {
      const { data } = await removePost({variables: { post },
      });
    } catch (err) {
      console.error(err)
    }
  }

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
          <h2 className="card card-title p-4">{title}</h2>
          <div className="card-actions justify-end text-base-content">
            <Button className="btn-sm rounded-full bg-secondary border-none text-base-content hover:bg-secondary-focus hover:shadow-lg">
              Edit
            </Button>
            <Button className="btn-sm rounded-full bg-secondary border-none text-base-content hover:bg-secondary-focus hover:shadow-lg"
            onClick={() => handleRemovePost()}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ExploreCard;