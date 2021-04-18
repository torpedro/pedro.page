import * as React from "react";
import { Project } from "./Project";

export interface IMainProps {
}

interface IMainState {
    moreVisible : boolean;
    rotation: number;
}

export class Main extends React.Component<IMainProps, IMainState> {
    active : Project | null = null
    brand = React.createRef<HTMLDivElement>()
    more = React.createRef<HTMLDivElement>()
    content = React.createRef<HTMLDivElement>()
    rotate_div = React.createRef<HTMLDivElement>()
    in_rotation = false
    y_scroll = 0
    touch_diff_x = 0

    constructor(props: IMainProps) {
        super(props);



        this.state = {
            moreVisible: false,
            rotation: 0,
        }
    }

    updateVisible() {
        if (this.more.current && this.brand.current) {
            if (((this.state.rotation - 0) / 180) % 2 == 0) {
                // Front is visible
                // this.more.current.style.opacity = "1";
                // this.brand.current.style.opacity = "1";
            } else {
                // Back is visible
                // this.more.current.style.opacity = "1";
                // this.brand.current.style.opacity = ".3";
            }
        }
    }

    flipLeft(timeout: number) {
        let self = this;
        if (this.in_rotation) return;

        this.in_rotation = true;

        this.setState({ rotation: this.state.rotation + 180 })
        this.updateVisible();

        window.setTimeout(function () {
            self.y_scroll = -100;
            self.touch_diff_x = 50;
            self.in_rotation = false;
        }, timeout)
    }

    flipRight(timeout: number) {
        let self = this;
        if (this.in_rotation) return;

        this.in_rotation = true;

        this.setState({ rotation: this.state.rotation - 180 })
        this.updateVisible();

        window.setTimeout(function () {
            self.y_scroll = 100;
            self.touch_diff_x = -50;
            self.in_rotation = false;
        }, timeout)
    }

    componentDidMount() {
        let self = this;
        window.addEventListener('wheel', function (ev : WheelEvent) {
            self.y_scroll += ev.deltaY;

            if (self.y_scroll >= 200) {
                self.flipLeft(1250)

            }
            if (self.y_scroll <= -200) {
                self.flipRight(1250)
            }
        })

        let touch_start_x = -1;
        window.addEventListener('touchstart', function(ev:TouchEvent) {
            touch_start_x = ev.touches[0].pageX;
        });
        window.addEventListener('touchmove', function(ev:TouchEvent) {
            if (touch_start_x == -1) touch_start_x = ev.touches[0].pageX
            let diff = ev.touches[0].pageX - touch_start_x;

            // positive diff -> swipe right
            // negative diff -> swipe left
            self.touch_diff_x += -diff;
            touch_start_x = ev.touches[0].pageX;

            console.log(self.touch_diff_x)
            if (self.touch_diff_x <= -150) {
                self.flipLeft(750)
            }
            if (self.touch_diff_x >= 150) {
                self.flipRight(750)
            }
        });
        window.addEventListener('touchend', function(ev:TouchEvent) {
            touch_start_x = -1;
        });
    }

    public render(): JSX.Element {
        return (
            <div id="main">
                <div id="vert-center-container">
                    <div id="vert-centered">
                        <div ref={this.content} id="content">
                            <div ref={this.rotate_div} style={ { transform: "rotateY(" + this.state.rotation + "deg)" } }>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}