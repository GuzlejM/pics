import React from 'react';

class SearchBar extends React.Component {
  render() {
      return(
        <div classNa="ui segment">
          <form className="ui form" >
            <div className="field">
              <label>Image Search</label>
              <input type="text" placeholder="Search for image"/>
            </div>
          </form>
        </div>
      )
  }
}

export default SearchBar;