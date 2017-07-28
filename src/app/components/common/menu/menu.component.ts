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
    item.open = ( item.open ) ? false : true;

    for ( let i in this.menuData ){
      
    }
    console.log( this.subMenu )
  }

}
