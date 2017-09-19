/// <reference path="../typings/all.d.ts" />

// CSS stylesheets
require("./css/style.scss");
require("./css/small.scss");
require("./css/medium.scss");
require("./css/large.scss");

import { Page } from "./Page";

let page: Page = new Page(<HTMLElement>document.querySelector("#app"));
window["page"] = page;

