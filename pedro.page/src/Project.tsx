import * as React from "react";

export interface IProjectProps {
  title : string;
  subtitle : string;
  url : string;
  description: string;
}

interface State {
  visible : boolean;
}

export class Project extends React.Component<IProjectProps, State> {
    constructor(props: IProjectProps) {
        super(props);

        this.state = {
          visible: false
        }
    }

    toggleVisibility() {
      let visible = !this.state.visible;
      this.setState({ visible })
      // this.props.onChange(this, visible)
    }

    public render(): JSX.Element {
        return (
          <a className="project" href={this.props.url}>
            <div className="project-name">
                <h1 onClick={() => this.toggleVisibility()}>{this.props.title}</h1>
                {this.props.subtitle.length > 0 ? <h2>{this.props.subtitle}</h2> : ""}
                {/* {this.props.description.length > 0 ? <div className={"description " + (this.state.visible ? "active" : "inactive")}>{this.props.description}<br /><a href={this.props.url}>Click here to visit the project website</a></div> : ""} */}
            </div>
          </a>
        );
    }
}