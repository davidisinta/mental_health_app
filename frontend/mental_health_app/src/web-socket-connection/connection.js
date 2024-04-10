import React, { useEffect } from 'react';

const WebSocketComponent = () => {
    useEffect(() => {
        // WebSocket connection details
        const hillhouse_server = "cpsc484-03.stdusr.yale.internal";
        const hillhouse_url = "ws://" + hillhouse_server +  ":8888/frames";

        // Create WebSocket connection
        const socket = new WebSocket(hillhouse_url);

        // Event listeners
        socket.onopen = () => {
            console.log('WebSocket connection established');
        };

        socket.onmessage = (event) => {
            const frame = JSON.parse(event.data);
            console.log(frame);
        };

        socket.onerror = (error) => {
            console.log('WebSocket Error: ' + error);
        };

        socket.onclose = () => {
            console.log('WebSocket connection closed');
        };

        // Clean up function
        return () => {
            socket.close();
        };
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <div>
            heyyy thereee!! web socket connection set!!
        </div>
    );
};

export default WebSocketComponent;
