import React, { Component } from 'react'
import RelayStatus from './RelayStatus';

export default class Relays extends Component {
    render() {
        return (
            <div className="container">
                <RelayStatus />
            </div>
        )
    }
}
