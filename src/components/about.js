import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
    render() {
        return (
            <div>
                <h1>Hello Welcome to Redux with Jalal {this.props.userName}</h1>
                <Link to='/'>Go to Home</Link>
            </div>
        )
    }
}


export default About;
