import React from "react";
import Table from 'react-bootstrap/Table';

class NiceView extends React.Component{
    render(){


        return(
            <>
            <Table striped bordered hover id="tableContent">
      <thead>
        <tr>
          <th>City Name</th>
          <th>Longitude</th>
          <th>Latitude</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{this.props.cityName}</td>
          <td>{this.props.lon}</td>
          <td>{this.props.lat}</td>
        </tr>
      </tbody>
    </Table>
            </>
        )
    }
}

export default NiceView;