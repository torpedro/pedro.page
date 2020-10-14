import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.scss';
import { Main } from "./Main";

export class App {
    constructor() {
        this.render();
    }

    private render(): void {
        ReactDOM.render(React.createElement(Main, {}), document.getElementById("app"));
    }
}

var app = new App()