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


            // GET COMMAND illicited by left wrist



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




// define a function to interpret left, wrist commands
// one function gets commands, another function actualizes the commands


const get_left_wrist_command =  function(frame){

    var command = null;
    if(frame.people.length<1)
    {
        return command;
    }

    // normalize by subtracting the root (pelvis) joint coordinates
    var pelvis_x = frame.people[0].joints[0].position.x;
    var pelvis_y = frame.people[0].joints[0].position.y;
    var pelvis_z = frame.people[0].joints[0].position.z;

    var left_wrist_x = (frame.people[0].joints[7].position.x - pelvis_x) * -1;
    var left_wrist_y = (frame.people[0].joints[7].position.y - pelvis_x) * -1;
    var left_wrist_z = (frame.people[0].joints[7].position.z - pelvis_x) * -1;


    if (left_wrist_z < 100)
    {
        return command
    }

    if (left_wrist_x < 200 && left_wrist_x > -200){
        if(left_wrist_y > 500){
            command = 73; //up
            console.log("This hand gives the up command!!")
        }
        else if(left_wrist_y < 100){
            command = 75; //down
            console.log("This hand gives the down command!!")
        }
    }

    else if (left_wrist_y < 500 && left_wrist_x > 100){
        if(left_wrist_x > 200){
            command = 76; //right
            console.log("This hand gives the right command!!")
        }
        else if(left_wrist_x < -200){
            command = 74; //left
            console.log("This hand gives the left command!!")
        }
    }


    return command





}













export default WebSocketComponent;

