import React from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'


class GifListContainer extends React.Component{

    constructor(){
        super()
        this.state ={
          gifUrls: [],
          searchTerm: "",
        }
      }


    componentDidMount(){
        this.updateGifs({ preventDefault: () => console.log("hey")})
      }

    updateGifs = (e) => {
        e.preventDefault()

        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm.split(" ").join("%20")}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(gifs => {this.setState({
          gifUrls: gifs["data"].map(gifs => gifs.images.original.url)
        })})
    }

    updateSearchTerm = (e) => {
        this.setState({ searchTerm: e.target.value })
    }

    render(){
        console.log(this.state.gifUrls)
        return(
            <div>
                <GifList gifUrls={this.state.gifUrls}/>
                <GifSearch 
                    updateGifs={this.updateGifs}
                    updateSearchTerm={this.updateSearchTerm}
                    searchTerm={this.state.searchTerm}
                />
            </div>
        )
    }
}

export default GifListContainer