import React, { Component } from 'react'

class  Counterap extends Component {
    constructor(props){
    super(props);
    this.state = {
        count : 0 
    };
    }

    increment = ()=>{
      this.setState({count: this.state.count + 1})
    }
render(){
    return (
<>
        <h2>{this.props.title}</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increase</button> 
</>
   
  )
}
}

export default Counterap