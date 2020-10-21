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
                        <h2>Selection of Projects</h2>
                        <div id="projects">
                            <Project title="C++ SQL Parser" subtitle="" url="https://github.com/hyrise/sql-parser" description="Open-source C++ SQL Parser that I've built for a research database at my university. It can be integrated into any application. Click to visit the GitHub page of the project." />
                            <Project title="gdrive" subtitle=""  url="https://github.com/torpedro/gdrive-lib" description="Commandline tool and Python Library to query, upload, and download files into Google Drive and Google Sheet.  Click to visit the GitHub page of the project." />
                            <Project title="POS Explorer" subtitle="" url="https://hpi.de/plattner/projects/project-archive/pos-explorer.html" description="Final project at my university. We built a tool to analise point-of-sales data in real-time for large scale retail businesses." />
                            <Project title="microtest.h" subtitle="" url="https://github.com/torpedro/microtest.h" description="Lightweight header-only testing framework for C++ to start build test-cases in our application with minimal overhead." />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}