import { controller, httpGet, interfaces, TYPE } from 'inversify-koa-utils'
import TAGS from '../constant/tags';
import { IIndex } from '../interface/IIndex';
import { IRouterContext } from 'koa-router'
import { IndexService } from '../services/indexService';
import { inject } from 'inversify';
import { provideThrowalbe } from '../ioc';
// import {BaseContext} from 'koa'

@provideThrowalbe(TYPE.Controller,"IndexController")
@controller('/')
export default class IndexController implements interfaces.Controller {
  private indexService: IIndex
  constructor(@inject(TAGS.IndexService) indexService:IndexService) {
    this.indexService = indexService
  }
  @httpGet('/')
  private async index(ctx: IRouterContext, next: Promise<unknown>): Promise<any> {
    const data = this.indexService.getUser(1)
    ctx.body = {
      data
    }
  }
}