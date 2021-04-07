import {Model} from '../models/User';

export interface IIndex{
  getUser(id:number):Model.User
  addUser(user:Model.User):void
}