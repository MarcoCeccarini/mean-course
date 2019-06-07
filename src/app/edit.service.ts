import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditService {

  private subject: Subject<any> = new Subject<any>();

  constructor() { }

  public reciveMessage(): Subject<any> {
    return this.subject;
  }

  public sendMessage(message: any): void{
     this.subject.next(message);
  }


}
