import React from "react";


class Error extends React.Component{




  render(){

    return(
      <>
      <p>{this.props.error}</p>
      </>
    )
  }
}
export default Error;