import React, { useEffect, useState } from 'react';
import { useHand } from '../hand/HandRaiseContext';

const WebSocketComponent = () => {
    const { setWhichHandRaised } = useHand();

    useEffect(() => {
        // WebSocket connection details
        const hillhouse_server = "cpsc484-03.stdusr.yale.internal";
        const hillhouse_url = "ws://" + hillhouse_server +  ":8888/frames";
        var value = 0;
        // Create WebSocket connection
        const socket = new WebSocket(hillhouse_url);

        // Event listeners
        socket.onopen = () => {
            console.log('WebSocket connection established');
        };

        socket.onmessage = (event) => {

            const frame = JSON.parse(event.data);
            if (left_hand_raised(frame)) {
                value = 0;
                console.log("Left hand raised...");
                setWhichHandRaised(1);
            } else if (right_hand_raised(frame)) {
                value = 0;
                console.log("Right hand raised...");
                setWhichHandRaised(2);
            } else {
                value ++;
                if(value == 30) {
                    setWhichHandRaised(0);
                    value = 0;
                }
            }
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
    }, []);
};



const get_left_wrist_command =  function(frame){

}

const left_hand_raised =  function(frame){
    if(frame.people.length<1) {
        console.log("frame received, no people")
        return false;
    }
    var left_hand = avg_left_hand_height(frame);
    var hips = avg_waist_height(frame);
    var wrist_above_hips = hips - left_hand;

    // This value may need to be tweaked
    if (wrist_above_hips > 400){
       return true;
    }

    return false;
}

const right_hand_raised =  function(frame){
    if(frame.people.length<1) {
        console.log("frame received, no people")
        return false;
    }
    var right_hand = avg_right_hand_height(frame);
    var hips = avg_waist_height(frame)
    console.log("avg right: ", right_hand, " avg waist: ", hips);
    var wrist_above_hips = hips - right_hand;

    // This value may need to be tweaked
    if (wrist_above_hips > 400){
       return true;
    }

    return false;
}

const avg_waist_height = function(frame) {
    var pelvis_y = frame.people[0].joints[0].position.y;
    var hip_left_y = frame.people[0].joints[18].position.y;
    var hip_right_y = frame.people[0].joints[22].position.y;

    return (pelvis_y+hip_left_y+hip_right_y)/3;
}

const avg_left_hand_height = function(frame) {
    // elbow_right, wrist_right, hand_right, handTip_right, Thumb_right
    var elbow_left = frame.people[0].joints[6].position.y;
    var wrist_left = frame.people[0].joints[7].position.y;
    var hand_left = frame.people[0].joints[8].position.y;
    var hand_tip_left = frame.people[0].joints[9].position.y;

    return (elbow_left+wrist_left+hand_left+hand_tip_left)/4;
}

const avg_right_hand_height = function(frame) {
    // elbow_right, wrist_right, hand_right, handTip_right, Thumb_right
    var elbow_right = frame.people[0].joints[13].position.y;
    var wrist_right = frame.people[0].joints[14].position.y;
    var hand_right = frame.people[0].joints[15].position.y;
    var hand_tip_right = frame.people[0].joints[16].position.y;

    return (elbow_right+wrist_right+hand_right+hand_tip_right)/4;
}

export default WebSocketComponent;

