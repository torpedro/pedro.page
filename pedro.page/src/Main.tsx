import * as React from "react";

export interface IMainProps {
}

export class Main extends React.Component<IMainProps, {}> {
    map : HTMLDivElement | null = null;

    constructor(props: IMainProps) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div id="main">
                <div id="brand">
                    <div>
                        <div id="name">
                            <h1>Pedro Flemming</h1>
                            <h2>Software Engineer in London, UK</h2>
                        </div>
                        <div id="icons">
                            <a target="blank" className="icon linkedin" href="https://www.linkedin.com/in/pedroflemming"></a>
                            <a target="blank" className="icon github" href="https://github.com/torpedro"></a>
                            <a target="blank" className="icon instagram" href="https://www.instagram.com/thetorpedro/"></a>
                        </div>
                    </div>
                </div>
                <div id="more">
                    <div id="drawer">
                        <div id="left"></div>
                        <div id="right"></div>
                    </div>
                    <div id="content">
                        <div id="projects">
                            <a target="blank" href="https://github.com/hyrise/sql-parser">
                                <h1>SQL Parser</h1>
                                <h2>C++ Library</h2>
                            </a>
                            <a target="blank" href="https://github.com/torpedro/gdrive-lib">
                                <h1>gdrive</h1>
                                <h2>CLI &amp; Python Library</h2>
                            </a>
                            <a target="blank" href="https://hpi.de/plattner/projects/project-archive/pos-explorer.html">
                                <h1>POS Explorer</h1>
                                <h2>ERP Application</h2>
                            </a>
                            <a target="blank" href="https://github.com/torpedro/microtest.h">
                                <h1>microtest.h</h1>
                                <h2>C++ Library</h2>
                            </a>
                            <a target="blank" href="https://epic-circles.torpedro.com">
                                <h1>Epic Circles</h1>
                                <h2>JavaScript</h2>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}