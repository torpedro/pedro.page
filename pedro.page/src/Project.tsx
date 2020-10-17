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
          <a className="project" href={this.props.url}>
            <div className="project-link">
                <h1>{this.props.title}</h1>
                {this.props.subtitle.length > 0 ? <h2>{this.props.subtitle}</h2> : ""}
                {this.props.description.length > 0 ? <div className="description">{this.props.description}</div> : ""}
            </div>
          </a>
        );
    }
}