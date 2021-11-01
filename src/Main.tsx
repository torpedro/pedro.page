import * as React from "react";
import './Main.scss'

export interface IProps {
}

interface IState {
}

export class Main extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {}
    }

    public render(): JSX.Element {
        return (
            <div id="main">
                <div id="vert-center-container">
                    <div id="vert-centered">
                        <div id="content">
                            <div>
                                <div id="brand" className="corners">
                                    <div id="name">
                                        <h1>Pedro Flemming</h1>
                                        <h2>Software Engineer in London, UK</h2>
                                    </div>
                                    <div id="icons">
                                        <a className="icon linkedin" href="https://www.linkedin.com/in/pedroflemming"></a>
                                        <a className="icon github" href="https://github.com/torpedro"></a>
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