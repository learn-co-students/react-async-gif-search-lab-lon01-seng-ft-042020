import React from 'react'

class GifList extends React.Component {

    render(){
        return(
            <div>
                {this.props.gifUrls.slice(0, 3).map(url => <img src={url}/>)}
            </div>
                
        )
    }
}

export default GifList