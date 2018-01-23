import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';

declare let $: any;

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent implements OnInit {
  name: string;
  checked: boolean;
  minisalkey: string;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.checked = true;
  }

  ngOnInit() {
    if ($ !== undefined) {
      $.confetti.stop();
    }
  }

  private onCustomFormSubmit(formData: NgForm) {
    const mr = formData.value.messageRadio;
    const tr = formData.value.themeRadio;
    const un = formData.value.userName;
    console.log(mr + '|' + tr + '|' + un);
    this.minisalkey = btoa(mr + '|' + tr + '|' + un);
    this.router.navigate(['/p', this.minisalkey]);

  }

  private btnPreviewClicked() {
    this.router.navigate(['/p', this.minisalkey]);
  }

}
