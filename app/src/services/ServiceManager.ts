import Session from "./session";

export default class ServiceManager {
    public session: Session;

    constructor() {
        // init needed services
        this.session = new Session();
    }
}