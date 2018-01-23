import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-firebg',
  templateUrl: './firebg.component.html',
  styleUrls: ['./firebg.component.css']
})
export class FirebgComponent implements OnInit {
  // Initial declarations
  minisalKey: string;
  decodedParam: string;
  // URL Parameters
  activeHeaderColor: string;
  activeDialogue: string;
  activeIconImage: string;
  activeUser: string;

  signatureEnabled: boolean;
  // Makeshift database
  arrHeaderColors: string[] = [
    'default', 'uniquered', 'brightblue', 'sunnyyellow'
  ];
  arrDialogues: string[] = [
    'May the Divine Lights of Diwali Shine Peace, Prosperity, Happiness and Good health in your life.',
    'Wishing that this Deepavali brings prosperity to your business and more opportunities for us to work together.',
    'May your home be filled with good vibes and intensively positive aura as we celebrate the Diwali festival.',
    'Wishing you a very prosperous Diwali, and hoping that we have many successful endeavours in the coming year.',
    'May the divine light of Diwali enlighten you on the path of success, wealth and prosperity.'
  ];
  arrIconImages: string[] = [
    'earthlights.png',
    'earthlights2.png',
    'earthlights3.png',
    'lantern.png',
    'lantern2.png',
    'lotuscandle.png',
    'lotuscandle2.png',
    'om.png',
    'swastika.png'
  ];

  constructor(private route: ActivatedRoute, private router: Router) {
    // Routes and stuffs
    this.route.params.subscribe((params: Params) => {
      this.minisalKey = params.minisalkey;
      if (this.minisalKey != null) {
        this.signatureEnabled = true;
      } else { this.signatureEnabled = false; }
    });
  }
  ngOnInit() {
    // Default values
    const defaultIndex = 0;
    this.activeHeaderColor = this.arrHeaderColors[defaultIndex];
    this.activeDialogue = this.arrDialogues[defaultIndex];
    this.activeIconImage = this.arrIconImages[defaultIndex];
    if (this.signatureEnabled) {
      this.decodedParam = atob(this.minisalKey);
      let tempArr: string[];
      tempArr = this.decodedParam.split('|');

      this.activeHeaderColor = this.arrHeaderColors[tempArr[0]];
      this.activeDialogue = this.arrDialogues[tempArr[1]];
      this.activeIconImage = this.arrIconImages[tempArr[2]];
      if (tempArr[3] === '}') {
        this.activeUser = '\\(•̀ᴗ•́)>';
      } else {
        this.activeUser = tempArr[3];
      }

      console.log(tempArr);
    }
  }


}
