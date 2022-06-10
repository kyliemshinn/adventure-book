import React from 'react'

const Bookmark = () => {
    return (
        <div>
            <button className="bookmark float-right">
                <i
                  className="fa-solid fa-bookmark fa-xl pt-3"
                  title="save post"
                ></i>
              </button>
        </div>
    )
}

export default Bookmark;
