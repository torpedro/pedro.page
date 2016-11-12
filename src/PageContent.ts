
import { CSSTransform } from "./CSSTransform";

export class PageContent {
    private el: HTMLElement;
    private id: string;
    private transform: CSSTransform;

    constructor(id: string, el: HTMLElement) {
        this.el = el;
        this.id = id;
        this.transform = new CSSTransform(el, 3000);
    }

    activate(withTransition: boolean, callback: (() => void)): void {
        this.el.style.zIndex = "1";
        this.transform.clear().rotate(0, 0, 0).apply();
        this.el.style.opacity = "1.0";
        callback();
    }

    deactivate(withTransition: boolean, callback: (() => void)): void {
        if (withTransition) {
            this.waitForTransitionEnd(this.el, "transform", () => {
                this.doWithTransitionDisabled(this.el, () => {
                    this.transform.clear().rotate(0, -179, 0).apply();
                    this.el.style.zIndex = "-1";
                });
                callback();
            });
            
            this.el.style.opacity = "0.0";
            this.transform.clear().rotate(0, 179, 0).apply();

        } else {
            this.doWithTransitionDisabled(this.el, () => {
                this.el.style.opacity = "0.0";
                this.transform.clear().rotate(0, -179, 0).apply();
                this.el.style.zIndex = "-1";
            });
            callback();
        }
    }

    private waitForTransitionEnd(elem: HTMLElement, property: string, callback: (() => void)): void {
        let listener = (evt: TransitionEvent) => {
            if (evt.propertyName === property) {
                elem.removeEventListener("transitionend", listener);
                callback();
            }
        };
        elem.addEventListener("transitionend", listener);
    }

    private doWithTransitionDisabled(elem: HTMLElement, method: (() => void)): void {
        let transition: string = elem.style.transition;
        elem.style.transition = "all 0s ease 0s";
        method();
        window.setTimeout(() => {
            elem.style.transition = transition;
        });
    }
}