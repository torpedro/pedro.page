import * as React from "react";
import { Project } from "./Project";

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
                            <a className="icon linkedin" href="https://www.linkedin.com/in/pedroflemming"></a>
                            <a className="icon github" href="https://github.com/torpedro"></a>
                            <a className="icon instagram" href="https://www.instagram.com/thetorpedro/"></a>
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
                            <Project title="C++ SQL Parser" subtitle="" url="https://github.com/hyrise/sql-parser" description="Open-source C++ SQL Parser that I've built for a research database at my university. It can be integrated into any application. Click to visit the GitHub page of the project." />
                            <Project title="gdrive" subtitle="CLI &amp; Python Library" url="https://github.com/torpedro/gdrive-lib" />
                            <Project title="POS Explorer" subtitle="CLI &amp; Python Library" url="https://hpi.de/plattner/projects/project-archive/pos-explorer.html" />
                            <Project title="microtest.h" subtitle="C++ Library" url="https://github.com/torpedro/microtest.h" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}