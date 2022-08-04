import React from "react";
import WeatherDay from "./WeatherDay";




class Weather extends React.Component{



    render(){
        return(
            <>
         <h2>Weather Data for 1 Day</h2>

            {
            this.props.weatherInformation.map(item=>{
                return(
                <>                
                <WeatherDay dailyData={item} />
                </>
)
            })
            }

            </>
        )
    }

}

export default Weather;