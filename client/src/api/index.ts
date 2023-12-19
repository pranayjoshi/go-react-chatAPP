// api/index.js
import Cookies from 'js-cookie';
var socket = new WebSocket('ws://localhost:9000/ws');

let connect = (cb:any) => {
  console.log("connecting")

  socket.onopen = () => {
    console.log("Successfully Connected");
  }
  
  socket.onmessage = (msg) => {
    console.log("Message from WebSocket: ", msg);
    cb(msg);
  }

  socket.onclose = (event) => {
    console.log("Socket Closed Connection: ", event)
  }

  socket.onerror = (error) => {
    console.log("Socket Error: ", error)
  }
};

let sendMsg = (msg:any) => {
  console.log("sending msg: ", msg);
  let username = Cookies.get('username');
console.log(username);
  const data = {
    "Type": "message",
    "Data": msg,
    "user":
  }
  socket.send(JSON.stringify(data));
};

export { connect, sendMsg };