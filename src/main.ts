import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';
import { ConfigEnum } from '../config/enum/config.enum';
import { Logger } from '@nestjs/common';
import { instancelogger } from './configwinston/index';
const server = config.get('server');
async function bootstrap() {

  const app = await NestFactory.create(AppModule, {
    logger: instancelogger
  });
  const port = server[ConfigEnum.PORT] || 3000;

  await app.listen(port);
  Logger.warn(`${process.env.NODE_ENV == 'development' ? '开发环境' : '生产环境'}服务启动成功！端口号： ${port} 🚀`);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();
