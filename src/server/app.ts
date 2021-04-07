import { Container } from 'inversify';
import { buildProviderModule } from 'inversify-binding-decorators';
import { InversifyKoaServer } from 'inversify-koa-utils';
import 'reflect-metadata'
import './ioc/loader'
import * as bodyParser from 'koa-bodyparser';
import { handleLogger } from './middlewares/logger'

// koa - bodyparser没有处理文件上传的功能，而koa - better - body处理了文件上传功能
// koa - bodyparserh会将请求体挂载在ctx.request.body，而koa - better - body将请求体挂载在ctx.request.fields

const container = new Container();

container.load(buildProviderModule())

let server = new InversifyKoaServer(container)

server.setConfig((app) => {
  // add body parser
  app.use(bodyParser());
  app.use(handleLogger)
});

let app = server.build()

app.listen(3000,()=>{
  console.log('InversifyKoaServer 启动成功！')
})