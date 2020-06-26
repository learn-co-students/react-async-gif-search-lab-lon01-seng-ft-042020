import React from 'react'

class GifSearch extends React.Component{

    render(){
        return(
            <form onSubmit={this.props.updateGifs}>
                <input 
                    type="text" 
                    placeholder="Search here..."
                    onChange={this.props.updateSearchTerm}
                    value={this.props.searchTerm}
                ></input>
            </form>
        )
    }
}

export default GifSearch