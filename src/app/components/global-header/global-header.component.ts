import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

var loadMenu = [
    {
      name: 'home',
      routerLink: '/'
    },
    {
      name: 'works',
      routerLink: '/works',
      list: [
        {
          name: 'javascript',
          routerLink: '/javascript',
          list: [
            { name: 'sub1'},
            { name: 'sub2'},
            { name: 'sub3'}
          ]
        },
        {
          name: 'css',
          link: '/css',
          list: [
            { name: 'sub1'},
            { name: 'sub2'},
            { name: 'sub3'}
          ]
        },
        {
          name: 'html',
          link: 'html'
        }
      ]
    },
    {
      name: 'works',
      routerLink: '/works',
      list: [
        {
          name: 'javascript',
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
