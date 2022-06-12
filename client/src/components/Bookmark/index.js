import React, { useState } from "react";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { useMutation } from "@apollo/client";
import { ADD_TO_COLLECTION } from "../../utils/mutation";

const Bookmark = (props) => {
  // set toggle state to false
  const [colorToggle, setColorToggle] = useState("black");
  //   const [favList, setFavList] = useState([]);

  const [addToCollection, { error }] = useMutation(ADD_TO_COLLECTION);

  const handleClick = async () => {
      console.log('button clicked');
      setColorToggle("red");
      //console.log("postId", props.postId);
      try {
        const data = await addToCollection({ variables: { postId: props.postId }});
        console.log(data.data.addToCollection.id);
      } catch (err) {
        console.error(error || err);
      }
  }

  // const addToFaveList = () => {
  // .GET favorite collection
  // if current post is already saved, do nothing

  // .POST current post data to collection
  // }

  return (
    <div>
      <div className="bookmark">
        {/* if post is NOT favorited, display as Black */}

        <BsFillBookmarkHeartFill
          className="float-right"
          onClick={handleClick}
          style={{ color: colorToggle }}
          size={30}
        />
      </div>
    </div>
  );
};

export default Bookmark;
