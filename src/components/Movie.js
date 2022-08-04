import React from "react";

export default class Movie extends React.Component{



    render(){

        return(
            <>
            
                                <p>Title: {this.props.dataMovie.title}</p>
                                <p>Release Date :{this.props.dataMovie.released_on}</p>
                                <p>Popularity : {this.props.dataMovie.popularity}</p>
                                <p>Image URL : {this.props.dataMovie.image_url}</p>
            </>
        )
    }
}