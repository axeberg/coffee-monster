import React, { PropTypes } from 'react'

class Search extends React.Component {
  render () {
    return (
      <div className="form-group">
        <label htmlFor="monster-search">Search for monster:</label>
        <input className="form-control" type="text" name="monster-search" placeholder="Input the name of the monster here" />
      </div>
    );
  }
}

export default Search;
