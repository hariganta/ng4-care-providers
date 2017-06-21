import { WizardComponent, MovingDirection } from 'ng2-archwizard';
import { Component, OnInit, Inject, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  private imagePath: any = '';
  private states: String[] = [];
  private accountType: String = '';
  private accounts: Array<any> = [];
  private activeAccount: Object = {};

  @ViewChild(WizardComponent)
  public wizard: WizardComponent;

  constructor() {}

  ngOnInit() {
    this.states = [
      'Alaska',
      'Alabama',
      'Indiana',
      'Illinois',
      'Ohio',
      'New York'
    ];

    this.accounts = [{
      title: 'Care Seeker',
      value: 'CS',
      fieldName: 'careSeeker',
      classNames: 'fa-users'
    },
    {
      title: 'Care Provider',
      value: 'CP',
      fieldName: 'careProvider',
      classNames: 'fa-hand-peace-o'
    }];
    debugger;
    console.log(this.wizard);
  }

  onAccountSelect(ca: Object): void {
    this.activeAccount = ca;
  }

  onFileInput(e: any): void {
    const r = new FileReader();
    const file = e.target.files[0];

    r.onload = (ev: any) => {
      this.imagePath = ev.target.result;
    };
    r.readAsDataURL(file);
  }

  onAccountChange(ca: any): void {
    //this.accountType = ca.value;
    //console.log(this.accountType);
  }
}
