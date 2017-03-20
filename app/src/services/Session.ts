import * as io from "socket.io-client";

export default class Session {
    constructor() {
        let socket = io.connect('localhost:3000');
    }
}