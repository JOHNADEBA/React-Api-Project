import React from "react";
import Photo from "./Photo";
const Photos = () => {
  const cardComponent = photo.map((user, i) => {
    return (
      <Photo
        key={photo.data[i].id}
        id={photo.data[i].id}
        url={photo.data[i].url}
        title={photo.data[i].title}
      />
    );
  });
  return <div>{cardComponent}</div>;
};

export default Photos;
