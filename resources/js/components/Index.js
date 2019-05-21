import React, {Component} from 'react';
import Article from './Article';

class Body extends Component {
    render() {
        return (
            <div>
                <Article />
                <Article />
                <Article />
                <Article />
            </div>
        );
    }
}

export default Body;