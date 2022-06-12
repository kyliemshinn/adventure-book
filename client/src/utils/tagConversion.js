function expandTagsArray(array) {
    const newArray = [];
    for(let i = 0; i < array.length; i++) {
        newArray.push("#" + array[i]);
    }
    let string = newArray.join(" ");
    string.replace("#", ""); // remove hashtags
    console.log("expandTagsArray", string);
    return string;
}

function collapseTagsString(string) {
    console.log(string);
    let array = string.split(" "); // Convert value into an array of strings based on spaces
    // TODO: possibile limit on number of tags?
    array = array.filter((tag) => { // Remove empty elements
      return tag.length > 0;
    });
    for(let i = 0; i < array.length; i++) {
      // Remove the leading hashtag symbol
      if(array[i].charAt(0) === "#") {
        array[i] = array[i].substring(1);
      }
    }
    console.log("collapseTagsString", array);
    return array;
}

export { expandTagsArray, collapseTagsString };