
export class CSSTransform {
	private el: HTMLElement;
	private perspective: number;
	private transforms: string[] = [];

	constructor(element: HTMLElement, perspective?: number) {
		this.el = element;
		this.perspective = perspective;
		this.clear();
	}

	clear(): CSSTransform {
		this.transforms = [];
        return this;
	}

	apply(): CSSTransform {
		this.el.style.transform = `perspective(${this.perspective}px) ${this.transforms.join(" ")}`;
        return this;
	}

	rotate(degreesX: number, degreesY: number, degreesZ: number): CSSTransform {
		if (degreesX) this.transforms.push(`rotateX(${degreesX}deg)`);
		if (degreesY) this.transforms.push(`rotateY(${degreesY}deg)`);
		if (degreesZ) this.transforms.push(`rotateZ(${degreesZ}deg)`);
        return this;
	}
}
