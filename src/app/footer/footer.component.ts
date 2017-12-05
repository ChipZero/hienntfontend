import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.loadScript('../../assets/js/core.min.js');
    // this.loadScript('../../assets/js/script.js');
  }

  // public loadScript(url) {
  //   console.log('preparing to load...');
  //   const node = document.createElement('script');
  //   node.src = url;
  //   node.type = 'text/javascript';
  //   document.getElementsByTagName('footer')[0].appendChild(node);
  // }
}
