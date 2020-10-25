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
    more = React.createRef<HTMLDivElement>()

    constructor(props: IMainProps) {
        super(props);


        this.state = {
            moreVisible: false
          }
    }

    onProjectChange(project: Project, visible: boolean) {
        if (project == this.active) {
            if (!visible) this.active = null;
        } else {
            // Newly active project
            if (this.active != null) this.active.toggleVisibility()
            this.active = project;
        }
    }
    deactivateProjects() {
        if (this.active != null) {
            this.active.toggleVisibility();
            this.active = null;
        }
    }

    activeToggle : NodeJS.Timeout | null = null;

    toggleMore() {
        if (this.more.current) {
            let self = this
            let more = this.more.current;
            let height = more.offsetHeight;

            if (this.activeToggle) {
                clearTimeout(this.activeToggle)
            }

            if (!this.state.moreVisible) {
                // Show

                this.setState({ moreVisible : true })

                this.activeToggle = setTimeout(function() {
                    more.style.height = height + "px";

                    self.activeToggle = setTimeout(function() {
                        more.style.height = "auto";
                    }, 600);
                }, 20);
            } else {
                // Hide
                more.style.height = height + "px";

                this.activeToggle = setTimeout(function() {
                    more.style.height = "0px";

                    self.activeToggle = setTimeout(function() {
                        more.style.height = "";
                        self.setState({ moreVisible : false });
                        self.deactivateProjects();
                    }, 600);
                }, 20)
            }
        }
    }

    public render(): JSX.Element {
        return (
            <div id="main">
                <div id="vert-center-container">
                    <div id="vert-centered">
                        <div ref={this.brand} id="brand">
                            <div id="name">
                                <h1>Pedro Flemming</h1>
                                <h2>Software Engineer in London, UK</h2>
                            </div>
                            <div id="icons">
                                <a className="icon linkedin" href="https://www.linkedin.com/in/pedroflemming"></a>
                                <a className="icon github" href="https://github.com/torpedro"></a>
                                <a className="icon instagram" href="https://www.instagram.com/thetorpedro/"></a>
                            </div>
                            <div id="moreToggle" onClick={this.toggleMore.bind(this)}>{this.state.moreVisible ? "less" : "more"}</div>
                        </div>
                        <div id="more" className={(this.state.moreVisible ? "visible" : "hidden")} ref={this.more}>
                            <div id="content">
                                <h2>Selection of Projects</h2>
                                <div id="projects">
                                    <Project onChange={this.onProjectChange.bind(this)} title="C++ SQL Parser" subtitle="" url="https://github.com/hyrise/sql-parser" description="Open-source C++ SQL Parser that I've built for a research database at my university. It can be integrated into any application." />
                                    <Project onChange={this.onProjectChange.bind(this)} title="gdrive" subtitle=""  url="https://github.com/torpedro/gdrive-lib" description="Commandline tool and Python Library to query, upload, and download files into Google Drive and Google Sheet." />
                                    <Project onChange={this.onProjectChange.bind(this)} title="POS Explorer" subtitle="" url="https://hpi.de/plattner/projects/project-archive/pos-explorer.html" description="Final project at my university. We built a tool to analise point-of-sales data in real-time for large scale retail businesses." />
                                    <Project onChange={this.onProjectChange.bind(this)} title="microtest.h" subtitle="" url="https://github.com/torpedro/microtest.h" description="Lightweight header-only testing framework for C++ to start build test-cases in our application with minimal overhead." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}