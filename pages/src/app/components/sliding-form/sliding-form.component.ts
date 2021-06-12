import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sliding-form',
  templateUrl: './sliding-form.component.html',
  styleUrls: ['./sliding-form.component.scss']
})
export class SlidingFormComponent implements OnInit {


  @ViewChild("container") container: any;
  constructor() { }

  ngOnInit(): void {
  }

  toggleClass(event: any) {
    //event.target.classList.add("sign-up-mode");
    console.log(this.container.nativeElement.classList);
    if(this.container.nativeElement.classList.contains("sign-up-mode")){
      this.container.nativeElement.classList.remove("sign-up-mode");
    } else {

      this.container.nativeElement.classList.add("sign-up-mode");
    }

  }
}
