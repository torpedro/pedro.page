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

    toggleVisibility() {
      this.setState({ active : !this.state.active })
    }

    public render(): JSX.Element {
        return (
          <div className="project">
            <div className="project-link">
                <h1 onClick={() => this.toggleVisibility()}>{this.props.title}</h1>
                {this.props.subtitle.length > 0 ? <h2>{this.props.subtitle}</h2> : ""}
                {this.props.description.length > 0 ? <div className={"description " + (this.state.active ? "active" : "inactive")}>{this.props.description}<br /><a href={this.props.url}>Click here to visit the project website</a></div> : ""}
            </div>
          </div>
        );
    }
}