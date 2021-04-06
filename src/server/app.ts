import { Container } from 'inversify';
import { buildProviderModule } from 'inversify-binding-decorators';
import { InversifyKoaServer } from 'inversify-koa-utils';
import 'reflect-metadata'
import './ioc/loader'

const container = new Container();
container.load(buildProviderModule())
let server = new InversifyKoaServer(container)
let app = server.build()
app.listen(3000,()=>{
  console.log('InversifyKoaServer 启动成功！')
})