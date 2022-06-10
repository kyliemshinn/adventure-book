import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from 'react-daisyui';
import { useMutation } from '@apollo/client';
import { REMOVE_POST } from "../../utils/mutation";
import { QUERY_POSTS } from "../../utils/queries";

const DashCard = ({image, title, post}) => {
  //remove post
  const [removePost, { error }] = useMutation(REMOVE_POST, {
    update(cache, {data: {removePost} }) {
      try {
        cache.writeQuery({
          query: QUERY_POSTS,
          data: { post: removePost }
        });
        console.log(error);

      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleRemovePost = async (post) => {
    try {
      alert(post);
      console.log(post)
      const { data } = await removePost({variables: { postId: post.id },
      });

      console.log(data)
    } catch (err) {
      //console.error(err)
      alert(error)
    }
  }
  const handleEditPost  = async (post) => {
    window.location.assign('/editpost/:postId')
  }

  return (
    <Card className="postCard card w-96 bg-base-100 shadow-xl">
      <div className="postCard card w-96 ">
        <figure>
          <img
            src={image}
            alt="img"
          />
        </figure>
        <div className="postCard card-body items-center text-center">
          <h2 className="card card-title p-4">{title}</h2>
          <div className="card-actions justify-end text-base-content">
          <Link key={post.id} to={`/dashboard/viewpost/${post.id}`}>
          <Button className="btn-sm rounded-full bg-secondary border-none text-base-content hover:bg-secondary-focus hover:shadow-lg">
              View
            </Button>
            </Link>
            <Button className="btn-sm rounded-full bg-secondary border-none text-base-content hover:bg-secondary-focus hover:shadow-lg" onClick={handleEditPost}>
              Edit
            </Button>
            <Button className="btn-sm rounded-full bg-secondary border-none text-base-content hover:bg-secondary-focus hover:shadow-lg"
            onClick={() => handleRemovePost(post)}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DashCard;