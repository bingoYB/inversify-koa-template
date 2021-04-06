import {Model} from '../models/User';

export interface IIndex{
  getUser(id:number):Model.User
}