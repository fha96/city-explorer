import React from "react";




class Weather extends React.Component{



    render(){
        return(
            <>
         <h2>Weather Data for 1 Day</h2>

            {
            this.props.weatherInformation.map(item=>{
                return(
                <>                
                <li>{item.date} : {item.decription}</li>
                
                </>
)
            })
            }

            </>
        )
    }

}

export default Weather;