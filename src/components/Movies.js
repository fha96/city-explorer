import React from "react";



export default class Movies extends React.Component{



    render(){
        return(
            this.props.moviesData.map(item=>{
                return(
                    <>
                    
                                <p>Title: {item.title}</p>
                                <p>Release Date :{item.released_on}</p>
                                <p>Popularity : {item.popularity}</p>
                                <p>Image URL : {item.image_url}</p>
                    </>
                ) 
            })
            
            
        
        )
    }


}