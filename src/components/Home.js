import React from "react";
import { Link } from "react-router-dom";

import { useAxiosGet } from "./callApi";
const Home = () => {
  let content = null;

  const url = "https://jsonplaceholder.typicode.com/photos/?_limit=10";
  let photos = useAxiosGet(url);

  if (photos.loading) {
    content = (
      <div className=" shadow-5 grow  pa5 br3 center tc ma4 w-50 blue f1">
        <i className="  fas fa-spinner fa-spin"></i>
      </div>
    );
  }

  if (photos.error) {
    content = (
      <div className=" shadow-5 grow tc br3 center f1 pa5 w-50  ma4  red ">
        <i className="mb2 fas fa-exclamation-triangle"></i>
        <p className="tc f3">404: INVALID INPUT</p>
      </div>
    );
  }

  if (photos.data) {
    content = photos.data.map((photo) => {
      return (content = (
        <div
          key={photo.title}
          className=" ma2 dib shadow-5 grow br3 pa2 relative "
          style={{
            backgroundImage: `url('${photo.url}')`,
            height: "200px",
            width: "200px",
          }}
        >
          <Link to={`/photo/${photo.id}`}>
            <h2 className=" black absolute bottom-1">{photo.title}</h2>
          </Link>
        </div>
      ));
    });
  }
  return (
    <div className="tc ma3">
      <h2 className="ma2">HOME</h2>
      {content}
    </div>
  );
};

export default Home;
