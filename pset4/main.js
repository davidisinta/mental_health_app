
// Display 1, Location: AKW
// Server_Name: cpsc484-01.yale.internal
// Display 2, Location: Becton
// Server_Name: cpsc484-02.yale.internal
// Display 3, Location: Davies Auditorium
// Server_Name: cpsc484-03.yale.internal
// Display 4, Location: 17 Hillhouse
// Server_Name: cpsc484-04.yale.internal

// var becton_server = "cpsc484-02.yale.internal";
//
// var becton_url = "ws://" + becton_server +  ":8888/frames";
//
// var socket = new WebSocket(becton_url);

var socket = new WebSocket("ws://cpsc484-04.yale.internal:8888/frames");

// The following expansion on this code snippet
// creates a connection to [cpsc484-01.yale.internal]:8888/frames
// and prints the details of each raw frame collected
// by the Kinect camera on the HCI display.


// var host = "cpsc484-01.yale.internal:8888";
//
// $(document).ready(function () {
//     frames.start();
// });
//
// var frames = {
//     socket: null,
//
//     start: function () {
//         var url = "ws://" + host + "/frames";
//         frames.socket = new WebSocket(url);
//         frames.socket.onmessage = function (event) {
//             frames.show(JSON.parse(event.data));
//         }
//     },
//
//     show: function (frame) {
//         console.log(frame);
//     }
// };