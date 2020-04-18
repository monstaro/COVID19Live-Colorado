import React from "react";
import "./Bookmarks.scss";
import { connect } from 'react-redux';


const Bookmarks = (props) => {
  console.log(props)
  return (
    <div className="bookmarks-container" data-testid="bookmarks-container">
      <h2 className="bookmarks-header">Bookmarks</h2>
    </div>
  );
};


const mapStateToProps = state => ({
  bookmarks: state.bookmarks
})

export default connect(mapStateToProps)(Bookmarks);
