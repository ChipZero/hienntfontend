import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements AfterViewInit {

  constructor() { }

  // ngOnInit() {
    // this.loadScript('../../assets/js/core.min.js');
    // this.loadScript('../../assets/js/script.js');
  // }

  ngAfterViewInit() {
    this.loadScript('../../assets/js/core.min.js');
    this.loadScript('../../assets/js/script.js');
  }

  public loadScript(url) {
    console.log('preparing to load...');
    const node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('header')[0].appendChild(node);
  }
}
