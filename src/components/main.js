import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import NiceView from "./niceView";

class Main extends React.Component {

    constructor(props){
        super(props);

        this.state={
            query:'',
            locationName:'',
            longitude:'',
            latitude:''
        }
    }



    updateQuery=(e)=>{
        this.setState({
            query:e.target.value
        })
        console.log(e.target.value);
    }

    handleSubmit = async(e) =>{
        e.preventDefault();
        console.log('test');
        let Location=`https://eu1.locationiq.com/v1/search?key=pk.c0a08c961ed12e8da859156883246e68&q=${this.state.query}&format=json`;
        let dataLocation= await axios.get(Location);
        this.setState({
            locationName:dataLocation.data[0].display_name,
            longitude:dataLocation.data[0].lon,
            latitude:dataLocation.data[0].lat
        })
    }



    render() {
        return (
            <>
                
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group className="mb-3" >
                            <Form.Label htmlFor="disabledTextInput">Please Enter the City</Form.Label><br />
                            <Form.Control id="disabledTextInput" placeholder="City..." onChange={this.updateQuery}/>
                        <Button type="submit">Explore!</Button>
                        </Form.Group>
                        </Form>     

                        <NiceView cityName={this.state.locationName} lon={this.state.longitude} lat={this.state.latitude}/>  
            </>
        )
    }
}

export default Main;