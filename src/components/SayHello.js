import React, { Component } from 'react';
class SayHello extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <React.Fragment>
                <h1>Hello {this.props.name} !!!</h1>
                <p>Age : {this.props.age} </p>
            </React.Fragment>
        );
    }
}

export default SayHello;