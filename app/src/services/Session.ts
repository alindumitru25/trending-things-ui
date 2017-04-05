import * as io from "socket.io-client";

export default class Session {
    constructor() {
        //@TODO JWT auth check
        let socket = io.connect('localhost:3000');
    }
}