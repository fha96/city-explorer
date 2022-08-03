import React from "react";




class Weather extends React.Component{



    render(){
        return(
            <>
         <h2>Weather Data for 3 Days</h2>
            {
            this.props.weatherInformation.map(item=>{
                return(
                <>                
                <li>{item.date}</li>
                <li>{item.decription}</li>
                </>
)
            })
            }

            </>
        )
    }

}

export default Weather;