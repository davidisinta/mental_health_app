import React from 'react';
import direction from "../web-socket-connection/connection";
 // Importing WebSocketComponent and direction variable

const AnotherComponent = () => {
    return (
        <div>
            <h1>Direction: {direction}</h1>
        </div>
    );
};

export default AnotherComponent;
