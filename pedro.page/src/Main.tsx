import * as React from "react";
import { Project } from "./Project";

export interface IMainProps {
}

export class Main extends React.Component<IMainProps, {}> {
    active : Project | null = null
    brand = React.createRef<HTMLDivElement>()
    more = React.createRef<HTMLDivElement>()

    constructor(props: IMainProps) {
        super(props);
    }

    onChange(project: Project, visible: boolean) {
        if (project == this.active) {
            if (!visible) this.active = null;
        } else {
            // Newly active project
            if (this.active != null) this.active.toggleVisibility()
            this.active = project;
        }
    }

    // onWindowScroll() {
    //     if (this.brand.current && this.more.current) {
    //         let scroll_y = window.pageYOffset;
    //         let brand = this.brand.current;
    //         let more = this.more.current;

    //         window.outerHeight

    //         let brand_bottom = brand.getBoundingClientRect().bottom;
    //         let more_top = more.getBoundingClientRect().top;

    //         // console.log()
    //         // console.log(scroll_y)
    //         let diff = more_top - brand_bottom;

    //         let new_top = (more_top - (brand.offsetHeight / 2) - 50) + "px"
    //         // console.log(new_top);
    //         if (diff < 50) {
    //             brand.style.top = new_top
    //         }
    //     }
    // }

    componentDidMount() {
        let self = this;
        window.addEventListener("scroll", function() {
            if (self.brand.current) {
                let yPos = 0 - (100 * window.pageYOffset / window.outerHeight) / 2.5;
                self.brand.current.style.top = 45 + yPos + "%";
            }
        });
    }

    public render(): JSX.Element {
        return (
            <div id="main">
                <div id="brand">
                    <div ref={this.brand}>
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
                <div id="more" ref={this.more}>
                    <div id="drawer">
                        <div id="left"></div>
                        <div id="right"></div>
                    </div>
                    <div id="content">
                        <h2>Selection of Projects</h2>
                        <div id="projects">
                            <Project onChange={this.onChange.bind(this)} title="C++ SQL Parser" subtitle="" url="https://github.com/hyrise/sql-parser" description="Open-source C++ SQL Parser that I've built for a research database at my university. It can be integrated into any application. Click to visit the GitHub page of the project." />
                            <Project onChange={this.onChange.bind(this)} title="gdrive" subtitle=""  url="https://github.com/torpedro/gdrive-lib" description="Commandline tool and Python Library to query, upload, and download files into Google Drive and Google Sheet.  Click to visit the GitHub page of the project." />
                            <Project onChange={this.onChange.bind(this)} title="POS Explorer" subtitle="" url="https://hpi.de/plattner/projects/project-archive/pos-explorer.html" description="Final project at my university. We built a tool to analise point-of-sales data in real-time for large scale retail businesses." />
                            <Project onChange={this.onChange.bind(this)} title="microtest.h" subtitle="" url="https://github.com/torpedro/microtest.h" description="Lightweight header-only testing framework for C++ to start build test-cases in our application with minimal overhead." />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}