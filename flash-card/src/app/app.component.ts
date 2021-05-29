import { Component, ViewChild } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { FlashService } from './services/flash.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('flashForm', { static: false })
  flashForm: any;

  editing:boolean=false;
  editingId:number=0;

  flash = {
    question: '',
    answer: ''
  };
  flashs$;
  flashs: any;

  constructor(private flashService: FlashService) {
    this.flashs$ = this.flashService.flashs$;
  }
  trackByFlashId(index: any, flash: { id: any }) {
    return flash.id;
  }

  handleSubmit(flashForm:NgForm): void {
    this.flashService.addFlash(this.flash);
    this.handleClear();
  }

  handleClear() {
    this.flash = {
      question: '',
      answer: '',
    };
    this.flashForm.reset();
  }

  handleToggleCard(id: number) {
    this.flashService.toggleFlash(id);
  }

  handleDelete(id: number) {
    this.flashService.deleteFlash(id);
  }

  handleEdit(id: number) {
    this.flash = this.flashService.getFlash(id);
    this.editing = true;
    this.editingId = id;
  }

  handleUpdate() {
    this.flashService.updateFlash(this.editingId, this.flash);
    this.handleCancel();
  }

  handleCancel() {
    this.editing = false;
    this.editingId = 0;
    this.handleClear();
  }

  handleRememberedChange(event:{id: number,flag: any}) {
    this.flashService.rememberedChange(event.id,event.flag);
  }
}
