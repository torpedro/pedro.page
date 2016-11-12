
export class Page {
  private root: HTMLElement;
  private activePage: string;
  private inTransition: boolean;

  private routeAliases: { [hash: string]: string };

  constructor(root: HTMLElement) {
    this.root = root;
  }
}
