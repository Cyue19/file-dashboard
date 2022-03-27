import React from 'react';
import RelayStatus from './RelayStatus';

export default function Relays(props) {

    props.setPath("/relays");

        return (
            <div className="container px-4 m-0">
                <h3 className="mt-3">Relays</h3>
                <RelayStatus />
            </div>
        )
    
}
