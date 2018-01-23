import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Meta } from '@angular/platform-browser';

declare let $: any;

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  selectedSrc: number;
  selectedGreet: number;
  selectedUserName: string;
  minisalKey: string;
  decodedArray: string[];
  decodedParam: string;
  @Input() isCustomButton = true;
  isChrome: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private meta: Meta) {
    this.meta.addTags([
      { property: 'og:url', content: 'https://ny18.minisalute.com' + this.router.url },
      { name: 'description', content: 'Best wishes to you. \(•̀ᴗ•́)>' },
      { property: 'og:title', content: 'Happy New year 2018' },
      { property: 'og:description', content: 'Best wishes to you. \(•̀ᴗ•́)>' },
      { property: 'og:type', content: 'article' },
      { property: 'og:locale', content: 'en_GB' }
    ]);
    // Routes and stuffs
    this.route.params.subscribe((params: Params) => {
      this.minisalKey = params.minisalkey;
    });
    if (this.minisalKey !== undefined) {
      this.decodedParam = atob(this.minisalKey);
      this.decodedArray = this.decodedParam.split('|');
    }
    this.isChrome = false;
  }
  ngOnInit() {

    setInterval(function () {
      $('.btn-begin').effect('pulsate');
    }, 3000);

    if (this.decodedParam !== null && this.decodedParam !== undefined && this.decodedParam !== '') {
      this.selectedGreet = parseInt(this.decodedArray[0], 10);
      this.selectedSrc = parseInt(this.decodedArray[1], 10);
      this.selectedUserName = this.decodedArray[2];
    } else {
      this.selectedGreet = 0;
      this.selectedSrc = 0;
      this.selectedUserName = null;
    }
    this.isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  }

}
