import * as React from "react";

export interface IProjectProps {
  title : string;
  subtitle : string;
  url : string;
  description: string;
}

interface State {
  active : boolean;
}

export class Project extends React.Component<IProjectProps, State> {
    constructor(props: IProjectProps) {
        super(props);

        this.state = {
          active: false
        }
    }

    public render(): JSX.Element {
        return (
          <div className="project">
            <a className="project-link" href={this.props.url}>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
                <div className="description">{this.props.description}</div>
            </a>
          </div>
        );
    }
}