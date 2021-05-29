import { Component, Input, OnInit, Output,EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { IFlash } from 'src/app/models/flash.model';

@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlashCardComponent implements OnInit {

  @Input() flash: IFlash= {
    question:'',
    answer:'',
    id:0,
    show:false,
  };

  @Output() toggleCard = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();
  @Output() rememberedChange = new EventEmitter();

  onToggleCard() {
    console.log(this.toggleCard);
    this.toggleCard.emit(this.flash.id);
  }
  deleteFlashCard() {
    console.log(this.delete);
    this.delete.emit(this.flash.id);
  }
  editFlashCard() {
    console.log(this.edit);
    this.edit.emit(this.flash.id);
  }
  markCorrect() {
    console.log(this.rememberedChange);
    this.rememberedChange.emit({
      id:this.flash.id,
      flag:'correct',
    });
  }
  markInCorrect() {
    console.log(this.rememberedChange);
    this.rememberedChange.emit({
      id:this.flash.id,
      flag:'correct',
    });
  }


  constructor() { }

  ngOnInit(): void {
  }

}
