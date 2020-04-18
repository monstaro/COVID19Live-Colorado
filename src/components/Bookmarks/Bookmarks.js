import React from "react";
import "./Bookmarks.scss";
import { connect } from 'react-redux';
import CountyData from '../../components/CountyData/CountyData'


const Bookmarks = ({bookmarks}) => {
  console.log({bookmarks})
  return (
    <div className="bookmarks-container" data-testid="bookmarks-container">
      <h2 className="bookmarks-header">Bookmarks</h2>
      {/* <CountyData 
       deaths={this.props.deaths || 0} 
       cases={this.state.cases || 0}
       countyPop={this.state.countyPop || 0}/> */}
    </div>
  );
};


const mapStateToProps = state => ({
  bookmarks: state.bookmarks
})

export default connect(mapStateToProps)(Bookmarks);
