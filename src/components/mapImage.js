import React from "react";
import Figure from 'react-bootstrap/Figure';

class MapImage extends React.Component{


    render(){


        return(
            <Figure>
      <Figure.Image
        width={400}
        height={550}
        alt="map-image"
        src={this.props.src}
      />
      <Figure.Caption>
        {this.props.name}
      </Figure.Caption>
    </Figure>
        )
    }
}
export default MapImage;