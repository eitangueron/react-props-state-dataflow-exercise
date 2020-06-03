import React, { Component } from 'react';
import Item from './Item';

class Home extends Component {

    render() {
        return(
        this.props.store.map(item => <Item key={item.item} item={item} discount={this.props.discount}/>)
        )
        

    }
}

export default Home