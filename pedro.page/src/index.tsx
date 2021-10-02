import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Main } from "./Main";

export class App {
    constructor() {
        this.render();
    }

    private render(): void {
        ReactDOM.render(React.createElement(Main, {}), document.getElementById("index"));
    }
}

var app = new App()