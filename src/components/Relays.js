import React from 'react';
import RelayStatus from './RelayStatus';

export default function Relays(props) {

    props.setPath("/relays");

        return (
            <div className="container">
                <h3 className="mt-3">Relays</h3>
                <RelayStatus />
            </div>
        )
    
}
