
// Display 1, Location: AKW
// Server_Name: cpsc484-01.yale.internal
// Display 2, Location: Becton
// Server_Name: cpsc484-02.yale.internal
// Display 3, Location: Davies Auditorium
// Server_Name: cpsc484-03.yale.internal
// Display 4, Location: 17 Hillhouse
// Server_Name: cpsc484-04.yale.internal

var hillhouse_server = "cpsc484-03.stdusr.yale.internal";

var hillhouse_url = "http://" + hillhouse_server +  ":8888/frames";

// The following expansion on this code snippeta
// creates a connection to [cpsc484-01.yale.internal]:8888/frames
// and prints the details of each raw frame collected
// by the Kinect camera on the HCI display.

$(document).ready(function () {
    var socket = new WebSocket(hillhouse_url);

    socket.onmessage = function (event) {
        var frame = JSON.parse(event.data);
        console.log(frame);
    };

    socket.onerror = function (error) {
        console.log('WebSocket Error: ' + error);
    };

    socket.onopen = function (event) {
        console.log('WebSocket connection established');
    };

    socket.onclose = function (event) {
        console.log('WebSocket connection closed');
    };
});