import React, { Component } from "react";
import PictureCard from "./PictureCard";
import "../styles/Pins.css";

export class Pins extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.searchKey);
    this.state = {
      photos: this.props,
      images: [],
      loading: false,
    };
  }
  async componentDidMount() {
    const url = `https://api.unsplash.com/search/photos/?client_id=HxtClWTy8gGp5ursIaYlNRl_6jgIfAc9RLHQ4ZJml3M&query=${this.props.searchKey}&per_page=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      images: parsedData.results,
    });
  }
  render() {
    return (
      <div>
        <div className="container">
          {this.state.images.map((element) => {
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
        </div>
      </div>
    );
  }
}
export default Pins;
