import React from "react";
import "./Bookmarks.scss";
import { connect } from "react-redux";
import CountyData from "../../components/CountyData/CountyData";

const Bookmarks = (props) => {
  if (props.bookmarks.length) {
    return (
      <div className="bookmarks-container" data-testid="bookmarks-container">
        <h2 className="bookmarks-header">Bookmarks</h2>
        {props.bookmarks.map((bookmark) => (
          <CountyData
            key={bookmark.countyName}
            deaths={bookmark.deaths}
            cases={bookmark.cases}
            countyPop={bookmark.countyPop}
            countyName={bookmark.countyName}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div className="bookmarks-container" data-testid="bookmarks-container">
        <h2 className="bookmarks-header">Bookmarks</h2>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  bookmarks: state.bookmarks,
});

export default connect(mapStateToProps)(Bookmarks);
