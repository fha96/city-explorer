import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import NiceView from "./niceView";
import MapImage from "./mapImage";
import Weather from "./Weather";
import Error from "./error";
import Movies from "./Movies";

class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            query: '',
            locationName: '',
            longitude: '',
            latitude: '',
            showInfo: false,
            weather: [],
            showWeather: false,
            errorMsg: '',
            showError: false,
            movies: [],
            showMovie: false
        }
    }



    updateQuery = (e) => {
        this.setState({
            query: e.target.value
        })
        console.log(e.target.value);
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        let Location = `https://eu1.locationiq.com/v1/search?key=pk.c0a08c961ed12e8da859156883246e68&q=${this.state.query}&format=json`;
        try {
            let dataLocation = await axios.get(Location);
            this.setState({
                locationName: dataLocation.data[0].display_name,
                longitude: dataLocation.data[0].lon,
                latitude: dataLocation.data[0].lat,
                showInfo: true
            });
            this.displayWeather(this.state.query);
            this.displayMovies(this.state.query);

        } catch (error) {
            console.log(error);
            this.setState({
                showInfo: false,
                showError: true,
                errorMsg: error.response.status + " : " + error.response.data.error
            });
            console.log(error);
        }
    }


    displayWeather = async (cityName) => {
        let url = `${process.env.REACT_APP_FHAD_EXPRESS}/weather?cityName=${cityName}`;
        try {
            let weatherData = await axios.get(url);
            console.log(weatherData);
            this.setState({
                showWeather: true,
                weather: weatherData.data,
                showError: false
            });
        }
        catch (error) {
            console.log(error);
            this.setState({
                showError: true,
                errorMsg: error.response.status + " : " + error.response.data.error,
                showWeather: false

            })

        }
    }
    displayMovies = async (cityName) => {
        const url=`${process.env.REACT_APP_FHAD_EXPRESS}/movies?cityName=${cityName}`;
        try {
                const moviesData= await axios.get(url);
                this.setState({
                    showMovie:true,
                    movies:moviesData.data
                })
        } catch (error) {
            this.setState({
                showMovie:false
            })  
        }

    }
    render() {
        return (
            <>

                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" >
                        <Form.Label htmlFor="disabledTextInput">Please Enter the City</Form.Label><br />
                        <Form.Control id="disabledTextInput" placeholder="City..." onChange={this.updateQuery} />
                        <br />
                        <Button type="submit">Explore!</Button>
                    </Form.Group>
                </Form>

                {
                    this.state.showInfo &&
                    <>
                        <NiceView cityName={this.state.locationName} lon={this.state.longitude} lat={this.state.latitude} />
                        <MapImage src={`https://maps.locationiq.com/v3/staticmap?key=pk.c0a08c961ed12e8da859156883246e68&center=${this.state.latitude},${this.state.longitude}`} name={this.state.locationName} />
                    </>
                }
                {
                    this.state.showError &&
                    <>
                        <Error error={this.state.errorMsg} />
                    </>
                }
                {
                    this.state.showWeather & this.state.showInfo &&
                    <Weather weatherInformation={this.state.weather} />
                }

                {
                    this.state.showMovie &&
                    <Movies moviesData={this.state.movies}/>
                }
            </>
        )
    }
}

export default Main;