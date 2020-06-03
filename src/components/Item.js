import React, { Component } from 'react';

class Item extends Component {
    render() {
        let itemPrice = this.props.discount ? Math.round( this.props.item.price * (1 - this.props.item.discount) ): this.props.item.price 
        return (
        <div key={this.props.item.item}>{this.props.item.item}: ${itemPrice}</div>
        )}
}

export default Item