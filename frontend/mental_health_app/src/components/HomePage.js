import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [direction, setDirection] = useState("");
  const [directionCount, setDirectionCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const hillhouse_server = "cpsc484-03.stdusr.yale.internal";
    const hillhouse_url = "ws://" + hillhouse_server + ":8888/frames";
    const socket = new WebSocket(hillhouse_url);

    socket.onopen = () => {
      console.log('WebSocket connection established');
    };

    socket.onmessage = (event) => {
      const frame = JSON.parse(event.data);
      const command = getLeftWristCommand(frame);

      if (command !== null) {
        sendWristCommand(command);
      }
    };

    socket.onerror = (error) => {
      console.log('WebSocket Error: ' + error);
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => {
      socket.close();
    };
  }, []);

  useEffect(() => {
    if (direction === "up") {
      console.log('Direction is up');
      setDirectionCount(prevCount => prevCount + 1);
    }
  }, [direction]);

  useEffect(() => {
    if (directionCount > 0) {
      console.log('Direction count exceeds 4');
      handlePlayClick();
    }
  }, [directionCount]);

  const handlePlayClick = () => {
    console.log('Navigating to question-one');
    navigate("/question-one");
  };

  const getLeftWristCommand = (frame) => {
    // Your implementation of get_left_wrist_command function here
    // Note: You may need to adjust the implementation slightly
    var command = null;
    if (frame.people.length < 1) {
      return command;
    }

    // Normalize by subtracting the root (pelvis) joint coordinates
    var pelvis_x = frame.people[0].joints[0].position.x;
    var pelvis_y = frame.people[0].joints[0].position.y;
    var pelvis_z = frame.people[0].joints[0].position.z;
    var left_wrist_x = (frame.people[0].joints[7].position.x - pelvis_x) * -1;
    var left_wrist_y = (frame.people[0].joints[7].position.y - pelvis_y) * -1;
    var left_wrist_z = (frame.people[0].joints[7].position.z - pelvis_z) * -1;

    if (left_wrist_z < 100) {
      return command;
    }

    if (left_wrist_x < 200 && left_wrist_x > -200) {
      if (left_wrist_y > 500) {
        command = 73; // UP
      } else if (left_wrist_y < 100) {
        command = 75; // DOWN
      }
    } else if (left_wrist_y < 500 && left_wrist_y > 100) {
      if (left_wrist_x > 200) {
        command = 76; // RIGHT
      } else if (left_wrist_x < -200) {
        command = 74; // LEFT
      }
    }
    return command;
  };

  const sendWristCommand = (command) => {
    // Your implementation of sendWristCommand function here
    // Note: You may need to adjust the implementation slightly
    switch (command) {
      case 74:
        if (direction !== 'right') {
          setDirection('left');
        }
        break;
      case 76:
        if (direction !== 'left') {
          setDirection('right');
        }
        break;
      case 73:
        if (direction !== 'down') {
          setDirection('up');
        }
        break;
      case 75:
        if (direction !== 'up') {
          setDirection('down');
        }
        break;
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600">
      <button
        onClick={handlePlayClick}
        className="flex items-center justify-center h-64 max-w-2xl px-8 py-4 text-4xl font-bold text-white transition duration-500 ease-in-out transform bg-transparent border-4 border-white rounded-full shadow-xl hover:scale-105 hover:bg-white hover:text-indigo-500 hover:shadow-2xl"
        style={{ backdropFilter: "blur(10px)" }}
      >
        {" "}
        <span role="img" aria-label="raising hand">
          🙋
        </span>
        I Have A Question!
        <br />
        <br />
        Raise Your Hand To Answer{" "}
        <span role="img" aria-label="raising hand">
          🙋
        </span>
      </button>
    </div>
  );
};

export default HomePage;
