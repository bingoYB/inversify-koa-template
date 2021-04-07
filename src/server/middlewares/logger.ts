import { configure, getLogger } from 'log4js';
import Koa from 'koa'

configure(
  {
    appenders: {
      app: {
        category: 'app',
        type: 'file',
        filename: './logs/app',
        alwaysIncludePattern: true,
        pattern: "yyyy-MM-dd.log",
        maxLogSize: 100000,
        backups: 5,
      }
    },
    categories: {
      default: { appenders: ['app'], level: 'info' }
    },
  });


export const logger = getLogger('bus');


export const handleLogger = async (ctx: Koa.Context, next: any) => {
  try {
    // 入口信息保存
    let logContent = {
      method: ctx.method,
      url: ctx.url,
      headers: ctx.headers,
      ip: ctx.headers['x-forwarded-for'] || ctx.ip || ctx.ips
    }
    logger.info(JSON.stringify(logContent))
    await next();
  } catch (err) {
    logger.error(err);
    ctx.status = err.status || 500;
    ctx.body = '500请求啦~恢复中.';
  }
};
