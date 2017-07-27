import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.scss']
})
export class GlobalHeaderComponent implements OnInit {
  @ViewChild('test') testCompo;
  constructor(private el: ElementRef) { }

  ngOnInit() {

    console.log(this.el.nativeElement)
  }

}
