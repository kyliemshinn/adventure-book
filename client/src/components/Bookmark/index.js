import React, { useState } from "react";
// import React from 'react';
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import axios from "axios";


const Bookmark = () => {
  // set toggle state to false
  const [colorToggle, setColorToggle] = useState('black');
//   const [favList, setFavList] = useState([]);

// const handleClick = (event) => {
//     console.log('button clicked');
//     event.target.style.color = "red";
//     console.log(event.target);
// }

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
            onClick={() => {setColorToggle("red")}}
            style={{ color: colorToggle }}
            size={30}
          />
       
      </div>
    </div>
  );
};

export default Bookmark;

