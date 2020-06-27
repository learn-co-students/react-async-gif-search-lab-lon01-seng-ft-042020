import React from 'react'

export default class GifSearch extends React.Component {
    state = {
      searchBar: ""
      }

      handleChange = (event) => {
          this.setState({
              searchBar: event.target.value
          })
      }

      handleSubmit = (event) => {
          event.preventDefault();
          this.props.getGifs(this.state.searchBar)
      }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <label>Search gifs:</label>
          <input
          type="text" value={this.state.searchBar} onChange={(event) => this.handleChange(event)}>
          </input>
      </form>
    )
  }
}