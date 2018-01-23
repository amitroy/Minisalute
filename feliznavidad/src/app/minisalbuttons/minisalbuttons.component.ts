import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
declare let $: any;

@Component({
  selector: 'app-minisalbuttons',
  templateUrl: './minisalbuttons.component.html',
  styleUrls: ['./minisalbuttons.component.css']
})
export class MinisalbuttonsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  onCustomizeGreetClick() {
    $.confetti.stop();
    console.log('here');
    this.router.navigate(['/c']);
  }
}
