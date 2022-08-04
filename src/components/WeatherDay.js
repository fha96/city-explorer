import React from "react";

export default class WeatherDay extends React.Component{




    render(){


        return(
            <>
                            <li>{this.props.dailyData.date} : {this.props.dailyData.decription}</li>

            
            </>
        )
    }
}