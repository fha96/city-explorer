import React from "react";
import Movie from "./Movie";



export default class Movies extends React.Component{



    render(){
        
        return(
            <>

            <h3>All movies which is related to your city-Name</h3>
            {this.props.moviesData.map(item=>{
                return(
                    <>
                    <Movie dataMovie={item} />
                    </>
             
             ) 
            
            })}
            
            
            </>
        )
        
    }


}