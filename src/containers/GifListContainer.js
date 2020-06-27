import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {

    state = {
      gifs: []
      }

      getGifs() {
      fetch("https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g")
      .then(resp => resp.json())
      .then(({data}) => this.setState({gifs: data}))
      .catch(error => console.log(error.message));
      }

      makeGifList = () => {
          return this.state.gifs.map((gif, index) => <GifList key={index} gif={gif.images.original.url}/>)
      }


  render() {
    return (
      <div>
        <GifSearch getGifs={this.getGifs}/>
        <br></br>
        {this.getGifs()}
        {this.makeGifList()}
      </div>
    )
  }
}