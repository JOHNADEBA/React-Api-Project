import React from "react";

import { useParams } from "react-router-dom";
import { useAxiosGet } from "./callApi";

const Photo = () => {
  const { id } = useParams();
  let content = null;
  const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
  let photo = useAxiosGet(url);

  if (photo.loading) {
    content = (
      <div className=" shadow-5 grow  pa5 br3 center tc ma4 w-50 blue f1">
        <i className="  fas fa-spinner fa-spin"></i>
      </div>
    );
  }

  if (photo.error) {
    content = (
      <div className=" shadow-5 grow tc br3 center f1 pa5 w-50  ma4  red ">
        <i className="mb2 fas fa-exclamation-triangle"></i>
        <p className="tc f3">404: INVALID INPUT</p>
      </div>
    );
  }

  if (photo.data) {
    content = (
      <div className=" shadow-5 pa3 br3 center tc ma4 w-50 grow">
        <h2 className="ma2">{photo.data.title}</h2>
        <img
          className="w-50 mb2 br3"
          src={photo.data.url}
          alt={photo.data.title}
        />
      </div>
    );
  }
  return <div>{content}</div>;
};

export default Photo;
