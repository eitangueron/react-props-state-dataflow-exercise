import React, { Component } from 'react';

class Landing extends Component {
    /* your code here */


    render() {
        let hottestItem = this.props.store.filter(item => item.hottest === true)[0]
        return (
            <div>
                Welcome, {this.props.user}. The hottest item is {hottestItem.item} for ${hottestItem.price}
            </div>
        )

    }
}

export default Landing