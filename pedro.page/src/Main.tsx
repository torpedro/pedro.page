import * as React from "react";
import { Project } from "./Project";

export interface IMainProps {
}

interface IMainState {
    moreVisible : boolean;
}

export class Main extends React.Component<IMainProps, IMainState> {
    active : Project | null = null
    brand = React.createRef<HTMLDivElement>()
    content = React.createRef<HTMLDivElement>()
    content_scroll = React.createRef<HTMLDivElement>()

    constructor(props: IMainProps) {
        super(props);


        this.state = {
            moreVisible: false
          }
    }

    componentDidMount() {
        let self = this;
        let y_scroll = 0;
        window.addEventListener('wheel', function (ev : WheelEvent) {
            y_scroll += ev.deltaY;

            if (self.content_scroll.current) {
                if (y_scroll >= 200) {
                    y_scroll = 100;

                    self.content_scroll.current.style.top = "-185px";
                }
                if (y_scroll <= 0) {
                    y_scroll = 0;
                    self.content_scroll.current.style.top = "0px";
                }
            }
        })
    }

    public render(): JSX.Element {
        return (
            <div id="main">
                <div id="vert-center-container">
                    <div id="vert-centered">
                        <div ref={this.content} id="content">
                            <div ref={this.content_scroll}>
                                <div ref={this.brand} id="brand" className="corners">
                                    <div id="name">
                                        <h1>Pedro Flemming</h1>
                                        <h2>Software Engineer in London, UK</h2>
                                    </div>
                                    <div id="icons">
                                        <a className="icon linkedin" href="https://www.linkedin.com/in/pedroflemming"></a>
                                        <a className="icon github" href="https://github.com/torpedro"></a>
                                        <a className="icon instagram" href="https://www.instagram.com/thetorpedro/"></a>
                                    </div>
                                    {/* <div id="moreToggle" onClick={this.toggleMore.bind(this)}>{this.state.moreVisible ? "less" : "more"}</div> */}
                                </div>
                                <div id="projects" className="corners">
                                    <div className="project-list">
                                        <Project title="C++ SQL Parser" subtitle="C++ Library" url="https://github.com/hyrise/sql-parser" description="Open-source C++ SQL Parser that I've built for a research database at my university. It can be integrated into any application." />
                                        <Project title="gdrive" subtitle="Python Tool &amp; Library"  url="https://github.com/torpedro/gdrive-lib" description="Commandline tool and Python Library to query, upload, and download files into Google Drive and Google Sheet." />
                                        <Project title="POS Explorer" subtitle="ERP Application" url="https://hpi.de/plattner/projects/project-archive/pos-explorer.html" description="Final project at my university. We built a tool to analise point-of-sales data in real-time for large scale retail businesses." />
                                        <Project title="microtest.h" subtitle="C++ Library" url="https://github.com/torpedro/microtest.h" description="Lightweight header-only testing framework for C++ to start build test-cases in our application with minimal overhead." />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}