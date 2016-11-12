
import { PageContent } from "./PageContent";
import * as nanoajax from "nanoajax";


export class Page {
  private root: HTMLElement;
  private pageMap: { [pageID: string]: PageContent };
  private activePage: string;
  private inTransition: boolean;

  private routeAliases: { [hash: string]: string };

  constructor(root: HTMLElement) {
    this.root = root;
    // this.inTransition = false;
    // this.routeAliases = {
    //   "": "home" // default route
    // };

    // this.initNavigation();
    // this.openInitialPage();

    // window.setTimeout(() => {
    //   this.startBorderAnimation();
    // }, 100);

  }

  private startBorderAnimation() {
    this.root.querySelector("#header-bottom-border").classList.add("visible");
  }

  private initNavigation(): void {
    let self: Page = this;
    let pageEls: NodeListOf<Element> = this.root.querySelectorAll("div[data-route]");

    this.pageMap = {};
    for (let i: number = 0; i < pageEls.length; ++i) {
      let page: HTMLElement = <HTMLElement>pageEls.item(i);
      let pageId: string = page.dataset["route"];
      this.pageMap[pageId] = new PageContent(pageId, page);

      // deactivate page immediately
      this.deactivatePage(pageId, false);
    }

    // find links
    let linkEls: NodeListOf<Element> = this.root.querySelectorAll("a[data-route]");
    for (let i: number = 0; i < linkEls.length; ++i) {
      let link: HTMLAnchorElement = <HTMLAnchorElement>linkEls.item(i);
      link.onclick = function(ev: MouseEvent) {
        self.onLinkClick(this, ev);
      };
    }
  }

  private openInitialPage(): void {
    let hash: string = this.getActiveHash();
    this.navigate(hash);
  }

  private onLinkClick(source: HTMLElement, ev: MouseEvent): void {
    let a: HTMLAnchorElement = <HTMLAnchorElement>ev.target;
    let route: string = source.dataset["route"];
    this.navigate(route);
  }

  private navigate(hash: string): void {
    let activeHash: string = this.getActiveHash();
    let pageID: string = (this.routeAliases[hash]) ? this.routeAliases[hash] : hash;

    if (this.hasPage(pageID)) {
      if (pageID !== this.activePage && !this.inTransition) {
        this.activatePage(pageID);

        if (hash !== activeHash) {
          this.setActiveHash(hash);
        }
      }

      if (pageID === this.activePage && hash !== activeHash) {
        this.setActiveHash(hash);
      }

    } else {
      // reset to default page
      this.activatePage("");
      this.setActiveHash("");
    }
  }


  private deactivatePage(id: string, withTransition: boolean) {
    this.inTransition = true;

    let page: PageContent = this.pageMap[id];
    page.deactivate(withTransition, () => {
      this.inTransition = false;
    });
  }

  private activatePage(id: string) {
    let oldPageID: string = this.activePage;
    if (this.activePage) {
      this.deactivatePage(this.activePage, true);
    }

    this.activePage = id;

    let page: PageContent = this.pageMap[id];
    page.activate(true, () => {
       // callback stub
    });

    // set all links for this page to active
    let linkEls: NodeListOf<Element> = this.root.querySelectorAll("a[data-route]");
    for (let i: number = 0; i < linkEls.length; ++i) {
      let link: HTMLAnchorElement = <HTMLAnchorElement>linkEls.item(i);
      let route: string = link.dataset["route"];
      let pageID: string = this.getPageIDOfRoute(route);

      if (pageID === id) {
        link.classList.add("active");
      } else if (pageID === oldPageID) {
        link.classList.remove("active");
      }
    }
  }

  private getActiveHash(): string {
    return location.hash.substr(1);
  }

  private setActiveHash(hash: string): void {
    if (hash) location.hash = `#${hash}`;
    else history.pushState("", document.title, window.location.pathname)
  }

  private hasPage(id: string) {
    return id in this.pageMap;
  }

  private getPageIDOfRoute(route: string) {
    let pageID: string = (this.routeAliases[route]) ? this.routeAliases[route] : route;
    return pageID;
  }
}
