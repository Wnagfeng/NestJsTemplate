import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';
import { ConfigEnum } from '../config/enum/config.enum';
import { Logger } from '@nestjs/common';//日志模块
import { instancelogger } from './config/WinstonConfig';//日志实例
import { AllExceptionFilter } from './filters/all-exception.filter';//全局异常过滤器

const server = config.get('server');
async function bootstrap() {

  const app = await NestFactory.create(AppModule, {
    logger: instancelogger//日志实例
  });
  const port = server[ConfigEnum.PORT] || 3000;
  const httpAdapter = app.get(HttpAdapterHost);//获取http适配器
  app.useGlobalFilters(new AllExceptionFilter(instancelogger, httpAdapter));//全局异常过滤器
  await app.listen(port);
  Logger.warn(`${process.env.NODE_ENV == 'development' ? '开发环境' : '生产环境'}服务启动成功！端口号： ${port} 🚀`);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();
