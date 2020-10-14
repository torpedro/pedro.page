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
                {/* <div id="projects">
                    <p>Currently I work at Jane Street in London, UK. Here's a selection of my past projects.</p>
                    <a target="blank" href="https://github.com/hyrise/sql-parser">
                        <h1>SQL Parser</h1>
                        <h2>C++ Library</h2>
                    </a>
                    <a target="blank" href="https://github.com/torpedro/gdrive-lib">
                        <h1>gdrive</h1>
                        <h2>CLI &amp; Python Library</h2>
                    </a>
                    <a target="blank" href="https://github.com/torpedro/microtest.h">
                        <h1>microtest.h</h1>
                        <h2>C++ Library</h2>
                    </a>
                </div> */}
            </div>
        );
    }
}