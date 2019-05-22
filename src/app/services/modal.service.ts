import { Injectable } from '@angular/core';
import { Modal } from 'ngx-modialog/plugins/bootstrap';

@Injectable()
export class ModalService {

  constructor(private modal: Modal) { }

  openModal(message: string) {
    const dialogRef = this.modal.alert()
      .size('sm')
      .body(message)
      .open();

    dialogRef.result
      .then(
        result => console.log(result),
        error => console.log(error));
  }
}

