import { AutofillMonitor } from '@angular/cdk/text-field';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-login',
  templateUrl: './reactive-login.component.html',
  styleUrls: ['./reactive-login.component.scss']
})
export class ReactiveLoginComponent  {

  firstNameAutofilled: boolean = false;
  lastNameAutofilled: boolean = false;
}
