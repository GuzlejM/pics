import React from 'react';

class SearchBar extends React.Component {
state = { term: '' };

onFormSubmit = (event) => {
    event.preventDefault();

}

  render() {
      return(
        <div className="ui segment">
          <form className="ui form" onSubmit={event => this.onFormSubmit(event)}>
            <div className="field">
              <label>Image Search</label>
              <input 
                type="text" 
                placeholder="Search for image" 
                value={this.state.term}
                onChange={e => this.setState({ term: e.target.value})}/>
            </div>
          </form>
        </div>
      )
  }
}

export default SearchBar;