import React, { useState } from 'react'

const SearchForm = (props) => {
  function onSubmitSearchRequest(e) {
    e.preventDefault();
    props.onDoTagSearch();
  }

  function onSearchCriteriaChanged(e) {
    let value = e.target.value;
    
    value = value.split(" "); // Convert value into an array of strings based on spaces
    // TODO: possibile limit on number of tags?
    value = value.filter((tag) => { // Remove empty elements
      return tag.length > 0;
    });
    for(let i = 0; i < value.length; i++) {
      // Remove the leading hashtag symbol
      if(value[i].charAt(0) === "#") {
        value[i] = value[i].substring(1);
      }
    }

    props.onSetSearchCriteria(value);
  }

  return (
    <div className="form-control">
      <form className="searchForm" onSubmit={onSubmitSearchRequest}>
              <div className="input-group">
                <input
                  type="text"
                  name="criteria"
                  placeholder="#sailing #hiking #surfing..."
                  className="input input-bordered"
                  onChange={onSearchCriteriaChanged}
                />
                <button className="btn bg-accent border-none hover:bg-accent-focus btn-square">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
      </form>
    </div>
  )
}

export default SearchForm;
