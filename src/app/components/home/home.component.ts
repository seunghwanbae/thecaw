import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	animations: [
    trigger('animationState', [
      state('inactive', style({
      	// overflow: 'hidden',
      	display: 'none',
      	height: '0',
        // transform: 'translateX(0) scale(1)'
      })),
      state('active',   style({
      	display: 'block',
      	height: '*'/*,
      	overflow: '*'*/
        // transform: 'translateX(50%) scale(2)'
      })),
      transition('* <=> *', animate('500ms ease-in-out'))
    ])
  ]
})
export class HomeComponent implements OnInit {
	animationStateNow: string = 'inactive';
	constructor() { }

	ngOnInit() {
	}

	animationStart( event ) {
		console.log('toState:' + event.toState, 'start');
	}
	animationDone( event ) {
		console.log('toState:' + event.toState, 'end');
	}
	toggleState(){
		this.animationStateNow = (this.animationStateNow === 'inactive') ? 'active' : 'inactive';
	}

}
