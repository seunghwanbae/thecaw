import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

var loadMenu = [
    {
      name: 'home',
      routerLink: '/'
    },
    {
      name: 'works1',
      routerLink: '/works'
    },
    {
      name: 'works2',
      /*routerLink: '/works',*/
      list: [
        {
          name: 'javascript',
          /*routerLink: '/javascript',*/
          list: [
            { name: 'javascript-sub1'},
            { name: 'javascript-sub2'},
            { name: 'javascript-sub3'}
          ]
        },
        {
          name: 'css',
          /*link: '/css',*/
          list: [
            {
              name: 'css-sub1',
              list: [
                { name: 'css-sub1-1'},
                { name: 'css-sub1-2'},
                { name: 'css-sub1-3'}
              ]
            },
            { name: 'css-sub2'},
            { name: 'css-sub3'}
          ]
        },
        {
          name: 'html',
          link: 'html'
        }
      ]
    },
    {
      name: 'works3',
      // routerLink: '/works',
      list: [
        {
          name: 'javascriptssss',
          routerLink: '/javascript'
        },
        {
          name: 'css',
          link: '/css'
        },
        {
          name: 'html',
          link: 'html'
        }
      ]
    }
  ];

@Component({
  selector: 'app-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.scss']
})
export class GlobalHeaderComponent implements OnInit {
  @ViewChild('test') testCompo;
  constructor(private el: ElementRef) { }
  menuData: any = loadMenu;
  ngOnInit() {}

}
