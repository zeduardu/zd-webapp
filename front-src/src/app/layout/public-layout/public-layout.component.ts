import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';
import { faCircleUser, faPenSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-public-layout',
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.scss']
})

export class PublicLayoutComponent {
  public isCollapsed = true;
  private lastPoppedUrl: string | undefined = '';
  private yScrollStack: number[] = [];

  // Font awesome icons used in the template
  faPenSquare = faPenSquare;
  faCircleUser = faCircleUser;

  constructor(
    public location: Location,
    private router: Router,
  ) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
      if (event instanceof NavigationStart) {
        if (event.url != this.lastPoppedUrl) {
          this.yScrollStack.push(window.scrollY);
        }
      }
      else if (event instanceof NavigationEnd) {
        if (event.url == this.lastPoppedUrl) {
          this.lastPoppedUrl = undefined;
          window.scroll(0, this.yScrollStack.pop() || 0);
        }
        else
        {
          window.scroll(0, 0);
        }
      }
    });
    this.location.subscribe((ev: PopStateEvent) => {
      this.lastPoppedUrl = ev.url;
    });
  }

  isHome() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee === '#/home') {
      return true;
    }
    else
    {
      return false;
    }
  }

  isDocumentation(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if( titlee === '#/documentation' ) {
        return true;
    }
    else {
        return false;
    }
  }
}
