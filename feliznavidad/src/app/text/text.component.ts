import { Component, OnInit, Input } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})

export class TextComponent implements OnInit {
  animationDone: boolean;
  arrMessageLibrary: string[];
  selectedMessage: string;
  userName: string;
  hasUsername: boolean;
  @Input() nameSrc: string;
  @Input() textSrc: number;
  @Input() isCustomButton = true;

  constructor() {
    this.animationDone = false;
    this.arrMessageLibrary = [
      'May you always be surrounded by hope and guided by the stars. Have a prosperous New Year!',
      'Cheers to a better life and a bright future. Have a prosperous New Year!',
      'Roses are red, violets are blue, it’s party time, happy New Year to you!',
      'May your New Year arrive with hope and a bag full of blessings. Have a prosperous and healthy New Year!',
      'May this New Year give you the courage to face a new horizon. Have a blessed New Year!',
      'May each day of the New Year be filled with contentment, opportunities, peace and abundance. Happy New Year!'
    ];
  }

  ngOnInit() {

    this.fnAnimate()
      .then((data: boolean) => {
        if (data) {
          this.animationDone = true;
          return Promise.resolve(data);
        }
      })
      .then((data: boolean) => {
        if (data) {
          this.bodyFadeIn();
        }
      });

    if (this.nameSrc !== undefined && this.nameSrc !== null && this.nameSrc !== '') {
      this.setName(this.nameSrc);
      this.hasUsername = true;
    } else {
      this.hasUsername = false;
    }
    if (this.textSrc !== undefined && this.textSrc !== null) {
      this.setMessage(this.textSrc);
    } else {
      this.setMessage(0);
    }
  }

  private fnAnimate() {
    return new Promise((resolve, reject) => {
      $('.happy').show('fade', 2000).hide('puff', 2000, function () {
        $('.new-year').show('fade').hide('puff', 2000, function () {
          $.confetti.start();
          $('.twothousandeighteen').show('puff', 5000).hide('fade', 1000, function () {
            resolve(true);
          });
        });
      });
    });
  }

  private bodyFadeIn() {
    return new Promise((resolve, reject) => {
      $('.greetingContainer').show('fade', 2000, function () {
        resolve(true);
      });
    });
  }

  private setMessage(textSrc) {
    this.selectedMessage = this.arrMessageLibrary[textSrc];
  }
  private setName(nameSrc) {
    this.userName = nameSrc;
  }

}
