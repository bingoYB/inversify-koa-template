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

/**
 * @api {Get} /get index
 * @apiGroup User
 * @apiParam {number} id 索引ID
 * @apiParamExample {number} id
 * id = 1
 *
 * @apiSuccessExample  {json} Response-Example
 * {
 *   "name": "小王",
 *   "email": "test@111"
 * }
 */
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
  /**
  * @api {Post} /add add
  * @apiGroup User
  * @apiParam {String} name 名称
  * @apiParam {String} email 邮箱
  * @apiParamExample {json} User
  * {
  *    "name":'123',
  *    'email':'123@qweq.com'
  * }
  */
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