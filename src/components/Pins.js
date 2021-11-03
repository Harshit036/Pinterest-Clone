import React, { useState, useEffect } from "react";
import PictureCard from "./PictureCard";
import InfiniteScroll from "react-infinite-scroll-component";
import "../styles/Pins.css";

function Pins(props) {
  const [images, setimages] = useState([]);
  const [Total, setTotal] = useState(0);
  const [page, setpage] = useState(1);

  useEffect(() => {
    const url = `https://api.unsplash.com/search/photos/?client_id=HxtClWTy8gGp5ursIaYlNRl_6jgIfAc9RLHQ4ZJml3M&query=${props.InputKey}&per_page=20`;
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setimages(data.results);
        setTotal(data.total);
      });
  }, [props.InputKey]);

  const fetchMoreData = async () => {
    setpage(page + 1);
    const url = `https://api.unsplash.com/search/photos/?client_id=HxtClWTy8gGp5ursIaYlNRl_6jgIfAc9RLHQ4ZJml3M&query=${props.InputKey}&per_page=20&page=${page}`;
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setimages(images.concat(data.results));
        setTotal(data.total);
      });
  };

  return (
    <div>
      <div className="container__pins">
        <InfiniteScroll
          dataLength={images.length}
          next={fetchMoreData}
          hasMore={images.length !== Total}
          loader={<h4>Loading...</h4>}
        >
          {console.log(images.result)}
          {console.log(Total)}
          {images.map((element) => {
            // console.log(element.urls.regular);
            return (
              <PictureCard
                key={element.urls.raw}
                imageUrl={
                  !element.urls.full
                    ? "https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                    : element.urls.full
                }
              />
            );
          })}
        </InfiniteScroll>
      </div>
    </div>
  );
}
export default Pins;
