import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  minisalKey: string;
  domain: string;
  sharableUrl: string;
  whatsappMessage: string;
  whatsAppUrl: string;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.domain = 'http://ny18.minisalute.com/h/';
    this.route.params.subscribe((params: Params) => {
      this.minisalKey = params.minisalkey;
    });
    this.sharableUrl = this.domain + this.minisalKey;
    // tslint:disable-next-line:max-line-length
    this.whatsappMessage = '🎊🎊 *Wishing You a Very Happy New Year 2018* 🎉🎉. Click the link below! its a special something for you 😁';
    this.whatsAppUrl = 'whatsapp://send?text=' + this.whatsappMessage + this.sharableUrl;
  }

  onShareClick() {
    window.location.href = encodeURI(this.whatsAppUrl);
  }

}
