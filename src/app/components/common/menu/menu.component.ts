import { Component, OnInit, Input, ViewChild } from '@angular/core';
@Component({
  selector: 'caw-menu, [caw-menu]',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() menuData;
  @Input() indexString: string = '0';
  @ViewChild('subMenu') subMenu;
  constructor() { }

  ngOnInit() {
    // console.log(this.menuData[2].list[0]);
  }

  toggleNav(item){
    if( item.list ){
      item.open = ( item.open ) ? false : true;
      if( item.open === false ){
        this.closeToggle(item.list);
      }
    }
  }

  closeToggle(list){
    if( list ){
      for ( let i in list ){
        list[i].open = false;
        if( list[i].list ){
          this.closeToggle(list[i].list);
        }
      }
    }
  }

}
