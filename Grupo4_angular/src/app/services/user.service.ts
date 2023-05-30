import { Injectable } from '@angular/core';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: IUser[] = [];

  save(newUser: IUser): void{
    newUser.id = this.generateId()
    this.users.push(newUser)
  }

  private generateId(): number{
    let maxId = 0;
    for (const user of this.users) {
      if (user.id != undefined && user.id > maxId)
        maxId = user.id;
    }
    return ++maxId;
  }
  
}
