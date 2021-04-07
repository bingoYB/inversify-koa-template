import { controller, httpGet, httpPost, 
  interfaces, queryParam, requestBody, requestParam, response, TYPE } from 'inversify-koa-utils'
import TAGS from '../constant/tags';
import { IIndex } from '../interface/IIndex';
import { IRouterContext } from 'koa-router'
import { IndexService } from '../services/indexService';
import { inject } from 'inversify';
import { provideThrowalbe } from '../ioc';
import Koa from 'koa'
import { Model } from '../models/User';
// import {BaseContext} from 'koa'

@provideThrowalbe(TYPE.Controller,"IndexController")
@controller('/')
export default class IndexController implements interfaces.Controller {
  private indexService: IIndex
  constructor(@inject(TAGS.IndexService) indexService:IndexService) {
    this.indexService = indexService
  }
  @httpGet('/')
  private async index(@queryParam("id") id: number, @response() res: Koa.Response): Promise<any> {
    const data = this.indexService.getUser(id)
    res.ctx.body = {
      data
    }
  }
  @httpGet('test')
  private async test(ctx: IRouterContext, next: Promise<unknown>): Promise<any> {
    const data = this.indexService.getUser(1)
    ctx.body = {
      data
    }
  }
  @httpPost('add')
  private async add(@requestBody() user: Model.User,@response() res: Koa.Response) {
    try {
      await this.indexService.addUser(user)
      res.body = 200
    } catch (err) {
      res.status = 400
      res.body = { error: err.message }
    }
  }

  // restful 风格
  @httpGet('get/:id')
  private async getID(@requestParam('id') id: number, res: Koa.Response): Promise<any>{
    const data = this.indexService.getUser(id)
    res.body = {
      data
    }
  }
}