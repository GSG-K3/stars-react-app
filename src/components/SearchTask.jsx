import React, { Component } from "react";
import "./SearchComp.css";

class SearchTask extends Component {
  state = {
    artistName: "",
    artistInfo: ""
  };

  onChangeHandler = (e) => {
    this.setState({ artistName: e.target.value });
  };

  search = () => {
    fetch(
      `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${this.state.artistName}`
    )
      .then((res) => res.json())
      .then((res) => this.setState({ artistInfo: res.artists[0] }))
      .catch((err) => console.log(err));

    this.setState({ artistName: "" });
  };

  render() {
    return (
      <div className="SearchDiv">
        <div className="SeachValue">
          <label>Enter Artist Name</label>
          <input
            type="text"
            placeholder="Artist name"
            onChange={this.onChangeHandler}
            value={this.state.artistName}
          />
          <button className="btnstyle" onClick={this.search}>Search</button>
        </div>

        <div className="SearchResult">
          <h2>{this.state.artistInfo.strArtist}</h2>
          <img src={this.state.artistInfo.strArtistFanart} alt="artist img" />
          <span>
            <p>{this.state.artistInfo.strBiographyEN}</p>
          </span>
        </div>
      </div>
    );
  }
}
export default SearchTask;
