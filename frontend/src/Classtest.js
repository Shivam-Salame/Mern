import React,{ Component } from "react";


// props are immutalble 
class Test extends Component {
    render () {
        console.log(this.props);
        return <h1>welcome {this.props.name} </h1>
}
}

export default Test 