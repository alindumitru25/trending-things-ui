import * as React from "react";
import * as ReactDOM from "react-dom";
import ServiceManager from "../services/ServiceManager";
import {LandingPage} from "./landing/LandingPage";
import "./../styles/styles-bundle.scss";

var session = new ServiceManager();

ReactDOM.render(
    <LandingPage />,
    document.getElementById('container')
);