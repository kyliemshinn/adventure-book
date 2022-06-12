import React, { useState } from "react";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { useMutation } from "@apollo/client";
import { ADD_TO_COLLECTION, REMOVE_FROM_COLLECTION } from "../../utils/mutation";

const Bookmark = (props) => {
  // set toggle state to false
  const [colorToggle, setColorToggle] = useState("black");
  const [collected, setCollected] = useState(false);

  const [addToCollection, { error: addError }] = useMutation(ADD_TO_COLLECTION);
  const [removeFromCollection, { error: removeError }] = useMutation(REMOVE_FROM_COLLECTION);

  const handleClick = async () => {
    if(collected) {
      await removeFromUserCollection();
    }
    else {
      await addToUserCollection();
    }
  }
  async function addToUserCollection() {
    try {
      setColorToggle("red");
      await addToCollection({ variables: { postId: props.postId }});
      setCollected(true);
    } catch (err) {
      console.error(addError ? addError : err);
      setColorToggle("black");
    }
  }
  async function removeFromUserCollection() {
    try {
      setColorToggle("black");
      await removeFromCollection({ variables: { postId: props.postId }});
      setCollected(false);
    } catch (err) {
      console.error(removeError ? removeError : err);
      setColorToggle("red");
    }
  }

  // const addToFaveList = () => {
  // .GET favorite collection
  // if current post is already saved, do nothing

  // .POST current post data to collection
  // }

  return (
    <div>
      
      <div className="bookmark ">
        {/* if post is NOT favorited, display as Black */}
        <div className="tooltiptext"></div>
        <BsFillBookmarkHeartFill
        title="Save Post"
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
