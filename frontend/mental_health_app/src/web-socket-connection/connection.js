import React, { useEffect, useState } from 'react';

const WebSocketComponent = () => {
    const [frameObjects, setFrameObjects] = useState([]);

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

            // Store the first 10 objects in state
            setFrameObjects(prevFrameObjects => {
                const updatedFrameObjects = [...prevFrameObjects, frame].slice(0, 10);
                return updatedFrameObjects;
            });
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
            <h2>First 10 Objects of Frame:</h2>
            <ul>
                {frameObjects.map((frameObject, index) => (
                    <li key={index}>{JSON.stringify(frameObject)}</li>
                ))}
            </ul>
            <div>
                heyyy thereee!! web socket connection set!!
            </div>
        </div>
    );
};

export default WebSocketComponent;

