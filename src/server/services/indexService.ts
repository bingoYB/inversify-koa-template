import { provide } from "inversify-binding-decorators";
import TAGS from "../constant/tags";
import { IIndex } from "../interface/IIndex";
import { Model } from "../models/User";

@provide(TAGS.IndexService)
export class IndexService implements IIndex {
  private userStorage: Model.User[] = [{
    email: '1231@qq.com',
    name: '小明'
  }, {
    email: '2131231@qq.com',
    name: '小w'
  }];
  
  getUser(id: number) {
    let result: Model.User
    result = this.userStorage[id]
    return result
  }

  addUser(user:Model.User):void  {
    this.userStorage.push(user)
  }
}