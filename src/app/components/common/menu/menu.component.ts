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
  openItem: string = '';
  constructor() { }

  ngOnInit() {
    console.log(this.subMenu)
  }

  toggleNav(item){
    if( item.open ){
      item.open = false;
      this.subMenu.open = false;
    }else{
      item.open = true;
    }
    console.log( this.subMenu )
  }

}
