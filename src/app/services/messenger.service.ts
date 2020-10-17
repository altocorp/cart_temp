import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MessengerService {

  subject = new Subject()

  constructor() { }

  //fonction qui envoie un trigger donc utilisation de rxjs subject
  sendMsg(product){
    this.subject.next(product)
  }

  //fonction qui écoute le trigger donc utilisation de rxjs observable
  getMsg(){
    return this.subject.asObservable()
}
};