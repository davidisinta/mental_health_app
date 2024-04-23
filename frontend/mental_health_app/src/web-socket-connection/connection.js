import React, { useEffect, useState } from 'react';


var direction = ''

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

            var command = get_left_wrist_command(JSON.parse(event.data));
            if (command != null)
            {
                sendWristCommand(command)
            }


            const frame = JSON.parse(event.data);
            // console.log(frame);


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

    // return (
    //     <div>
    //         <h2>First 10 Objects of Frame:</h2>
    //         <ul>
    //
    //             the direction is: {direction}
    //
    //
    //             {/*{frameObjects.map((frameObject, index) => (*/}
    //             {/*    <li key={index}>{JSON.stringify(frameObject)}</li>*/}
    //             {/*))}*/}
    //         </ul>
    //         <div>
    //             heyyy thereee!! web socket connection set!!
    //         </div>
    //     </div>
    // );


};




// define a function to interpret left, wrist commands
// one function gets commands, another function actualizes the commands


const get_left_wrist_command =  function(frame){

    console.log("get left wrist command called")

    var command = null;
    if(frame.people.length<1)
    {
        console.log("frame received, no people")
        return command;
    }

    // normalize by subtracting the root (pelvis) joint coordinates
    var pelvis_x = frame.people[0].joints[0].position.x;

    // console.log("pelvis x coordinates are", pelvis_x)



    var pelvis_y = frame.people[0].joints[0].position.y;
    // console.log("pelvis y coordinates are", pelvis_y)
    var pelvis_z = frame.people[0].joints[0].position.z;
    // console.log("pelvis z coordinates are", pelvis_x)

    var left_wrist_x = (frame.people[0].joints[7].position.x - pelvis_x) * 1;
    console.log("left wrist x position is", left_wrist_x)
    var left_wrist_y = (frame.people[0].joints[7].position.y - pelvis_x) * 1;
    console.log("left wrist y position is ", left_wrist_y)
    var left_wrist_z = (frame.people[0].joints[7].position.z - pelvis_x) * 1;
    console.log("left wrist z position is ", left_wrist_z)



    if (left_wrist_z < 100)
    {
        console.log("hand too low")
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




function sendWristCommand(command){

    console.log("send wrist command called")

    switch (command) {
    case 74:
      if (direction !== 'right') {
        direction = 'left';
      }
      break;
    case 76:
      if (direction !== 'left') {
        direction = 'right';
      }
      break;
    case 73:
      if (direction !== 'down') {
        direction = 'up';
      }
      break;
    case 75:
      if (direction !== 'up') {
        direction = 'down';
      }
      break;
  }


  console.log("the direction taken is:", direction)

}



export default WebSocketComponent;

