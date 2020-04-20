import React from "react";
import "./Bookmarks.scss";
import { connect } from "react-redux";
import CountyData from "../../components/CountyData/CountyData";
import PropTypes from 'prop-types';

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
            lastUpdate={bookmark.date}

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

Bookmarks.propTypes = {
  className: PropTypes.string,
  bookmarks: PropTypes.array,
  dispatcj: PropTypes.func,
}